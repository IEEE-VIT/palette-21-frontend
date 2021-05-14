import React from "react";
import "./LandingScreen.css";
import Flashback from "../../components/LandingScreen/Flashback/Flashback";
import Sponsors from "../../components/LandingScreen/Sponsors/Sponsors";
import Prizes from "../../components/LandingScreen/Prizes/Prizes";
import Register from "../../components/LandingScreen/Register/Register";
import Brand from "../../components/LandingScreen/Brand/Brand";
import Faq from "../../components/LandingScreen/Faq/Faq";
import Covid from "../../components/LandingScreen/Covid/Covid";
import Fade from "react-reveal/Fade";
import NavbarComponent from "../../components/LandingScreen/Navbar/Navbar";
import Hero from "../../components/LandingScreen/Hero/Hero";
import About from "../../components/LandingScreen/About/About";
import EventThemes from "../../components/LandingScreen/EventThemes/EventThemes";
import EventCarousel from "../../components/LandingScreen/Event/EventCarouselSection";
import TestimonialCarousel from "../../components/LandingScreen/Testimonials/TestimonialCarousel";
import Footer from "../../components/LandingScreen/Footer/Footer";

const LandingScreen = () => {
  return (
    <div id="LandingScreen__container">
      <NavbarComponent />
      <Hero />
      <Fade bottom duration={1000}>
        <About />
      </Fade>
      <Fade bottom duration={1000}>
        <div id="LandingScreen__eventthemes">
          <EventThemes />
        </div>
      </Fade>
      <EventCarousel />
      <Flashback />
      <Fade bottom duration={1000}>
        <TestimonialCarousel />
      </Fade>
      <Fade bottom duration={1000}>
        <Sponsors />
      </Fade>
      <Prizes />
      <Fade bottom duration={1000}>
        <Brand />
      </Fade>
      <Fade bottom duration={1000}>
        <Register />
      </Fade>
      <Faq />
      <Covid />
      <Footer />
    </div>
  );
};
export default LandingScreen;
