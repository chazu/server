import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Login = observer(class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault()

    var data = {
      fullname: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      username: document.getElementById('userName').value,
      password: document.getElementById('password').value
    };

    var jsonData = JSON.stringify(data)

    fetch('/login', {
      method: 'POST',
      body: jsonData
    }).then(res => res.json())
      .then(
        (result) => {
          if (result.status === 'authorized') {
            this.props.appState.authenticated = true;
          }
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    return (
      <div className="main">
        <form className="onboard-container">
          <input type="text" id="fullName" />
          <input type="email" id="email" />
          <input type="text" id="userName" />
          <input type="password" id="password" />
          <input type="submit" onClick={this.handleLogin} />
        </form>
      </div>
    );
  }
});
  
export default Login;
