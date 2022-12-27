import React, { useEffect } from "react";
import "./Header.css";

import { useState } from "react";

import { MenuOutlined } from "@material-ui/icons";
import profile from "../../../assets/icon/profile.svg";
import SideNav from "./SideNav";

// ----------------------mobile view------------------------

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { NotificationAddOutlined } from "@mui/icons-material";
import Notification from "./Notification";
import { Link, useHistory } from "react-router-dom";
import "./notification_sm.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
// import * as path from '../../../Routes/RoutePaths'
const data = [
  {
    img: img1,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img2,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img3,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img4,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img5,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img6,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
];

const NewHeader = ({ setBodyWidth }) => {
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [arrow, setArrow] = useState(true);
  const [Search, setSearch] = useState(true);
  const [Shownotification, SetShownotification] = useState(0);

  ////////////////////sidebar collaps////////////////
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  useEffect(() => {
    if (width < 992) {
      setMenuCollapse(true);
      setBodyWidth(true);
    } else {
      setMenuCollapse(false);
      setBodyWidth(false);
    }
  }, [width]);

  const updatePageState = () => {
    if (menuCollapse === false) {
      setMenuCollapse(true);
      setBodyWidth(true);
    } else {
      setMenuCollapse(false);
      setBodyWidth(false);
    }
  };

  // ----------------mobile----------------------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /////////notification////////
  const NotificationOpen = Boolean(Shownotification);
  //  const notification_open = Boolean(Notification);
  const handleNotificationClick = (event) => {
    SetShownotification(event.currentTarget);
  };
  const handleNotificationClose = () => {
    SetShownotification(null);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper d-flex align-items-center justify-content-between gap-3">
        <div
          className="d-flex align-items-center justify-content-around"
          style={{ alignItems: "center" }}
        >
          <div className="col-3">
            <div className="closemenu" onClick={updatePageState}>
              <MenuOutlined style={{ width: "36px", height: "36px" }} />
            </div>

            <SideNav menuCollapse={menuCollapse} />
          </div>
        
        </div>
        {/* ----------------profile-------------------------- */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center gap-3 align-items-center">
            <div className="search-bar search">
              <input
                id="search-input"
                title="Search here anything.."
                aria-label="Search for an icon"
                type="text"
                autocapitalize="none"
                autocomplete="off"
                placeholder="Search here anything.."
              />
              <div className="search_icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2031 21.8484L18.0422 16.6875C19.5 14.9203 20.2922 12.7219 20.2922 10.4062C20.2922 7.7625 19.2656 5.28281 17.3953 3.4125C15.5297 1.54219 13.0453 0.515625 10.4062 0.515625C7.76719 0.515625 5.28281 1.54219 3.4125 3.4125C1.54219 5.27813 0.515625 7.7625 0.515625 10.4062C0.515625 13.0453 1.54219 15.5297 3.4125 17.4C5.27813 19.2656 7.7625 20.2969 10.4062 20.2969C12.7266 20.2969 14.925 19.5047 16.6875 18.0469L21.8484 23.2031C22.2234 23.5781 22.8281 23.5781 23.2031 23.2031C23.5781 22.8281 23.5781 22.2234 23.2031 21.8484ZM4.76719 16.0406C3.25781 14.5359 2.42812 12.5344 2.42812 10.4062C2.42812 8.27812 3.25781 6.27187 4.7625 4.76719C6.26719 3.2625 8.26875 2.43281 10.4016 2.43281C12.5297 2.43281 14.5359 3.2625 16.0406 4.76719C17.5453 6.27187 18.375 8.27344 18.375 10.4062C18.375 12.5344 17.5453 14.5406 16.0406 16.0453C14.5359 17.55 12.5297 18.3797 10.4016 18.3797C8.27344 18.3797 6.27187 17.55 4.76719 16.0406Z"
                    fill="#AEAEB2"
                  />
                </svg>
              </div>
            </div>
            <div className="gap-4 large-profile">
              <Tooltip title="Settings" className="setting">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" fill="#F3F3F3" />
                  <g clip-path="url(#clip0_1305_2398)">
                    <path
                      d="M25.7254 8C26.1958 8 26.6166 8.2928 26.775 8.7312L27.9046 11.8624C28.3094 11.9632 28.6566 12.064 28.951 12.1696C29.2726 12.2848 29.687 12.4592 30.199 12.6976L32.8294 11.3056C33.0441 11.1919 33.2899 11.1508 33.5299 11.1886C33.7699 11.2264 33.9912 11.341 34.1606 11.5152L36.4742 13.9072C36.7814 14.2256 36.8678 14.6912 36.695 15.0976L35.4614 17.9888C35.6662 18.3648 35.8294 18.6864 35.9542 18.9552C36.0886 19.248 36.255 19.6512 36.4534 20.1712L39.3286 21.4032C39.7606 21.5872 40.0278 22.0192 39.999 22.4816L39.7878 25.8016C39.7734 26.0173 39.6959 26.224 39.5651 26.3961C39.4342 26.5681 39.2558 26.698 39.0518 26.7696L36.3286 27.7376C36.2502 28.1136 36.1686 28.4352 36.0822 28.7072C35.9428 29.1273 35.7837 29.5405 35.6054 29.9456L36.9734 32.9696C37.0699 33.1821 37.0959 33.4199 37.0476 33.6482C36.9992 33.8765 36.879 34.0833 36.7046 34.2384L34.103 36.5616C33.9317 36.714 33.7179 36.8103 33.4902 36.8378C33.2626 36.8652 33.032 36.8225 32.8294 36.7152L30.1478 35.2944C29.7282 35.5165 29.2954 35.7126 28.8518 35.8816L27.6806 36.32L26.6406 39.2C26.5635 39.4109 26.4245 39.5936 26.2418 39.7241C26.059 39.8546 25.8411 39.9268 25.6166 39.9312L22.5766 40C22.3461 40.0061 22.1195 39.9405 21.9278 39.8124C21.7361 39.6844 21.5888 39.5 21.5062 39.2848L20.2806 36.0416C19.8624 35.8987 19.4484 35.744 19.039 35.5776C18.7041 35.4327 18.3743 35.2763 18.0502 35.1088L15.0102 36.408C14.8099 36.4935 14.589 36.5188 14.3746 36.4811C14.1601 36.4433 13.9612 36.344 13.8022 36.1952L11.5526 34.0848C11.3851 33.9284 11.271 33.7232 11.2265 33.4984C11.182 33.2736 11.2093 33.0405 11.3046 32.832L12.6118 29.984C12.4379 29.6467 12.2768 29.303 12.1286 28.9536C11.9556 28.526 11.7956 28.0932 11.6486 27.656L8.78459 26.784C8.55179 26.7136 8.34874 26.5684 8.20697 26.3708C8.0652 26.1732 7.99265 25.9343 8.00059 25.6912L8.11259 22.6176C8.12056 22.4171 8.18321 22.2225 8.29375 22.055C8.4043 21.8875 8.55854 21.7534 8.73979 21.6672L11.7446 20.224C11.8838 19.7136 12.0054 19.3168 12.1126 19.0272C12.2635 18.6404 12.4312 18.2603 12.615 17.888L11.3126 15.136C11.2137 14.927 11.1837 14.6921 11.2269 14.4649C11.27 14.2378 11.384 14.0302 11.5526 13.872L13.799 11.7504C13.9565 11.6019 14.1535 11.502 14.3664 11.4629C14.5793 11.4237 14.799 11.4469 14.999 11.5296L18.0358 12.784C18.3718 12.56 18.6758 12.3792 18.951 12.2336C19.279 12.0592 19.7174 11.8768 20.2694 11.68L21.3254 8.7344C21.4035 8.51883 21.5462 8.33261 21.734 8.20117C21.9219 8.06973 22.1457 7.99948 22.375 8H25.7254ZM24.9414 10.2032H23.1606L22.1926 12.9136C22.1357 13.0716 22.0436 13.2147 21.9233 13.3319C21.803 13.4492 21.6576 13.5376 21.4982 13.5904C20.8006 13.8224 20.2966 14.0224 20.0022 14.1776C19.6902 14.3424 19.2918 14.5936 18.8182 14.9296C18.6632 15.0384 18.4832 15.1063 18.295 15.127C18.1067 15.1477 17.9163 15.1205 17.7414 15.048L14.8134 13.84L13.6726 14.9184L14.8614 17.4304C15.0054 17.7344 15.0022 18.0864 14.8518 18.3856C14.5318 19.0272 14.3158 19.5008 14.207 19.792C14.0982 20.0816 13.9526 20.5792 13.775 21.2672C13.7348 21.4231 13.661 21.5684 13.5587 21.6927C13.4564 21.8171 13.3282 21.9176 13.183 21.9872L10.319 23.3616L10.2614 24.9296L12.8534 25.7168C13.1974 25.8208 13.4694 26.0848 13.583 26.424C13.839 27.192 14.0438 27.7584 14.191 28.1136C14.386 28.5644 14.6017 29.0059 14.8374 29.4368C14.999 29.7376 15.0102 30.096 14.8678 30.4064L13.6662 33.0272L14.8038 34.096L17.655 32.8768C17.8086 32.8112 17.9748 32.7806 18.1417 32.7872C18.3086 32.7938 18.4719 32.8376 18.6198 32.9152C19.2038 33.2224 19.639 33.4352 19.9142 33.552C20.1942 33.6688 20.7302 33.864 21.5078 34.1296C21.6622 34.1823 21.803 34.2684 21.9203 34.3818C22.0375 34.4952 22.1283 34.6331 22.1862 34.7856L23.319 37.7792L24.8006 37.7472L25.7558 35.1008C25.8104 34.9498 25.8972 34.8125 26.0102 34.6984C26.1232 34.5843 26.2597 34.4961 26.4102 34.44L28.0694 33.8192C28.4886 33.664 28.9974 33.4192 29.591 33.0832C29.7553 32.9909 29.9401 32.9414 30.1286 32.9391C30.317 32.9369 30.503 32.982 30.6694 33.0704L33.1926 34.4064L34.6118 33.1408L33.3702 30.4C33.3064 30.2593 33.2733 30.1066 33.273 29.9522C33.2728 29.7977 33.3053 29.6449 33.3686 29.504C33.6598 28.8528 33.8566 28.3616 33.9558 28.048C34.0534 27.7408 34.1542 27.2976 34.2518 26.728C34.2854 26.5345 34.3699 26.3535 34.4968 26.2036C34.6236 26.0537 34.7881 25.9403 34.9734 25.8752L37.6102 24.9392L37.7254 23.1152L35.1334 22.0048C34.9954 21.9461 34.8708 21.8599 34.7671 21.7515C34.6634 21.6432 34.5828 21.5149 34.5302 21.3744C34.3453 20.8644 34.1436 20.3606 33.9254 19.864C33.7188 19.4316 33.4946 19.0078 33.2534 18.5936C33.1698 18.4473 33.1213 18.2836 33.1116 18.1154C33.1019 17.9472 33.1312 17.779 33.1974 17.624L34.3574 14.904L33.135 13.64L30.7542 14.9008C30.5988 14.9832 30.4262 15.0281 30.2503 15.0317C30.0744 15.0353 29.9001 14.9976 29.7414 14.9216C29.236 14.6703 28.7192 14.4429 28.1926 14.24C27.7435 14.0892 27.2856 13.9663 26.8214 13.872C26.6372 13.8329 26.466 13.7477 26.3238 13.6243C26.1816 13.5008 26.0731 13.3433 26.0086 13.1664L24.9398 10.2016L24.9414 10.2032ZM24.039 17.0256C27.935 17.0256 31.095 20.1504 31.095 24.0032C31.095 27.856 27.935 30.9792 24.039 30.9792C20.1414 30.9792 16.983 27.856 16.983 24.0032C16.983 20.1504 20.1414 17.0272 24.039 17.0272V17.0256ZM24.039 19.2304C21.3718 19.2304 19.2102 21.3664 19.2102 24.0032C19.2102 26.64 21.3718 28.7776 24.039 28.7776C26.7046 28.7776 28.8662 26.64 28.8662 24.0032C28.8662 21.3664 26.7062 19.2304 24.039 19.2304Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1305_2398">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Tooltip>
              {/* ====noticication============? */}
              <Tooltip
                title="Notifications"
                className="notification"
                onClick={handleNotificationClick}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="8" fill="#F3F3F3" />
                  <path
                    d="M26.8317 11.5101C26.9156 11.538 27.0017 11.474 26.9977 11.3856C26.9052 9.35619 25.2808 8 23.5018 8C21.712 8 20.0986 9.37362 20.006 11.3869C20.0019 11.4753 20.0881 11.5392 20.1719 11.5114C22.2229 10.8289 24.8164 10.84 26.8317 11.5101Z"
                    fill="#FFCC00"
                  />
                  <path
                    d="M36.1102 31.5061C34.4527 30.0855 33.502 28.0186 33.502 25.8361V24.9931C33.502 24.9137 33.4292 24.8555 33.3514 24.8711C29.106 25.7213 25.002 22.452 25.002 18.0005C25.002 14.9781 26.6587 13.3598 27.1935 12.9009C27.2645 12.84 27.246 12.7249 27.1591 12.6904C20.6814 10.1203 13.502 14.8954 13.502 22.0005V25.8361C13.502 27.9745 12.5835 30.0586 10.8939 31.5061C10.6152 31.7448 10.3877 32.0467 10.2358 32.378C9.45816 34.0681 10.6998 36.0005 12.557 36.0005H34.4023C35.7501 36.0005 36.8999 34.9738 36.9955 33.6295C37.0558 32.7806 36.6942 32.0063 36.1102 31.5061Z"
                    fill="#FFCC00"
                  />
                  <path
                    d="M23.5029 40C25.3586 40 26.9554 38.8711 27.6424 37.2636C27.6958 37.1389 27.6067 37 27.471 37H19.5348C19.3991 37 19.31 37.1389 19.3633 37.2636C20.0503 38.8711 21.6472 40 23.5029 40Z"
                    fill="#FFCC00"
                  />
                  <path
                    d="M32.002 24C35.3315 24 38.002 21.3044 38.002 18C38.002 14.6919 35.3101 12 32.002 12C28.6751 12 26.002 14.7018 26.002 18C26.002 21.3081 28.6938 24 32.002 24ZM31.2257 16.4475C30.9782 16.5706 30.6782 16.4706 30.5545 16.2238C30.4313 15.9769 30.5313 15.6762 30.7782 15.5525L31.7782 15.0525C32.1082 14.8875 32.502 15.1261 32.502 15.5V19.9375C32.502 19.972 32.53 20 32.5645 20H32.985C33.2513 20 33.4838 20.2011 33.5009 20.4669C33.5196 20.7582 33.2891 21 33.002 21H31.019C30.7526 21 30.5201 20.7989 30.503 20.5331C30.4843 20.2418 30.7148 20 31.002 20H31.4395C31.474 20 31.502 19.972 31.502 19.9375V16.4101C31.502 16.3636 31.453 16.3333 31.4114 16.3542L31.2257 16.4475Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </Tooltip>
              <Menu
                style={{ padding: "24px" }}
                anchorEl={Shownotification}
                id="account-menu"
                open={NotificationOpen}
                onClose={handleNotificationClose}
                // onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div>
                  <div style={{ padding: "24px" }}>
                    <div className="row mb-3">
                      <div className="col-6 notification_title">
                        Notification
                      </div>
                      <div className="col-6 text-end ">
                        <Link className="notification_clear_all">
                          Clear all
                        </Link>
                      </div>
                    </div>
                    <div className="line_notification"></div>
                    {data.map((curr) => {
                      return (
                        <>
                          <div className="row my-4">
                            <div className="col-2">
                              <img
                                className="notification_sm_img"
                                src={curr.img}
                                alt=""
                              />
                            </div>
                            <div className="col-10 notification_sm_text">
                              {curr.text}
                              <p className="minute_ago">1 m ago</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div className="d-flex justify-content-center">
                      <div
                        className="viewNotificationSm"
                        onClick={() => {history.push(`/notification`); handleNotificationClose()}}
                      >
                        view all notifications
                      </div>
                    </div>
                  </div>
                </div>
              </Menu>

              {/* ==notification end=============== */}
              <div className="line">
                <svg
                  width="2"
                  height="64"
                  viewBox="0 0 2 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="63"
                    x2="1"
                    y2="1"
                    stroke="#AEAEB2"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className=" profile">
                <div className=" d-flex justify-content-center gap-3 align-items-center">
                  <div className="profile-icon">
                    <img src={profile} alt="" />
                    <p>Admin</p>
                  </div>
                  <h4>Sayma alam</h4>
                  <div
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    {arrow === true ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1310_11258)">
                          <path
                            d="M19.5 9L12 16.5L4.5 9"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1310_11258">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1310_11258)">
                          <path
                            d="M19.5 9L12 16.5L4.5 9"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1310_11258">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      // <img className="mx-4" style={{ rotate: "180deg" }} src={downArrow} alt="" />
                    )}
                  </div>
                </div>
                {/* <p>Admin</p> */}
              </div>

              {/* ------------------------------------------mobile----------------------- */}
            </div>

            <div className="mobile-profile">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={() => history.push(`/view_user`)} >
                  <Avatar /> Profile
                </MenuItem>

                {/* <Divider /> */}
                <MenuItem className="menu-large" onClick={() => history.push(`/notification`)}>
                  <ListItemIcon>
                    <NotificationAddOutlined fontSize="small" />
                  </ListItemIcon>
                  Notifications
                </MenuItem>
                <MenuItem className="menu-large">
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={() => history.push(`/`)}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
