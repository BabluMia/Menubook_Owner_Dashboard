import React from "react";
import { Link } from "react-router-dom";

import cover from "./img/cover.png";
import profile from "./img/profile.png";
import "./css/user.css";
const UserInfo = ({ label, info, button }) => {
  return (
    <>
      <div className="row mb-4 user_view_info_P p-0">
        <div className="col-3 p-0">{label}</div>

        {button ? (
          <button className="user_view_button">{button}</button>
        ) : (
          <div className="col-9 p-0">{info}</div>
        )}
      </div>
    </>
  );
};
const ViewUser = () => {
  return (
    <div className="side_components_container">
      <div className="row p-4">
        <div className="col-lg-5 col-sm-12 col-xs-12 mb-4 ">
          <div className="user_view_image p-0">
            <div className="card ">
              <img className="card-img-top" src={cover} alt="" />

              <div className="user_name_info d-flex justify-content-center flex-column">
                <img className="user_name_info_img " src={profile} alt="" />
                <h5 className="user_name_info_name">Mr. Taskin Kabir Evan</h5>
                <Link className="user_name_info_role">Manager</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-sm-12 col-xs-12   ">
          <div className=" user_view_contents p-4">
            <h5 className="user_view_head ">Personal Details</h5>
            <div className="line_user_view mb-4 mt-3"></div>
            <UserInfo label="Email Address" info=": abc@gmail.com" />
            <UserInfo label="Phone Number" info=": +8801600000012" />
            <UserInfo label="Date of Birth" info=": 26 September, 1994" />
            <UserInfo label="Gender" info=": Male" />
            <UserInfo label="Blood Group" info=": AB+" />
            <UserInfo
              label="Address"
              info=": 104 No. West Jurairn, Faridabad, Shayampur, Dhaka-1204"
            />
            <UserInfo label="Account Status" button="Active" />
            <UserInfo label="Joining Date" info=": May 7, 2022, 10:34 pm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
