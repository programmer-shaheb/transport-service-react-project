import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMaps from "../GoogleMap/GoogleMap";
import "./RideDetails.css";
import DatePickers from "./DatePickers";

const RideDetails = (props) => {
  const { name, imgUrl, capacity, fare } = props.sharingVehicle;
  const [pickTo, setPickTo] = useState("");
  const [pickFrom, setPickFrom] = useState("");
  const [getDestination, setGetDestination] = useState(true);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-5 col-10 mt-4 ">
                <div className="card">
                  <div className="card-body ride-style">
                    {getDestination ? (
                      <>
                        <form>
                          <h3>Choose Destination</h3>
                          <div className="form-group m-4">
                            <label>Pick From</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="From..."
                              value={pickFrom}
                              autoFocus
                              required
                              onChange={(e) => setPickFrom(e.target.value)}
                            />
                          </div>
                          <div className="form-group m-4">
                            <label>Pick to</label>
                            <input
                              type="text"
                              value={pickTo}
                              autoFocus
                              onChange={(e) => setPickTo(e.target.value)}
                              className="form-control"
                              placeholder="To..."
                            />
                          </div>
                          <div className="text-center">
                            <label>Set Date: </label>
                            <DatePickers></DatePickers>
                            <button
                              className="btn btn-outline-primary w-75 mt-4 btn-destination"
                              onClick={() => setGetDestination(!getDestination)}
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <>
                        <div>
                          <div className="pickUp">
                            <h3>
                              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                              {pickFrom}
                            </h3>
                            <h3>
                              <FontAwesomeIcon icon={faMapMarkerAlt} /> {pickTo}
                            </h3>
                          </div>
                          <div className="rideDetails mt-3 d-flex justify-content-space-between align-items-center">
                            <img src={imgUrl} alt="" />
                            <h4 style={{ margin: "0 15px" }}>{name}</h4>
                            <h4 style={{ margin: "0 10px" }}>
                              <FontAwesomeIcon
                                icon={faUserFriends}
                                className="icon"
                              />
                              {capacity}
                            </h4>
                            <h4 style={{ margin: "0 30px" }}>$ {fare}</h4>
                          </div>
                          <div className="rideDetails mt-3 d-flex justify-content-space-between align-items-center">
                            <img src={imgUrl} alt="" />
                            <h4 style={{ margin: "0 15px" }}>{name}</h4>
                            <h4 style={{ margin: "0 10px" }}>
                              <FontAwesomeIcon
                                icon={faUserFriends}
                                className="icon"
                              />
                              {capacity}
                            </h4>
                            <h4 style={{ margin: "0 30px" }}>$ {fare}</h4>
                          </div>
                          <div className="rideDetails mt-3 d-flex justify-content-space-between align-items-center">
                            <img src={imgUrl} alt="" />
                            <h4 style={{ margin: "0 15px" }}>{name}</h4>
                            <h4 style={{ margin: "0 10px" }}>
                              <FontAwesomeIcon
                                icon={faUserFriends}
                                className="icon"
                              />
                              {capacity}
                            </h4>
                            <h4 style={{ margin: "0 30px" }}>$ {fare}</h4>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-10 mt-4 mx-auto">
                <GoogleMaps></GoogleMaps>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RideDetails;
