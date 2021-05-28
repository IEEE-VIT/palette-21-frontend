import React from "react";
import "./Sponsors.css";
import acciolbis from "../../../assets/acciolbis.png";
import axure from "../../../assets/axure.png";
import divami from "../../../assets/divami.png";
import github from "../../../assets/github.jpg";
import rosenfeld from "../../../assets/rosenfeld.png";
import sketch from "../../../assets/sketch.png";
import streamyard from "../../../assets/streamyard.png";
import icons8 from "../../../assets/icons8final.png";
import unbearable from "../../../assets/unbearable.jpg";
import CP from "../../../assets/CP.svg";

import Fade from "react-reveal/Fade";

export default function Sponsors() {
  return (
    <div id="Sponsors__container">
      <Fade bottom cascade duration={1000} delay={500}>
        <p id="Sponsors__heading">Meet our Sponsors</p>
        <div id="Sponsors__logos">
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              className="Sponsors__smallerlogo"
              style={{ height: "70px" }}
            />
          </a>
          <a href="https://www.divami.com/" target="_blank" rel="noreferrer">
            <img src={divami} className="Sponsors__smallerlogo" />
          </a>
          <a href="https://circleone.in/" target="_blank" rel="noreferrer">
            <img src={CP} />
          </a>
          <a href="https://www.accioibis.com/" target="_blank" rel="noreferrer">
            <img src={acciolbis} />
          </a>
          <a
            href="https://instagram.com/unbearable.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={unbearable} />
          </a>
          <a href="https://www.github.com/" target="_blank" rel="noreferrer">
            <img src={github} />
          </a>

          <a href="https://icons8.com/" target="_blank" rel="noreferrer">
            <img src={icons8} />
          </a>

          <a href="https://www.sketch.com/" target="_blank" rel="noreferrer">
            <img src={sketch} />
          </a>
          <a href="https://www.axure.com/" target="_blank" rel="noreferrer">
            <img src={axure} className="Sponsors__smallerlogo" />
          </a>
          <a href="https://streamyard.com/" target="_blank" rel="noreferrer">
            <img src={streamyard} />
          </a>

          <a
            href="https://rosenfeldmedia.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={rosenfeld} />
          </a>
        </div>
      </Fade>
    </div>
  );
}
