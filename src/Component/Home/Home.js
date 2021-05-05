import React from "react";
import VehicleList from "./VehicleList";
import vehicles from "../../data/data";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row  gy-4 mt-5">
                {vehicles.map((vehicle) => (
                  <VehicleList key={vehicle.id} vehicle={vehicle}></VehicleList>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
