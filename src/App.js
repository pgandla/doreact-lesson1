import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import UserState from "./UserState";
// import UnCtrlForm from "./UncontrolledForm";
import NavBar from "./NavBar";
import Outlet from "./Outlet";

function App() {
  return (
    <div className="App">
      <h1>React Router Dom</h1>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
