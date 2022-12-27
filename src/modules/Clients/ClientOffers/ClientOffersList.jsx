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
import img1 from "../../../assets/img/2.jpg";
import UserPagination from "../../User/component/verifieduser/UserPagination";

const ClientOffersList = () => {
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
      status: "Scheduled",
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
              <TableCell align="center" style={{ fontSize: "24px" }}>
                <BsImage />
              </TableCell>
              <TableCell align="left">Offer Name</TableCell>
              <TableCell align="left">Foods</TableCell>
              <TableCell align="left">Discount Type</TableCell>
              <TableCell align="left">Categories</TableCell>
              
            
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
                    <img src={img1} alt="" />
                  </TableCell>
                  <TableCell align="left" className="client_td">
                    <h6 style={{ color: "#7A7A7A" }}>Flat Discount</h6>
                    <p>Requested: 12/12/21</p>
                  </TableCell>
                  <TableCell align="left" className="client_td">
                    <div className="d-flex gap-2 mb-3">
                      <div className="menu_name">Beef Burger </div>
                      <div className="menu_name">Beef Burger </div>
                      <div className="menu_name">Beef </div>
                    </div>
                    <div className="d-flex gap-2 mb-3">
                      <div className="menu_name">Beef Burger Title </div>
                      <div className="menu_name">Beef Burger </div>
                    </div>
                  </TableCell>
                  <TableCell align="left" className="">
                    <h6 style={{color:'#7A7A7A'}}>20% Off</h6>
                  </TableCell>
                  <TableCell align="left"> <h6 style={{color:'#7A7A7A'}}>Soup, Break Fast</h6></TableCell>
                  
                  <TableCell align="center">
                    {row.status === "Scheduled" ? (
                      <button className="yellow-btn">Scheduled</button>
                    ) : (
                      <button className="green-btn">Published</button>
                    )}
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

export default ClientOffersList;
