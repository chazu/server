import { Container } from 'unstated';
import SetCookie from '../cookies/SetCookie';
import GetCookie from '../cookies/GetCookie';

class OnboardContainer extends Container {
  constructor () {
    super();
    this.state = { 
      isSignedUp: false,
      isSignedIn: false
    };
  }

  signUp(url) {
    var name = document.getElementById('signUpName').value;
    var email = document.getElementById('signUpEmail').value;
    var password = document.getElementById('signUpPassword').value;

    var data = {
      name: name,
      email: email,
      password: password
    }

    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      if (data.status === "registered") {
        console.log(data.token)
        SetCookie(email, data.token, 30);
        
        this.setState({ isSignedUp: true });
      } else {
        alert('Not registered.');
      }
    });
  }
  
  signIn(url) {
    var email = document.getElementById('signInEmail').value;
    var password = document.getElementById('signInPassword').value;
    var cookieToken = GetCookie(email);

    var data = {
      email: email,
      password: password,
      token: cookieToken
    }

    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === "authorized") {
        this.setState({ isSignedIn: true });
      } else {
        alert('Your email address or password is incorrect.');
      }
    });
  }

  signOut() {
    this.setState({ isSignedIn: false });
  }
}

export default OnboardContainer;