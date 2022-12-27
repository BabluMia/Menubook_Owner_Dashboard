import { Switch } from "@material-ui/core";
import { FacebookLogo, InstagramLogo, ShareNetwork, WhatsappLogo } from "phosphor-react";
import React from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import qr from "../../assets/img/QRcode.jpg";
import Delete from "../Svgs/Delete";
import BrowsePhotosProfile from "./BrowsePhotosProfile";
import "./Client.css";

const Profile = () => {
  return (
    <div className="parent min-vh-100">
      <div className="main-div">
        <div className="fw-bold">
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}> Home / </span>{" "}
          <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
            {" "}
            Client Name /{" "}
          </span>{" "}
          <span style={{ fontSize: "14px", color: "#818181" }}>Profile</span>
        </div>

        <div className=" border bg-white mt-4">
          <div className="px-4 py-3 row justify-content-between align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                width={50}
                height={50}
                className="rounded-circle"
                alt=""
              />
              <h5
                className="ms-2 ms-md-4"
                style={{ fontSize: "22px", color: "#000000" }}
              >
                KFC Dhanmondi 7/A
              </h5>
            </div>
            <div className="col-md-3">
              <span style={{ color: "#7a7a7a" }}>Available</span>
              <Switch
                // checked={loading}
                // onChange={() => setLoading(!loading)}
                name="loading"
                color="primary"
              />
              <span style={{ cursor: "pointer", color: "#03438C" }}>
                <FaEdit
                  color="#03438C"
                  className="me-2"
                  style={{ fontSize: "22px" }}
                />
                Edit
              </span>
            </div>
          </div>
          <div className="px-4 py-3 row">
            <div className="col-12 my-3">
              <h6 color="#000000" style={{ fontSize: "20px" }}>
                GENERALS
              </h6>
            </div>
            <div className="col-12 col-md-9 row justify-content-between">
              <div
                className="col-12 col-md-6 col-lg-4"
                style={{ color: "#BBBBBB" }}
              >
                <p>Company Name:</p>
                <p style={{ marginTop: "-7px" }}>Mr. Abdul Goni Chowdhuri</p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p style={{ color: "#000000" }}>Company Address:</p>
                <p style={{ color: "#BBBBBB", marginTop: "-7px" }}>Full Time</p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p style={{ color: "#000000" }}>Select Country</p>
                <p style={{ color: "#BBBBBB", marginTop: "-7px" }}>
                  Bangladesh
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p style={{ color: "#000000" }}>Company category:</p>
                <p style={{ color: "#BBBBBB", marginTop: "-7px" }}>
                  1000 /Month
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p style={{ color: "#000000" }}>Work Phone Number:</p>
                <p style={{ color: "#BBBBBB", marginTop: "-7px" }}>12345678</p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p style={{ color: "#000000" }}>Email Address:</p>
                <p style={{ color: "#BBBBBB", marginTop: "-7px" }}>
                  example@gmail.com
                </p>
              </div>
            </div>
            <div className="col-10 col-md-3">
              <p>About:</p>
              <p style={{ color: "#BBBBBB", fontSize: "13px" }}>
                Hi! My name is Harry and I’m a professional 3d artist with over
                a decade of experience. I’ve worked most recently as the Studio
                Director of an award winning architectural visualization studio.
                In this class, I’ll walk you through the simple and beginner
                friendly process of creating a Vaporwave style animation in
                Blender.
              </p>
            </div>
          </div>
          <hr />
          <BrowsePhotosProfile title="Change or upload Cover Photos:" />
          <BrowsePhotosProfile title="Change or upload Menu Photos:" />
          <BrowsePhotosProfile title="Gallery" />
        </div>

        <div className="row mt-4">
          <div className="col-12 mt-3 ">
            <p
              className="fw-bold ms-3"
              style={{ color: "#515151", fontSize: "15px" }}
            >
              Your QR Code:
            </p>
          </div>
          <div className="col-12 mb-2">
            <img src={qr} alt="" />
          </div>
          <div className="col-12 d-flex align-items-center">
            <p className="my-auto" style={{color:'#7A7A7A',fontSize:'15px'}}>Share :</p>
            <div className="d-flex gap-2 align-items-center ms-2 ">
            <ShareNetwork cursor={'pointer'} size={30} weight="bold" />
            <FacebookLogo cursor={'pointer'} size={30} weight="fill" />
            <InstagramLogo cursor={'pointer'} size={30} weight="light" />
            <WhatsappLogo cursor={'pointer'} size={32} weight="light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
