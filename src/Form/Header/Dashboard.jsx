import React from "react";
import MenuBar from "./MenuBar";
import ProductList from "../Pages/ProductList";
import CreateUser from "../Pages/CreateUser";
import UserList from "../Pages/UserList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logout from "./Logout";

function Dashboard() {
  return (
    <div className="container">
      <div
        className="dashboard"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className="Menu">
          <MenuBar />
        </div>
        <div className="logout">
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
