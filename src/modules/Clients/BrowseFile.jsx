import React from "react";
import { useState } from "react";
import user1 from "../../assets/img/user1.jpg";

const BrowseFile = ({ title }) => {
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
      <div className="row input-title" style={{ marginTop: "25px" }}>
        <div className="col-11 col-md-6 input-head">
          <p>{title} :</p>
          <div
            className="w-100 browse-main d-flex align-items-center"
            style={{
              height: "55px",
              border: "1px solid #E0E0E0",
              borderRadius: "12px",
              overflowX: "hidden",
              background: "white",
            }}
          >
            <p
              className="my-2 ms-2"
              style={{
                color: "#A1A1A1",
                fontSize: "15px",
                overflow: "hidden",
              }}
            >
              Drag and drop files here or browse
            </p>

            <div className="file-up">
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/*"
              />
              <p>Browse Files</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-11 col-md-6 row justify-content-between">
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
                    <div className="ms-2" style={{ marginTop: "-34px",cursor:'pointer' }} onClick={() => deleteHandler(image)}>
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

export default BrowseFile;
