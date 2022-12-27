import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Edit, Star, ViewDayOutlined } from "@material-ui/icons";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Avatar from "@mui/material/Avatar";

import Checkbox from "@mui/material/Checkbox";

import { useHistory } from "react-router-dom";

import { BsImage } from "react-icons/bs";
import img1 from "../../../../assets/img/2.jpg";
import UserPagination from "../../../User/component/verifieduser/UserPagination";
import { Row } from "react-bootstrap";

const OfferList = () => {
  const history = useHistory();
  const [selected, setSelected] = React.useState([]);
  const options = ["None", "Atria", "Callisto"];

  const userlist = [
    {
      id: "R34354",
      category: "R34354",
      location: "Gulshan 1",
      branch: "1",
      rating: "4.7",
      req_date: "Requested: 1/12/21",
      status: "Published",
      client_name: "KFC Dhanmondi 7/A",
      date: "Joining Date: 12/12/11",

      view: "3232123",
      click: "18623",
      member_lavel: "verifed",
    },
    {
      id: "R34356",
      category: "R34354",
      location: "Gulshan 1",
      branch: "1",
      rating: "4.7",
      req_date: "Requested: 1/12/21",
      status: "Published",
      client_name: "KFC Dhanmondi 7/A",
      date: "Joining Date: 12/12/11",

      view: "3232123",
      click: "18623",
      member_lavel: "verifed",
    },
    {
      id: "R34956",
      category: "R34354",
      location: "Gulshan 1",
      branch: "1",
      rating: "4.7",
      req_date: "Requested: 1/12/21",
      status: "Published",
      client_name: "KFC Dhanmondi 7/A",
      date: "Joining Date: 12/12/11",

      view: "3232123",
      click: "18623",
      member_lavel: "verifed",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;
  return (
    <div>
      <TableContainer component={Paper} className="text-capitalize">
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          {/* <caption>A basic table example with a caption</caption> */}
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={rowCount > 0 && numSelected === rowCount}
                  // onChange={onSelectAllClick}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="left">Name of Client</TableCell>
              <TableCell align="left">Client Category</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="center">Branch</TableCell>
              <TableCell align="center">MBBD Rating </TableCell>
              <TableCell align="center">View</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="left">
                {" "}
                <IconButton aria-label="more">
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userlist.map((row) => {
              const isItemSelected = isSelected(row.name);
              return (
                <TableRow key={row.id}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" checked={isItemSelected} />
                  </TableCell>
                  <TableCell align="center" className="image-td">
                    {row.id}
                  </TableCell>
                  <TableCell align="left" className="client_td">
                    <div className="d-flex align-items-center gap-2">
                      <img src={img1} alt="" />
                      <div>
                        <h6>{row.client_name}</h6>
                        <p>{row.date}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="left" className="client_td">
                    <h6>{row.category}</h6>
                  </TableCell>
                  <TableCell align="left" className="">
                    <h6>{row.location}</h6>
                  </TableCell>
                  <TableCell align="center">{row.branch}</TableCell>
                  <TableCell align="center" className="rating_td">
                    <span className="d-flex align-items-center">
                      <Star /> {row.rating}
                    </span>
                  </TableCell>
                  <TableCell align="center" className="table_icon">
                    <span
                      onClick={() => history.push(`/clients-dashboard`)}
                      style={{ cursor: "pointer" }}
                    >
                      <FaEye
                        className="me-2"
                        style={{ fontSize: "22px", color: "D8D8D8 " }}
                      />
                    </span>
                  </TableCell>
                  <TableCell align="center">
                    <select name="" id="" className="status_td">
                      <option value="bulk_action">Approved</option>
                      <option value="Food">Approved</option>
                      <option value="None">Approved</option>
                    </select>
                  </TableCell>

                  <TableCell align="left">
                    {" "}
                    <div>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            // maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-4">
        <UserPagination />
      </div>
    </div>
  );
};

export default OfferList;
