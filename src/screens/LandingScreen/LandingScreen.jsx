import React from "react";
import "./LandingScreen.css";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import Hero from "../../components/LandingPage/Hero/Hero";
import About from "../../components/LandingPage/About/About";

export default function LandingScreen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
