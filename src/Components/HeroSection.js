import React from "react";
import styled from "styled-components";
import { Button } from "./Styles/Button";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">Sajjad Saroya</h1>
          <p className="hero-para">
            I am Sajjad Saroya. A Web Developer, ReactJS, and a Freelancer.{" "}
          </p>
        </div>
        <Button className="btn hireme-btn">
          <NavLink to="/contact ">hire me</NavLink>
        </Button>
        {/* for image */}
        <div className="section-hero-image"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default HeroSection;
