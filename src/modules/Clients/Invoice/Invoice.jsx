import { Search } from "@material-ui/icons";
import { ArrowLineDown } from "phosphor-react";
import React from "react";
import bCss from "../../Business/Buisness.module.css";
import InvoiceList from "./InvoiceList";

const Invoice = () => {
  return (
    <div className="parent ">
      <div className="main-div">
        <div
          className={`row d-flex justify-content-lg-end justify-content-start  ${bCss.upper_select} `}
        >
          <div
            className={`col-12 col-md-8 col-lg-10 row d-flex justify-content-end align-items-center   ${bCss.main_text}`}
          >
            <div className={` col-12 col-md-12 col-lg-3  ${bCss.first}`}>
              <span className="me-0 me-md-2" style={{ fontSize: "14px" }}>
                Business Type :{" "}
              </span>
              <select name="" id="">
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
            </div>
            <div className={` col-12 col-md-12 col-lg-3  ${bCss.first}`}>
              <span className="me-0 me-md-2" style={{ fontSize: "14px" }}>
                Payment :{" "}
              </span>
              <select name="" id="">
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
            </div>
            <div
              className={`col-12 col-md-10 col-lg-6 mt-2 justify-content-end  ${bCss.second}`}
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
        <div
          className="row mt-4 rounded-2 bg-white"
          style={{ minHeight: "400px" }}
        >
          <div className="col-12">
            <div
              className="row my-3 mx-2"
              
            >
              <div className="col-5 col-md-3">
                <h5 className="">Invoices</h5>
              </div>
              <div className="col-12 col-md-7 my-2 my-md-0">
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
              <div className="col-5 col-md-2 d-flex justify-content-md-end align-items-center justify-content-start">
                <span className="me-2 mt-2">Export</span>
                <ArrowLineDown size={22} weight="fill" color="#F52D56" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <InvoiceList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
