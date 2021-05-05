import React from "react";
import { Link } from "react-router-dom";
import "./VehicleList.css";

const VehicleList = (props) => {
  const { name, imgUrl } = props.vehicle;

  return (
    <>
      <div className="col-md-3 col-10 mx-auto mt-5 vehicle-card">
        <div className="card d-flex justify-content-center align-items-center">
          <Link to={`/destination/${name}`}>
            <img
              className="card-img-top img-fluid "
              src={imgUrl}
              alt={name}
              style={{ width: "100%", maxWidth: "200px", height: "165px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VehicleList;
