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

package models

import (
	"database/sql"

	// custom packages
	cError "github.com/joyread/server/error"
)

// CreateUser ...
func CreateUser(db *sql.DB) {
	stmt, err := db.Prepare("CREATE TABLE IF NOT EXISTS `user` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255) NOT NULL, `email` VARCHAR(255) UNIQUE NOT NULL, `password_hash` VARCHAR(255) NOT NULL, `jwt_token` VARCHAR(255) NOT NULL)")
	cError.CheckError(err)

	_, err = stmt.Exec()
	cError.CheckError(err)
}

// InsertUser ...
func InsertUser(db *sql.DB, name string, email string, passwordHash string, tokenString string) {
	stmt, err := db.Prepare("INSERT INTO `user` (name, email, password_hash, jwt_token) VALUES (?, ?, ?, ?)")
	cError.CheckError(err)

	_, err = stmt.Exec(name, email, passwordHash, tokenString)
	cError.CheckError(err)
}

// SelectPasswordHashAndJWTToken ...
func SelectPasswordHashAndJWTToken(db *sql.DB, email string) (string, string) {
	rows, err := db.Query("SELECT `password_hash`, `jwt_token` FROM `user` WHERE `email` = ?", email)
	cError.CheckError(err)

	var (
		passwordHash string
		tokenString  string
	)

	if rows.Next() {
		err := rows.Scan(&passwordHash, &tokenString)
		cError.CheckError(err)
	}
	rows.Close()

	return passwordHash, tokenString
}

// CreateSMTP ...
func CreateSMTP(db *sql.DB) {
	stmt, err := db.Prepare("CREATE TABLE IF NOT EXISTS `smtp` (`server` VARCHAR(255) NOT NULL, `port` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL)")
	cError.CheckError(err)

	_, err = stmt.Exec()
	cError.CheckError(err)
}

// InsertSMTP ...
func InsertSMTP(db *sql.DB, server string, port string, email string, password string) {
	stmt, err := db.Prepare("INSERT INTO `smtp` (server, port, email, password) VALUES (?, ?, ?, ?)")
	cError.CheckError(err)

	_, err = stmt.Exec(server, port, email, password)
	cError.CheckError(err)
}
