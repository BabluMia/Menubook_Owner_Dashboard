import React from "react";
import bCss from "../Business/Buisness.module.css";
import { BsHandbag } from "react-icons/bs";
import { MdShowChart } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
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
import {
  ArrowFatDown,
  ArrowLineDown,
  ArrowUp,
  Backpack,
  CaretDown,
  CaretUp,
  DotsThreeOutlineVertical,
  Plus,
  Star,
} from "phosphor-react";
import ClientChart from "./ClientChart";

const ClientEarning = () => {
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
  const cardData = [
    {
      id: 1,
      title: "Customer",
    },
    {
      id: 2,
      title: "Invoice",
    },
    {
      id: 3,
      title: "Earnings",
    },
    {
      id: 4,
      title: "Growth",
    },
    {
      id: 5,
      title: "Costs",
    },
  ];
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
    <div className={`${bCss.buisness_main} ${bCss.main_bg}`}>
      <div
        className={`row d-flex justify-content-lg-end justify-content-start  ${bCss.upper_select} `}
      >
        <div
          className={`col-12 col-md-8 col-lg-7 row d-flex justify-content-end align-items-center   ${bCss.main_text}`}
        >
          <div className={` col-12 col-md-12 col-lg-5  ${bCss.first}`}>
            <span className="me-0 me-md-2" style={{ fontSize: "14px" }}>
              Business Type :{" "}
            </span>
            <select name="" id="">
              <option value="All">All</option>
              <option value="Food">Food</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className={`col-12 col-md-10 col-lg-7 mt-2  ${bCss.second}`}>
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
        {cardData.map((card) => (
          <div
            key={card.id}
            className="col-lg-2 px-3 py-2  col-md-3 col-12 my-2 "
          >
            <h6 style={{ color: "#2E3039", fontSize: "20px" }}>{card.title}</h6>
            <h4
              className="fw-bold"
              style={{ color: "#242E42", fontSize: "24px" }}
            >
              45,320
            </h4>
            <span className="my-1">
              <ArrowUp size={22} weight="bold" color="#03DE73" />
              5.25%
            </span>
            <p style={{ fontSize: "12px", color: "#03DE73" }}>
              Since last month
            </p>
          </div>
        ))}
      </div>
      <div
        className={`row gx-4 my-4 justify-content-between ${bCss.client_box2} `}
      >
        <div
          className={`col-lg-7 col-12 col-md-12 row gx-lg-3 py-3 px-2 rounded  gx-0 my-2   ${bCss.white2}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="">Revenue</h5>
            </div>
            <div>
              <DotsThreeOutlineVertical
                cursor={"pointer"}
                size={24}
                weight="fill"
                color="#D1D8DE"
              />
            </div>
          </div>
          <div className="col-12 row">
            <div className="col-12 col-md-8 d-flex justify-content-evenly align-items-center">
              <div>
                <p style={{ fontSize: "12px", color: "#03DE73" }}>This month</p>
                <div className="d-flex justify-content-center align-items-center">
                  <GoPrimitiveDot />
                  <h5>45,600</h5>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "#03DE73" }}>
                  Previous month
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <GoPrimitiveDot color="#CFD9DF" />
                  <h5>45,600</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <ClientChart />
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
              <h5 className="">Invoices</h5>
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
            <div>
              <span className="me-2 mt-2">Export</span>
              <ArrowLineDown size={22} weight="fill" color="#F52D56" />
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
                <TableHead>
                  <TableRow style={{color:'#54617A'}}>
                    <TableCell align="left"><div className="d-flex  align-items-center">
                        <p className="my-auto" style={{color:'#54617A'}}>COMPANY NAME</p>
                        <span className="d-flex ms-2 flex-column">
                          <CaretUp size={10} weight="fill" color="#54617A" />
                          <CaretDown size={10} style={{marginTop:'-3px'}}  weight="fill" color="#54617A" />
                        </span>
                      </div></TableCell>
                    <TableCell align="center"><div className="d-flex  align-items-center">
                        <p className="my-auto" style={{color:'#54617A'}}>INVOICE TIME</p>
                        <span className="d-flex ms-2 flex-column">
                          <CaretUp size={10} weight="fill" color="#54617A" />
                          <CaretDown size={10} style={{marginTop:'-3px'}}  weight="fill" color="#54617A" />
                        </span>
                      </div></TableCell>
                    <TableCell align="center"><div className="d-flex  align-items-center">
                        <p className="my-auto" style={{color:'#54617A'}}>PRICE</p>
                        <span className="d-flex ms-2 flex-column">
                          <CaretUp size={10} weight="fill" color="#54617A" />
                          <CaretDown style={{marginTop:'-3px'}}  size={10} weight="fill" color="#54617A" />
                        </span>
                      </div></TableCell>
                    <TableCell align="center">
                      <div className="d-flex  align-items-center">
                        <p className="my-auto" style={{color:'#54617A'}}>STATUS</p>
                        <span className="d-flex ms-2 flex-column">
                          <CaretUp size={10} weight="fill" color="#54617A" />
                          <CaretDown style={{marginTop:'-3px'}} size={10} weight="fill" color="#54617A" />
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoiceTable.map((row) => {
                    const isItemSelected = isSelected(row.name);
                    return (
                        <TableRow key={row.id}>
                        <TableCell align="center" className="name">
                          <div className="d-flex align-items-center gap-2 fw-bold" style={{color:'#7A7A7A'}}>
                          {row.companyName}
                          </div>
                        </TableCell>
                        <TableCell align="center" className="slug fw-bold" style={{color:'#7A7A7A'}} >
                        {row.invoiceDate}
                        </TableCell>
                        <TableCell align="center" style={{color:'#7A7A7A'}}>
                        {row.price}
                        </TableCell>
                        <TableCell align="center" style={{color:'#7A7A7A'}}>{row.status}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <p onClick={()=>history.push('/all-invoice')} className="text-center text-decoration-underline my-3 fw-semibold cursor-pointer" style={{color:'#54617A',cursor:'pointer'}}>View All</p>
        </div>
      </div>
    </div>
  );
};

export default ClientEarning;
