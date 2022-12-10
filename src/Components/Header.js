import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo2.png";

import Navbar from "./Navbar";

const header = () => {
  return (
    <header>
      <NavLink to="./">
        <img src={logo} alt="logo" width="250px" height="70" />
      </NavLink>
      <Navbar></Navbar>
    </header>
  );
};

export default header;
