import { Container } from 'unstated';

class OnboardContainer extends Container {
  constructor () {
    super();
    this.state = { 
      isSignedUp: false,
      isSignedIn: false
    };
  }

  signUp() {
    this.setState({ isSignedUp: true });
  }
  
  signIn(url) {
    var email = document.getElementById('signInEmail').value;
    var password = document.getElementById('signInPassword').value;

    var data = {
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