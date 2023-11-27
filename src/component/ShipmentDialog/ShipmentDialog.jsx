import React, { useState } from "react";
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
import goal2 from "../../images/goal3.jpg";

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

export default function ShipmentDialog({
  open,
  onClose,
  onConfirm,
  message,
  amount,
}) {
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
    onConfirm(); // You can perform any other necessary actions here

    // Navigate to the desired page using history.push
    navigate("/Checkout", { state: { message: message, amount: amount } }); // Replace '/checkout' with the actual path you want to navigate to
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
            marginLeft: 15,
            fontSize: 25,
          }}
        >
          {isMessageEmpty ? "Thông Tin" : "Thông Tin Đơn Hàng"}
        </span>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitleContainer>
      {!isMessageEmpty && (
        <div>
          <img
            src={goal2}
            style={{
              width: "70%",
              height: "70%",
              marginLeft: 95,
            }}
          ></img>
        </div>
      )}
      <DialogContent dividers>
        {!isMessageEmpty && (
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <StyledTypography
              variant="h6"
              gutterBottom
              style={{ color: "#00008B", fontWeight: 600, fontSize: 23 }}
            >
              Sáu Thiện Nhân
            </StyledTypography>
          </div>
        )}
        {!isMessageEmpty && (
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
        )}

        <StyledTypography
          gutterBottom
          style={{
            whiteSpace: "pre-line",
            fontSize: "17px",
            fontWeight: 700,
            marginBottom: "1px", // Adjust this value to make the lines closer
          }}
        >
          Dịch vụ đã chọn:
        </StyledTypography>
        <StyledTypography
          gutterBottom
          style={{ whiteSpace: "pre-line", color: "gray", marginTop: "1px" }}
        >
          {message}
        </StyledTypography>
        {!isMessageEmpty && (
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
                {160 * amount}.000 VND
              </span>
            </StyledTypography>
          </div>
        )}
      </DialogContent>
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
              onClick={handleConfirm}
              className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-2 sm:w-auto sm:mb-0 py-2 px-4 text-sm"
            >
              Thanh toán
            </button>
          </div>
        )}
        {!isMessageEmpty && (
          <div data-aos="fade-up" data-aos-delay="600">
            <button
              className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-2 py-2 px-5 text-sm"
              href="#0"
              onClick={onClose}
            >
              Đặt Thêm
            </button>
          </div>
        )}
      </DialogActions>
    </StyledBootstrapDialog>
  );
}
