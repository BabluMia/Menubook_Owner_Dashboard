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
import { Edit, ViewDayOutlined } from "@material-ui/icons";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Avatar from "@mui/material/Avatar";

import Checkbox from "@mui/material/Checkbox";

import { useHistory } from "react-router-dom";

import { BsImage } from "react-icons/bs";
import img1 from "../../../assets/img/1).jpg";
import UserPagination from "../../User/component/verifieduser/UserPagination";

const ClientAdvertisementList = () => {
  const history = useHistory();
  const [selected, setSelected] = React.useState([]);
  const options = ["None", "Atria", "Callisto"];

  const userlist = [
    {
      id: 1,
      image: "",
      name: "KFC AD 001",
      req_date: "Requested: 1/12/21",
      status: "Published",
      client_name: "KFC Dhanmondi 7/A",
      date: "Joining Date: 12/12/11",
      email: "useremail@youremail.com",
      mobile: "01717006688",
      view: "3232123",
      click: "18623",
      member_lavel: "verifed",
    },
    {
      id: 2,
      image: "",
      name: "KFC AD 001",
      req_date: "Requested: 1/12/21",
      status: "Draft",
      client_name: "KFC Dhanmondi 7/A",
      date: "Joining Date: 12/12/11",
      email: "useremail@youremail.com",
      mobile: "01717006688",
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
              <TableCell align="center" style={{ fontSize: "24px" }}>
                <BsImage />
              </TableCell>
              <TableCell align="left">Client Name</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">View</TableCell>
              <TableCell align="left">Click</TableCell>
              <TableCell align="center">Placement </TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="left">View</TableCell>
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
                    <img src={img1} alt="" />
                  </TableCell>
                  <TableCell align="left" className="client_td">
                    <h6>{row.client_name}</h6>
                    <p>{row.date}</p>
                  </TableCell>
                  <TableCell align="left" className="client_td">
                    <h6>{row.name}</h6>
                    <p>{row.req_date}</p>
                  </TableCell>
                  <TableCell align="left" className="">
                    <h6>{row.view}</h6>
                  </TableCell>
                  <TableCell align="left">{row.click}</TableCell>
                  <TableCell align="center" className="placement_td">
                    {" "}
                    <select name="" id="" className="me-2">
                      <option value="Landing page">Landing page</option>
                      <option value="Landing page">Landing page</option>
                      <option value="Landing page">Landing page</option>
                    </select>
                  </TableCell>
                  <TableCell align="center">
                    {row.status === "Draft" ? (
                      <button className="yellow-btn">Draft</button>
                    ) : (
                      <button className="green-btn">Published</button>
                    )}
                  </TableCell>

                  <TableCell align="left" className="table_icon">
                    <span
                      
                      style={{ cursor: "pointer" }}
                    >
                      <FaEye
                        className="me-2"
                        style={{ fontSize: "22px", color: "D8D8D8 " }}
                      />
                    </span>
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

export default ClientAdvertisementList;
