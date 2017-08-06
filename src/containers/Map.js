import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

class Map extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(currentLoc => {
      debugger
      const position = currentLoc !== undefined ? {lat: currentLoc.coords.latitude, lng: currentLoc.coords.longitude} : {lat: 32.765914, lng: -79.899101}
      console.log(position)
      const map = new this.props.google.maps.Map(this.refs.map, {
        center: position,
        zoom: 11
      })
      new this.props.google.maps.Marker({
        map: map,
        position: position
      })
      window.scrollTo(0,document.body.scrollHeight)
    })
  }

 render() {
   const style = {
     width: `600px`,
     height: '430px'
   }

   return (
     <div ref='map' className="google-map" style={style}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  }
}


export const ConnectedMap = connect(mapStateToProps)(Map)
