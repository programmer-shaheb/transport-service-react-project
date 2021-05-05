import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMaps = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
    maxWidth: "500px",
  };

  const defaultCenter = {
    lat: 23.810331,
    lng: 90.412521,
  };
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyD1hFyxtfEip0QRWpWz4C2CnI-V5A2xBcs">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </>
  );
};

export default GoogleMaps;
