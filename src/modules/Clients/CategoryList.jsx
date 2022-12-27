import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import Bar from "../Svgs/Bar";
import UserPagination from "../User/component/verifieduser/UserPagination";

const CategoryList = () => {
  const history = useHistory();
  const [selected, setSelected] = React.useState([]);
  const options = ["None", "Atria", "Callisto"];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
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
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Slug</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell align="center">Move Position</TableCell>
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
                  <TableCell align="center" className="name">
                    <div className="d-flex align-items-center gap-2 fw-bold" style={{color:'#EF5B0C'}}>
                    Fast-food
                    </div>
                  </TableCell>
                  <TableCell align="center" className="slug fw-bold" style={{color:'#7A7A7A'}} >
                  Fast-food
                  </TableCell>
                  <TableCell align="center" style={{color:'#7A7A7A'}}>
                    123
                  </TableCell>
                  <TableCell align="center"><Bar /></TableCell>
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

export default CategoryList;
