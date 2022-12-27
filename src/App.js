import React from "react"; //Needed for nodejs v.16

import "./App.css";
import { useState } from "react";
// import Login from "./modules/authentication/components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./modules/navbar/component/Header";
import { AddClients } from "./modules/Clients/AddClients";
import MyBusiness from "./modules/Business/MyBusiness";
import General from "./modules/Seetings/General";
import SettingsBusiness from "./modules/Seetings/SettingsBusiness";
import SeetingsHome from "./modules/Seetings/SeetingsHome";
import Testimonials from "./modules/Seetings/Testimonials";
// import ForgatePassword from "./modules/authentication/components/forgetpass/ForgatePassword";
// import ResetPassword from "./modules/authentication/components/resetpass/ResetPassword";
import VerifiedUser from "./modules/User/component/verifieduser/VerifiedUser";
import AppUser from "./modules/User/component/appUser/pages/AppUser";
import AppUserDetails from "./modules/User/component/appUser/pages/AppUserDetails";
import SettingsWebsite from "./modules/Seetings/SettingsWebsite";
import Review from "./modules/review/pages/Review";
import Advertisement from "./modules/add_request/manage_add/pages/Advertisement";
import Offer from "./modules/add_request/manage_offers/pages/Offer";
import Verification from "./modules/User/component/verification_r/pages/Verification";
import ExportCSV from "./modules/Clients/ExportCSV";
import ImportCSV from "./modules/Clients/ImportCSV";
import EditUser from "./modules/Clients/EditUser";
import Category from "./modules/Clients/Category";
import Profile from "./modules/Clients/Profile";
import ClientProducts from "./modules/Clients/ClientProducts";
import ClientReviews from "./modules/Clients/ClientReviews";
import ClientUsers from "./modules/Clients/ClientUsers/ClientUsers";
import MenuBookNotification from "./modules/notification/MenuNotifications/MenuBookNotification";
import AddMenuBookNotification from "./modules/notification/MenuNotifications/AddMenuBookNotification";
import ClientAdvertisement from "./modules/Clients/ClientAdvertisement/ClientAdvertisement";
import ClientOffers from "./modules/Clients/ClientOffers/ClientOffers";
import MyBusinessWithData from "./modules/Business/MyBusinessWithData";
import ClientDashboard from "./modules/Clients/ClientDashboard";
import ClientEarning from "./modules/Clients/ClientEarning";
import Invoice from "./modules/Clients/Invoice/Invoice";
import AddClientOffer from "./modules/Clients/ClientOffers/AddClientOffer";




function App() {
  const [bodyWidth, setBodyWidth] = useState(false);
  const [hideToolbar, setHideToolbar] = useState(false);
  return (
    <div>
      <Router>
        <div
          className={` ${
            !bodyWidth && !hideToolbar
              ? "main-content"
              : !hideToolbar
              ? "main-content-collapsed"
              : ""
          }`}
        >
          {!hideToolbar && <Header setBodyWidth={setBodyWidth} />}
          <div>
            <Switch>
              {/* <Route exact path="/">
                <Login setHideToolbar={setHideToolbar} />
              </Route> */}
              <Route exact path="/addClients">
                <AddClients/>
              </Route>
              <Route exact path="/export-products">
                <ExportCSV/>
              </Route>
              <Route exact path="/import-products">
                <ImportCSV/>
              </Route>
              <Route exact path="/edit-user">
                <EditUser/>
              </Route>
              <Route exact path="/category">
                <Category/>
              </Route>
              <Route exact path="/clinet-reviews">
                <ClientReviews/>
              </Route>
              <Route exact path="/clinet-users">
                <ClientUsers/>
              </Route>
              <Route exact path="/client-advertisement">
                <ClientAdvertisement/>
              </Route>
              <Route exact path="/client-offer">
                <ClientOffers/>
              </Route>
              <Route exact path="/add-client-offer">
                <AddClientOffer/>
              </Route>
              <Route exact path="/profile">
                <Profile/>
              </Route>
              <Route exact path="/products">
                <ClientProducts/>
              </Route>
              <Route exact path="/my_business">
                <MyBusiness/>
              </Route>
              <Route exact path="/">
                <MyBusiness/>
              </Route>
              <Route exact path="/my_earning">
                <ClientEarning/>
              </Route>
              <Route exact path="/all-invoice">
                <Invoice/>
              </Route>
              <Route exact path="/my_business_data">
                <MyBusinessWithData/>
              </Route>
             
              <Route exact path="/general">
                <General/>
              </Route>
              <Route exact path="/business">
                <SettingsBusiness/>
              </Route>
              <Route exact path="/home-page">
                <SeetingsHome/>
              </Route>
              <Route exact path="/testimonials">
                <Testimonials/>
              </Route>
              <Route exact path="/website">
                <SettingsWebsite/>
              </Route>
             
              <Route exact path="/appUser">
                <AppUser/>
              </Route>
              <Route exact path="/verified_user">
                <VerifiedUser/>
              </Route>
              <Route exact path="/verification_r">
                <Verification/>
              </Route>
              <Route exact path="/app_user_details">
                <AppUserDetails/>
              </Route>
              <Route exact path="/review">
                <Review/>
              </Route>
              <Route exact path="/manage_add">
                <Advertisement/>
              </Route>
              <Route exact path="/manage_offer">
                <Offer/>
              </Route>
              
              <Route exact path="/all_clients">
                <Offer/>
              </Route>
              <Route exact path="/clients-dashboard">
                <ClientDashboard/>
              </Route>
              
             {/* notification */}
             <Route exact path="/notification">
                <MenuBookNotification/>
              </Route>
             <Route exact path="/add-notification">
                <AddMenuBookNotification/>
              </Route>
        
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
