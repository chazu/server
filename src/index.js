import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { observable } from 'mobx';
import { BrowserRouter as Router, Route } from "react-router-dom";

const appState = observable({
  authenticated: false
});

ReactDOM.render((
  <Router>
    <Route 
        path="/" 
        render={(props) => <App {...props} appState={appState}/>} 
    />
  </Router>
), document.getElementById('root'));

registerServiceWorker();
