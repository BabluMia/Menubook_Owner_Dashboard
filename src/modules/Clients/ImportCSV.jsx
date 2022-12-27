import React from "react";
import "./Client.css";

const ImportCSV = () => {
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
          <h5 className="product-heading">Import Products</h5>
        </div>
        <div className=" border bg-white">
          <div className="px-4 py-3">
            <div className="my-3">
              <h2 className="main-title">Import products as a CSV file</h2>
            </div>
            <div>
              <p className="sub-title">
                This tool allows you to export product data to your store from a
                CSV or TXT file.
              </p>
            </div>
          </div>
          {/* upper */}
          <div className="row px-2 px-md-4 mb-4">
            <div className="col-md-8 col-12 row">
              <div className="col-12 col-md-7 select-text">
                <p>
                  Choose a CSV file from your <br /> computer:
                </p>
              </div>
              <div className="col-12 col-md-5 ">
                <div className="csv">
                  <div className="d-flex align-items-center">
                    <div className="logo-file">
                      <p>Choose File</p>
                      <input type="file" accept=".csv" name="images" id="" />
                    </div>

                    <span className="ms-3">No file chosen</span>
                  </div>
                  <p className="mt-3">Maximum Size: 20 MB</p>
                </div>
              </div>
            </div>
          </div>
          {/* upper */}
          {/* middle */}
          <div className="row px-2 px-md-4 mb-4">
            <div className="col-md-8 col-12 row">
              <div className="col-12 col-md-7 select-text">
                <p>
                Update existing products
                </p>
              </div>
              <div className="col-12 col-md-5 import-csv">
                <input type="checkbox" name="" id="" /> 
                <span className="ms-2">Existing products that match by ID or SKU will be updated. Products that do not exist will be skipped.</span>
              </div>
            </div>
          </div>
          {/* middle */}
          {/* select */}
          <div className="row px-2 px-md-4 mb-4">
            <div className="col-md-8 col-12 row">
              <div className="col-12 col-md-7 select-text">
                <p>
                  Import all/selected <br /> branches:
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
          {/* select */}
          <hr />
          <div className="row m-4">
            <div className="col my-2 my-md-4 d-flex justify-content-md-end justify-content-center">
              <button className="export-btn">Import</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportCSV;
