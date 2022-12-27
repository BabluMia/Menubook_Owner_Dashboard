import { MenuItem } from "@material-ui/core";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import user from '../../assets/img/user1.jpg'
import UserPagination from "../User/component/verifieduser/UserPagination";

const TestimonialTable = () => {
    const options = ["None", "Atria", "Callisto"];
  const userlist = [
    {
      id: 1,
      image: "",
      name: "Mr. User Name",
      role: "CEO, Amar Taka",
      email: "useremail@youremail.com",
      post: "123",
      followers: "123",
      member_lavel: "verifed",
      testimonial: `ccessful customers are — and that's where collecting and analyzing customer feedback comes in. Once you've found those customers and collected their reviews, it's time to turn that enthusiasm into effective, affordable marketing materials. Read on for a closer look at what makes a great testimonial.`,
    },
    {
      id: 2,
      image: "",
      name: "Mr. User Name",
      role: "CEO, Amar Taka",
      email: "useremail@youremail.com",
      post: "123",
      followers: "123",
      member_lavel: "verifed",
      testimonial: `ccessful customers are — and that's where collecting and analyzing customer feedback comes in. Once you've found those customers and collected their reviews, it's time to turn that enthusiasm into effective, affordable marketing materials. Read on for a closer look at what makes a great testimonial.`,
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
  return <div className="testimonial">
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="caption table">
      {/* <caption>A basic table example with a caption</caption> */}
      <TableHead>
        <TableRow>
            
          <TableCell align="center">Photos</TableCell>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center"> Role</TableCell>
          
          
          <TableCell align="left">Testimonials</TableCell>
          <TableCell align="center">Action</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {userlist.map((row) => (
          <TableRow key={row.id} style={{minHeight:'150px'}}>
            <TableCell
            
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <Avatar alt="User1" src={user} />{" "}
              {/* <img className="rounded-full" src={user} alt="" /> */}
            </TableCell>
            <TableCell align="center" style={{ color: "#EF5B0C" }}>
            {row.name}
            </TableCell>
            <TableCell align="center" style={{ color: "#EF5B0C" }}>
              {row.role}
            </TableCell>
            
            
            <TableCell align="left" style={{maxWidth:'350px'}} className="me-2">
              {row.testimonial} 
            </TableCell>
            <TableCell align="center" className="table_icon">
              <span>
                <FaEye className="me-2" />
                view
              </span>
              <br />
              <span>
                <FaEdit className="me-2" />
                Edit
              </span>
            </TableCell>

           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <div className="mt-4">
    <UserPagination/>
  </div>
</div>;
};

export default TestimonialTable;
