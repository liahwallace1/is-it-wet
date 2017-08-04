import React, { Component } from 'react';
import logo from './logo.svg';
import header from './StockSnap_C3E239A4B9.jpg';
import './App.css';
import './bootstrap.min.css';
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

  render() {
    const {fetchingData} = this.state
    return (
      <div className="App">
        <Jumbotron className="App-header">
          <Col className="header-container" xs={8} md={4} xsOffset={2} mdOffset={4}>
            <h1>Is it wet? 💦</h1>
            <br />
            <p>Find current forecast AND past weather data to determine if conditions are wet!</p>
          </Col>
        </Jumbotron>
        <div className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <form><label>Search location: </label><input type='text' placeholder="zip code or city" /><input type="submit" /></form>
          }
        </div>
      </div>
    );
  }
}

export default App;
