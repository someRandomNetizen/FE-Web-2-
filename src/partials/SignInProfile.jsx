import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Banner from "../partials/Banner";
import axios from "axios";

import Map2 from "../component/Map2";

function SignInProfile() {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const query = event.target.value;
    setAddress(query); // Update the "address" state, not "searchQuery"

    // Make API call to Google Maps Places API with the query
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key

    axios
      // .get(
      //   `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU`
      // )
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyCNrHal_gkT6ojR3jzYO7K1CyqUups_JuY`
      )
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* <Header /> */}
      <PageIllustration />

      <Map2 />
    </div>
  );
}

export default SignInProfile;
