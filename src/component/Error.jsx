import React from "react";
import "./ErrorWindow.css"; // Import your CSS file for styling

const ErrorWindow = ({ message, onClose }) => {
  return (
    <div className="error-window">
      <div className="error-content">
        <div className="error-header">
          <h2>Error</h2>
          <button className="close-button" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p className="error-message">{message}</p>
        <button className="dismiss-button" onClick={onClose}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorWindow;
