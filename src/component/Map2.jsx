import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
  InfoWindowF,
} from "@react-google-maps/api";
import axios from "axios";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import socketIO from "socket.io-client";
import { recShipment } from "../actions/authActions";

export default function Map2() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU",
    libraries: ["places"],
  });

  const dispatch = useDispatch();

  const dumdum = useSelector((state) => state.auth.driverID.driver_id);

  socket.on("recShipment", ({ state, driver_id, user_id, shipment_id }) => {
    if (dumdum == driver_id) {
      dispatch(recShipment());
      console.log("Test socket on:", driver_id);
    }
  });

  console.log("beautiful2:", dumdum);

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const socket = socketIO("https://365truck.fdssoft.com", {
  path: "/api/socket",
});

socket.emit("join", {}, () => {
  console.log("This has join socket room");
});

const mapContainerStyle = {
  width: "75%",
  height: "400px",
  marginTop: 150,
  marginLeft: 190,
};

const initialCenter = {
  lat: 10.780668,
  lng: 106.724249,
};
var manyCoordinate = {};
var manyCoordinate5 = {};
var manyCoordinate10 = {};
const getAllPath = async (lat, long) => {
  try {
    const response = await axios.post(
      "https://365truck.fdssoft.com/api/findAllPathFromInput",
      { lat, long }
    );

    if (response.status === 201) {
      console.log("successful:", response.data);
      manyCoordinate = response.data;

      // Navigate to "/" after successful login
      //navigate("/"); // This will redirect the user to the "/" route
    } else {
      console.log("failed:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  console.log("kewk", manyCoordinate);
  manyCoordinate5 = manyCoordinate.filter((coord) => coord.distance <= 5);
  console.log("beauty", manyCoordinate5);
  manyCoordinate10 = manyCoordinate.filter((coord) => coord.distance <= 10);
  console.log("beauty 10", manyCoordinate10);
};

function Map() {
  const dumdum = useSelector((state) => state.auth.driverID.driver_id);
  console.log("beautiful:", dumdum);

  //let key = "AIzaSyBSdec1YbDtXb9kM9wkEk10nxW4CmOy6Dc";
  let key = "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
  });

  const containerStyle = {
    width: "1557px",
    height: "800px",
  };

  const center = {
    lat: 10.78022,
    lng: 106.7253063,
    // lat: -3.745,
    // lng: -38.523
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    //toAbsoluteUrl("/media/logos/truck.png")
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  console.log(isLoaded);

  //const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState({
    lat: "10.776176",
    lng: "106.726606",
  });

  console.log("result coord: ", selected);

  const isFind = useSelector((state) => state.auth.find);
  const isFind5 = useSelector((state) => state.auth.find5);
  const isFind10 = useSelector((state) => state.auth.find10);
  console.log("is find: ", isFind5);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (coordinate) => {
    setSelectedMarker({
      position: { lat: coordinate.latitude, lng: coordinate.longitude },
      title: coordinate.title,
    });
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const handleProceed = () => {
    // Perform the action to proceed with the target here
    console.log("Proceeding with target:", selectedMarker);
    setSelectedMarker(null); // Close the InfoWindow after proceeding
  };

  useEffect(() => {
    if (selected) {
      getAllPath(selected.lat, selected.lng);
    }
  }, [selected]);

  console.log("Test 2222: ");

  const handleUserChosenMarker = (coord0) => {
    console.log("sir: ", coord0);
    console.log("sir: ", coord0.lat);
    console.log("Here come the magic:", dumdum);
    console.log(dumdum);

    const matchingCoordinate = manyCoordinate.find((coord) => {
      return coord.latitude === coord0.lat && coord.longitude === coord0.lng;
    });

    socket.emit(
      "recShipment",
      {
        state: 0,
        driver_id: matchingCoordinate.driver_id,
        user_id: 1,
        shipment_id: 1,
      },
      (response) => {
        console.log("Shipment update successful:", response);
      }
    );

    if (matchingCoordinate) {
      console.log("Matching coordinate found:", matchingCoordinate.driver_id);
      // You can perform further actions with the matching coordinate here
    } else {
      console.log("No matching coordinate found.");
    }
  };

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
        //
        center={selected}
        //
      >
        {isFind
          ? manyCoordinate.map((coordinate, index) => (
              <Marker
                key={index}
                position={{
                  lat: coordinate.latitude,
                  lng: coordinate.longitude,
                }}
                icon={{
                  url: "https://cdn1.vectorstock.com/i/1000x1000/22/40/plumbing-icon-vector-10872240.jpg",
                  scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the marker
                }}
                onClick={() => handleMarkerClick(coordinate)}
              />
            ))
          : null}

        {isFind5
          ? manyCoordinate5.map((coordinate, index) => (
              <Marker
                key={index}
                position={{
                  lat: coordinate.latitude,
                  lng: coordinate.longitude,
                }}
                icon={{
                  url: "https://cdn1.vectorstock.com/i/1000x1000/22/40/plumbing-icon-vector-10872240.jpg",
                  scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the marker
                }}
                onClick={() => handleMarkerClick(coordinate)}
              />
            ))
          : null}

        {isFind10
          ? manyCoordinate10.map((coordinate, index) => (
              <Marker
                key={index}
                position={{
                  lat: coordinate.latitude,
                  lng: coordinate.longitude,
                }}
                icon={{
                  url: "https://cdn1.vectorstock.com/i/1000x1000/22/40/plumbing-icon-vector-10872240.jpg",
                  scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the marker
                }}
                onClick={() => handleMarkerClick(coordinate)}
              />
            ))
          : null}

        {selected && <Marker position={selected} />}
        {selectedMarker && (
          <InfoWindowF
            position={selectedMarker.position}
            // onCloseClick={handleInfoWindowClose}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png"
                alt="Avatar"
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              <h1 style={{ color: "black" }}>wwwwwwwwwwwww</h1>
              <h1 style={{ color: "black" }}>kkkkkkkkkkkkkkkkkk</h1>
              <h1 style={{ color: "black" }}>kkkkkkkkkkkkkkkkkk</h1>
              <h1 style={{ color: "black" }}>kkkkkkkkkkkkkkkkkk</h1>
              <h1 style={{ color: "black" }}>kkkkkkkkkkkkkkkkkk</h1>
              <button
                style={{
                  borderColor: "red",
                  color: "black",
                  borderWidth: 2,
                  padding: 5,
                }}
                onClick={() => handleUserChosenMarker(selectedMarker.position)}
              >
                lovely
              </button>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({
      address,
      componentRestrictions: { country: "VN" }, // Country code for Vietnam
    });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    console.log("result coord: ", lat, lng);
  };

  const handleSearch = async (address) => {
    const results = await getGeocode({
      address,
      componentRestrictions: { country: "VN" }, // Country code for Vietnam
    });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  const delayedSearch = useMemo(() => debounce(handleSearch, 3000), []);

  const handleChange = (e) => {
    setValue(e.target.value);
    // Call the debounced function instead of the original handleSearch
    delayedSearch(e.target.value);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={handleChange}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />

      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
