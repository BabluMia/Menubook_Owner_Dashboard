import React from "react";
import "./Client.css";

const ExportCSV = () => {
  return (
    <div className="parent min-vh-100">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Client Name /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>Products</span>
        </div>
        <div className="my-3 my-md-4">
          <h5 className="product-heading">Export Products</h5>
        </div>
        <div className=" border bg-white">
          <div className="px-4 py-3">
            <div className="my-3">
              <h2 className="main-title">Export products as a CSV file</h2>
            </div>
            <div>
              <p className="sub-title">
                This tool allows you to export product data to your store from a
                CSV or TXT file.
              </p>
            </div>
          </div>
          <div className="row px-2 px-md-4 mb-4">
            <div className="col-md-8 col-12 row">
              <div className="col-12 col-md-7 select-text">
                <p>
                  Export Products from <br /> all/selected branches:
                </p>
              </div>
              <div className="col-12 col-md-5 ">
                <div className="csv">
                  <select id="inputState" className="form-select ">
                    <option selected value={1}>
                    Dhanmondi 7/A
                    </option>
                    <option value={2}>Mirur 7/A</option>
                    <option value={3}>Gulshan 7/A</option>
                  </select>
                  
                </div>
              </div>
              
            </div>
          </div>
          <hr />
          <div className="row m-4" >
            <div className="col my-2 my-md-4 d-flex justify-content-md-end justify-content-center">
                <button className="export-btn">Export</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportCSV;
