// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/common/Navbar";
// import Sidebar from "./components/common/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar /> */}
          <div className="page-container">
            <AppRoutes />
          </div>
        {/* </div>
      </div> */}
    </Router>
  );
}

export default App;
