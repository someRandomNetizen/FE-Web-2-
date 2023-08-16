import React, { useState } from "react";

import "./NotificationBox.css";

function NotificationBox() {
  var userName = "abc";
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
    onAccept();
  };

  const handleDeny = () => {
    setIsDenied(true);
    onDeny();
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
