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
	"net/http"

	"github.com/gin-gonic/gin"
)

// Login struct
type Login struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// PostSignIn ...
func PostSignIn(c *gin.Context) {
	var form Login

	if err := c.BindJSON(&form); err == nil {
		if form.Email == "demo@joyread.org" && form.Password == "demo" {
			c.JSON(http.StatusMovedPermanently, gin.H{"status": "authorized"})
		} else {
			c.JSON(http.StatusMovedPermanently, gin.H{"status": "unauthorized"})
		}
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}
