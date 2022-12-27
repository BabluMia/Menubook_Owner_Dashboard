import { Divider } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import SingleBrowseFile from "../../Clients/SingleBrowseFile";
import ArrowSvg from "../../Common/ArrowSvg";
import "./Notification.css";

const PushNotification = () => {
  const history = useHistory()
  return (
    <div className="parent">
      <div className="main-div">
        <div className="row input-title" style={{ marginTop: "20px" }}>
          <div className="col-11  input-head">
            <p className="server-title">Server Key:</p>
          </div>
          <div className="col-11 col-md-6 input-head">
            <input type="text" placeholder="Menubook BD" />
          </div>
          <div className="col-11 col-md-4 my-2 my-md-0 server">
            <button className="btn-save">Save</button>
          </div>
        </div>

        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p className="server-title">Notification Name:</p>
            <input className="mt-4" type="text" placeholder="Menubook BD" />
          </div>
        </div>

        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-6 input-head">
            <p className="server-title mb-3">Main settings</p>
            <span style={{ fontSize: "15px", color: "#515151" }}>
              Select Traffic:
            </span>{" "}
            <span
              className="ms-2"
              style={{ fontSize: "13px", color: "#A1A1A1" }}
            >
              Select the resource to which you want to send a push notification.
            </span>
            <div className="mt-3" style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Customer
                </option>
                <option value={2}>Owner</option>
                <option value={3}>Shop</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "20px" }}>
          <div className="col-11 col-md-6 input-head">
            <span style={{ fontSize: "15px", color: "#515151" }}>
              Target URL:
            </span>{" "}
            <span
              className="ms-2"
              style={{ fontSize: "13px", color: "#A1A1A1" }}
            >
              Select the resource to which you want to send a push notification.
            </span>
            <input className="mt-4" type="text" placeholder="https//:" />
          </div>
        </div>

        <div className="row input-title" style={{ marginTop: "30px" }}>
          <div className="col-11 col-md-6 input-head">
            <p className="server-title">Push Notification</p>
            <span
              className="mt-4 mb-3"
              style={{ fontSize: "15px", color: "#515151" }}
            >
              Title:
            </span>
            <input className="mt-4" type="text" placeholder="Menubook BD" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "20px" }}>
          <div className="col-11 col-md-6 input-head">
            <span
              className="mt-4 mb-3"
              style={{ fontSize: "15px", color: "#515151" }}
            >
              Description:
            </span>
            <input className="mt-4" type="textarea" placeholder="Menubook BD" />
          </div>
        </div>
        {/* image */}
        <SingleBrowseFile title="Push Image" />
        {/* image */}
        <div className="row input-title" style={{ marginTop: "35px" }}>
          <div className="col-11 col-md-6 input-head">
            <p className="server-title mb-3">Targeting</p>
            <span style={{ fontSize: "15px", color: "#515151" }}>City:</span>
            <div className="mt-3" style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Dhaka
                </option>
                <option value={2}>Sylhet</option>
                <option value={3}>Khulna</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
        {/* platform */}
        <div className="row input-title" style={{ marginTop: "20px" }}>
          <div className="col-11 col-md-6 input-head">
            <span style={{ fontSize: "15px", color: "#515151" }}>
              Platform:
            </span>
            <div className="mt-4" style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Customer
                </option>
                <option value={2}>Owner</option>
                <option value={3}>Shop</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
        {/* platform */}
        {/* os */}
        <div className="row input-title" style={{ marginTop: "20px" }}>
          <div className="col-11 col-md-6 input-head">
            <span style={{ fontSize: "15px", color: "#515151" }}>OS:</span>
            <div className="mt-4" style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Customer
                </option>
                <option value={2}>Owner</option>
                <option value={3}>Shop</option>
              </select>
              <div className="arrow-icon">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
        {/* os */}
        {/* Last activity */}
        <div className="row input-title" style={{ marginTop: "20px" }}>
          <div className="col-11 col-md-6 input-head">
            <span style={{ fontSize: "15px", color: "#515151" }}>
              Last Activity:
            </span>
            <div className="mt-4 row mx-2 justify-content-between mx-md-0">
              <div className="col-md-5 col-12 time-to-date">
                <input type="time" />
                <div className="divider">
                  <div></div>
                </div>
                <input type="date" name="" id="" />
              </div>
              <div className="col-md-1 my-3 my-md-auto text-center">To</div>
              <div className="col-md-5 col-12 time-to-date">
                <input type="time" />
                <div className="divider">
                  <div></div>
                </div>
                <input type="date" name="" id="" />
              </div>
            </div>
          </div>
        </div>
        {/* Last activity */}
        {/* Sending settings */}
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p className="server-title mb-3">Sending settings</p>

            <div className="mt-4 row  justify-content-between  time-notification" >
              <div className="col-md-5 col-12">
                <span style={{ fontSize: "15px", color: "#515151" }}>
                  Sending date and time:
                </span>
                <div className=" time-to-date w-100 px-2 mt-4">
                  <input type="time" />
                  <div className="divider">
                    <div></div>
                  </div>
                  <input type="date" name="" id="" />
                </div>
              </div>

              <div className="col-md-5 col-12 ">
                <span style={{ fontSize: "15px", color: "#515151" }}>
                  Sending date and time:
                </span>
                <div>
                  <div className="mt-4" style={{ position: "relative" }}>
                    <select id="inputState" className="form-select ">
                      <option selected value={1}>
                        Same time
                      </option>
                      <option value={2}>Day</option>
                      <option value={3}>Other</option>
                    </select>
                    <div className="arrow-icon">
                      <ArrowSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sending settings */}
        <div className="mt-4 ">
            <button className="done-btn" onClick={()=>history.push('/notification')}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
