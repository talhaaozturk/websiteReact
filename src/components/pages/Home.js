import HeroSection from "../HeroSection";
import React from "react";
import "../HeroSection.css";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
