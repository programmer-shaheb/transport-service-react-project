import React, { useContext } from "react";
import "../../../node_modules/jquery/dist/jquery.min";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { userContext } from "../../App";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedInUser, setIsLoggedInUser] = useContext(userContext);
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand brand-name" to="/">
                We Drive.
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/destination/BUS">
                      Destination
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  {!isLoggedInUser ? (
                    <li className="nav-item">
                      <NavLink
                        className="nav-link login-btn"
                        style={{ padding: "10px 20px" }}
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  ) : (
                    <>
                      <li className="nav-item user-name">
                        {isLoggedInUser.displayName || isLoggedInUser.email}
                      </li>
                      <button
                        className="logout-btn"
                        onClick={() => setIsLoggedInUser("")}
                      >
                        Logout
                      </button>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
