import React from "react";
import "./Client.css";
import cover from "../../assets/img/cover.jpg";
import cover2 from "../../assets/img/NoPath - Copy (16).jpg";
import cover3 from "../../assets/img/NoPath - Copy (18).jpg";
import Delete from "../Svgs/Delete";
import { useState } from "react";

const BrowsePhotosProfile = (  {title}) => {
    const [selectedImages, setSelectedImages] = useState([]);
  const coverImages = [
    {
      id: "1",
      cover: cover,
    },
    {
      id: "2",
      cover: cover2,
    },
    {
      id: "3",
      cover: cover3,
    },
  ];
  const [images, setImages] = useState(coverImages);
  const coverDelete = (id) => {
    setImages(images.filter((images) => images.id !== id));
  };


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
    <div className="row">
      <div className="col-12 mt-3 ">
        <p
          className="fw-bold ms-3"
          style={{ color: "#515151", fontSize: "15px" }}
        >
          {title}
        </p>
       
      </div>
      <div className="col-12 row ms-1 my-2">
        {images?.map((image) => (
          <div className="col-10 col-md-4 my-2 my-md-0">
            <div
              className="d-flex align-items-center  px-2"
              style={{ position: "relative" }}
            >
              <img src={image.cover} height={60} width={60} alt="" />
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
                <p style={{ fontSize: "12px", marginTop: "-10px" }}>424KB</p>
              </div>
              <div
                className="ms-2"
                style={{ marginTop: "-34px", cursor: "pointer" }}
                onClick={() => coverDelete(image.id)}
              >
                <Delete />
              </div>
            </div>
          </div>
        ))}
        {selectedImages?.map((image) => (
          <div className="col-10 col-md-4 my-2 my-md-0">
            <div
              className="d-flex align-items-center  px-2"
              style={{ position: "relative" }}
            >
              <img src={image} height={60} className='rounded-1' width={60} alt="" />
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
                <p style={{ fontSize: "12px", marginTop: "-10px" }}>424KB</p>
              </div>
              <div
                className="ms-2"
                style={{ marginTop: "-34px", cursor: "pointer" }}
                onClick={() => deleteHandler(image)}
              >
                <Delete />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="add-photo ms-4 my-3" style={{ position: "relative" }}>
        <p> Add a new photo</p>
        <input
          type="file"
          name="images"
          multiple
          onChange={onSelectFile}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default BrowsePhotosProfile;
