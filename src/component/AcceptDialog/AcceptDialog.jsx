import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import accept from "../../images/accept.jpg";
import axios from "axios";
import socket from "../socket";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AcceptDialog({
  open,
  onClose,
  onConfirm,
  message,
  amount,
}) {
  const [shipmentAccept, setshipmentAccept] = useState(null);

  const shipment_id_socket = localStorage.getItem("shipment_id_socket");

  const [shipmentInfo, setshipmentInfo] = useState(null);

  const Authorization = localStorage.getItem("JWT");

  const getShipment2 = async () => {
    try {
      const response = await axios.post(
        "https://365truck.fdssoft.com/api/getShipment2",
        {
          id: shipment_id_socket,
        },
        {
          headers: {
            Authorization: Authorization,
          },
        }
      );

      if (response.status === 201) {
        const meow = response.data;
        setshipmentInfo(meow);

        console.log("Result sent to database 2: ", shipmentInfo);

        console.log("Result sent to database: ", meow);
      } else {
        console.log("failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getShipment2();
  }, []);

  useEffect(() => {}, [shipmentInfo]);

  const isMessageEmpty = message === "Vui lòng chọn dịch vụ";

  const navigate = useNavigate();

  const StyledBootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(2),
    },
  }));

  const DialogTitleContainer = styled(DialogTitle)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
  }));

  const handleConfirm = () => {
    // Navigate to the desired page using history.push
    navigate("/ShipmentList2", { state: { message: message, amount: amount } }); // Replace '/checkout' with the actual path you want to navigate to
  };

  const [isAccepted, setIsAccepted] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  const handleAccept = async () => {
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

    const response2 = await axios.post(
      "https://365truck.fdssoft.com/api/updateShipmentPayment2",
      { shipment_id: shipment_id_socket, payment: "1" },
      {
        headers: {
          Authorization: Authorization,
        },
      }
    );

    navigate("/ShipmentList2");
  };

  const handleDeny = async () => {
    const user_id_socket = localStorage.getItem("user_id_socket");
    const chosen_driver_id = localStorage.getItem("chosen_driver_id");

    var response;
    const shipment_id_socket = localStorage.getItem("shipment_id_socket");

    socket.emit(
      "recShipment",
      {
        state: 5,
        driver_id: chosen_driver_id,
        user_id: user_id_socket,
        shipment_id: shipment_id_socket,
      },
      (response) => {
        console.log("Shipment update successful:", response);
      }
    );

    const response2 = await axios.post(
      "https://365truck.fdssoft.com/api/updateShipmentPayment2",
      { shipment_id: shipment_id_socket, payment: "5" },
      {
        headers: {
          Authorization: Authorization,
        },
      }
    );

    onClose();
  };

  return (
    <StyledBootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitleContainer id="customized-dialog-title" onClose={onClose}>
        <span
          style={{
            color: "#5D5DFF",
            fontSize: isMessageEmpty ? "18px" : "20px",
            fontWeight: isMessageEmpty ? "bold" : "600",
            marginRight: "auto",
            fontSize: 25,
          }}
        >
          {"Nhận được đơn hàng"}
        </span>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitleContainer>

      <div>
        <img
          src={accept}
          style={{
            width: "50%",
            height: "50%",
            marginLeft: 140,
          }}
        ></img>
      </div>

      {shipmentInfo && (
        <DialogContent dividers>
          <div>
            <StyledTypography
              gutterBottom
              style={{
                whiteSpace: "pre-line",
                fontSize: "17px",
                fontWeight: 700,
                marginBottom: "1px", // Adjust this value to make the lines closer
              }}
            >
              Địa chỉ làm việc:
            </StyledTypography>
            <StyledTypography
              gutterBottom
              style={{
                whiteSpace: "pre-line",
                fontSize: "14px",
              }}
            >
              <span
                style={{
                  fontWeight: "medium",
                  fontSize: "16px",
                  color: "gray",
                  marginTop: "1px",
                }}
              >
                VR93+JH4 Khu phố 6 Thủ Đức Thành phố Hồ Chí Minh Việt Nam
              </span>
            </StyledTypography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <StyledTypography
              gutterBottom
              style={{
                whiteSpace: "pre-line",
                fontSize: "17px",
                fontWeight: 700,
              }}
            >
              Khoảng cách:
            </StyledTypography>
            <StyledTypography
              gutterBottom
              style={{
                whiteSpace: "pre-line",
                fontSize: "14px",
                marginLeft: "5px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "purple",
                }}
              >
                {shipmentInfo?.driver[0]?.userOpinion} Km
                {/* {driver[0].userOpinion} Km */}
              </span>
            </StyledTypography>
          </div>

          <StyledTypography
            gutterBottom
            style={{
              whiteSpace: "pre-line",
              fontSize: "17px",
              fontWeight: 700,
              marginBottom: "1px", // Adjust this value to make the lines closer
            }}
          >
            Dịch vụ được chọn:
          </StyledTypography>
          <StyledTypography
            gutterBottom
            style={{ whiteSpace: "pre-line", color: "gray", marginTop: "1px" }}
          >
            {shipmentInfo?.typeOfShipment}
          </StyledTypography>

          <div style={{ display: "flex", alignItems: "center" }}>
            <StyledTypography
              gutterBottom
              style={{
                whiteSpace: "pre-line",
                fontSize: "17px",
                fontWeight: 700,
              }}
            >
              Phí dịch vụ:
            </StyledTypography>
            <StyledTypography
              gutterBottom
              style={{
                whiteSpace: "pre-line",
                fontSize: "14px",
                marginLeft: "5px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "green",
                }}
              >
                {shipmentInfo?.fee} VND
              </span>
            </StyledTypography>
          </div>
        </DialogContent>
      )}

      {/* <DialogActions>
        {!isMessageEmpty && <Button onClick={onClose}>Đặt thêm</Button>}
        {!isMessageEmpty && (
          <Button color="primary" onClick={handleConfirm}>
            Thanh toán
          </Button>
        )}
      </DialogActions> */}
      <DialogActions>
        {!isMessageEmpty && (
          <div data-aos="fade-up" data-aos-delay="400">
            <button
              onClick={handleAccept}
              className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-2 sm:w-auto sm:mb-0 py-2 px-4 text-sm"
            >
              Chấp nhận
            </button>
          </div>
        )}
        {!isMessageEmpty && (
          <div data-aos="fade-up" data-aos-delay="600">
            <button
              className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-2 py-2 px-5 text-sm"
              href="#0"
              onClick={handleDeny}
            >
              Từ chối
            </button>
          </div>
        )}
      </DialogActions>
    </StyledBootstrapDialog>
  );
}
