import React, { useState, useEffect } from "react";
import "./SideNav.css";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

import { GrNotification } from "react-icons/gr";
import { FaDollarSign, FaUserTie } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsChatSquareQuote } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  DashboardOutlined,
  Speaker,
  CampaignOutlined,
} from "@material-ui/icons";
import AddNewAdvertisement from "../../add_request/new_add/Pages/AddNewAdvertisement";

const SideNav = ({ menuCollapse }) => {
  const location = useLocation();
  const [menu, setMenu] = useState(menuCollapse);
  const [activeNav, setActiveNave] = useState(location.pathname);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const clientInput = useSelector((state) => state.clientInfo.clientInput);
  useEffect(() => {
    setMenu(menuCollapse);
  }, [menuCollapse]);

  useEffect(() => {
    setActiveNave(location.pathname);
  }, [location.pathname]);

  const shootid = localStorage.getItem("shootid");

  // ----------------logout-------------
  const handleLogOut = () => {
    let response = {
      status: false,
      message: "",
      isLoading: true,
    };

    try {
      localStorage.removeItem("is_logged_in");
      localStorage.removeItem("access_token");
      localStorage.removeItem("userData");

      // toast.success('Logged out successfully !');
      if (typeof window !== "undefined") {
        window.loction.href = "/";
      }
    } catch (error) {
      response.message = "Something Went Wrong !";
      // toast.error(error);
    }
    response.isLoading = false;
  };

  return (
    <>
      <div className="sidebar">
        <ProSidebar collapsed={menu}>
          <SidebarHeader>
            <div className="logo ">
              {menu ? <img src={logo} alt="" /> : <img src={logo} alt="" />}
            </div>
          </SidebarHeader>
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <Menu iconShape="square">
                {/* ------------------------all Dashboard---------------------- */}

                <SubMenu
                  onClick={() => {
                    setIsOpenDropdown(!isOpenDropdown);
                  }}
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <DashboardOutlined
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                      }}
                    />
                  }
                  title="Dashboard"
                  // open={isOpenDropdown}
                >
                  <MenuItem
                    active={activeNav === `/my_business` ? true : false}
                    onClick={() => setActiveNave("/my_business")}
                  >
                    <NavLink to="/my_business">My Business</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/my_earning" ? true : false}
                    onClick={() => setActiveNave("/my_earning")}
                  >
                    <NavLink to="/my_earning">My Earning</NavLink>
                  </MenuItem>
                </SubMenu>
                <hr />
                {/* ------------------------User---------------------- */}

                <SubMenu
                  // onClick={() => setVisible(!visible)}
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <FiUsers
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                      }}
                    />
                  }
                  title="Users"
                  // {visible === true ? open : open ={false}}
                  // open={visible}
                >
                  <MenuItem
                    active={activeNav === `/appUser` ? true : false}
                    onClick={() => setActiveNave("/appUser")}
                  >
                    <NavLink to="/appUser">Apps Users</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/verified_user" ? true : false}
                    onClick={() => setActiveNave("/verified_user")}
                  >
                    <NavLink to="/verified_user">Verified Users</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/verification_r" ? true : false}
                    onClick={() => setActiveNave("/verification_r")}
                  >
                    <NavLink to="/verification_r">Verification R..</NavLink>
                  </MenuItem>
                </SubMenu>
                <hr />
                {/* -------------------------------------------Clients---------------------------- */}
                <SubMenu
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <FaUserTie
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                      }}
                    />
                  }
                  title="Clients"
                >
                  <MenuItem
                    active={activeNav === `/all_clients` ? true : false}
                    onClick={() => setActiveNave("/all_clients")}
                  >
                    <NavLink to="/all_clients">All Clients</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/addClients" ? true : false}
                    onClick={() => {
                      setModalShow(true);
                      setActiveNave("/addClients");
                    }}
                  >
                    <NavLink to="/addClients">Add New</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/export-products` ? true : false}
                    onClick={() => setActiveNave("/export-products")}
                  >
                    <NavLink to="/export-products">Export Products</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/import-products` ? true : false}
                    onClick={() => setActiveNave("/import-products")}
                  >
                    <NavLink to="/import-products">Import Products</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/edit-user` ? true : false}
                    onClick={() => setActiveNave("/edit-user")}
                  >
                    <NavLink to="/edit-user">Edit User</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/category` ? true : false}
                    onClick={() => setActiveNave("/category")}
                  >
                    <NavLink to="/category">Category</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/clinet-reviews` ? true : false}
                    onClick={() => setActiveNave("/clinet-reviews")}
                  >
                    <NavLink to="/clinet-reviews">Reviews</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/clinet-users` ? true : false}
                    onClick={() => setActiveNave("/clinet-users")}
                  >
                    <NavLink to="/clinet-users">Users</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/products` ? true : false}
                    onClick={() => setActiveNave("/products")}
                  >
                    <NavLink to="/products">Products</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/profile` ? true : false}
                    onClick={() => setActiveNave("/profile")}
                  >
                    <NavLink to="/profile">Profile</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/client-advertisement` ? true : false}
                    onClick={() => setActiveNave("/client-advertisement")}
                  >
                    <NavLink to="/client-advertisement">Advertisement</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/client-offer` ? true : false}
                    onClick={() => setActiveNave("/client-offer")}
                  >
                    <NavLink to="/client-offer">Offers</NavLink>
                  </MenuItem>

                  {/* -------hidden client-------------- */}
                  {clientInput.permision && (
                    <SubMenu title="KFC Dhanmondi">
                      <MenuItem
                        active={activeNav === `/products` ? true : false}
                        onClick={() => setActiveNave("/products")}
                      >
                        <NavLink to="/products">Products</NavLink>
                      </MenuItem>
                      <MenuItem
                        active={activeNav === "/Categories" ? true : false}
                        onClick={() => {
                       
                          setActiveNave("/Categories");
                        }}
                      >
                        <NavLink to="/Categories">Categories</NavLink>
                      </MenuItem>
                      <MenuItem
                        active={activeNav === `/Reviews` ? true : false}
                        onClick={() => setActiveNave("/Reviews")}
                      >
                        <NavLink to="/Reviews">Reviews</NavLink>
                      </MenuItem>
                      <MenuItem
                        active={activeNav === "/Users" ? true : false}
                        onClick={() => {
                         
                          setActiveNave("/Users");
                        }}
                      >
                        <NavLink to="/Users">Users</NavLink>
                      </MenuItem>
                      <MenuItem
                        active={activeNav === `/Offers` ? true : false}
                        onClick={() => setActiveNave("/Offers")}
                      >
                        <NavLink to="/Offers">Offers</NavLink>
                      </MenuItem>
                      <MenuItem
                        active={activeNav === "/Advertisement" ? true : false}
                        onClick={() => {
                          setModalShow(true);
                          setActiveNave("/Advertisement");
                        }}
                      >
                        <NavLink to="/Advertisement">Advertisement</NavLink>
                      </MenuItem>
                    </SubMenu>
                  )}
                </SubMenu>

                <hr />

                {/* -------------------review--------------------------------------- */}
                <SubMenu
                  active={activeNav === `/review` ? true : false}
                  icon={
                    <AiOutlineStar
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                      }}
                    />
                  }
                  title="Reviews"
                >
                  <MenuItem
                    active={activeNav === `/review` ? true : false}
                    onClick={() => setActiveNave("/review")}
                  >
                    <NavLink to="/review">All Reviews</NavLink>
                  </MenuItem>
                </SubMenu>
                <hr />
                {/* =======================================add request------------------- */}
                <SubMenu
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <BsChatSquareQuote
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                        color: "white",
                      }}
                    />
                  }
                  title="AD Requests"
                >
                  <MenuItem
                    active={activeNav === `/manage_add` ? true : false}
                    onClick={() => setActiveNave("/manage_add")}
                  >
                    <NavLink to="/manage_add">Manage AD</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/manage_offer` ? true : false}
                    onClick={() => setActiveNave("/manage_offer")}
                  >
                    <NavLink to="/manage_offer">Manage Offers</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/newAdd` ? true : false}
                    onClick={() => setModalShow(true)}
                  >
                    Add New
                  </MenuItem>
                </SubMenu>
                <AddNewAdvertisement
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <hr />
                {/* ==add transectiont======== */}
                <SubMenu
                  active={activeNav === `/all-invoice` ? true : false}
                  icon={
                    <FaDollarSign
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                      }}
                    />
                  }
                  title="Transections"
                >
                  <MenuItem
                    active={activeNav === `/all-invoice` ? true : false}
                    onClick={() => setActiveNave("/all-invoice")}
                  >
                    <NavLink to="/all-invoice">All Invouces</NavLink>
                  </MenuItem>
                </SubMenu>
                <hr />
                <SubMenu
                  active={activeNav === `/general` ? true : false}
                  icon={
                    <FaDollarSign
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                      }}
                    />
                  }
                  title="Seetings"
                >
                  <MenuItem
                    active={activeNav === `/general` ? true : false}
                    onClick={() => setActiveNave("/general")}
                  >
                    <NavLink to="/general">General</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/business` ? true : false}
                    onClick={() => setActiveNave("/business")}
                  >
                    <NavLink to="/business">Business</NavLink>
                  </MenuItem>
                  
                  <MenuItem
                    active={activeNav === `/testimonials` ? true : false}
                    onClick={() => setActiveNave("/testimonials")}
                  >
                    <NavLink to="/testimonials">Testimonials</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/website` ? true : false}
                    onClick={() => setActiveNave("/website")}
                  >
                    <NavLink to="/website">Website</NavLink>
                  </MenuItem>
                </SubMenu>
                <hr />
                <SubMenu
                  active={activeNav === `/notification` ? true : false}
                  icon={
                    <IoMdNotificationsOutline
                      style={{
                        height: "24px",
                        width: "24px",
                        fontWeight: "500",
                        color:'white'
                      }}
                    />
                  }
                  title="Notification"
                >
                  <MenuItem
                    active={activeNav === `/notification` ? true : false}
                    onClick={() => setActiveNave("/notification")}
                  >
                    <NavLink to="/notification">Notification</NavLink>
                  </MenuItem>
                  
                </SubMenu>
              </Menu>
            </div>
          </div>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;
