import React from "react";
import { useState } from "react";

const ModalImageUpload = ({title}) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  return (
    <div>
      <div className="row input-title" style={{ marginTop: "35px" }}>
        <div className="col-11  input-head row">
          <div className="col-12 col-md-5 my-2 my-md-0">
            <p className="fw-bold">{title}</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center">
              <div className="logo-file">
                <p>Choose File</p>
                <input
                  type="file"
                  accept="image/*"
                  name="images"
                  onChange={onSelectFile}
                  id=""
                />
              </div>
              {selectedImages.length > 0 ? (
                <span className="ms-3" style={{ color: "#ef5b0c" }}>
                  File Selected
                </span>
              ) : (
                <span className="ms-3">No file chosen</span>
              )}
            </div>
            <p className="mt-3">Maximum Size: 2 MB</p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12  row justify-content-between">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={index} className="col-10 col-md-6 my-2 my-md-0">
                  <div
                    className="d-flex align-items-center  px-2"
                    style={{ position: "relative" }}
                  >
                    <img src={image} height={36} width={36} alt="" />
                    <div className="ms-2 mt-2" style={{ color: "#979FB8" }}>
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
                    <div
                      className="ms-2"
                      style={{ marginTop: "-34px", cursor: "pointer" }}
                      onClick={() => deleteHandler(image)}
                    >
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
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ModalImageUpload;
