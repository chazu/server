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

package email

import (
	"runtime"

	"gopkg.in/gomail.v2"
)

// SendEmail ...
func SendEmail(from string, to string, subject string, body string, smtpServer string, smtpPort int, smtpEmail string, smtpPassword string) {
	// Set home many CPU cores this function wants to use
	runtime.GOMAXPROCS(runtime.NumCPU())

	m := gomail.NewMessage()
	m.SetHeader("From", from)
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", body)

	d := gomail.NewDialer(smtpServer, smtpPort, smtpEmail, smtpPassword)

	// Send the email
	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
}
