import React from "react";
import "./Settings.css";
import user1 from "../../assets/img/user1.jpg";
import UploadImage from "./UploadImage";

const General = () => {
  return (
    <div className="parent">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Seetings /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>General</span>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Your company's name*</p>
            <input type="text" placeholder="Menubook BD" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Your company Address*</p>
            <input type="text" placeholder="Menubook BD" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Administration Email Address</p>
            <input type="text" placeholder="Menubook@gmail.com" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>New User Default Role</p>
            <div style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Customer
                </option>
                <option value={2}>Owner</option>
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
        
        {/*logo image */}
        <UploadImage title='Choose a logo file:' />
        {/*fabicon */}
        <UploadImage title='Choose a fav icon:' />
        <div>
            <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default General;
