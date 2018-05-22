import { Container } from 'unstated';

class OnboardContainer extends Container {
  constructor () {
    super();
    this.state = { isSignedIn: false };
  }
  
  signIn() {
    this.setState({ isSignedIn: true });
  }

  signOut() {
    this.setState({ isSignedIn: false });
  }
}

export default OnboardContainer;