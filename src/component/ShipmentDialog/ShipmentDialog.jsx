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

  const handleConfirm = () => {
    onConfirm(); // You can perform any other necessary actions here

    // Navigate to the desired page using history.push
    navigate("/Checkout", { state: { message: message, amount: amount } }); // Replace '/checkout' with the actual path you want to navigate to
  };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      {isMessageEmpty ? (
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          Thông Tin
        </BootstrapDialogTitle>
      ) : (
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          Thông Tin Đơn Hàng
        </BootstrapDialogTitle>
      )}

      <DialogContent dividers>
        {!isMessageEmpty && (
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Typography variant="h6" gutterBottom>
              Sáu Thiện Nhân
            </Typography>
          </div>
        )}
        {!isMessageEmpty && (
          <Typography gutterBottom>
            Địa chỉ làm việc: VR93+JH4 Khu phố 6 Thủ Đức Thành phố Hồ Chí Minh
            Việt Nam
          </Typography>
        )}
        <Typography gutterBottom>Dịch vụ đã chọn: </Typography>
        <Typography gutterBottom style={{ whiteSpace: "pre-line" }}>
          {message}
        </Typography>
        {!isMessageEmpty && (
          <Typography gutterBottom style={{ whiteSpace: "pre-line" }}>
            Phí dịch vụ: {160 * amount}.000 VND
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        {!isMessageEmpty && (
          <Button autoFocus onClick={onClose}>
            Đặt thêm
          </Button>
        )}
        {!isMessageEmpty && (
          <Button color="primary" onClick={handleConfirm}>
            Thanh toán
          </Button>
        )}
      </DialogActions>
    </BootstrapDialog>
  );
}
