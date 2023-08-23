import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import { useLocation, Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs"; // Import the dayjs library
import axios from "axios";

function ShipmentList2() {
  const classes = useStyles();
  var result = [];

  const user_name = localStorage.getItem("user_name");
  const [preResult, setPreResult] = useState([]);
  const handleConfirm = async () => {
    const Authorization = localStorage.getItem("JWT");

    try {
      const response = await axios.get(
        "https://365truck.fdssoft.com/api/showShipment2",
        {
          headers: {
            Authorization: Authorization,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        console.log(user_name);
        const filteredResult = response.data.filter(
          (match) =>
            match.voucher === 1 && match.driver[0]?.phone_number === user_name
        );
        console.log("here pre result: ", filteredResult);
        setPreResult(filteredResult); // Store the filtered results in state
      } else {
        console.log("failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call handleConfirm when the component mounts
  useEffect(() => {
    handleConfirm();
  }, []);

  const reversedPreResult = [...preResult].reverse();

  return (
    <div className={classes.scrollableContainer}>
      {reversedPreResult.map((item, index) => {
        // Extract hours and minutes from item.manual
        const [hours, minutes] = item.manual.split(":");

        return (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              color: "black",
            }}
          >
            <p>{item.senderName}</p>
            <p>{item.senderPhone}</p>
            <p>{item.typeOfShipment}</p>
            <p>{item.fee}</p>
            <p>{new Date(item.time).toLocaleDateString()}</p>
            <p>
              {hours}:{minutes}
            </p>
            <hr style={{ borderTop: "1px solid black", margin: "10px 0" }} />
            <p>
              Payment:{" "}
              {item.payment === "0"
                ? "Waiting driver"
                : item.payment === "1"
                ? "Accept"
                : "Unknown"}
            </p>
            <p>{item.voucher}</p>
            <ul>
              {item.driver.map((driver, driverIndex) => (
                <li key={driverIndex}>
                  <p>Driver Name: {driver.full_name}</p>
                  <p>Phone: {driver.phone_number}</p>
                  <p>Rating: {driver.rating}</p>
                  {/* Add more driver fields here */}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ShipmentList2;
