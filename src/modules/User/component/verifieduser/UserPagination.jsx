import React from "react";
import Pagination from "react-bootstrap/Pagination";
const UserPagination = () => {
  return (
    <div>
      <div className="d-flex pagination justify-content-end align-items-center gap-3">
        <p>12 Items</p>
        <Pagination>
        <Pagination.First />
        <Pagination.Prev />
      
        <Pagination.Item active >{1}</Pagination.Item>
      
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      </div>

     
    </div>
  );
};

export default UserPagination;
