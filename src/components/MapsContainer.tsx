import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import * as React from "react";
import { Component } from "react";

export class MapContainer extends Component<any, any> {
  render() {
    return (
      <Map
        style={this.props.style}
        className={this.props.className}
        google={this.props.google}
        initialCenter={{
          lat: 62.471533,
          lng: 6.149777
        }}
        zoom={14}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDm9iWYQMX0I3HRrQPxHfkIPanHezNA0c0"
})(MapContainer);
