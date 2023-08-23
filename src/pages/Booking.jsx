import React, { useState } from "react";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Stack } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Typography } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import useStyles from "./bookingStyle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GroupedButtons from "../component/GroupedButtons/GroupedButtons";
import Table0 from "../component/Table/Table0";
import Refrigirator1 from "../component/Refrigirator/Refrigirator1/Refrigirator1";
import Refrigirator2 from "../component/Refrigirator/Refrigirator2/Refrigirator2";
import Refrigirator3 from "../component/Refrigirator/Refrigirator3/Refrigirator3";
import ShipmentDialog from "../component/ShipmentDialog/ShipmentDialog";

function Booking() {
  const classes = useStyles();

  const [refrigiratorInfo1, setRefrigiratorInfo1] = useState({
    id: 1,
    newAmount: 1,
    isCheckboxChecked: false,
  });

  const [refrigiratorInfo2, setRefrigiratorInfo2] = useState({
    id: 1,
    newAmount: 1,
    isCheckboxChecked: false,
  });

  const [refrigiratorInfo3, setRefrigiratorInfo3] = useState({
    id: 1,
    newAmount: 1,
    isCheckboxChecked: false,
  });

  const handleRefrigiratorInfoChange1 = (id, newAmount, isCheckboxChecked) => {
    setRefrigiratorInfo1({ id, newAmount, isCheckboxChecked });
  };

  const handleRefrigiratorInfoChange2 = (id, newAmount, isCheckboxChecked) => {
    setRefrigiratorInfo2({ id, newAmount, isCheckboxChecked });
  };

  const handleRefrigiratorInfoChange3 = (id, newAmount, isCheckboxChecked) => {
    setRefrigiratorInfo3({ id, newAmount, isCheckboxChecked });
  };

  const [shipmentDialogOpen, setShipmentDialogOpen] = useState(false);

  const [shipmentDialogMessage, setShipmentDialogMessage] = useState("");

  const [totalAmount, setTotalAmount] = useState(0);

  const handleShipmentDialogOpen = () => {
    var result = "";
    var calculatedTotalAmount = 0;
    if (
      !refrigiratorInfo1.isCheckboxChecked &&
      !refrigiratorInfo2.isCheckboxChecked &&
      !refrigiratorInfo3.isCheckboxChecked
    ) {
      result = "Vui lòng chọn dịch vụ";
      setShipmentDialogMessage(result);
    } else {
      result = "";
      setShipmentDialogMessage(result);
      if (refrigiratorInfo1.isCheckboxChecked) {
        console.log("Added to cart:", refrigiratorInfo1);
        var text1 =
          "Vệ sinh máy lạnh treo tường - Công suất: 1-1.5HP (Số lượng: " +
          refrigiratorInfo1.newAmount +
          ")";
        calculatedTotalAmount += refrigiratorInfo1.newAmount;
        setShipmentDialogMessage((prevMessage) => prevMessage + text1);
      }
      if (refrigiratorInfo2.isCheckboxChecked) {
        console.log("Added to cart:", refrigiratorInfo2);
        console.log(shipmentDialogMessage);
        var text2 =
          "\nVệ sinh máy lạnh treo tường - Công suất: 2-2.5HP (Số lượng: " +
          refrigiratorInfo2.newAmount +
          ")";
        calculatedTotalAmount += refrigiratorInfo2.newAmount;

        setShipmentDialogMessage((prevMessage) => prevMessage + text2);
        console.log(shipmentDialogMessage);
      }
      if (refrigiratorInfo3.isCheckboxChecked) {
        console.log("Added to cart:", refrigiratorInfo3);
        console.log(shipmentDialogMessage);
        var text3 =
          "\nVệ sinh máy lạnh treo tường - Công suất: 2-2.5HP (Số lượng: " +
          refrigiratorInfo3.newAmount +
          ")";

        calculatedTotalAmount += refrigiratorInfo3.newAmount;
        setShipmentDialogMessage((prevMessage) => prevMessage + text3);
        console.log(shipmentDialogMessage);
      }
    }
    setTotalAmount(calculatedTotalAmount);
    setShipmentDialogOpen(true);
  };

  const handleShipmentDialogClose = () => {
    setShipmentDialogOpen(false);
  };

  const handleConfirmShipment = () => {
    // Perform actions when the shipment is confirmed
    // For example: send shipment data to server, update database, etc.
    console.log("Shipment confirmed");
    handleShipmentDialogClose();
  };

  return (
    <div className={classes.scrollableContainer}>
      <div className={classes.pageContainer}>
        <div className={classes.heading}>Chọn Công Việc</div>
        <div className={classes.contentContainer}>
          <img
            src={"https://thothongminh.com/public/img/tho.png"}
            alt="My Image"
            className={classes.image}
          />
          {/* Your content goes here */}
          <div className={classes.blackTextContainer2}>
            <h1 className={classes.blackText}>Sáu Thiện Nhân</h1>
          </div>
          <div className={classes.blackTextContainer}>
            <p className={classes.blackText2}>
              Địa chỉ làm việc: VR93+JH4 Khu phố 6 Thủ Đức Thành phố Hồ Chí Minh
              Việt Nam
            </p>
            <p className={classes.blackText2}>Dịch vụ liên quan: </p>
          </div>
          <Stack
            direction="row"
            spacing={2}
            className={classes.blackTextContainer3}
          >
            <Button
              variant="contained"
              color="success"
              className={classes.greenButton}
            >
              MÁY LẠNH
            </Button>
            <Button
              variant="contained"
              color="success"
              className={classes.greenButton}
            >
              MÁY GIẶT
            </Button>
            <Button
              variant="contained"
              color="success"
              className={classes.greenButton}
            >
              QUẠT MÁY
            </Button>
            <Button
              variant="contained"
              color="success"
              className={classes.greenButton}
            >
              TỦ LẠNH
            </Button>
          </Stack>

          <div className={classes.blackTextContainer}>
            <p className={classes.blackText3}>Vệ sinh máy lạnh: </p>
          </div>
          <Refrigirator1
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange1}
          ></Refrigirator1>
          <Refrigirator2
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange2}
          ></Refrigirator2>
          <Refrigirator3
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange3}
          ></Refrigirator3>
          <div className={classes.blackTextContainer}>
            <p className={classes.blackText3}>Lắp đặt máy lạnh: </p>
          </div>
          <Refrigirator1
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange1}
          ></Refrigirator1>
          <Refrigirator2
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange2}
          ></Refrigirator2>
          <Refrigirator3
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange3}
          ></Refrigirator3>
          <div className={classes.blackTextContainer}>
            <p className={classes.blackText3}>Nạp ga máy lạnh: </p>
          </div>
          <Refrigirator1
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange1}
          ></Refrigirator1>
          <Refrigirator2
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange2}
          ></Refrigirator2>
          <Refrigirator3
            onRefrigiratorInfoChange={handleRefrigiratorInfoChange3}
          ></Refrigirator3>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: 15,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleShipmentDialogOpen}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
        <ShipmentDialog
          open={shipmentDialogOpen}
          onClose={handleShipmentDialogClose}
          onConfirm={handleConfirmShipment}
          message={shipmentDialogMessage}
          amount={totalAmount}
        />
      </div>
    </div>
  );
}

export default Booking;
