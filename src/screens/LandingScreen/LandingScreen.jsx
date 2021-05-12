import React from "react";
import "./LandingScreen.css";

import NavbarComponent from "../../components/LandingScreen/Navbar/Navbar";
import Hero from "../../components/LandingScreen/Hero/Hero";
import About from "../../components/LandingScreen/About/About";
import EventThemes from "../../components/LandingScreen/EventThemes/EventThemes";
import EventCarousel from "../../components/LandingScreen/Event/EventCarouselSection";
import TestimonialCarousel from "../../components/LandingScreen/Testimonials/TestimonialCarousel";
import Footer from "../../components/LandingScreen/Footer/Footer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Neue Montreal"].join(","),
  },
});

export default function LandingScreen() {
  return (
    <div id="LandingScreen__container">
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
