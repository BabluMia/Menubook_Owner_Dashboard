import { Divider } from "@material-ui/core";
import React from "react";

const Details2 = ({ value }) => {
  return (
    <div className="parent">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Add New Client /
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>
            Client Name
          </span>
        </div>

        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Email Address*</p>
            <input type="text" placeholder="example@gmail.com" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Crate a password*</p>
            <input type="text" placeholder="******" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Phone Number</p>
            <input type="text" placeholder="+880179480985" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-12 col-md-6 row input-head2">
            <div className="col-12">
              <p>Payment Amount</p>
            </div>
            <div
              className="ms-2"
              style={{
                border: "1px solid  #C2C2C2",
                borderRadius: "12px",
                background: "white",
              }}
            >
              <div className="row monthly">
                <div className="col-7">
                  <input type="text" placeholder="4500" />
                </div>

                <div className="col-1">
                  <Divider
                    
                    color="dark"
                    bgcolor="dark"
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                </div>
                <div className="col-4">
                  <div style={{ position: "relative" }}>
                    <select id="inputState" className="form-select ">
                      <option selected value={1}>
                        Daily
                      </option>
                      <option value={2}>Monthly</option>
                      <option value={3}>Weekly</option>
                    </select>
                    <div className="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 256 256"
                        stroke="currentColor"
                      >
                        <rect width="20" height="20" fill="none"></rect>
                        <polyline
                          points="208 96 128 176 48 96"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" justify-content-start"
          style={{ marginTop: "25px" }}
        >
          
            <button onClick={() => value("1")} className="back-btn me-3">
              back
            </button>
            <button onClick={() => value("3")} className="next-btn ">
              Next
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default Details2;
