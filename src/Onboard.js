import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import OnboardContainer from './containers/OnboardContainer.js';

class Onboard extends Component {
  render() {
    return (
      <Subscribe to={[OnboardContainer]}>
        {onboard => (
          <div className="onboard">
            {
              onboard.state.isSignedUp
              ?
                <div className="onboard__inner">
                  <label className="onboard__label">Sign In</label>
                  <input type="email" className="onboard__email" placeholder="Email address" />
                  <input type="password" className="onboard__password" placeholder="Password" />
                  <button className="button button-primary onboard__submit" onClick={() => onboard.signIn()}>Submit</button>
                </div>
              :
                <div className="onboard__inner">
                  <label className="onboard__label">Sign Up</label>
                  <input type="text" className="onboard__name" placeholder="Full name" />
                  <input type="email" className="onboard__email" placeholder="Email address" />
                  <input type="password" className="onboard__password" placeholder="Password" />
                  <button className="button button-primary onboard__submit" onClick={() => onboard.signUp()}>Submit</button>
                </div>
            }
          </div>
          )
        }
      </Subscribe>
    );
  }
}

export default Onboard;