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

package books

import (
	"github.com/gin-gonic/gin"
)

type Books struct {
	Src  string `json:"src"`
	Alt  string `json:"alt"`
	Href string `json:"Href"`
}

// GetBooks ...
func GetBooks(c *gin.Context) {
	// port, _ := c.MustGet("port").(string)
	// domainAddress, _ := c.MustGet("domainAddress").(string)

	// serverLocation := domainAddress + ":" + port

	books := []Books{
		Books{
			Src:  "b1.jpg",
			Alt:  "dummy book",
			Href: "/b1",
		},
		Books{
			Src:  "b2.jpg",
			Alt:  "dummy book 2",
			Href: "/b2",
		},
	}
	c.JSON(200, gin.H{
		"books": books,
	})
}
