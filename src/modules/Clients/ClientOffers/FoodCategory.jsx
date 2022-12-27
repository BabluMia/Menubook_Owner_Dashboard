import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Select, { components } from "react-select";
const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(true);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };
  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input
        type="checkbox"
        className="me-2"
        checked={isSelected}
        style={{ color: "greenyellow", background: "orange" }}
      />
      {children}
    </components.Option>
  );
};

const allOptions = [
  { value: "option 1", label: "option 1" },
  { value: "option 2", label: "option 2" },
  { value: "option 3", label: "option 3" },
  { value: "option 4", label: "option 4" },
];

const FoodCategory = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="mx-2 mx-md-3 mx-lg-4"></Modal.Body>
      <div>
        <h4 className="text-center" style={{ color: "#515151" }}>
          Choose From Category
        </h4>
      </div>
      <div>
        <div className="inputs-modal my-3">
          <p>name</p>
          
        </div>
      </div>

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

export default FoodCategory;
