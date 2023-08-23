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
import Table0 from "./Table/Table0";
import GroupedButtons from "../../GroupedButtons/GroupedButtons";
import useStyles from "./style";

function Refrigirator2({ onRefrigiratorInfoChange }) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [amount, setAmount] = useState(1);
  const classes = useStyles();

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    onRefrigiratorInfoChange(2, 1, true);
  };

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    console.log(newAmount);
    onRefrigiratorInfoChange(2, newAmount, true);
  };

  return (
    <div>
      <div className={classes.flexContainer}>
        <FormGroup className={classes.formGroup}>
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
                onChange={handleCheckboxChange}
              />
            }
            label={
              <Typography className={classes.label}>
                Vệ sinh máy lạnh treo tường
                <br />
                Công suất: 2-2.5 HP
              </Typography>
            }
          />
        </FormGroup>
        <GroupedButtons
          enableInteraction={isCheckboxChecked}
          handleAmountChange={handleAmountChange}
        />
      </div>
      {isCheckboxChecked && <Table0></Table0>}
    </div>
  );
}

export default Refrigirator2;
