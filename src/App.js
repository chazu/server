import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Header from './Header';
import Home from './Home';
import Login from './Login';

import { Route, Redirect, withRouter } from 'react-router-dom'

const appState = observable({
  authenticated: false
});

const App = observer(class App extends Component {
  render() {
    const authenticated = appState.authenticated;

    return (
      <div>
        <Header />
          <Route exact path='/' render={(props) => (
            authenticated ? (
              <Home {...props} appState={appState} />
            ) : (
              <Redirect to="/login" />
            )
          )} />
          <Route path='/login' render={(props) => (
            authenticated ? (
              <Redirect to="/" />
            ) : (
              <Login {...props} appState={appState} />
            )
          )} />
      </div>
    );
  }
});

export default withRouter(App);
