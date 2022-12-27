// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import user1 from "../../../../assets/img/user1.jpg";

import Select from "react-select";
import Button from "@mui/material/Button";
import "./Add.css";
import { FaEye } from "react-icons/fa";
const AddNewAdvertisement = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div>
          <h4
            className="text-center text-capitalize"
            style={{ color: "#515151" }}
          >
            Advertisement
          </h4>
        </div>

        <div className="mx-4 ">
          <div className="inputs-modal my-3">
            <p>Add Name</p>
            <p>Ad Name given</p>
            {/* <input type="text" /> */}
          </div>
          <div className="inputs-modal my-3">
            <p>Select terget client (Restaurent or services)</p>
            <Select options={options} placeholder="KFC Dhanmondi 7/A" />
          </div>
          <div className="inputs-modal my-3">
            <p>Placement</p>
            <Select options={options} placeholder="KFC Dhanmondi 7/A" />
          </div>
          <div className="inputs-modal my-3">
            <p>Select Day:</p>
            <Select options={options} placeholder="KFC Dhanmondi 7/A" />
          </div>
          <div className="inputs-modal my-3">
            <p>Banner Image:</p>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="preview_img">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="col-11 col-md-9 row justify-content-between ">
                      <div className="col-10 col-md-6 my-2 my-md-0">
                        <div
                          className="d-flex align-items-center  px-2"
                          style={{ position: "relative" }}
                        >
                          <img src={user1} height={36} alt="" />
                          <div
                            className="ms-2 mt-2"
                            style={{ color: "#979FB8" }}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                marginTop: "10px",
                                fontWeight: "500",
                              }}
                            >
                              Tungchivo-avatar.png
                            </p>
                            <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                              424KB
                            </p>
                          </div>
                          <div className="ms-2" style={{ marginTop: "-34px" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="#000000"
                              viewBox="0 0 256 256"
                            >
                              <rect width="256" height="256" fill="none"></rect>
                              <circle
                                cx="128"
                                cy="128"
                                r="96"
                                fill="none"
                                stroke="#000000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></circle>
                              <line
                                x1="160"
                                y1="96"
                                x2="96"
                                y2="160"
                                fill="none"
                                stroke="#000000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                              <line
                                x1="160"
                                y1="160"
                                x2="96"
                                y2="96"
                                fill="none"
                                stroke="#000000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="24"
                              ></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="view_icon">
                      < FaEye/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Button
                  variant="contained"
                  component="label"
                  style={{
                    background: "#EF5B0C",
                    borderRadius: "12px",
                    padding: "15px 25px",
                    fontSize: "12px",
                  }}
                >
                  Browse File
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </div>
            </div>
          </div>

         
          
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-end gap-3">
          <button className="yellow-btn">Draft</button>
          <button className="green-btn">Published</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewAdvertisement;
