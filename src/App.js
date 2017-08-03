import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

    this.state = {
      fetchingData: true,
      weatherData: {}
    }
  }

  render() {
    const {fetchingData} = this.state
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <h1>Weather Data</h1>
          }
        </p>
      </div>
    );
  }
}

export default App;
