import React from "react";
import "./HeroSection.css";
import "../App.css";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/video/Pexels Videos 2169879.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAİTS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;
