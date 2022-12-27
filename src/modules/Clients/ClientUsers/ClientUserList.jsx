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
import UserPagination from "../../User/component/verifieduser/UserPagination";

const ClientUserList = () => {
  const history = useHistory();
  const [selected, setSelected] = React.useState([]);
  const options = ["None", "Atria", "Callisto"];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Mr. User Name", "Customer", "useremail@youremail.com", 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
  ];

  const userlist = [
    {
      id: 1,
      image: "",
      name: "Mr. User Name",
      role: "customer",
      email: "useremail@youremail.com",
      mobile: "01717006688",
      post: "123",
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
    <div>
      <TableContainer component={Paper} className="text-capitalize" >
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
              
              <TableCell align="left">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Reset Password</TableCell>
              
              <TableCell align="center">
                {" "}
                <IconButton style={{opacity:'0'}} aria-label="more">
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
                  <TableCell align="center">
                    <div className="d-flex align-items-center gap-2">
                      <Avatar alt="User1" src="/static/images/avatar/1.jpg" />{" "}
                      <div style={{color:'#7A7A7A'}}>
                        {row.name} <br />
                        <span style={{fontSize:'10px',textAlign:'left'}}>Created: 12/12/21 </span> <br />
                        <span style={{fontSize:'10px',textAlign:'left'}}>Last Login: 12min ago</span>
                      </div>
                      
                    </div>
                  </TableCell>
                  
                  <TableCell align="left" style={{color:'#7A7A7A'}}>
                    {row.email} 
                  </TableCell>
                  <TableCell align="center" style={{color:'#7A7A7A'}}>{row.mobile}</TableCell>
                  <TableCell align="center" style={{color:'#7A7A7A'}}>{row.role}</TableCell>
                  <TableCell align="center" style={{color:'#7A7A7A'}} className="me-2">
                  Reset Password
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
      <div className="mt-4">
        <UserPagination />
      </div>
    </div>
  );
};

export default ClientUserList;
