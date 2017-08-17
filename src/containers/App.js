import React, { Component } from 'react';
import {ConnectedMapContainer} from './MapContainer';
import logo from '../logo.svg';
import './App.css';
import '../bootstrap.min.css';
import { Jumbotron, Col } from 'react-bootstrap';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

    this.state = {
      fetchingData: false,
      weatherData: {}
    }
  }
  // componentDidMount() {
  //   this.props.setLocation()
  // }

  render() {
    const {fetchingData} = this.state
    return (
      <div className="App">
        <Jumbotron className="App-header">
            <h1><strong>Is it wet?</strong> 💦</h1>
            <p>Predict conditions based on current forecast and past weather data</p>
        </Jumbotron>
        <div className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <div>
              <ConnectedMapContainer />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;

// Photo by Mike Newbry on Unsplash
