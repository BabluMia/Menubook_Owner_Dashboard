import React from "react";
import "./Client.css";
import CreatableSelect from "react-select/creatable";
import { Divider } from "@material-ui/core";
import { useState } from "react";
import AddressModal from "./Invoice/AddressModal";

const Details1 = ({ value }) => {
  const resturrentOption = [
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
  ];
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="parent">
        <div className="main-div">
          <div className="fw-bold">
            <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
            <span style={{ fontSize: "14px", color: "#818181" }}>
              Add New Client
            </span>
          </div>
          <div className="row input-title" style={{ marginTop: "40px" }}>
            <div className="col-11 col-md-6 input-head">
              <p>Your company's name*</p>
              <input type="text" placeholder="Menubook BD" />
            </div>
          </div>
          <div className="row input-title" style={{ marginTop: "25px" }}>
            <div className="col-11 col-md-6 input-head">
              <p>Your company Address*</p>
              <input type="text" placeholder="17LA, NY" />
            </div>
          </div>
          <div className="row input-title" style={{ marginTop: "25px" }}>
            <div className="col-11 col-md-6 input-head">
              <p>Add Google Map Location*</p>
              <div onClick={() => setModalShow(true)}>
              <input type="text" placeholder="17LA, NY" />
              </div>
            </div>
          </div>
          <div className="row input-title" style={{ marginTop: "25px" }}>
            <div className="col-11 col-md-6 input-head">
              <p>Your company Website</p>
              <input type="text" placeholder="www.menubookBD.com" />
            </div>
          </div>
          <div className="row input-title" style={{ marginTop: "25px" }}>
            <div className="col-11 col-md-6 input-head">
              <p>Your Service Type*</p>
              <div style={{ position: "relative" }}>
                <select id="inputState" className="form-select ">
                  <option selected value={1}>
                    Resturent
                  </option>
                  <option value={2}>Food Cart</option>
                  <option value={3}>Shop</option>
                </select>
                <div className="arrow-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 256 256"
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
          <div className="row input-title" style={{ marginTop: "25px" }}>
            <div className="col-11 col-md-6 input-head">
              <p>Your company Category*</p>
              <div style={{ position: "relative" }}>
                <select id="inputState" className="form-select ">
                  <option selected value={1}>
                    Resturent
                  </option>
                  <option value={2}>Food Cart</option>
                  <option value={3}>Shop</option>
                </select>
                <div className="arrow-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 256 256"
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
          <div className="row input-title" style={{ marginTop: "25px" }}>
            <div className="col-11 col-md-6 input-head2">
              <p>Your Restaurant Type*</p>
              <CreatableSelect
                isClearable={true}
                defaultValue={resturrentOption[0]}
                isMulti
                options={resturrentOption}
              />
            </div>
          </div>

          <div
            className="d-flex align-item-center  input-title"
            style={{ marginTop: "25px" }}
          >
            <p>Do you have multiple branch?</p>
            <input className="mx-2" type="checkbox" />
            <p>Yes</p>
          </div>
          <div className="row input-title" style={{ marginTop: "15px" }}>
            <div className="col-11 col-md-6 input-head">
              <div style={{ position: "relative" }}>
                <select id="inputState" className="form-select ">
                  <option selected value={1}>
                    Resturent
                  </option>
                  <option value={2}>Food Cart</option>
                  <option value={3}>Shop</option>
                </select>
                <div className="arrow-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
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
          <div className="row input-title" style={{ marginTop: "15px" }}>
            <div className="col-12 col-md-6 row input-head2">
              <div className="col-12">
                <p>Opening Time:</p>
              </div>
              <div className="col-12 col-md-7 justify-md-between ms-2 bg-white" style={{border:'1px solid  #C2C2C2',borderRadius:'12px'}}>
                <div className="d-flex time justify-content-center align-items-center" >
                  <input type="text" placeholder="12:10 PM" />
                  <Divider color='dark' bgcolor= 'dark' orientation="vertical" variant="middle" flexItem />
                  <input type="text" placeholder="12:20 PM" />
                </div>
              </div>
              <div className="col-12 col-md-3 ms-0 ms-md-4 mt-2 mt-md-0">
                <button onClick={() => value("2")} className="next-btn ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <AddressModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default Details1;
