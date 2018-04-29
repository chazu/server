import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Header from './Header';
import Home from './Home';
import Login from './Login';

const App = observer(class App extends Component {
  render() {
    const authenticated = this.props.appState.authenticated;
    console.log(authenticated)
    return (
      <div>
        <Header />
        { authenticated ? ( <Home /> ) : ( <Login /> ) }
      </div>
    );
  }
});

export default App;
