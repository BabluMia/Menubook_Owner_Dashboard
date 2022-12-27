import React from "react";
import "./Settings.css";

const SettingsBusiness = () => {
  return (
    <div className="parent" style={{minHeight:'100vh'}}>
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Seetings /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>Business</span>
        </div>
        {/* business category */}
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-7 input-head">
            <p>Add Business Category:</p>
            <div className="row">
              <div className="col-7">
                <input type="text" placeholder="Category Name" />
              </div>
              <div className="col-3 category-add">
                <button className="add">Add</button>
              </div>
            </div>
          </div>
        </div>
        {/* business category */}
        {/* category table */}
        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div
            className="col-11 col-md-5 border  category-tab"
            style={{ color: "#A1A1A1", fontSize: "15px", borderRadius: "12px" }}
          >
            <div className="d-flex justify-content-between align-items-center px-3 pt-3">
              <div className="">
                <p>Category Name</p>
              </div>
              <div className="">
                <p>Action</p>
              </div>
            </div>

            <div
              className="d-flex div justify-content-between bg-white align-items-center  px-3 pt-3"
              style={{ marginLeft: "-11px", marginRight: "-11px" }}
            >
              <div className="ps-2">
                <p>Restaurant</p>
              </div>
              <div className="pe-4 pb-3" style={{ cursor: "pointer" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
              </div>
            </div>
            <div
              className="d-flex div justify-content-between bg-white align-items-center  px-3 pt-3"
              style={{ marginLeft: "-11px", marginRight: "-11px" }}
            >
              <div className="ps-2">
                <p>Restaurant</p>
              </div>
              <div className="pe-4 pb-3" style={{ cursor: "pointer" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* category table */}
        {/* Client Billing Type Dropdown: */}
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-7 input-head">
            <p>Add Business Category:</p>
          </div>
          <div className="row input-title" style={{ marginTop: "25px" }}>
            <div
              className="col-11 col-md-5 border  category-tab"
              style={{
                color: "#A1A1A1",
                fontSize: "15px",
                borderRadius: "12px",
              }}
            >
              <div className="d-flex justify-content-between align-items-center px-3 pt-3">
                <div className="">
                  <p>Category Name</p>
                </div>
                <div className="">
                  <p>Select</p>
                </div>
              </div>

              <div
                className="d-flex div justify-content-between bg-white align-items-center  px-3 pt-3"
                style={{ marginLeft: "-11px", marginRight: "-11px" }}
              >
                <div className="ps-2">
                  <p>Monthly</p>
                </div>
                <div className="pe-4 pb-3" style={{ cursor: "pointer" }}>
                <input type="checkbox" name="" id="" />
                </div>
              </div>
              <div
                className="d-flex div justify-content-between bg-white align-items-center  px-3 pt-3"
                style={{ marginLeft: "-11px", marginRight: "-11px" }}
              >
                <div className="ps-2">
                  <p>Yearly</p>
                </div>
                <div className="pe-4 pb-3" style={{ cursor: "pointer" }}>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Billing Type Dropdown: */}
        <div className="mt-3">
            <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsBusiness;
