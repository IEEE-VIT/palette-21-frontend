import React from "react";
import "./LandingScreen.css";

import Navbar from "../../components/LandingPage/Navbar/Navbar";
import NavbarComponent from "../../components/LandingPage/Navbar/Navbar";
import Hero from "../../components/LandingPage/Hero/Hero";
import About from "../../components/LandingPage/About/About";
import EventThemes from "../../components/LandingPage/EventThemes/EventThemes";
import EventCarousel from "../../components/LandingPage/Event/EventCarouselSection";
import TestimonialCarousel from "../../components/LandingPage/Testimonials/TestimonialCarousel";
import Footer from "../../components/LandingPage/Footer/Footer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Neue Montreal"].join(","),
  },
});

export default function LandingScreen() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavbarComponent />
        <Hero />
        <About />
        <EventThemes />
        <EventCarousel />
        <TestimonialCarousel />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
