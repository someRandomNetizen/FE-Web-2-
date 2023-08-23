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
    <div id="app" style={{ borderColor: "transparent" }}>
      <div className="text-end " style={{ color: "white" }}>
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
                <span>S</span>
              </div>

              <h5 className="text-center mb-0" style={{ marginBottom: 5 }}>
                Sáu Thiện Nhân
              </h5>
              <p className="text-center mb-2" style={{ marginBottom: 5 }}>
                0778285446
              </p>

              <hr style={{ color: "blue" }} />

              <p
                className="mb-0"
                style={{
                  color: "blue",

                  fontSize: 15,
                  paddingTop: 10,
                }}
              >
                Vai trò: Thợ sửa ống nước
              </p>

              <hr
                className="mb-0"
                style={{ paddingTop: 5, paddingBottom: 5 }}
              />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -16px 0", paddingBottom: 5 }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Thông tin cá nhân</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Số lượng đơn hàng</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Doanh thu và chi tiêu</small>
                </button>
              </div>

              <hr />

              <div className="d-grid">
                <button
                  className="btn btn-secondary"
                  style={{ paddingLeft: 160 }}
                >
                  <small>Đăng xuất</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
}
