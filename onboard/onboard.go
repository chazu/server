/*
Copyright 2017 Nirmal Kumar
This file is part of joyread.
joyread is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
joyread is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with joyread.  If not, see <http://www.gnu.org/licenses/>.
*/

package onboard

import (
	"database/sql"
	"fmt"
	"net/http"

	// vendor packages
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"

	// custom packages
	cError "github.com/joyread/server/error"
	"github.com/joyread/server/models"
)

func _HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func _CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func _GenerateJWTToken(passwordHash string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{})
	tokenString, err := token.SignedString([]byte(passwordHash))
	return tokenString, err
}

func _ValidateJWTToken(tokenString string, passwordHash string) (bool, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(passwordHash), nil
	})

	return token.Valid, err
}

// SignUpStruct struct
type SignUpStruct struct {
	Fullname     string `json:"name" binding:"required"`
	Email        string `json:"email" binding:"required"`
	Password     string `json:"password" binding:"required"`
	SMTPServer   string `json:"smtp_server" binding:"required"`
	SMTPPort     string `json:"smtp_port" binding:"required"`
	SMTPEmail    string `json:"smtp_email" binding:"required"`
	SMTPPassword string `json:"smtp_password" binding:"required"`
}

// PostSignUp ...
func PostSignUp(c *gin.Context) {
	var form SignUpStruct

	if err := c.BindJSON(&form); err == nil {
		// Generate password hash using bcrypt
		passwordHash, err := _HashPassword(form.Password)
		cError.CheckError(err)

		// Generate JWT token using the hash password above
		tokenString, err := _GenerateJWTToken(passwordHash)
		cError.CheckError(err)

		db := c.MustGet("db").(*sql.DB)

		models.InsertUser(db, form.Fullname, form.Email, passwordHash, tokenString)
		models.InsertSMTP(db, form.SMTPServer, form.SMTPPort, form.SMTPEmail, form.SMTPPassword)

		c.JSON(http.StatusMovedPermanently, gin.H{
			"status": "registered",
			"token":  tokenString,
		})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}

// SignInStruct struct
type SignInStruct struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// PostSignIn ...
func PostSignIn(c *gin.Context) {
	var form SignInStruct

	if err := c.BindJSON(&form); err == nil {
		db := c.MustGet("db").(*sql.DB)

		passwordHash, tokenString := models.SelectPasswordHashAndJWTToken(db, form.Email)

		if isPasswordValid := _CheckPasswordHash(form.Password, passwordHash); isPasswordValid == true {
			isTokenValid, err := _ValidateJWTToken(tokenString, passwordHash)
			cError.CheckError(err)

			if isTokenValid == true {
				c.JSON(http.StatusMovedPermanently, gin.H{
					"status": "authorized",
					"token":  tokenString,
				})
			} else {
				c.JSON(http.StatusMovedPermanently, gin.H{"status": "unauthorized"})
			}
		} else {
			c.JSON(http.StatusMovedPermanently, gin.H{"status": "unauthorized"})
		}
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}
