import React from "react";
import "./EventThemes.css";
import ThemeTopLeftStar from "../../../assets/ThemeTopLeftStar.png";
import ThemeBottomRightStar from "../../../assets/ThemeBottomRightStar.png";
import ThemePhones from "../../../assets/ThemePhones.png";
import Fade from "react-reveal";

export default function EventThemes() {
  return (
    <div id="EventThemes__container">
      <Fade left duration={1000} delay={500}>
        <div id="EventThemes__leftcontainer">
          <img src={ThemeTopLeftStar} />
          <img src={ThemePhones} />
          <img src={ThemeBottomRightStar} />
        </div>
      </Fade>
      <div id="EventThemes__rightcontainer">
        <Fade right cascade duration={1000} delay={500}>
          <div>
            <h3 id="EventThemes__rightcontainer-heading">
              Introducing our theme
            </h3>
            <h4 id="EventThemes__rightcontainer-content">
              In addition to the output or presentation, we’ll also be looking
              at the design process and steps involved like research, building
              user personas, a design system, wireframing, branding and
              prototyping. On 27th May, participants will be given a set of
              randomly generated UX problems and they will be continuing with
              one of their choices.
            </h4>
          </div>
          <div>
            <h2 id="EventThemes__rightcontainer-theme">UI/UX</h2>
            <h3 id="EventThemes__rightcontainer-quote">
              Design is not how it looks, design is how it works.
            </h3>
          </div>
        </Fade>
      </div>
    </div>
  );
}
