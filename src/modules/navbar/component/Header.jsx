import React, { useEffect } from "react";
import "./Header.css";

import { useState } from "react";

import { Add, MenuOutlined } from "@material-ui/icons";
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
import { NotificationAddOutlined, NotificationAddRounded } from "@mui/icons-material";
import Notification from "./Notification";
import { Link, useHistory } from "react-router-dom";
import "./notification_sm.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";

import { RiNotification2Line } from "react-icons/ri";
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

const Header = ({ setBodyWidth }) => {
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
          
              <button className="orange-btn">
                <Add /> Add New Client
              </button>
         
            <div className="gap-4 large-profile">
              
              {/* ====noticication============? */}
              <Tooltip
                title="Notifications"
                className="notification"
                onClick={handleNotificationClick}
              >
               <RiNotification2Line/>
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
                        onClick={() => {
                          history.push(`/notification`);
                          handleNotificationClose();
                        }}
                      >
                        view all notifications
                      </div>
                    </div>
                  </div>
                </div>
              </Menu>

              {/* ==notification end=============== */}
              <div className="line  d-none">
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
              <div className=" profile d-none">
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
            <div className="d-flex align-items-center ">
            <p className="mt-3" style={{color:'#3F3F44'}}>User Name</p>
            </div>
            

            <div className="mobile-profile d-none">
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
                <MenuItem onClick={() => history.push(`/view_user`)}>
                  <Avatar /> Profile
                </MenuItem>

                {/* <Divider /> */}
                <MenuItem
                  className="menu-large"
                  onClick={() => history.push(`/notification`)}
                >
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

export default Header;
