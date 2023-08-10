// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import Header from "../partials/Header";
// import PageIllustration from "../partials/PageIllustration";
// import Banner from "../partials/Banner";
// import axios from "axios";

// import GoogleMap from "../component/Map";

// const API_KEY = "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU";

// export const getCoordinatesByAddress = async (address) => {
//   try {
//     const response = await axios.get(
//       "https://maps.googleapis.com/maps/api/geocode/json",
//       {
//         params: {
//           address,
//           key: API_KEY,
//         },
//       }
//     );

//     // Handle the response here as needed
//     if (response.data.results.length > 0) {
//       const { lat, lng } = response.data.results[0].geometry.location;
//       return { latitude: lat, longitude: lng };
//     } else {
//       // If no results found
//       return null;
//     }
//   } catch (error) {
//     // Handle errors if any
//     console.error("Error fetching data from Google Geocoding API:", error);
//     return null;
//   }
// };

// const getGooglePlaceByTextSearch = async (query) => {
//   try {
//     const response = await axios.get(
//       "https://maps.googleapis.com/maps/api/place/textsearch/json",
//       {
//         params: {
//           query,
//           key: "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU",
//         },
//       }
//     );

//     // Handle the response here as needed
//     return response.data.results;
//   } catch (error) {
//     // Handle errors if any
//     console.error("Error fetching data from Google Places API:", error);
//     return [];
//   }
// };

// function FindOrder() {
//   const [address, setAddress] = useState("");
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [searchResults, setSearchResults] = useState([]);
//   const [coordinates, setCoordinates] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const query = event.target.value;
//     setAddress(query); // Update the "address" state, not "searchQuery"

//     // Make API call to Google Maps Places API with the query
//     // Replace 'YOUR_API_KEY' with your actual Google Maps API key
//     axios
//       .get(
//         `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU`
//       )
//       .then((response) => {
//         setSearchResults(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching search results:", error);
//       });
//   };

//   const handleResultClick = (result) => {
//     setSearchQuery(result.name);
//     setSearchResults([]); // Clear the search results list
//   };

//   const handleSearch = async () => {
//     if (searchQuery) {
//       const results = await getGooglePlaceByTextSearch(searchQuery);
//       setSearchResults(results);
//     }
//   };

//   const handleSearch2 = async () => {
//     if (address) {
//       const result = await getCoordinatesByAddress(address);
//       setCoordinates(result);
//     }
//   };

//   // return (
//   //   <div className="flex flex-col min-h-screen overflow-hidden">
//   //     <input
//   //       type="text"
//   //       value={address}
//   //       onChange={(e) => setAddress(e.target.value)}
//   //     />
//   //     <button onClick={handleSearch}>Get Coordinates</button>
//   //     {coordinates && (
//   //       <div>
//   //         <p>Latitude: {coordinates.latitude}</p>
//   //         <p>Longitude: {coordinates.longitude}</p>
//   //       </div>
//   //     )}
//   //     {coordinates && (
//   //       <div style={{ width: "100%", height: "400px" }}>
//   //         {/* Replace the following code with your mapping library or service */}
//   //         <iframe
//   //           title="Map"
//   //           width="100%"
//   //           height="100%"
//   //           frameBorder="0"
//   //           src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU&q=${coordinates.latitude},${coordinates.longitude}`}
//   //           allowFullScreen
//   //         ></iframe>
//   //       </div>
//   //     )}
//   //   </div>
//   // );
//   return (
//     <div className="flex flex-col min-h-screen overflow-hidden">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder="Search for a location..."
//       />
//       <button onClick={handleSearch}>Search</button>
//       {searchResults.length > 0 && (
//         <ul className="search-results">
//           {searchResults.map((result) => (
//             <li key={result.place_id} onClick={() => handleResultClick(result)}>
//               {result.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default FindOrder;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Banner from "../partials/Banner";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Map2 from "../component/Map2";
import { find } from "../actions/authActions";
import socketIO from "socket.io-client";

function FindOrder() {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const query = event.target.value;
    setAddress(query); // Update the "address" state, not "searchQuery"

    // Make API call to Google Maps Places API with the query
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU`
      )
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };
  const socket = socketIO("https://365truck.fdssoft.com", {
    path: "/api/socket",
  });

  const [joined, setJoined] = useState(false);
  const [name, setName] = useState("Brutus");

  socket.emit("join", { name }, () => {
    console.log("travis2");
    setJoined(true);
  });

  const isFind = useSelector((state) => state.auth.find);

  const handleClick = () => {
    dispatch(find());
    // This function will be called when the button is clicked

    console.log("is find: ", isFind);
    console.log("Button clicked!");
    // Add any other logic or actions you want to perform here
  };
  const buttonStyle = {
    border: "1px solid blue",
    marginTop: 60,
    width: 70,
    // Add any other styles you want here
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* <Header /> */}
      <PageIllustration />

      {/* <div className="container px-6 py-4 mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Find Your Order</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleInputChange}
                placeholder="Enter the address"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            {/* Display search results 
            {searchResults.length > 0 && (
              <ul className="border border-gray-300 rounded-md p-2">
                {searchResults.map((result) => (
                  <li key={result.place_id}>{result.name}</li>
                ))}
              </ul>
            )}
          </form>
          {latitude !== null && longitude !== null && (
            <div className="mt-4">
              <p>Latitude: {latitude}</p>
              <p>Longitude: {longitude}</p>
            </div>
          )}
        </div>
      </div> */}

      <Map2 />
      <button onClick={handleClick} style={buttonStyle}>
        Click Me
      </button>
    </div>
  );
}

export default FindOrder;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var userName = "abc";
// const [isAccepted, setIsAccepted] = useState(false);
// const [isDenied, setIsDenied] = useState(false);

// const handleAccept = () => {
//   setIsAccepted(true);
//   onAccept();
// };

// const handleDeny = () => {
//   setIsDenied(true);
//   onDeny();
// };

// if (isAccepted) {
//   return (
//     <div className="notification accepted">
//       You have accepted the shipment order from {userName}.
//     </div>
//   );
// }

// if (isDenied) {
//   return (
//     <div className="notification denied">
//       You have denied the shipment order from {userName}.
//     </div>
//   );
// }

// return (
//   <div className="notification">
//     <p>{userName} has chosen you for their shipment order.</p>
//     <div className="button-container">
//       <button className="accept-button" onClick={handleAccept}>
//         Accept
//       </button>
//       <button className="deny-button" onClick={handleDeny}>
//         Deny
//       </button>
//     </div>
//   </div>
// );
