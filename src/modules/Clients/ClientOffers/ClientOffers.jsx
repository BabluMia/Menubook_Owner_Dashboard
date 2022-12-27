import { Search } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import ClientOffersList from "./ClientOffersList";

const ClientOffers = () => {
  const history = useHistory()
  return (
    <div className="parent text-capitalize">
      <div className="main-div">
        <div className="new-user mt-4">
          <div className="d-flex gap-3 align-items-center">
            <p>Add Offer</p>
            <button onClick={()=>history.push('/add-client-offer')} className="orange-btn">Add New</button>
          </div>
        </div>

        <div className="filter_search row mt-4 justify-content-center">
            <div className="col-lg-3 col-md-6 mb-3 d-flex align-items-center">
              {/* <span className="me-2" style={{ fontSize: "14px" }}>
                Business Type :{" "}
              </span> */}
              <select name="" id="" className="me-2">
                <option value="bulk_action">Bulk action</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
              <span className="me-2">
                <button className="orange-btn" style={{ padding: "5px 20px" }}>
                  Apply
                </button>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 mb-3 d-flex align-items-center">
              <span className="me-2" style={{ fontSize: "14px", width:"30%" }}>
                Sort by :{" "}
              </span>
              <select name="" id="" className="me-2">
                <option value="All">New</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
              
            </div>
            <div className="col-lg-2 col-md-6 mb-3 d-flex align-items-center">
              <span className="me-2" style={{ fontSize: "14px" , width:"70%"}}>
                Filter by :{" "}
              </span>
              <select name="" id="" className="me-2">
                <option value="All">New</option>
                <option value="Food">Food</option>
                <option value="None">None</option>
              </select>
            </div>
            <div className="col-lg-3 col-md-6 mb-3 ">
              <span className="search">
                <Search className="search_icon" />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search comments, users.."
                />
              </span>
            </div>
          </div>

          <div className="table_div mt-4">
           <ClientOffersList/>
          </div>
      </div>
    </div>
  );
};

export default ClientOffers;
