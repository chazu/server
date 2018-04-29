import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Header from './Header';
import Home from './Home';
import Login from './Login';

const appState = observable({
  authenticated: false
});
const App = observer(class App extends Component {
  render() {
    const authenticated = appState.authenticated;
    return (
      <div>
        <Header />
        { authenticated ? ( <Home /> ) : ( <Login /> ) }
      </div>
    );
  }
});

export default App;
