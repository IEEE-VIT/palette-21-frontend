import React from "react";
import "./LandingScreen.css";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import Hero from "../../components/LandingPage/Hero/Hero";
import About from "../../components/LandingPage/About/About";
import EventThemes from "../../components/LandingPage/EventThemes/EventThemes";
import EventCarousel from "../../components/LandingPage/Event/EventCarouselSection";

export default function LandingScreen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <EventThemes />
      <EventCarousel />
    </div>
  );
}
