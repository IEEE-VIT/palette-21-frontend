import React from "react";
import "./LandingScreen.css";

import Navbar from "../../components/LandingPage/Navbar/Navbar";
import EventThemes from "../../components/LandingPage/EventThemes/EventThemes";
import EventCarousel from "../../components/LandingPage/Event/EventCarouselSection";
import TestimonialCarousel from "../../components/LandingPage/Testimonials/TestimonialCarousel";
import Footer from "../../components/LandingPage/Footer/Footer";

export default function LandingScreen() {
  return (
    <div>
      <Navbar />
      <EventThemes />
      <EventCarousel />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}
