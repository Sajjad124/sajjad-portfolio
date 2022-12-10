import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.JPG";

const header = () => {
  return (
    <header>
      <NavLink to="./">
        <img src={logo} alt="logo" width="250px" height="70" />
      </NavLink>
    </header>
  );
};

export default header;
