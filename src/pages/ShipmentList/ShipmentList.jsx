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
import socket from "../../component/socket";

function ShipmentList() {
  const [isAccepted, setIsAccepted] = useState(false);
  const classes = useStyles();
  var result = [];

  const user_name = localStorage.getItem("user_name");
  const [preResult, setPreResult] = useState([]);

  const handleSocketUpdate = (shipmentId, newState) => {
    setPreResult((prevResults) => {
      return prevResults.map((item) => {
        if (item.shipment_id === shipmentId) {
          return { ...item, payment: newState };
        }
        return item;
      });
    });
  };

  const handleConfirm = async () => {
    const Authorization = localStorage.getItem("JWT");

    try {
      const response = await axios.get(
        "https://365truck.fdssoft.com/api/showShipment",
        {
          headers: {
            Authorization: Authorization,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        const filteredResult = response.data.filter(
          (match) => match.voucher === 1 && match.senderName === user_name
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

  const alala = localStorage.getItem("user_id_local");

  var state_socket;
  var shipment_id_socket;

  // Call handleConfirm when the component mounts
  useEffect(() => {
    handleConfirm();

    // Listen for socket updates
    socket.on("recShipment", ({ state, driver_id, user_id, shipment_id }) => {
      state_socket = state;
      shipment_id_socket = shipment_id;
      // Update the payment state in the preResult array
      handleSocketUpdate(shipment_id, state);
      forceUpdate();
    });
  }, []);

  const forceUpdate = () => {
    // A simple state change to trigger a re-render
    setIsAccepted((prevValue) => !prevValue);
  };

  const reversedPreResult = [...preResult].reverse();
  if (isAccepted) {
    return (
      <div className="notification accepted">
        You have accepted the shipment order from {userName}.
      </div>
    );
  }
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
              {item.shipment_id === shipment_id_socket
                ? state_socket
                : item.payment === "0"
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

export default ShipmentList;
/////////////////////////////////////////////////////////////////////////////////
