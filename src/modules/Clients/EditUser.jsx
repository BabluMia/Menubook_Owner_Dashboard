import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import ArrowSvg from "../Common/ArrowSvg";
import SingleBrowseFile from "./SingleBrowseFile";

const EditUser = () => {
  return (
    <div className="parent">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Client Name /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>Edit User</span>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>User name</p>
            <input type="text" placeholder="user@123" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-6 input-head">
            <p> Role</p>
            <div style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Customer
                </option>
                <option value={2}>Owner</option>
                <option value={3}>Shop</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg/>
              </div>
            </div>
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-6 input-head">
            
            <div className="d-flex justify-content-between align-items-center mb-3" style={{flexWrap:'wrap '}}>
            <p className="my-2 my-md-0">Varification Status</p>
            <div style={{color:"#FF0000"}}>
                <span>
                <AiFillExclamationCircle  />
                </span>
                <span className="ms-2 fw-bold">
                Requested for verification
                </span>
            </div>
            </div>
            <div style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Varified
                </option>
                <option value={2}>Owner</option>
                <option value={3}>Shop</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg/>
              </div>
            </div>
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Full Name</p>
            <input type="text" placeholder="Shafin Ahmed" />
          </div>
        </div>
        <SingleBrowseFile title={'Profile Picture '}/>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Address Line 1</p>
            <input type="text" placeholder="Dhaka" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Address Line 2</p>
            <input type="text" placeholder="Sylhet" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-6 input-head">
            <p> Country</p>
            <div style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  India
                </option>
                <option value={2}>Uk</option>
                <option value={3}>USA</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg/>
              </div>
            </div>
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>District</p>
            <div style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Dhaka
                </option>
                <option value={2}>Sylhet</option>
                <option value={3}>Khulna</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg/>
              </div>
            </div>
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Phone</p>
            <input type="text" placeholder="123456" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Email</p>
            <input type="text" placeholder="example@gmail.com" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head d-flex align-items-center">
            <p className="my-auto me-3">Password:</p>
            <button className="reset-btn px-4 py-2 rounded-2 " style={{color:'#EF5B0C',border:'1px solid #EF5B0C'}}>Sent Reset Link</button>
          </div>
        </div>
        <div className="my-4">
            <button className="save-btn">Update User</button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
