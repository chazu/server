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
  
  signIn() {
    this.setState({ isSignedIn: true });
  }

  signOut() {
    this.setState({ isSignedIn: false });
  }
}

export default OnboardContainer;