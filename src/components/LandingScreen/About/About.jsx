import React from "react";
//import Typography from "@material-ui/core/Typography";
import Palette from "../../../assets/Palette.svg";
import dots from "../../../assets/dots-bkgd.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal";

import "./About.css";
import { Typography } from "@material-ui/core";

export default function About() {
  return (
    <div id="about-container">
      <img src={dots} alt="" className="dots"></img>
      <div className="content1">
        <Fade left duration={1600} delay={1200}>
          <Typography variant="h2" id="about">
            About
          </Typography>
        </Fade>
        <Row>
          <Col className="cont" xs={12} lg={6}>
            <Fade left duration={1600} delay={1200}>
              <Typography id="cont">
                Palette ‘21 is the 4th edition of the prestigious design-a-thon
                conducted yearly by IEEE VIT. While the last three editions
                witnessed amazing graphic designs and web designs, this year it
                is a 48 hour long design hack based entirely on the concepts of
                UI & UX. We strongly believe in the saying “Design is not how it
                looks
              </Typography>
            </Fade>
          </Col>
          <Col xs={12} lg={6}>
            <Fade right duration={1600} delay={1200}>
              <div id="logo">
                <img src={Palette} alt="Palette" id="paletteLogo"></img>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
      <Fade bottom duration={1600} delay={1200}>
        <div className="marquee">
          <div className="container r1">
            <span className="chld" id="ch1">
              BRANDING
            </span>
            <span className="chld" id="ch2">
              STRATEGY
            </span>
            <span className="chld" id="ch3">
              BUSINESS
            </span>
            <span className="chld" id="ch4">
              BRANDING
            </span>
            <span className="chld" id="ch5">
              STRATEGY
            </span>
            <span className="chld" id="ch6">
              BUSINESS
            </span>
          </div>
          <div className="container r2">
            <span className="chld" id="ch7">
              BUSINESS
            </span>
            <span className="chld" id="ch8">
              UI/UX
            </span>
            <span className="chld" id="ch9">
              PRODUCTION
            </span>
            <span className="chld" id="ch10">
              BUSINESS
            </span>
            <span className="chld" id="ch11">
              UI/UX
            </span>
            <span className="chld" id="ch12">
              PRODUCTION
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
}
