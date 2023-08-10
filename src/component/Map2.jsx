import React, { useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
  InfoWindowF,
} from "@react-google-maps/api";
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

export default function Map2() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

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

function Map() {
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
  const [selected, setSelected] = useState(null);

  const isFind = useSelector((state) => state.auth.find);
  console.log("is find: ", isFind);

  const manyCoordinate = [
    {
      name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      latitude: 10.779941,
      longitude: 106.723171,
    },
    {
      name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      latitude: 10.780405,
      longitude: 106.725824,
    },
    { title: "Target 1", latitude: 10.871811, longitude: 106.803505 },
    { title: "Target 1", latitude: 10.869166, longitude: 106.80211 },
    { title: "Target 1", latitude: 10.870754, longitude: 106.80364 },
    { title: "Target 1", latitude: 10.87016, longitude: 106.805311 },
    { title: "Target 1", latitude: 10.869605, longitude: 106.801352 },
    { title: "Target 1", latitude: 10.871145, longitude: 106.802728 },
    { title: "Target 1", latitude: 10.87059, longitude: 106.801545 },
    { title: "Target 1", latitude: 10.871877, longitude: 106.802869 },
    { title: "Target 1", latitude: 10.870236, longitude: 106.805979 },
    { title: "Target 1", latitude: 10.871372, longitude: 106.805478 },
  ];

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

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  const handleSearch = async (address) => {
    const results = await getGeocode({ address });
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
