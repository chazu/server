import React, { Component } from 'react';
import './css/styles.css';
import Header from './Header.js';
import CurrentlyReading from './CurrentlyReading.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CurrentlyReading />
      </div>
    );
  }
}

export default App;
