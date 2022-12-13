import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo2.png";

import Navbar from "./Navbar";
import styled from "styled-components";

const header = () => {
  return (
    <MainHeader>
      <span>Sajjad Saroya | ReactJs Developer</span>
      <NavLink to="./">
        {/* <img src={logo} alt="logo" width="250px" height="70" className="logo" /> */}
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 3.2rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    text-decoration: none;
    color: white;
    font-size: 2rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    background-color: black;
  }
`;
export default header;
