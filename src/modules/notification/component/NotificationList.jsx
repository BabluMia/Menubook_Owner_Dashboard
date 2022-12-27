import React from "react";
import "./Notification.css";

import SingleNotification from "./SingleNotification";

const NotificationList = () => {
  return (
    <div className="box-wrapper">
      <div className="notification_main py-4" >
        <div className="d-flex align-items-center mb-3">
          {/* <img src={ball} alt="" /> */}
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6999 14.5687C17.1468 13.6125 16.4812 11.7937 16.4812 8.57812V7.9125C16.4812 3.75938 13.1531 0.35625 9.05618 0.328125H8.99993C8.01624 0.329355 7.04244 0.524325 6.1341 0.901901C5.22577 1.27948 4.4007 1.83227 3.706 2.52871C3.0113 3.22515 2.46058 4.0516 2.08528 4.96087C1.70998 5.87015 1.51744 6.84444 1.51868 7.82812V8.57812C1.51868 11.7937 0.853051 13.6125 0.299926 14.5687C0.166155 14.7966 0.0949535 15.0558 0.0935277 15.32C0.0921019 15.5843 0.160502 15.8442 0.291807 16.0735C0.423111 16.3028 0.612659 16.4934 0.841269 16.6259C1.06988 16.7584 1.32944 16.8282 1.59368 16.8281H5.24993C5.24993 17.8227 5.64501 18.7765 6.34828 19.4798C7.05154 20.183 8.00536 20.5781 8.99993 20.5781C9.99449 20.5781 10.9483 20.183 11.6516 19.4798C12.3548 18.7765 12.7499 17.8227 12.7499 16.8281H16.4062C16.6704 16.8298 16.9303 16.7612 17.1592 16.6295C17.3882 16.4977 17.578 16.3074 17.7093 16.0781C17.8394 15.8475 17.907 15.587 17.9054 15.3222C17.9038 15.0574 17.8329 14.7977 17.6999 14.5687ZM8.99993 19.0781C8.40395 19.0757 7.83309 18.8378 7.41166 18.4164C6.99024 17.995 6.75239 17.4241 6.74993 16.8281H11.2499C11.2475 17.4241 11.0096 17.995 10.5882 18.4164C10.1668 18.8378 9.5959 19.0757 8.99993 19.0781Z"
              fill="#F2C94C"
            />
          </svg>

          <h5 className="mt-1 ms-2 ">Notification</h5>
        </div>
        <SingleNotification />
        {/* ==============doc=========== */}
        <div
          style={{
            border: "0.5px solid #E0E0E0",
          }}
          className=" bg-white py-4 px-2 px-md-2 px-lg-4 "
        >
          <div className="d-flex flex-column flex-md-row justify-content-between notification-box">
            <div className="d-flex ">
              <div className="box-div me-3">
                {/* <img src={doc} alt="" /> */}
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7125 7.28752L14.7125 0.287516C14.522 0.101794 14.266 -0.00148383 14 1.61126e-05H2C1.46957 1.61126e-05 0.960859 0.21073 0.585786 0.585802C0.210714 0.960875 0 1.46958 0 2.00002V24C0 24.5304 0.210714 25.0392 0.585786 25.4142C0.960859 25.7893 1.46957 26 2 26H20C20.5304 26 21.0391 25.7893 21.4142 25.4142C21.7893 25.0392 22 24.5304 22 24V8.00002C22.0015 7.73397 21.8982 7.47802 21.7125 7.28752ZM15 19H7C6.73478 19 6.48043 18.8947 6.29289 18.7071C6.10536 18.5196 6 18.2652 6 18C6 17.7348 6.10536 17.4804 6.29289 17.2929C6.48043 17.1054 6.73478 17 7 17H15C15.2652 17 15.5196 17.1054 15.7071 17.2929C15.8946 17.4804 16 17.7348 16 18C16 18.2652 15.8946 18.5196 15.7071 18.7071C15.5196 18.8947 15.2652 19 15 19ZM15 15H7C6.73478 15 6.48043 14.8947 6.29289 14.7071C6.10536 14.5196 6 14.2652 6 14C6 13.7348 6.10536 13.4804 6.29289 13.2929C6.48043 13.1054 6.73478 13 7 13H15C15.2652 13 15.5196 13.1054 15.7071 13.2929C15.8946 13.4804 16 13.7348 16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8947 15.2652 15 15 15ZM14 8.00002V2.50002L19.5 8.00002H14Z"
                    fill="#219653"
                  />
                </svg>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold">Invoice Created</h5>
                </div>
                <p>
                  <span className="fw-bold">Antu Islam</span>
                  genareted Invoice by{" "}
                  <span className="fw-bold">Ps portal</span>
                </p>
              </div>
            </div>

            <div className="d-flex align-content-start ">
              <div className="mx-2">
              

                {/* <img src={time} alt="" /> */}
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_22_8)">
                    <path
                      d="M12 21.0781C16.9706 21.0781 21 17.0487 21 12.0781C21 7.10756 16.9706 3.07812 12 3.07812C7.02944 3.07812 3 7.10756 3 12.0781C3 17.0487 7.02944 21.0781 12 21.0781Z"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12 6.82812V12.0781H17.25"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_8">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.078125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <p>March 30, 2020, 10:05 am</p>
              <div className="cross">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.41893 8.08293C9.80986 8.47404 9.80986 9.10594 9.41893 9.49706C9.22392 9.69206 8.96794 9.79002 8.71178 9.79002C8.4558 9.79002 8.19981 9.69206 8.00481 9.49706L4.99986 6.49193L1.99492 9.49706C1.79991 9.69206 1.54393 9.79002 1.28795 9.79002C1.03178 9.79002 0.775803 9.69206 0.580795 9.49706C0.189865 9.10594 0.189865 8.47404 0.580795 8.08293L3.58592 5.07799L0.580795 2.07304C0.189865 1.68193 0.189865 1.05003 0.580795 0.65892C0.971909 0.26799 1.60381 0.26799 1.99492 0.65892L4.99986 3.66405L8.00481 0.65892C8.39592 0.26799 9.02782 0.26799 9.41893 0.65892C9.80986 1.05003 9.80986 1.68193 9.41893 2.07304L6.4138 5.07799L9.41893 8.08293Z"
                    fill="#FFFDFC"
                  />
                </svg>

                {/* <img src={x} alt="" /> */}
              </div>
            </div>
          </div>{" "}
        </div>
        {/* ==============doc=========== */}
        {/* ===============user======== */}
        <div
          style={{
            border: "0.5px solid #E0E0E0",
          }}
          className=" bg-white py-4 px-2 px-md-2 px-lg-4 "
        >
          <div className="d-flex flex-column flex-md-row justify-content-between notification-box">
            <div className="d-flex ">
              <div className="box-div me-3">
                {/* <img src={men} alt="" /> */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_180_384)">
                    <path
                      d="M15.1503 19.7374C16.4919 18.8462 17.511 17.5466 18.0567 16.0311C18.6024 14.5157 18.6457 12.8648 18.1802 11.3227C17.7147 9.78074 16.7652 8.42957 15.472 7.46918C14.1789 6.5088 12.611 5.99023 11.0003 5.99023C9.38952 5.99023 7.82158 6.5088 6.52847 7.46918C5.23535 8.42957 4.28579 9.78074 3.82029 11.3227C3.35479 12.8648 3.39809 14.5157 3.94378 16.0311C4.48948 17.5466 5.50858 18.8462 6.85026 19.7374C4.56147 20.5791 2.58536 22.1015 1.18776 24.0999C1.07859 24.2482 1.01361 24.4242 1.00034 24.6078C0.987068 24.7914 1.02604 24.9751 1.11276 25.1374C1.19845 25.2987 1.32618 25.4339 1.48242 25.5285C1.63867 25.6231 1.8176 25.6737 2.00026 25.6749H20.0003C20.1829 25.6737 20.3618 25.6231 20.5181 25.5285C20.6743 25.4339 20.8021 25.2987 20.8878 25.1374C20.9745 24.9751 21.0134 24.7914 21.0002 24.6078C20.9869 24.4242 20.9219 24.2482 20.8128 24.0999C19.4152 22.1015 17.439 20.5791 15.1503 19.7374Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M31.0126 24.1C29.6071 22.1041 27.6279 20.5826 25.3376 19.7375C26.6835 18.8497 27.7069 17.551 28.2554 16.0348C28.804 14.5185 28.8484 12.8657 28.3821 11.3222C27.9159 9.77871 26.9638 8.42695 25.6675 7.46802C24.3712 6.5091 22.8 5.99425 21.1876 6.00005C20.4994 6.0037 19.8146 6.09613 19.1501 6.27505C18.994 6.32193 18.8514 6.40535 18.734 6.5184C18.6166 6.63144 18.5278 6.77085 18.4751 6.92505C18.4248 7.07799 18.4122 7.24081 18.4383 7.39968C18.4644 7.55855 18.5285 7.70876 18.6251 7.83755C19.7556 9.35651 20.4051 11.1794 20.4898 13.071C20.5744 14.9626 20.0904 16.8362 19.1001 18.45C18.9731 18.6645 18.9297 18.9182 18.9781 19.1627C19.0265 19.4072 19.1634 19.6252 19.3626 19.775C19.7376 20.0667 20.1001 20.3667 20.4501 20.675L20.5126 20.7375C21.8469 21.9722 22.9293 23.4537 23.7001 25.1C23.7792 25.2721 23.9061 25.4178 24.0657 25.5197C24.2252 25.6217 24.4108 25.6756 24.6001 25.675H30.1876C30.3703 25.6738 30.5492 25.6232 30.7054 25.5286C30.8617 25.434 30.9894 25.2989 31.0751 25.1375C31.1608 24.9755 31.2003 24.793 31.1892 24.61C31.1782 24.4271 31.1171 24.2506 31.0126 24.1Z"
                      fill="#2F80ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_180_384">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold">Invoice Created</h5>
                </div>
                <p>
                  <span className="fw-bold">Antu Islam</span>
                  genareted Invoice by{" "}
                  <span className="fw-bold">Ps portal</span>
                </p>
              </div>
            </div>

            <div className="d-flex align-content-start ">
              <div className="mx-2">
                {/* <img src={time} alt="" /> */}
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_22_8)">
                    <path
                      d="M12 21.0781C16.9706 21.0781 21 17.0487 21 12.0781C21 7.10756 16.9706 3.07812 12 3.07812C7.02944 3.07812 3 7.10756 3 12.0781C3 17.0487 7.02944 21.0781 12 21.0781Z"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12 6.82812V12.0781H17.25"
                      stroke="#828282"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_8">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.078125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <p>March 30, 2020, 10:05 am</p>
              <div className="cross">
                {/* <img src={x} alt="" /> */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.41893 8.08293C9.80986 8.47404 9.80986 9.10594 9.41893 9.49706C9.22392 9.69206 8.96794 9.79002 8.71178 9.79002C8.4558 9.79002 8.19981 9.69206 8.00481 9.49706L4.99986 6.49193L1.99492 9.49706C1.79991 9.69206 1.54393 9.79002 1.28795 9.79002C1.03178 9.79002 0.775803 9.69206 0.580795 9.49706C0.189865 9.10594 0.189865 8.47404 0.580795 8.08293L3.58592 5.07799L0.580795 2.07304C0.189865 1.68193 0.189865 1.05003 0.580795 0.65892C0.971909 0.26799 1.60381 0.26799 1.99492 0.65892L4.99986 3.66405L8.00481 0.65892C8.39592 0.26799 9.02782 0.26799 9.41893 0.65892C9.80986 1.05003 9.80986 1.68193 9.41893 2.07304L6.4138 5.07799L9.41893 8.08293Z"
                    fill="#FFFDFC"
                  />
                </svg>
              </div>
            </div>
          </div>{" "}
        </div>
        {/* ===============user======== */}

        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
      </div>
    </div>
  );
};

export default NotificationList;
