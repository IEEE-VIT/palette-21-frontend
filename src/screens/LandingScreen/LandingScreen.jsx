import React from "react";
import "./LandingScreen.css";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import Hero from "../../components/LandingPage/Hero/Hero";
import About from "../../components/LandingPage/About/About";
import EventThemes from "../../components/LandingPage/EventThemes/EventThemes";

export default function LandingScreen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <EventThemes />
    </div>
  );
}
