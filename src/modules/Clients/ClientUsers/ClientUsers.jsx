import React from "react";
import { Search } from "@material-ui/icons";
import ClientUserList from "./ClientUserList";
const ClientUsers = () => {
  return (
    <>
      <div className="parent text-capitalize">
        <div className="main-div">
          <div className="fw-bold">
            <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
            <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
              Client Name /
            </span>{" "}
            <span
              style={{ fontSize: "14px", color: "#818181", fontWeight: "400" }}
            >
              Users
            </span>
          </div>
          <div className="new-user mt-4">
            <div className="d-flex gap-3 align-items-center">
              <p>User</p>
              <button className="orange-btn">Add New</button>
            </div>
          </div>
          <div className="count mt-4">
            <p>
              <span style={{ color: "#EF5B0C", fontWeight: "bold" }}>
                All (12)
              </span>{" "}
              <span style={{ color: "#7A7A7A", fontWeight: "bold" }}>
                | Admin (30) |{" "}
              </span>{" "}
              <span
                style={{ color: "#7A7A7A", fontWeight: "bold", opacity: ".44" }}
              >
                Customer (2343245)
              </span>
            </p>
          </div>
          <div className="filter_search row mt-4 justify-content-center">
            <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-center">
              {/* <span className="me-2" style={{ fontSize: "14px" }}>
                Business Type :{" "}
              </span> */}
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
            <div className="col-lg-4 col-md-6 mb-3 d-flex align-items-center">
              <span className="me-2" style={{ fontSize: "14px", width:"70%" }}>
                Sort by :{" "}
              </span>
              <select name="" id="" className="me-2">
                <option value="All">New</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
              <select name="" id="" className="me-2">
                <option value="All">All Category</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
            </div>
            <div className="col-lg-2 col-md-6 mb-3 d-flex align-items-center">
              <span className="me-2" style={{ fontSize: "14px" , width:"70%"}}>
                Filter by :{" "}
              </span>
              <select name="" id="" className="me-2">
                <option value="All">New</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
            </div>
            <div className="col-lg-3 col-md-6 mb-3 ">
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
            <ClientUserList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientUsers;
