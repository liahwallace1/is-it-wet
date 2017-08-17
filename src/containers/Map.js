import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

// const positionPermission = () => {
//   navigator.permissions && navigator.permissions.query({name: 'geolocation'}).then(function(PermissionStatus) {
//     if(PermissionStatus.state == 'granted') {
//       return true
//     } else {
//       return false
//     }
//   })
// }
//
// const getPosition = () => {
//   navigator.geolocation.getCurrentPosition(currentLoc => {
//     return {lat: currentLoc.coords.latitude, lng: currentLoc.coords.longitude}
//   })
// }


class Map extends Component {

  componentDidMount() {
    let position = this.props.location
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
    location: state.mapSearch.location,
  }
}


export const ConnectedMap = connect(mapStateToProps)(Map)
