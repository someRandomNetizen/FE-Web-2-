import React from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";

const mapStyles = {
  width: "75%",
  height: "400px",
  marginTop: 150,
  marginLeft: 190,
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // state = {
  //   directions: null,
  // };

  // componentDidMount() {
  //   this.calculateRoute();
  // }

  // calculateRoute = () => {
  //   const { google } = this.props;

  //   const origin = { lat: 37.774929, lng: -122.419418 }; // San Francisco
  //   const destination = { lat: 34.052235, lng: -118.243683 }; // Los Angeles

  //   const directionsService = new google.maps.DirectionsService();

  //   const request = {
  //     origin: new google.maps.LatLng(origin.lat, origin.lng),
  //     destination: new google.maps.LatLng(destination.lat, destination.lng),
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   };

  //   directionsService.route(request, (result, status) => {
  //     if (status === google.maps.DirectionsStatus.OK) {
  //       this.setState({ directions: result.routes[0].overview_path });
  //     } else {
  //       console.error("Error calculating route:", status);
  //     }
  //   });
  // };

  // render() {
  //   const { directions } = this.state;

  //   const origin = { lat: 37.774929, lng: -122.419418 }; // San Francisco
  //   const destination = { lat: 34.052235, lng: -118.243683 }; // Los Angeles

  //   return (
  //     <Map
  //       google={this.props.google}
  //       zoom={6}
  //       style={mapStyles}
  //       initialCenter={{ lat: 36.778259, lng: -119.417931 }} // Default center - California
  //     >
  //       <Marker position={origin} />
  //       <Marker position={destination} />
  //       {directions && (
  //         <Polyline
  //           path={directions.map((point) => ({
  //             lat: point.lat(),
  //             lng: point.lng(),
  //           }))}
  //           strokeColor="blue"
  //           strokeOpacity={1}
  //           strokeWeight={3}
  //         />
  //       )}
  //     </Map>
  //   );
  // }
}

export default GoogleApiWrapper({
  // apiKey: "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU",
  apiKey: "AIzaSyCNrHal_gkT6ojR3jzYO7K1CyqUups_JuY",
})(GoogleMap);
