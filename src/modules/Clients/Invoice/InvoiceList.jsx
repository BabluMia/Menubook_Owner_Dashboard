import React from "react";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CaretDown, CaretUp } from "phosphor-react";
const InvoiceList = () => {
    const invoiceTable =[
        {
            id:1,
            companyName:'Company One',
            invoiceDate:'07 April 2018',
            price:'$129.99',
            status:'Pending'
        },
        {
            id:2,
            companyName:'Company One',
            invoiceDate:'07 April 2018',
            price:'$129.99',
            status:'Pending'
        },
        {
            id:3,
            companyName:'Company One',
            invoiceDate:'07 April 2018',
            price:'$129.99',
            status:'Pending'
        },
        {
            id:4,
            companyName:'Company One',
            invoiceDate:'07 April 2018',
            price:'$129.99',
            status:'Pending'
        },
    ]
  return (
    <TableContainer
      style={{ border: "none" }}
      component={Paper}
      className="text-capitalize"
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow style={{ color: "#54617A" }}>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                INVOICE ID
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    size={10}
                    style={{ marginTop: "-3px" }}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                CLIENT ID
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    size={10}
                    style={{ marginTop: "-3px" }}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                  COMPANY NAME
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    size={10}
                    style={{ marginTop: "-3px" }}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                  BRANCH
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    size={10}
                    style={{ marginTop: "-3px" }}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                REFERENCE
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    style={{ marginTop: "-3px" }}
                    size={10}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                  INVOICE TIME
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    style={{ marginTop: "-3px" }}
                    size={10}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                  PRICE
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    style={{ marginTop: "-3px" }}
                    size={10}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
            <TableCell align="center">
              <div className="d-flex  align-items-center">
                <p className="my-auto" style={{ color: "#54617A" }}>
                  STATUS
                </p>
                <span className="d-flex ms-2 flex-column">
                  <CaretUp size={10} weight="fill" color="#54617A" />
                  <CaretDown
                    style={{ marginTop: "-3px" }}
                    size={10}
                    weight="fill"
                    color="#54617A"
                  />
                </span>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceTable.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell align="center" className="name">
                  <div
                    className="d-flex align-items-center gap-2 fw-bold"
                    style={{ color: "#7A7A7A" }}
                  >
                    INV 334243
                  </div>
                </TableCell>
                <TableCell
                  align="left"
                  className="slug fw-bold"
                  style={{ color: "#7A7A7A" }}
                >
                  34243
                </TableCell>
                <TableCell align="left" style={{ color: "#7A7A7A" }}>
                  {row.companyName}
                </TableCell>
                <TableCell align="left" style={{ color: "#7A7A7A" }}>
                Company Branch
                </TableCell>
                <TableCell align="left" style={{ color: "#7A7A7A" }}>
                AD 002
                </TableCell>
                <TableCell align="left" style={{ color: "#7A7A7A" }}>
                  {row.invoiceDate}
                </TableCell>
                <TableCell align="left" style={{ color: "#7A7A7A" }}>
                  {row.price}
                </TableCell>
                <TableCell align="left" className="placement_td">
                    {" "}
                    <select name="" id="" className="me-2">
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      
                    </select>
                  </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceList;
