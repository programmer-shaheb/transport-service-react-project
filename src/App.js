import "./App.css";
import Navbar from "./Component/Header/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Destination from "./Component/Destination/Destination";
import Login from "./Component/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Component/Login/PrivateRoute";

export const userContext = createContext();

function App() {
  const [isLoggedInUser, setIsLoggedInUser] = useState("");
  return (
    <userContext.Provider value={[isLoggedInUser, setIsLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/destination/:vehicleName">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
