import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Route, Link } from "react-router-dom";
import './css/styles.css';
import Onboard from './Onboard';
import Header from './Header';
import CurrentlyReading from './CurrentlyReading';
import OnboardContainer from './containers/OnboardContainer';

class App extends Component {
  render() {
    return (
      <Subscribe to={[OnboardContainer]}>
        {onboard => (
          <div className="app">
            {
              onboard.state.isSignedIn
              ? 
                <div className="app__inner">
                  <Header />
                  <CurrentlyReading />
                </div>
              :
                <div className="app__inner">
                  <Header />
                  <Onboard />
                </div>
            }
          </div>
          )
        }
      </Subscribe>
    );
  }
}

export default App;
