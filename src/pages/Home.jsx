import React, { useState, useRef, useEffect } from "react";

import Header from "../partials/Header";
import Header2 from "../partials/Header2";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesZigZag from "../partials/FeaturesZigzag";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../actions/authActions";
import axios from "axios";

function Home() {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  // For successful login

  //dispatch(loginSuccess({ id: 1, name: "John Doe" }));
  const user = useSelector((state) => state.auth.user);
  // For logout

  // console.log("1: ", isAuthenticated);
  // console.log("2: ", user);
  // dispatch(logout());
  const [isAuthenticatedChanged, setIsAuthenticatedChanged] = useState(false);

  // Listen for changes to isAuthenticated using useEffect
  useEffect(() => {
    console.log("phuc");
    setIsAuthenticatedChanged(!isAuthenticatedChanged);
  }, [isAuthenticated]);

  console.log("home value: ", isAuthenticated);

  const isDriver = useSelector((state) => state.auth.isDriver);
  console.log("isDriver value:", isDriver);

  //const dumdum = useSelector((state) => state.auth.driverID.driver_id);
  const dumdum = useSelector((state) => state.auth.driverID.driver_id);
  console.log("Here come the magic:", dumdum);
  console.log(dumdum);

  console.log("Lat ...:", coordinates.latitude);
  console.log("Long ...:", coordinates.longitude);

  const Authorization = localStorage.getItem("JWT");

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("lat: ", latitude);
          console.log("long: ", longitude);
          console.log("dumdum: ", dumdum);

          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCNrHal_gkT6ojR3jzYO7K1CyqUups_JuY`
          );

          const address = response.data.results[0].formatted_address;

          console.log("Address of User is: ", address);

          localStorage.setItem("address_of_user", address);

          setCoordinates({ latitude, longitude });
          try {
            const response = await axios.post(
              "https://365truck.fdssoft.com/api/updateCoord",
              //"http://localhost:3001/api/updateCoord",

              { driver_id: dumdum, latitude: latitude, longtitude: longitude },
              {
                headers: {
                  Authorization: Authorization,
                },
              }
            );

            if (response.status === 201) {
              console.log("greatgreatgreatgreatgreatgreatgreatgreat");
            } else {
              console.log(
                "failedfailedfailedfailedfailedfailedfailedfailedfailed"
              );
            }
          } catch (error) {
            console.error("Error:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      {/* {isAuthenticated ? <Header2 /> : <Header />} */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
