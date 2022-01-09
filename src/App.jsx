import React from "react";

import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import WelcomePage from "./Components/WelcomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <NavBar />
          <ToastContainer />
        </header>
        <Routes>
          {/* <Route path="/" element={ } /> */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/sigin" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
