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
import socket from "./socket";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Map2() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU",
    libraries: ["places"],
  });

  const dispatch = useDispatch();

  const dumdum = useSelector((state) => state.auth.driverID.driver_id);

  socket.on("recShipment", ({ state, driver_id, user_id, shipment_id }) => {
    if (dumdum == driver_id && state == 0) {
      localStorage.setItem("user_id_socket", user_id);
      localStorage.setItem("shipment_id_socket", shipment_id);

      dispatch(recShipment());
      console.log("Test socket on:", driver_id);
    }
  });

  console.log("beautiful2:", dumdum);

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

socket.emit("join", {}, () => {
  console.log("This has join socket room");
});

const mapContainerStyle = {
  width: "100%",
  height: "600px",
  marginTop: 10,
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
      //"http://localhost:3001/api/findAllPathFromInput",
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

  const [driverInfo, setDriverInfo] = useState(null);

  const [distanceFinal, setDistanceFinal] = useState(0);

  const handleMarkerClick = async (coordinate) => {
    setSelectedMarker({
      position: { lat: coordinate.latitude, lng: coordinate.longitude },
      title: coordinate.title,
    });

    try {
      const response = await axios.get(
        `https://365truck.fdssoft.com/api/showDriver/`
        //`http://localhost:3001/api/showDriver/`
      );

      if (response.status === 200) {
        console.log(response.data);
        console.log(coordinate.driver_id);
        var apiShow = response.data;
        var potential;
        potential = apiShow.filter(
          (coord) => coord.driver_id == coordinate.driver_id
        );
        console.log("doggy lovely mam", potential[0]);

        const distance0 = manyCoordinate.filter(
          (coord) => potential[0].driver_id == coord.driver_id
        );
        console.log("fluffy ", distance0);
        var distanceLast = parseFloat(distance0[0].distance).toFixed(2);
        console.log("my man", distanceLast);
        setDistanceFinal(parseFloat(distance0[0].distance).toFixed(2));
        setDriverInfo(potential[0]);
        console.log("here potential: ", potential[0]);
        localStorage.setItem("driver_name", potential[0].full_name);
        localStorage.setItem("phone_number_driver", potential[0].phone_number);
        localStorage.setItem("distance", distanceLast);
        localStorage.setItem("rating", potential[0].rating / 2);
      }
    } catch (error) {
      console.error("Error fetching driver information:", error);
    }
    const driver_name = localStorage.getItem("driver_name");
    const phone_number_driver = localStorage.getItem("phone_number_driver");
    const distance = localStorage.getItem("distance");
    const rating = localStorage.getItem("rating");
    console.log("here driver_name", driver_name);
    console.log("here phone_number_driver", phone_number_driver);
    console.log("here distance", distance);
    console.log("here rating", rating);
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
  const navigate = useNavigate();

  const handleUserChosenMarker = (coord0) => {
    console.log("sir: ", coord0);
    console.log("sir: ", coord0.lat);
    console.log("Here come the magic:", dumdum);
    console.log(dumdum);

    const matchingCoordinate = manyCoordinate.find((coord) => {
      return coord.latitude === coord0.lat && coord.longitude === coord0.lng;
    });

    localStorage.setItem("chosen_driver_id", matchingCoordinate.driver_id);

    navigate("/booking");

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
                  url: "https://thothongminh.com/public/img/tho.png",
                  scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the marker
                }}
                onClick={() => handleMarkerClick(coordinate)}
              />
            ))
          : null}

        {selected && <Marker position={selected} />}
        {selectedMarker && (
          <InfoWindowF position={selectedMarker.position}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {driverInfo && (
                <>
                  <img
                    src={"https://thothongminh.com/public/img/tho.png"} // Update with the correct field from the API response
                    alt="Avatar"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                  <Rating
                    name="readonly-rating"
                    value={driverInfo.rating / 2} // Assuming driverInfo.rating is out of 10
                    readOnly
                  />
                  <h1 style={{ color: "black", paddingBottom: 5 }}>
                    Họ và tên: {driverInfo.full_name}
                  </h1>
                  <h1 style={{ color: "black", paddingBottom: 5 }}>
                    Số điện thoại: {driverInfo.phone_number}
                  </h1>
                  <h1 style={{ color: "black", paddingBottom: 5 }}>
                    Khoảng cách: {distanceFinal} Km
                  </h1>
                </>
              )}
              <button
                style={{
                  backgroundColor: "lightgreen",
                  color: "black", // Using dark gray text color for better contrast
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 5,
                  cursor: "pointer",
                }}
                onClick={() => handleUserChosenMarker(selectedMarker.position)}
              >
                Đặt hàng
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
