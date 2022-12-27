import { Search } from "@material-ui/icons";
import React from "react";
import CategoryList from "./CategoryList";

const Category = () => {
  return (
    <div className="parent">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Client Name /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>Category</span>
        </div>
        <div className="new-user mt-4">
          <div className="d-flex gap-3 align-items-center">
            <p>Category</p>
            <button className="orange-btn">Add New</button>
          </div>
        </div>
        <div className="filter_search row mt-4 justify-content-center">
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
          <div className="col-lg-9 col-md-9 mb-3 ">
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
            <CategoryList/>
        </div>
      </div>
    </div>
  );
};

export default Category;
