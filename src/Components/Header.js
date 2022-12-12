import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo2.png";

import Navbar from "./Navbar";
import styled from "styled-components";

const header = () => {
  return (
    <MainHeader>
      <h2>Sajjad Saroya | ReactJs Developer</h2>
      <NavLink to="./">
        {/* <img src={logo} alt="logo" width="250px" height="70" className="logo" /> */}
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    text-decoration: none;
    color: black;
  }
`;
export default header;
