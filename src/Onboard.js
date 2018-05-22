import React, { Component } from 'react';

class Onboard extends Component {
  render() {
    return (
      <div className="onboard">
        <label className="onboard__label">Sign in</label>
        <input type="text" className="onboard__name" placeholder="Full name" />
        <input type="email" className="onboard__email" placeholder="Email address" />
        <input type="password" className="onboard__password" placeholder="Password" />
        <button className="button button-primary onboard__submit">Submit</button>
      </div>
    );
  }
}

export default Onboard;