import React from "react";
import user1 from "../../assets/img/user1.jpg";
import BrowseFile from "./BrowseFile";
const Details3 = ({ value }) => {
  return (
    <div className="parent " style={{minHeight:'100vh'}}>
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
            <p>About your business*</p>
            <input
              type="textarea"
              placeholder="A short description of your business goes here,"
            />
          </div>
        </div>
        
        {/* menu photo */}
        <BrowseFile title="Menu" />
        {/* menu photo */}

        {/* Cover Photo */}
        <BrowseFile title="Cover Photo" />
        {/* Cover Photo */}

        <div className="row mt-4">
          <div className="col-11 col-md-6 d-flex align-items-center row">
            <div className="col-12 col-md-6 condition d-flex align-align-items-center">
            <input className="mx-2" type="checkbox" />
            <span className="">I agree to terms and conditions</span>
            </div>
            <div
              className=" d-flex justify-content-end ms-4 ms-md-0 col-12 col-md-6 my-2 my-md-0"
              // style={{ marginTop: "25px" }}
            >
              <button onClick={() => value("2")} className="back-btn me-3" >
                back
              </button>
              <button className="next-btn ">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details3;
