import React from "react";
import { useState } from "react";
import AddTestiminial from "./AddTestiminial";
import TestimonialTable from "./TestimonialTable";

const Testimonials = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="parent min-vh-100">
        <div className="main-div">
          <div className="fw-bold">
            <span style={{ fontSize: "14px", color: "#EF5B0C" }}>
              {" "}
              Seetings /{" "}
            </span>{" "}
            <span style={{ fontSize: "14px", color: "#818181" }}>
              Testimonials
            </span>
          </div>
          <div className="row input-title" style={{ marginTop: "40px" }}>
            <div className="col-11 col-md-6 input-head d-flex align-items-center">
              <p className="pt-2">Testimonials:</p>
              <button
                className="add-new ms-4"
                onClick={() => setModalShow(true)}
              >
                Add New
              </button>
            </div>
          </div>
          <div className="mt-4">
            <TestimonialTable />
          </div>
        </div>
      </div>
      <AddTestiminial show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Testimonials;
