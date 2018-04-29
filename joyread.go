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

package joyread

import (
	// built-in packages
	"fmt"
	"os"
	"path"
	"strconv"

	// vendor packages
	"github.com/gin-gonic/gin"

	// custom packages
	"github.com/joyread/server/books"
	"github.com/joyread/server/getenv"
	"github.com/joyread/server/home"
	"github.com/joyread/server/middleware"
)

const (
	portDefault          = "8080"
	portEnv              = "JOYREAD_PORT"
	domainAddressDefault = "127.0.0.1"
	domainAddressEnv     = "JOYREAD_DOMAIN_ADDRESS"
	assetPathEnv         = "JOYREAD_ASSET_PATH"
	assetPathDefault     = "."
)

var (
	serverPort    = portDefault
	domainAddress = domainAddressDefault
	assetPath     = assetPathDefault
)

func init() {
	fmt.Println("Running init ...")
	serverPort = getenv.GetEnv(portEnv, portDefault)
	domainAddress = getenv.GetEnv(domainAddressEnv, domainAddressDefault)
	assetPath = getenv.GetEnv(assetPathEnv, assetPathDefault)
}

// StartServer handles the URL routes and starts the server
func StartServer() {
	// Gin initiate
	r := gin.Default()

	// Use CORSMiddleware
	r.Use(
		middleware.CORSMiddleware(),
		middleware.APIMiddleware(serverPort, domainAddress),
	)

	// Serve static files
	r.Static("/service-worker.js", path.Join(assetPath, "build/service-worker.js"))
	r.Static("/static", path.Join(assetPath, "build/static"))
	r.Static("/cover", path.Join(assetPath, "uploads/img"))

	// HTML rendering
	r.LoadHTMLGlob(path.Join(assetPath, "build/index.html"))

	// Gin handlers
	r.GET("/", home.Home)
	r.POST("/login", onboard.PostLogin)
	r.GET("/books", books.GetBooks)

	// Listen and serve
	port, err := strconv.Atoi(serverPort)
	if err != nil {
		fmt.Println("Invalid port specified")
		os.Exit(1)
	}
	r.Run(fmt.Sprintf(":%d", port))
}
