import React from "react";
import Typography from "@material-ui/core/Typography";
import Palette from "../../../assets/Palette.svg";

import "./About.css";

export default function About() {
  return (
    <div>
      <div className="content">
        <Typography variant="h2" id="about">
          About
        </Typography>
        <div className="flex-container">
          <div className="flex-item" id="description">
            <Typography>
              While the last two editions witnessed amazing graphic designs and
              web designs, this year it is a 36 hour long design hack based
              entirely on the concepts of UI/UX.
            </Typography>
          </div>
          <div className="flex-item" id="logo">
            <img src={Palette} alt="Palette" id="paletteLogo"></img>
          </div>
        </div>
      </div>
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
    </div>
  );
}
