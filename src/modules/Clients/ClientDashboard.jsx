import React from "react";
import bCss from "../Business/Buisness.module.css";
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
import { Add, Search } from "@material-ui/icons";
import { Backpack, CaretUp, Plus, Star } from "phosphor-react";

const ClientDashboard = () => {
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

  const itemRatings = [
    {
      id: 1,
      name: "Hot Dog",
      rating: "4.7 (35567)",
    },
    {
      id: 2,
      name: "Burger",
      rating: "4.6 (35567)",
    },
    {
      id: 3,
      name: "Jumbo Burger",
      rating: "4.7 (35567)",
    },
    {
      id: 4,
      name: "Thai Soup",
      rating: "4.7 (35567)",
    },
    {
      id: 5,
      name: "Thai Soup",
      rating: "4.7 (35567)",
    },
  ];
  const isSelected = (name) => selected.indexOf(name) !== -1;
  return (
    <div className={`${bCss.buisness_main} ${bCss.main_bg}`}>
      <div className="fw-bold">
        <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
        <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
          {" "}
          Client Name /{" "}
        </span>{" "}
        <span style={{ fontSize: "14px", color: "#818181" }}>Dashboard</span>
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
          className={`col-lg-7 col-12 col-md-12 row gx-lg-3 py-3 px-2 rounded  gx-0 my-2   `}
        >
          <div className="col-12 row justify-content-between">
            <div className="col-12 py-3  col-md-5 col-lg-5 d-flex justify-content-between align-items-center  bg-white">
              <div className="py-4 px-3">
                <Backpack size={40} weight="light" color="#C2D4D9" />
              </div>
              <div className='fw-bold me-2'>
                <h5 style={{color:'#EF5B0C',fontSize:'26px'}} >7540</h5>
                <h6 style={{color:'#1E3A56',fontSize:'18px'}} >Total Products</h6>
              </div>
            </div>
            <div className=" py-4 mt-2 mt-md-0 px-3 d-flex justify-content-center align-items-center rounded-1 col-lg-5 bg-transparent" style={{border:'1px solid #EF5B0C',color:'#EF5B0C',cursor:'pointer'}}>
            <Plus size={22} weight="bold" className="me-2" color="#EF5B0C" /> Add Products
            </div>
          </div>
          <div className={`${bCss.white2} mt-3`}>
            <div className="mt-4">
              <div
                className="d-flex justify-content-between me-1 me-md-4 fw-bold"
                style={{ color: "#6B6B6B" }}
              >
                <p>Recent Customer Feedback</p>
                <p>Ratings</p>
              </div>
              <TableContainer
                style={{ border: "none" }}
                component={Paper}
                className="text-capitalize"
              >
                <Table  aria-label="caption table">
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
                          <TableCell
                            padding="checkbox"
                            style={{ minWidth: "150px" }}
                          >
                            <div className="my-2 d-flex flex-column align-items-center">
                              <img
                                src={img1}
                                width={30}
                                height={30}
                                className="rounded-full my-1 mx-auto"
                                alt=""
                              />
                              <p
                                className="my-auto ms-1"
                                style={{ fontSize: "12px", color: "#939393" }}
                              >
                                10 Min Ago
                              </p>
                              <p
                                className="my-auto ms-1"
                                style={{ fontSize: "12px", color: "#939393" }}
                              >
                                20 August 2018
                              </p>
                            </div>
                          </TableCell>
                          <TableCell align="center" className="slug ">
                            <div>
                              <div className="d-flex justify-content-between ">
                                <div className="d-flex align-items-center">
                                  <p
                                    style={{
                                      color: "#1E3A56",
                                      fontSize: "16px",
                                    }}
                                  >
                                    Mr. User Name
                                  </p>
                                  <div className="d-flex gap-2 mx-2 mb-3">
                                    <div className="menu_name">Beef Burger</div>
                                    <div className="menu_name">
                                      Chicken Burger
                                    </div>
                                    <div className="menu_name">
                                      Chicken Role
                                    </div>
                                    <div className="menu_name">+ 2</div>
                                  </div>
                                </div>

                                <span
                                  className="d-flex justify-content-end"
                                  style={{ marginTop: "" }}
                                >
                                  <Star
                                    size={24}
                                    weight="fill"
                                    color="orange"
                                  />{" "}
                                  4.7
                                </span>
                              </div>
                              <div>
                                <p
                                  style={{
                                    fontSize: "12px",
                                    color: "#7A7A7A",
                                    textAlign: "left",
                                  }}
                                >
                                  It is a paradisematic country, in which
                                  roasted parts of sentences fly into your mouth
                                  even the all-powerful Pointing has no control
                                  about the blind texts it is an almost
                                  unorthographic life One day however a small
                                  line of blind.
                                </p>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div className="d-flex justify-content-center my-3 align-items-end">
            <button
              style={{
                border: "1px solid #F1F1F1",
                outline: "none",
                color: "#1E3A56",
              }}
              className="bg-white w-100  py-2"
            >
              View All
            </button>
          </div>
        </div>
        <div
          className={`col-lg-5 col-md-12 rounded py-3 px-4  col-12 my-2 ${bCss.white3}`}
        >
          <div
            className="d-flex my-3 fw-bold  justify-content-between"
            style={{ fontSize: "16px", color: "#7A7A7A" }}
          >
            <p>Your Top Items</p>
            <p>Ratings</p>
          </div>
          {itemRatings.map((item) => (
            <div
              key={item.id}
              style={{ borderTop: "1px solid #F1F1F1" }}
              className="d-flex py-3  justify-content-between align-items-center"
            >
              <p className="fw-semibold my-auto" style={{ color: "#7A7A7A" }}>
                {item.name}
              </p>
              <p
                className="my-auto"
                style={{ color: "orange", fontSize: "14px" }}
              >
                <Star size={20} weight="fill" color="orange" /> {item.rating}
              </p>
            </div>
          ))}

          {/* table */}
          <div className="d-flex justify-content-center my-3 align-items-end">
            <button
              style={{
                border: "1px solid #F1F1F1",
                outline: "none",
                color: "#1E3A56",
              }}
              className="bg-white w-100  py-2"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
