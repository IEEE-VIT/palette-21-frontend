import React from "react";
import "./Register.css";
import StarOne from "../../../assets/regStar1.png";
import StarTwo from "../../../assets/regStar2.png";
import Illustration from "../../../assets/Illustration.png";
import IllustrationTwo from "../../../assets/IllustrationTwo.png";
import google from "../../../assets/google.png";
import figma from "../../../assets/figma.png";
import Fade from "react-reveal/Fade";

const Register = () => {
  return (
    <div className="Register__register-body">
      <Fade right delay={1600} duration={1600}>
        <img src={StarOne} className="Register__star-one" />
      </Fade>
      <img className="Register__illus-one" src={Illustration} />
      <Fade left delay={1000} duration={1600}>
        <img src={StarTwo} className="Register__star-two" />
      </Fade>
      <Fade bottom cascade delay={1000} duration={1600}>
        <p className="Register__register-heading">
          Register yourself for palette{" "}
          <span style={{ whiteSpace: "nowrap" }}>2021!</span>
        </p>
        <br />
        <div id="Register__register-btns">
          <button className="Register__btn Register__register">
            <img src={google} />
            CONTINUE WITH GOOGLE
          </button>
          <button className="Register__btn Register__register">
            <img src={figma} />
            CONTINUE WITH FIGMA
          </button>
        </div>
      </Fade>
      <img className="Register__illus-two" src={IllustrationTwo} />
    </div>
  );
};
export default Register;
