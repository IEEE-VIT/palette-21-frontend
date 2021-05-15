import React from "react";
import "./Brand.css";
import brandimg from "../../../assets/brand-img-desktop.png";
import brandimgbigger from "../../../assets/brand-img-bigger.png";
import Fade from "react-reveal/Fade";

const Brand = () => {
  return (
    <div className="main-brand-div">
      <Fade bottom cascade duration={1000} delay={500}>
        <div className="brand-content">
          <div className="brand-head">Let your creative juices flow</div>
          <br />
          <p>The one of its kind Design Hack</p>
        </div>
      </Fade>
      <Fade right duration={1000} delay={500}>
        <img src={brandimg} id="brand-img" />
        <img src={brandimgbigger} id="brand-img-bigger" />
      </Fade>
    </div>
  );
};
export default Brand;
