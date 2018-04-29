import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Login = observer(class Login extends Component {
  handleLogin = () => {
    var data = {
      fullname: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      username: document.getElementById('userName').value,
      password: document.getElementById('password').value
    };

    console.log(data);

    this.props.appState.authenticated = true;
  }

  render() {
    return (
      <div className="main">
        <div className="onboard-container">
          <input type="text" id="fullName" />
          <input type="email" id="email" />
          <input type="text" id="userName" />
          <input type="password" id="password" />
          <button id="loginButton" onClick={this.handleLogin}>Submit</button>
        </div>
      </div>
    );
  }
});
  
export default Login;
