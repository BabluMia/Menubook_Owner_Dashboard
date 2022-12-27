import { Search } from "@material-ui/icons";
import React from "react";
import ClientAdvertisementList from "./ClientAdvertisementList";

const ClientAdvertisement = () => {
  return (
    <div className="parent text-capitalize">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Client Name /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>
            Advertisement
          </span>
        </div>
        <div className="new-user mt-4">
          <div className="d-flex gap-3 align-items-center">
            <p>Advertisement</p>
            <button className="orange-btn">Add New</button>
          </div>
        </div>
        <div className="filter_search  mt-4 row">
          <div className=" col-12 col-md-8 col-lg-3 mb-3 d-flex align-items-center my-1 my-md-0">
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
          </div>

          <div className="mb-3 d-flex c col-12 col-md-8 col-lg-3 my-1 my-md-0">
            <span
              className="me-2 my-auto"
              style={{ fontSize: "14px", minWidth: "60px" }}
            >
              Sort by :{" "}
            </span>
            <select name="" id="" className="me-2">
              <option value="All">New</option>
              <option value="Food">Food</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className=" mb-3 col-12 col-md-8 col-lg-6 my-1 my-md-0">
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
            <ClientAdvertisementList/>
        </div>
      </div>
    </div>
  );
};

export default ClientAdvertisement;
