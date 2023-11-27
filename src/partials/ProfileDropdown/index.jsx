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
import { useDispatch } from "react-redux";

import "./styles.scss";
import { PopupMenu } from "react-simple-widgets";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/authActions";
export default function UserProfile() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("JWT");
    dispatch(logout());
  };
  const isDriver = useSelector((state) => state.auth.isDriver);
  var lovely = isDriver;

  const driver_name = localStorage.getItem("driver_name");
  const user_full_name = localStorage.getItem("user_full_name");
  const user_phone_number = localStorage.getItem("user_phone_number");
  const phone_number_driver = localStorage.getItem("phone_number_driver");

  console.log("here is the isDriver: ", lovely);

  const handleShipment = () => {
    if (isDriver) {
      navigate("/ShipmentList2");
    } else {
      navigate("/ShipmentList");
    }
  };

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
                {lovely ? driver_name : user_full_name}
              </h5>
              <p className="text-center mb-2" style={{ marginBottom: 5 }}>
                {lovely ? phone_number_driver : user_phone_number}
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
                <button
                  className="list-group-item list-group-item-action px-4"
                  onClick={handleShipment}
                >
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
                  onClick={handleLogout}
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
