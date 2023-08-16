import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Banner from "../partials/Banner";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  logout,
  isDriver,
  driverID,
} from "../actions/authActions";
import { useSelector } from "react-redux";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // user_name: "admin3@gmail.com",
    // password: "QWEqwe123!@#",
    user_name: "0751204968",
    password: "Qwe123!@#",
  });

  // Update the state when the user types in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    // Access the form data in the formData state
    const { user_name, password } = formData;
    // Do something with the form data (e.g., send it to a server, perform validation, etc.)
    console.log("user_name:", user_name);
    console.log("Password:", password);
    // You can add your logic here to handle form submission, such as making API requests.
    try {
      const response = await axios.post(
        "https://365truck.fdssoft.com/api/auth/loginUser",
        { user_name, password }
      );

      if (response.status === 201) {
        console.log("Login successful:", response.data);
        dispatch(loginSuccess({ id: 1, name: "John Doe" }));
        console.log("accessToken: ", response.data.access_token);
        localStorage.setItem("JWT", response.data.access_token);
        const storedToken = localStorage.getItem("JWT");
        console.log("accessToken2: ", storedToken);
        // Navigate to "/" after successful login
        navigate("/"); // This will redirect the user to the "/" route
      } else {
        console.log("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    const phone_number = user_name;

    try {
      const response = await axios.post(
        "https://365truck.fdssoft.com/api/auth/loginDriver",
        { phone_number: phone_number, password: password }
      );

      if (response.status === 201) {
        console.log("Login successful:", response.data);
        dispatch(loginSuccess({ id: 1, name: "John Doe" }));
        dispatch(isDriver());
        console.log("accessToken: ", response.data.access_token);
        localStorage.setItem("JWT", `Bearer ${response.data.access_token}`);
        //localStorage.setItem("JWT", response.data.access_token);
        const Authorization = localStorage.getItem("JWT");
        console.log("accessToken2: ", Authorization);
        //const isDriver = useSelector((state) => state.auth.isDriver);

        // Navigate to "/" after successful login
        console.log("boo boo");

        const result = await axios.post(
          "https://365truck.fdssoft.com/api/getDriver",
          { phone_number },
          {
            headers: {
              Authorization: Authorization, // Pass the authorization token in the header
            },
          }
        );

        console.log("Driver ID:", result.data.driver_id);
        const driver_id = result.data.driver_id;
        console.log("Driver ID:", driver_id);
        dispatch(driverID(driver_id));

        // dispatch(loginSuccess({ id: 1, name: "John Doe" }));
        // dispatch(isDriver());
        // console.log("accessToken: ", result.data.access_token);
        // localStorage.setItem("JWT", result.data.access_token);
        // const storedToken = localStorage.getItem("JWT");
        // console.log("accessToken2: ", storedToken);
        //const isDriver = useSelector((state) => state.auth.isDriver);

        // Navigate to "/" after successful login

        navigate("/"); // This will redirect the user to the "/" route
      } else {
        console.log("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
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

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome back. We exist to make entrepreneurship easier.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg
                          className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span
                          className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                          aria-hidden="true"
                        ></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Sign in with Google
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-700 border-dotted grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-400">
                    Or, sign in with your Phone Number
                  </div>
                  <div
                    className="border-t border-gray-700 border-dotted grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <form onSubmit={handleSignIn}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="number"
                      >
                        Username
                      </label>
                      <input
                        id="number"
                        type="text" // Use text type for Username
                        name="user_name" // Match the name attribute with the formData state property
                        className="form-input w-full text-gray-300"
                        placeholder="Username"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="password" // Set the name attribute to identify this input in the state
                        className="form-input w-full text-gray-300"
                        placeholder="Password (at least 10 characters)"
                        value={formData.password} // Set the value to the corresponding state value
                        onChange={handleChange} // Handle changes to the input
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">
                            Keep me signed in
                          </span>
                        </label>
                        <Link
                          to="/reset-password"
                          className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  Don’t you have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Banner />
    </div>
  );
}

export default SignIn;
