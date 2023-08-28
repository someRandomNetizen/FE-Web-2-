import React, { useEffect, StrictMode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import FindOrder from "./pages/FindOrder";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Booking from "./pages/Booking";
import ResetPassword from "./pages/ResetPassword";
import Checkout from "./pages/Checkout/Checkout";
import ShipmentList from "./pages/ShipmentList/ShipmentList";
import ShipmentList2 from "./pages/ShipmentList2/ShipmentList2";
import Header from "./partials/Header";

import store from "./store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App({ persistor, basename }) {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StrictMode>
          <Provider store={store}>
            {/* <Header /> */}

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/findorder" element={<FindOrder />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shipmentlist" element={<ShipmentList />} />
              <Route path="/shipmentlist2" element={<ShipmentList2 />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </Provider>
        </StrictMode>
      </LocalizationProvider>
    </>
  );
}

export default App;
