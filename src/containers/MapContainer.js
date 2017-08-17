import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GoogleApiWrapper} from 'google-maps-react';
import {ConnectedSearchForm} from './SearchForm';
import {ConnectedMap} from './Map';

class MapContainer extends Component {

  render() {

    const style = {
      width: '100vw',
      height: '500px',
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div className='map-container' style={style}>
        <ConnectedSearchForm google={this.props.google}/>
        <ConnectedMap google={this.props.google} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  }
}

export const ConnectedMapContainer = connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_GEOCODING_KEY}`, version: '3.27'
})(MapContainer))
