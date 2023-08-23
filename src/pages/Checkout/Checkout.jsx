import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";
import useStyles from "./checkoutStyle";
import { useLocation, Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useNavigate } from "react-router-dom";
import socket from "../../component/socket";
import { useSelector } from "react-redux";
import dayjs from "dayjs"; // Import the dayjs library
import axios from "axios";

function Checkout() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const classes = useStyles();
  const location = useLocation();
  console.log(location.state.message);
  console.log(location.state.amount);

  var money = 160000 * location.state.amount;

  const dumdum = useSelector((state) => state.auth.driverID.driver_id);

  const chosen_driver_id = localStorage.getItem("chosen_driver_id");

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const navigate = useNavigate();

  const handleConfirm = async () => {
    // Navigate to the desired page using history.push
    //navigate("/"); // Replace '/checkout' with the actual path you want to navigate to
    const formattedDate = selectedDate
      ? dayjs(selectedDate).format("YYYY-MM-DD")
      : "";
    const formattedTime = selectedTime
      ? selectedTime.$d.toLocaleTimeString()
      : "";
    console.log("Selected Date:", formattedDate);
    console.log("Selected Time:", formattedTime);
    console.log("Selected Time:", phoneNumber);
    const user_name = localStorage.getItem("user_name");
    const driver_name = localStorage.getItem("driver_name");
    const phone_number_driver = localStorage.getItem("phone_number_driver");
    const distance = localStorage.getItem("distance");
    const rating = localStorage.getItem("rating");
    const Authorization = localStorage.getItem("JWT");

    console.log("here jwt: ", Authorization);

    console.log("here user_name", user_name);
    console.log("here driver_name", driver_name);
    console.log("here phoneNumber", phoneNumber);
    console.log("here money", money);
    console.log("here phone_number_driver", phone_number_driver);
    console.log("here distance", distance);
    console.log("here rating", rating);
    console.log("here location", location.state.message);

    const stateDriver = 0;
    const kindOfShipment = 1;

    try {
      const response = await axios.post(
        "https://365truck.fdssoft.com/api/createShipment",
        {
          senderName: user_name,
          senderPhone: phoneNumber,
          typeOfShipment: location.state.message,
          fee: money,
          time: formattedDate,
          manual: formattedTime,
          payment: stateDriver,
          voucher: kindOfShipment,
          driver: [
            {
              full_name: driver_name,
              phone_number: phone_number_driver,
              rating: rating,
              userOpinion: distance,
            },
          ],
          recAddress: [
            {
              name: "",
            },
          ],
          senderAddress: [
            {
              name: "",
            },
          ],
        },
        {
          headers: {
            Authorization: Authorization,
          },
        }
      );

      if (response.status === 201) {
        socket.emit(
          "recShipment",
          {
            state: 0,
            driver_id: chosen_driver_id,
            user_id: 1,
            shipment_id: response.data,
          },
          (response) => {
            console.log("Shipment update successful:", response);
          }
        );
        navigate("/ShipmentList"); // This will redirect the user to the "/" route
      } else {
        console.log("failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className={classes.scrollableContainer}>
      <div className={classes.pageContainer}>
        <div className={classes.heading}>Xác nhận và hoàn tất</div>
        <div className={classes.contentContainer}>
          <div className={classes.blackTextContainer}>
            <p className={classes.blackText2}>
              Bạn đã yêu cầu:{" "}
              <span className={classes.blackText2}>Sáu Thiện Nhân</span>
            </p>
            <p className={classes.blackText2}>
              Địa chỉ làm việc: VR93+JH4 Khu phố 6 Thủ Đức Thành phố Hồ Chí Minh
              Việt Nam
            </p>
            <p className={classes.blackText2}>Bạn đã yêu cầu công việc: </p>
            <Typography
              gutterBottom
              style={{ whiteSpace: "pre-line", color: "black" }}
            >
              {location.state.message}
            </Typography>
            <Typography
              gutterBottom
              style={{ whiteSpace: "pre-line", color: "black" }}
            >
              Hoặc chọn thêm
              <Link to="/booking" style={{ color: "blue" }}>
                {" "}
                Dịch Vụ
              </Link>
            </Typography>
            <Typography
              gutterBottom
              style={{ whiteSpace: "pre-line", color: "black" }}
            >
              Phí di chuyển: 0VND
            </Typography>
            <Typography
              gutterBottom
              style={{ whiteSpace: "pre-line", color: "black" }}
            >
              Phí dịch vụ: {160 * location.state.amount}.000 VND
            </Typography>
            <Typography
              gutterBottom
              style={{ whiteSpace: "pre-line", color: "black" }}
            >
              Tổng phí dịch vụ: {160 * location.state.amount}.000 VND
            </Typography>
            <Typography
              gutterBottom
              style={{ whiteSpace: "pre-line", color: "black" }}
            >
              Ngày làm:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            </LocalizationProvider>
            <Typography
              gutterBottom
              style={{ paddingTop: 10, whiteSpace: "pre-line", color: "black" }}
            >
              Giờ bắt đầu:{" "}
              {selectedTime ? selectedTime.$d.toLocaleTimeString() : ""}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker
                  label="Basic time picker"
                  value={selectedTime}
                  onChange={handleTimeChange}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Typography
              gutterBottom
              style={{ paddingTop: 10, whiteSpace: "pre-line", color: "black" }}
            >
              Điện thoại liên hệ:
            </Typography>
            <TextField
              variant="outlined"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              style={{ width: "248px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: 15,
            }}
          >
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Hoàn tất
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
