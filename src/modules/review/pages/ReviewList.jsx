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

import Avatar from "@mui/material/Avatar";
// import img1 from '../../../../../assets/img/1).jpg'
import img1 from '../../../assets/img/1).jpg'
import Checkbox from "@mui/material/Checkbox";
import UserPagination from "../../User/component/verifieduser/UserPagination";
import { useHistory } from "react-router-dom";

import { Star } from "@material-ui/icons";
const ReviewList = () => {
  const history = useHistory();
  const [selected, setSelected] = React.useState([]);
  const options = ["None", "Atria", "Callisto"];

  const userlist = [
    {
      id: 1,
      image: "",
      name: "Mr. User Name",
      role: "customer",
      email: "useremail@youremail.com",
      mobile: "01717006688",
      post: "123",
      restaurent: "KFC Dhanmondi 7/A",
      followers: "123",
      member_lavel: "verifed",
    },
    {
      id: 2,
      image: "",
      name: "Mr. User Name",
      role: "customer",
      email: "useremail@youremail.com",
      mobile: "01717006688",
      restaurent: "KFC Dhanmondi 7/A",
      post: "123",
      followers: "123",
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
    <>
      <div>
        <TableContainer component={Paper}>
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
                <TableCell align="left">User</TableCell>
                <TableCell align="left">Comments</TableCell>
                <TableCell align="left">Restaurant</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">Status</TableCell>

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

                    <TableCell align="left">
                      <div className="d-flex align-items-center gap-2 td-name">
                        <Avatar alt="User1" src="/static/images/avatar/1.jpg" />{" "}
                        <p>
                          {" "}
                          {row.name} <br />
                          <span>45 Approved</span> <br />
                          <span style={{ color: "#7A7A7A" }}>
                            Joined: 12/12/21
                          </span>
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left" className="comment_td">
                      <>
                        <h6>Chicken Burger (4/5)</h6>
                        <p>
                          It is a paradisematic country, in which roasted parts
                          of sentences fly into your mouth even the all-powerful
                          Pointing has no control about the blind texts it is an
                          almost unorthographic life One day however a small
                          line of blind.
                        </p>
                        <div className="d-flex gap-3 mb-3">
                          <img src={img1} alt="" />
                          <img src={img1} alt="" />
                          <img src={img1} alt="" />
                        </div>
                        <div className="d-flex gap-2 mb-3">
                          <div className="menu_name">Beef Burger (4/5)</div>
                          <div className="menu_name">
                            Beef Burger Title (4/5)
                          </div>
                          <div className="menu_name">Beef (4/5)</div>
                        </div>
                        <div className="d-flex gap-2 mb-3">
                          <div className="menu_name">
                            Beef Burger Title (4/5)
                          </div>
                          <div className="menu_name">Beef Burger (4/5)</div>
                        </div>
                      </>
                    </TableCell>
                    <TableCell>
                      <h6 className="comment_td " style={{ color: "#7A7A7A" }}>
                        {row.restaurent}
                      </h6>
                    </TableCell>
                    <TableCell align="left" className="rating_td">
                      <span className="d-flex align-items-center">
                        <Star /> 4.7
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <select name="" id="" className="status_td">
                        <option value="bulk_action">Approved</option>
                        <option value="Food">Approved</option>
                        <option value="None">Approved</option>
                      </select>
                    </TableCell>

                    <TableCell align="center">
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
      </div>
      <div className="mt-4">
        <UserPagination />
      </div>
    </>
  );
};

export default ReviewList;
