import React from "react";
import ArrowSvg from "../../Common/ArrowSvg";
import SingleBrowseFile from "../SingleBrowseFile";

import CreatableSelect from "react-select/creatable";
import Select, { components } from "react-select";
import { useState } from "react";
import FoodCategory from "./FoodCategory";
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

const AddClientOffer = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const resturrentOption = [
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
  ];
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="parent">
      <div className="main-div">
        <h4 className="my-3" style={{ fontSize: "22px", color: "#2D2D2D" }}>
          Offer Request
        </h4>
        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Offer name</p>
            <input type="text" placeholder="Menubook BD" />
          </div>
        </div>

        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Select Category and food:</p>
            <div style={{ position: "relative" }}>
              <div onClick={() => setModalShow(true)}>
                <input type="text" placeholder="food" />
              </div>
              <div className="arrow-icon" style={{ rotate: "270deg" }}>
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
        <FoodCategory show={modalShow} onHide={() => setModalShow(false)}/>

        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Discount Type:</p>
            <div style={{ position: "relative" }}>
              <select id="inputState" className="form-select ">
                <option selected value={1}>
                  Resturent
                </option>
                <option value={2}>Food Cart</option>
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

        <div className="row input-title" style={{ marginTop: "40px" }}>
          <div className="col-11 col-md-6 input-head">
            <p>Amount (%)</p>
            <input type="text" placeholder="0" />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "25px" }}>
          <div className="col-11 col-md-6 input-head2">
            <p>Add this product to multiple branches:</p>
            <Select
              defaultValue={[]}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              onChange={(options) => {
                if (Array.isArray(options)) {
                  setSelectedOptions(options.map((opt) => opt.value));
                }
              }}
              options={allOptions}
              components={{
                Option: InputOption,
              }}
            />
          </div>
        </div>
        <div className="row input-title" style={{ marginTop: "20px" }}>
          <div className="col-11 col-md-6 input-head">
            <div className="mt-4 row  justify-content-between  time-notification">
              <div className="col-md-5 col-12">
                <span style={{ fontSize: "15px", color: "#515151" }}>
                  Starting time:
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
                  Ending time:
                </span>
                <div className=" time-to-date w-100 px-2 mt-4">
                  <input type="time" />
                  <div className="divider">
                    <div></div>
                  </div>
                  <input type="date" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SingleBrowseFile title={"Set Banner Image:"} />

        <div className="mt-4">
          <button className="orange-btn">Publish Offer</button>
        </div>
      </div>
    </div>
  );
};

export default AddClientOffer;
