import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import user1 from "../../assets/img/user1.jpg";
import ModalImageUpload from "./ModalImageUpload";

const AddTestiminial = (props) => {
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
          <h4 className="text-center" style={{color:'#515151'}}>Add Testimonial</h4>
        </div>

        <div  >
          <div className="inputs-modal my-3">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="inputs-modal my-3">
            <p>Designation</p>
            <input type="text" />
          </div>
          <div className="inputs-modal my-3">
            <p>Testimonials</p>
            <input
              type="textarea"
              placeholder="Your meta description goes here."
            />
          </div>
          {/* Choose a photo: */}
          <ModalImageUpload title="Choose a photo:"/>
        </div>
      </Modal.Body>
      <Modal.Footer className="mx-2 mx-md-3 mx-lg-4">
        <Button className="w-100 save-btn " style={{color:'white',background:'#EF5B0C'}} onClick={props.onHide}> Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTestiminial;
