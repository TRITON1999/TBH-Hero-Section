// import "./HeroSection.css";
// import Navigation from "./Navigation";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section sky">
      <div id="space">
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
        <div class="stars"></div>
      </div>
      <div className="hero-container upp ">
        <div className="centering">
          <div className="hero-text">
            <p className="text1">Make Youth</p>
            <p className="text2">JOBS & CAREER</p>
            <p className="text3">READY</p>
            <p className="text4">
              Build Practical Skills with Top Industry Experts
            </p>
            <p className="text5">dummy text</p>
            <button>BOOK A FREE CALL</button>
          </div>{" "}
        </div>
        <div className="hero-img">
          <img className="rocket-img" src={require("./rocketman.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
