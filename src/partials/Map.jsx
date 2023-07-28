import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "400px",
};

class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 10.780668,
          lng: 106.724249,
        }}
      >
        <Marker
          position={{
            lat: 10.780668,
            lng: 106.724249,
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU",
})(GoogleMap);
