import React from "react";
import { useParams } from "react-router";
import vehicles from "../../data/data";
import RideDetails from "./RideDetails";

const Destination = () => {
  const { vehicleName } = useParams();

  const sharingVehicle = vehicles.find(
    (singleVehicle) => singleVehicle.name === vehicleName
  );

  return (
    <>
      <RideDetails sharingVehicle={sharingVehicle}></RideDetails>
    </>
  );
};

export default Destination;
