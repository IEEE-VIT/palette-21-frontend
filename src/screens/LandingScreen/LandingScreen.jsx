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
    <div
      data-spy="scroll"
      data-target="#Navbar__container"
      data-offset="0"
      id="LandingScreen__container"
    >
      <NavbarComponent />
      <div id="Hero">
        <Hero />
      </div>
      <Fade bottom duration={500}>
        <About />
      </Fade>
      <Fade bottom duration={500}>
        <div id="LandingScreen__eventthemes">
          <EventThemes />
        </div>
      </Fade>
      <div id="Speakers">
        <EventCarousel />
      </div>
      <div id="Past">
        <Flashback />
      </div>
      <Fade bottom duration={500}>
        <TestimonialCarousel />
      </Fade>
      <Fade bottom duration={500}>
        <div id="Sponsors">
          <Sponsors />
        </div>
      </Fade>
      <Prizes />
      <Fade bottom duration={500}>
        <Brand />
      </Fade>
      <Fade bottom duration={500}>
        <div id="Register">
          <Register />
        </div>
      </Fade>
      <Faq />
      <div id="Donate">
        <Covid />
      </div>
      <div id="ContactUs">
        <Footer />
      </div>
    </div>
  );
};
export default LandingScreen;
