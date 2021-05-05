import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import "./LoginFunction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginFunction = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/destination/BUS" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const [users, setUsers] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const [isLoggedInUser, setIsLoggedInUser] = useContext(userContext);

  const clearInput = () => {
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          setUsers(res.user);
          setIsLoggedInUser(res.user);
          history.replace(from);
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
    } else {
      setPasswordError("Password Don't Match");
    }
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUsers(res.user);
        setIsLoggedInUser(res.user);
        history.replace(from);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        setUsers(res.user);
        setIsLoggedInUser(res.user);
        history.replace(from);
      });
  };

  const authListner = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        clearError();
        setUsers(user);
      } else {
        setUsers("");
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);

  return (
    <>
      <div className="card main-card">
        <div className="card-body body-card">
          <>
            {hasAccount ? (
              <>
                <form>
                  <h2>Log In</h2>
                  <div className="form-group m-4">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="example@gmail.com"
                      value={email}
                      name="email"
                      autoFocus
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <div className="alert alert-danger mt-1" role="alert">
                        {emailError}
                      </div>
                    )}
                  </div>
                  <div className="form-group m-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      value={password}
                      name="password"
                      autoFocus
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                    {passwordError && (
                      <div className="alert alert-danger mt-1" role="alert">
                        {passwordError}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-outline-primary w-75"
                      onClick={handleLogIn}
                    >
                      Login
                    </button>
                    <p className="mt-2">
                      Don't Have An Account ?
                      <span
                        className="text-primary special-text"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Create An Account
                      </span>
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <>
                <form>
                  <h2>Create An Account</h2>
                  <div className="form-group m-4">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Name"
                      value={name}
                      autoFocus
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="example@gmail.com"
                      value={email}
                      autoFocus
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <div className="alert alert-danger mt-1" role="alert">
                        {emailError}
                      </div>
                    )}
                  </div>
                  <div className="form-group m-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      value={password}
                      name={password}
                      autoFocus
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      name="confirmPassword"
                      autoFocus
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Confirm Password"
                    />
                    {passwordError && (
                      <div className="alert alert-danger mt-1" role="alert">
                        {passwordError}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-outline-primary w-75"
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </button>
                    <p className="mt-2">
                      Already Have An Account ?
                      <span
                        className="text-primary special-text"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </form>
              </>
            )}
          </>
        </div>
      </div>
      <button
        className="btn btn-outline-primary w-75 mt-3 social-btn"
        onClick={handleGoogleLogin}
        style={{ borderRadius: "20px" }}
      >
        <FontAwesomeIcon icon={faGoogle} className="icon" /> Continue With
        Google
      </button>
    </>
  );
};

export default LoginFunction;
