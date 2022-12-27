import { Search } from "@material-ui/icons";
import React from "react";
import ProductList from "./ProductList";

const ClientProducts = () => {
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

        <div className="new-user mt-4">
          <div className="d-flex gap-3 align-items-center">
            <p>Products</p>
            <button className="orange-btn">Add New</button>
            <button className="orange-btn">Import</button>
            <button className="orange-btn">Export</button>
          </div>
        </div>
        <div className="filter_search row mt-4 ">
          <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-start">
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
          <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-center">
            <span className="me-2" style={{ fontSize: "14px" }}>
              Sort by :{" "}
            </span>
            <select name="" id="" className="me-2" style={{width:'220px'}}>
              <option value="bulk_action">Bulk action</option>
              <option value="Food">Food</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-center">
            <span className="me-2"  style={{ fontSize: "14px",minWidth:'30px' }}>
              Filter by :{" "}
            </span>
            <select name="" id="" className="me-2" style={{width:'200px'}}>
              <option value="bulk_action">Bulk action</option>
              <option value="Food">Food</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className=" col-lg-3 col-md-6 mb-3 d-flex align-items-end">
              <span className="search">
                <Search className="search_icon" />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search "
                />
              </span>
            </div>
        </div>

        <div className="table_div mt-4">
            <ProductList/>
        </div>
      </div>
    </div>
  );
};

export default ClientProducts;
