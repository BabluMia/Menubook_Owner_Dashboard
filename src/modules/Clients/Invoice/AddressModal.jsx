import React from "react";
import { Button, Modal } from "react-bootstrap";
import ClientMap from "../Map/ClientMap";

const AddressModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="mx-2 mx-md-3 mx-lg-4">
        
        <div className="inputs-modal my-3">
          <div className="d-flex my-3">
            <input type="text" /> <button className="rounded-2 px-3 ms-2" style={{border:'#EF5B0C',outline:'none',color:'white',background:'#EF5B0C'}}>Search</button>
          </div>
          <p className="fw-bold" style={{color:'black'}}>Pin from Map :</p>
          <div style={{ width: "42vw", height: "50vh",  }}>
          {/* <ClientMap /> */}
        </div>
        </div>
        
      </Modal.Body>
      <Modal.Footer className="mx-2 mx-md-3 mx-lg-4 d-none">
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

export default AddressModal;
