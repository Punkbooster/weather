import React, { Component } from 'react'

class GoogleMap extends Component {
  componentDidMount() {
    // this is how we create embeded google map
    // refs.map is and html element passed to google maps, where google maps
    // will render a map
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // after this component has been rendered to the screen we can get a direct
    // reference to the div that is created right here, by refering to by
    // this.refs.map
    // in other words anywhere else in this component I can say this.refs.map
    // and it will give me direct reference to that div element
    return <div ref='map' />
  }
}

export default GoogleMap
