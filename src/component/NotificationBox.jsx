import React, { useState } from "react";

import "./style.css";

import { useNavigate } from "react-router-dom";

import socket from "../component/socket";

function NotificationBox() {
  var userName = "abc";
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  const navigate = useNavigate();

  const handleAccept = () => {
    setIsAccepted(true);

    const user_id_socket = localStorage.getItem("user_id_socket");
    const chosen_driver_id = localStorage.getItem("chosen_driver_id");

    var response;
    const shipment_id_socket = localStorage.getItem("shipment_id_socket");

    socket.emit(
      "recShipment",
      {
        state: 1,
        driver_id: chosen_driver_id,
        user_id: user_id_socket,
        shipment_id: shipment_id_socket,
      },
      (response) => {
        console.log("Shipment update successful:", response);
      }
    );

    navigate("/ShipmentList2");
  };

  const handleDeny = () => {
    setIsDenied(true);
  };

  if (isAccepted) {
    return (
      <div className="notification accepted">
        You have accepted the shipment order from {userName}.
      </div>
    );
  }

  if (isDenied) {
    return (
      <div className="notification denied">
        You have denied the shipment order from {userName}.
      </div>
    );
  }

  return (
    <div className="notification">
      <p className="black-text">
        {userName} has chosen you for their shipment order.
      </p>
      <div className="button-container">
        <button className="accept-button" onClick={handleAccept}>
          Accept
        </button>
        <button className="deny-button" onClick={handleDeny}>
          Deny
        </button>
      </div>
    </div>
  );
}

export default NotificationBox;
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
