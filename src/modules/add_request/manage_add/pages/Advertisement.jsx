import React from "react";

import { Search } from "@material-ui/icons";
import AdvertisementList from "./AdvertisementList";

const Advertisement = () => {
  return (
    <>
      <div className="parent text-capitalize">
        <div className="main-div">
          <div className="fw-bold">
            <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
            <span
              style={{ fontSize: "14px", color: "#818181", fontWeight: "400" }}
            >
              Advertisement
            </span>
          </div>

          <div className="new-user mt-4">
            <div className="d-flex gap-3 align-items-center">
              <p>Advertisement</p>
              <button className="orange-btn">Add New</button>
            </div>
          </div>

          <div className="filter_search row mt-4 justify-content-center flex-wrap">
            <div className=" col-md-6 mb-3 d-flex align-items-center ">
              <select name="" id="" className="me-2">
                <option value="bulk_action">Bulk action</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
              <span className="me-2">
                <button className="orange-btn" style={{ padding: "5px 20px" }}>
                  Apply
                </button>
              </span>
              {/* <div className="  d-flex align-items-center"> */}
              <span className="me-2" style={{ fontSize: "14px", width:"50%" }}>
                Sort by :{" "}
              </span>
              <select name="" id="" className="me-2">
                <option value="All">New</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>

              {/* </div> */}
            </div>

            <div className=" col-md-6 mb-3  mt-1">
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

          <div className="table_div mt-4">
            <AdvertisementList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
