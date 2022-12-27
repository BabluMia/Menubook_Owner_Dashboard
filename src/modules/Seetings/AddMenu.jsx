import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import user1 from "../../assets/img/user1.jpg";

const AddMenu = (props) => {
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
      <Modal.Body className="mx-2 mx-md-3 mx-lg-4">
        <div>
          <h4 className="text-center" style={{ color: "#515151" }}>
            Add New Menu
          </h4>
        </div>

        <div >
          <div className="inputs-modal my-3">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="inputs-modal my-3">
            <p>Slug</p>
            <input type="text" />
          </div>
          <div className="inputs-modal my-3">
            <p>Parent Menu</p>
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
          <div className="inputs-modal my-3">
            <p>Select Destination</p>
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
      </Modal.Body>
      <Modal.Footer className="mx-2 mx-md-3 mx-lg-4">
        <Button
          className="w-100 save-btn "
          style={{ color: "white", background: "#EF5B0C" }}
          onClick={props.onHide}
        >
          {" "}
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMenu;
