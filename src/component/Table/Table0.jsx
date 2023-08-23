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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1-2", "160.000 VND"),
  createData("3-5", "140.000 VND"),
];

function Table0() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ paddingLeft: 8 }}>
                Số lượng
              </TableCell>
              <TableCell align="right" sx={{ paddingRight: 8 }}>
                Đơn giá
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="left"
                  sx={{ paddingLeft: 10 }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ paddingRight: 6 }}>
                  {row.calories}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Table0;
