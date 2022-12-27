import React from "react";
import { useState } from "react";
import Save from "../Common/Save";
import Bar from "../Svgs/Bar";
import AddMenu from "./AddMenu";
import "./Settings.css";

const SettingsWebsite = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="parent min-vh-100">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Seetings /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>Website</span>
        </div>
        {/* content */}
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Site Title</p>
            <input type="text" placeholder="www.menubook.com" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Tagline</p>
            <input type="text" placeholder="Kader Food Co." />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Meta Description:</p>
            <input type="textarea" placeholder="Kader Food Co." />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head d-flex align-items-center">
            <p className="pt-2">Menu:</p>
            <button className="add-new ms-4" onClick={() => setModalShow(true)}>Add New</button>
          </div>
        </div>
        {/* table */}
        <div className=" input-title " style={{ marginTop: "25px" }}>
          <div className="col-12 col-md-8 "
          style={{ overflowX: "auto",display:'block'}}>
            {/* <div style={{ overflowX: "auto"}}> */}
            <table
              className="website-table bg-white"
              style={{
                border: "1px solid #D8D8D8",
                minWidth:'900px'
              }}
            >
              <thead className=" text-center " style={{ height: "50px", }}>
                <tr >
                  <th style={{borderTopLeftRadius: "16px "}}>Name</th>
                  <th >Slug</th>
                  <th >Sorting</th>
                  <th style={{borderTopRightRadius: "16px "}}>Move Position</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className=" text-center website"
                  style={{ height: "50px", borderTop: "1px solid #D8D8D8" }}
                >
                  <td className="name">Grand Offer</td>
                  <td className="slug">Grand Offer</td>
                  <td className="select">
                    <select name="" id="">
                        <option value="1">Open</option>
                        <option value="2">Close</option>
                        <option value="3">Reported</option>
                    </select>
                  </td>
                  <td style={{ cursor: "pointer" }}>
                    <Bar />
                  </td>
                </tr>
                <tr
                  className=" text-center website"
                  style={{ height: "50px", borderTop: "1px solid #D8D8D8" }}
                >
                  <td className="name">Grand Offer</td>
                  <td className="slug">Grand Offer</td>
                  <td className="select">
                    <select name="" id="">
                        <option value="1">Open</option>
                        <option value="2">Close</option>
                        <option value="3">Reported</option>
                    </select>
                  </td>
                  <td style={{ cursor: "pointer" }}>
                    <Bar />
                  </td>
                </tr>
                
              </tbody>
            </table>
            {/* </div> */}
          </div>
        </div>
        {/* save */}
        <div className="mt-3">
         <Save/>   
        </div>
        <AddMenu show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export default SettingsWebsite;
