import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import CityParallax from './CityParallax'
import FlatParallax from './FlatParallax'

class App extends Component {
  render() {
    return (
      <div>
        <FlatParallax />
        {/* <CityParallax/> */}
      </div>
    )
  }
}

export default App;
