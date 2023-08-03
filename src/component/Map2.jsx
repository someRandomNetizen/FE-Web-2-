import React, { useState, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
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
        {selected && <Marker position={selected} />}
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
