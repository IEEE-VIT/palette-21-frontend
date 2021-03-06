import React from "react";
//import { useHistory } from "react-router-dom";
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
import Discord from "../../components/LandingScreen/Discord/Discord";
//import { useCookies } from "react-cookie";
//import { useTheme } from "@material-ui/core";
import PropTypes from "prop-types";
//import api from "../../api/regPortal";

const LandingScreen = () => {
  //const [cookies, setCookies] = useCookies(["token", "ffcheck"]);
  //const history = useHistory();
  //const theme = useTheme();
  /*useEffect(() => {
    if (theme.palette.type === "dark") {
      props.toggleTheme();
    }
    if (cookies.token !== undefined) {
      const regPortal = new api(
        cookies.token,
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_BACKEND_API
      );
      regPortal
        .didFillForm()
        .then((result) => {
          // console.log(result.data);
          const apiData = result.data;
          if (!apiData.data.round0 || !apiData.data.teamFormed) {
            history.push("/userForm");
          } else {
            setCookies("ffcheck", "true");
            history.push("/dashboard");
          }
        })
        .catch(() => {
          // console.log(err);
        });
    }
  }, []);*/
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
      <Discord />
    </div>
  );
};

export default LandingScreen;

LandingScreen.propTypes = {
  toggleTheme: PropTypes.func,
};
