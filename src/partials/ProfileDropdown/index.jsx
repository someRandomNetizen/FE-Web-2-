// import React, { useState } from "react";
// import UserAvatar from "./UserAvatar/UserAvatar";
// import UserDropdown from "./UserDropdown/UserDropdown ";

// const UserProfile = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleAvatarClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="user-profile">
//       {/* User Avatar */}
//       <div className="avatar-container" onClick={handleAvatarClick}>
//         <UserAvatar />
//       </div>

//       {/* Conditional rendering of dropdown */}
//       {isDropdownOpen && <UserDropdown />}
//     </div>
//   );
// };

// export default UserProfile;

import "./styles.scss";
import { PopupMenu } from "react-simple-widgets";

export default function UserProfile() {
  return (
    <div id="app">
      <div className="text-end">
        <PopupMenu>
          <button className="btn btn-primary bg-purple-600 hover:bg-purple-700">
            <small>Menu</small>
          </button>

          <div
            className="card text-start bg-blue-500"
            style={{ color: "blue" }}
          >
            <div className="card-body px-4 py-4">
              <div
                id="circle-avatar"
                className="text-center mx-auto mb-4"
                style={{ color: "white" }}
              >
                <span>K</span>
              </div>

              <h5 className="text-center mb-0" style={{ marginBottom: 20 }}>
                John Doe
              </h5>
              <p className="text-center mb-2" style={{ marginBottom: 20 }}>
                jd@gmail.com
              </p>

              <hr style={{ color: "blue" }} />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Change Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Pending Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Other Requests</small>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary">
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
}
