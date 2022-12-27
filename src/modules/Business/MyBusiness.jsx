import React from "react";
import bCss from "./Buisness.module.css";
import { BsHandbag } from "react-icons/bs";
import { MdShowChart } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";

const MyBusiness = () => {
  const history = useHistory();
  return (
    <>
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
          className={`row gx-4 my-4 justify-content-between ${bCss.client_box} `}
        >
          <div
            className={`col-lg-7 col-12 col-md-6 row gx-lg-3  gx-0 my-2 text-center  ${bCss.white}`}
          >
            <Link to={"/addClients"}>Add Client to View the Data</Link>
          </div>
          <div className={`col-lg-5 col-md-6  col-12 my-2 ${bCss.white}`}>
            <Link to={"/my_business_data"}>Add Client to View the Data</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBusiness;
