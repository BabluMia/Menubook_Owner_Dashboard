import React from "react";
import bCss from "./Buisness.module.css";
import { BsHandbag } from "react-icons/bs";
import { MdShowChart } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Bar from "../Svgs/Bar";
import img1 from "../../assets/img/1).jpg";
import { Search } from "@material-ui/icons";
import { CaretUp, Star } from "phosphor-react";

const MyBusinessWithData = () => {
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
      id: 4,
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
      id: 6,
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
    <div className={`${bCss.buisness_main} ${bCss.main_bg}`}>
      <div
        className={`row d-flex justify-content-lg-end justify-content-start  ${bCss.upper_select} `}
      >
        <div
          className={`col-12 col-md-8 col-lg-7 row d-flex justify-content-end align-items-center   ${bCss.main_text}`}
        >
          <div className={` col-12 col-md-5 justify-content-end ${bCss.first}`}>
            <span className="me-0 me-md-2" style={{ fontSize: "14px" }}>
              Business Type :{" "}
            </span>
            <select name="" id="">
              <option value="All">All</option>
              <option value="Food">Food</option>
              <option value="None">None</option>
            </select>
          </div>
          <div
            className={`col-10 col-md-7 mt-2 justify-content-end ${bCss.second}`}
          >
            <span className="me-2" style={{ fontSize: "14px" }}>
              Date Range :{" "}
            </span>
            <select name="" id="">
              <option value="Month to Date(1-27Oct ,2022)">
                Month to Date(1-27Oct ,2022)
              </option>
              <option value="Month to Date(1-27Jan ,2022)">
                Month to Date(1-27Jan ,2022)
              </option>
              <option value="Month to Date(1-27May ,2022)">
                Month to Date(1-27May ,2022)
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className={`${bCss.card} row  justify-content-between mt-3`}>
        <div className="col-lg-2  col-md-3 col-12 my-2 d-flex justify-content-between">
          <div>
            <BsHandbag size={29} color={"#3F3F44"} />
            <p className="mt-4">Top Clients</p>
          </div>
          <div style={{ color: "#6FC141" }}>
            <p style={{ fontSize: "20px" }}>45</p>
            <MdShowChart size={35} color={"#6FC141"} />
          </div>
        </div>
        <div className="col-lg-2  col-md-3 col-12 my-2 d-flex justify-content-between">
          <div>
            <BsHandbag size={29} color={"#3F3F44"} />
            <p className="mt-4">Top Clients</p>
          </div>
          <div style={{ color: "#6FC141" }}>
            <p style={{ fontSize: "20px" }}>45</p>
            <MdShowChart size={35} color={"#6FC141"} />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-12 my-2 d-flex justify-content-between">
          <div>
            <BsHandbag size={29} color={"#3F3F44"} />
            <p className="mt-4">Top Clients</p>
          </div>
          <div style={{ color: "#6FC141" }}>
            <p style={{ fontSize: "20px" }}>45</p>
            <MdShowChart size={35} color={"#6FC141"} />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-12 my-2 d-flex justify-content-between">
          <div>
            <BsHandbag size={29} color={"#3F3F44"} />
            <p className="mt-4">Top Clients</p>
          </div>
          <div style={{ color: "#6FC141" }}>
            <p style={{ fontSize: "20px" }}>45</p>
            <MdShowChart size={35} color={"#6FC141"} />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-12 my-2 d-flex justify-content-between">
          <div>
            <BsHandbag size={29} color={"#3F3F44"} />
            <p className="mt-4">Top Clients</p>
          </div>
          <div style={{ color: "#6FC141" }}>
            <p style={{ fontSize: "20px" }}>45</p>
            <MdShowChart size={35} color={"#6FC141"} />
          </div>
        </div>
      </div>
      <div
        className={`row gx-4 my-4 justify-content-between ${bCss.client_box2} `}
      >
        <div
          className={`col-lg-7 col-12 col-md-12 row gx-lg-3 py-3 px-2 rounded  gx-0 my-2   ${bCss.white2}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="" style={{ textDecoration: "underline" }}>
                Recent Ratings
              </h5>
            </div>
            <div>
              <button
                className="px-3 py-2 rounded-2 "
                style={{ border: "1px solid #EF5B0C" }} onClick={()=>history.push('/review')}
              >
                Show All
              </button>
            </div>
          </div>
          <div className="mt-4">
            <TableContainer
              style={{ border: "none" }}
              component={Paper}
              className="text-capitalize"
            >
              <Table sx={{ minWidth: 450 }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontSize: "12px",
                        color: "#939393",
                        minWidth: "110px",
                      }}
                      align="left"
                    >
                      Products
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "12px", color: "#939393" }}
                      align="left"
                    >
                      Customer
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "12px", color: "#939393" }}
                      align="center"
                    >
                      Date
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "12px", color: "#939393" }}
                      align="center"
                    >
                      Busisness
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "12px", color: "#939393" }}
                      align="center"
                    >
                      Requests
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userlist.map((row) => {
                    const isItemSelected = isSelected(row.name);
                    return (
                      <TableRow
                        key={row.id}
                        style={{
                          background: "#FFF5EF",
                          margin: "10px 0px 10px 0px",
                        }}
                      >
                        <TableCell padding="checkbox">
                          <div className="d-flex mx-1 justify-content-between align-items-center">
                            <img
                              src={img1}
                              width={20}
                              height={20}
                              className="rounded-full"
                              alt=""
                            />
                            <p
                              className="my-auto ms-1"
                              style={{ fontSize: "14px", color: "#939393" }}
                            >
                              Product-1
                            </p>
                          </div>
                        </TableCell>
                        <TableCell align="center" className="name">
                          <div
                            className="d-flex align-items-center gap-2 fw-bold"
                            style={{ color: "#939393", fontSize: "14px" }}
                          >
                            Kristin Watson
                          </div>
                        </TableCell>
                        <TableCell
                          align="center"
                          className="slug "
                          style={{ color: "#7A7A7A", fontSize: "12px" }}
                        >
                          11.30 AM 1/15/22
                        </TableCell>
                        <TableCell align="center" style={{ color: "#7A7A7A" }}>
                          Business Name
                        </TableCell>
                        <TableCell align="center">
                          <select name="" id="" className="status_td">
                            <option value="bulk_action">Approved</option>
                            <option value="Food">Approved</option>
                            <option value="None">Approved</option>
                          </select>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div
          className={`col-lg-5 col-md-12 rounded  col-12 my-2 ${bCss.white3}`}
        >
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h5 className="" style={{ textDecoration: "underline" }}>
                Top Business
              </h5>
            </div>
            <div>
              <span className="search">
                <Search className="search_icon" />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search comments, users.."
                />
              </span>
            </div>
          </div>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ color: "#939393" }}>Total Visitor</p>
              <p
                style={{ color: "black", fontSize: "20px", marginTop: "-14px" }}
              >
                451,251
              </p>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <CaretUp size={18} color="orange" weight="fill" />
                <p className="ms-2 my-auto" style={{ color: "orange" }}>
                  +3,24%
                </p>
              </div>
              <p style={{ fontSize: "14px", color: "#939393" }}>This Month</p>
            </div>
          </div>
          {/* table */}
          <div className="mt-4">
            <TableContainer
              style={{ border: "none" }}
              component={Paper}
              className="text-capitalize"
            >
              <Table sx={{ minWidth: 250 }} aria-label="caption table">
                <TableBody>
                  {userlist.map((row) => {
                    const isItemSelected = isSelected(row.name);
                    return (
                      <TableRow
                        key={row.id}
                        style={{
                          margin: "10px 0px 10px 0px",
                        }}
                      >
                        <TableCell padding="checkbox">
                          <div className="d-flex mx-1 justify-content-between align-items-center">
                            <img
                              src={img1}
                              width={20}
                              height={20}
                              className="rounded-full"
                              alt=""
                            />
                          </div>
                        </TableCell>
                        <TableCell
                          align="center"
                          className="slug "
                          style={{ color: "#7A7A7A", fontSize: "12px" ,display:'flex'}}
                        >
                          <p
                            className="my-auto ms-1 me-3"
                            style={{ fontSize: "14px", color: "#939393" }}
                          >
                            Business Name
                          </p>
                          <CaretUp size={18} color="orange" weight="fill" />
                        </TableCell>
                        <TableCell
                          align="center"
                          className="slug "
                          style={{ color: "#1A1A1A", fontSize: "14px" }}
                        >
                          5328
                        </TableCell>

                        <TableCell align="center" style={{ color: "#7A7A7A" }}>
                          <Star size={20} weight="fill" color="#7A7A7A" />
                          <span className="ms-2">4.7 (234)</span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBusinessWithData;
