import React, { useState } from "react";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Stack } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Typography } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function GroupedButtons({ enableInteraction, handleAmountChange }) {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    if (enableInteraction) {
      setCounter(counter + 1);
      handleAmountChange(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (enableInteraction) {
      setCounter(counter - 1);
      handleAmountChange(counter - 1);
    }
  };

  return (
    <ButtonGroup
      style={{ color: "black" }}
      size="medium"
      aria-label="small outlined button group"
    >
      <Button
        style={{
          color: "black",
          backgroundColor: "#f0f0f0",
        }}
        onClick={handleDecrement}
        disabled={!enableInteraction}
      >
        -
      </Button>
      <Button
        disabled
        style={{
          color: "black",
          backgroundColor: "#f0f0f0",
        }}
      >
        {counter}
      </Button>
      <Button
        style={{
          color: "black",
          backgroundColor: "#f0f0f0",
        }}
        onClick={handleIncrement}
        disabled={!enableInteraction}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default GroupedButtons;
