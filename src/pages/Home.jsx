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

function Home() {
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
    console.log("fuck");
    setIsAuthenticatedChanged(!isAuthenticatedChanged);
  }, [isAuthenticated]);

  console.log("home value: ", isAuthenticated);

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("lat: ", latitude);
          console.log("long: ", longitude);

          setCoordinates({ latitude, longitude });
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
