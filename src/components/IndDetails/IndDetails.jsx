import React, { createRef, useState, useEffect } from "react";
import "./IndDetails.css";
import PropTypes from "prop-types";
import figma from "../../assets/figma.svg";
import framer from "../../assets/framer.svg";
import graphic from "../../assets/graphic.png";
import sketch from "../../assets/sketch.svg";
import xd from "../../assets/xd.svg";
import webflow from "../../assets/webflow.svg";
import invision from "../../assets/Invision.svg";
import protopie from "../../assets/ProtoPie.svg";
import principle from "../../assets/Principle.svg";
import ae from "../../assets/adobe-after-effects.svg";
import Illustrator from "../../assets/adobe-illustrator.svg";
import { sendInvite } from "../../utils/DashboardHelperFuncs";
import cookies from "react-cookies";
import { toastDark, toastLight } from "../../utils/Toast";
import ReCAPTCHA from "react-google-recaptcha";
import { CircularProgress } from "@material-ui/core";

export default function IndDetails({
  mode,
  name,
  imgUrl,
  skills,
  tools,
  userId,
  invitedBool,
}) {
  //console.log(mode, name, imgUrl, skills, tools, inviteFunc);
  const [invited, setInvited] = useState(false);
  const [inviting, setInviting] = useState(false);
  const recapthaRef = createRef();

  useEffect(() => {
    setInvited(invitedBool);
  }, [invitedBool]);
  function retImgUrl(toolName) {
    if (toolName == "Figma") {
      return figma;
    } else if (toolName == "Adobe XD") {
      return xd;
    } else if (toolName == "Sketch") {
      return sketch;
    } else if (toolName == "Framer") {
      return framer;
    } else if (toolName == "Graphic") {
      return graphic;
    } else if (toolName == "Illustrator") {
      return Illustrator;
    } else if (toolName == "After Effects") {
      return ae;
    } else if (toolName == "Webflow") {
      return webflow;
    } else if (toolName == "Protopie") {
      return protopie;
    } else if (toolName == "Invision") {
      return invision;
    } else if (toolName == "Principle") {
      return principle;
    }
  }
  return (
    <div
      id="IndDetails__container"
      style={{
        backgroundColor:
          mode == "dark" ? "rgba(20, 20, 20, 1)" : "rgba(255, 255, 255, 1)",
        border:
          mode == "dark"
            ? "1px solid rgba(41, 41, 41, 1)"
            : "1px solid rgba(235, 235, 235, 1)",
      }}
    >
      <img src={imgUrl} />
      <h2
        style={{
          color:
            mode == "dark" ? "rgba(255, 255, 255, 1)" : "rgba(20, 20, 20, 1)",
        }}
      >
        {name}
      </h2>
      <div id="IndDetails__skills">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="IndDetails__skill"
            style={{
              backgroundColor:
                mode == "dark"
                  ? "rgba(41, 41, 41, 1)"
                  : "rgba(235, 235, 235, 1)",
              color:
                mode == "dark"
                  ? "rgba(194, 194, 194, 1)"
                  : "rgba(61, 61, 61, 1)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
      <div id="IndDetails__tools">
        {tools.map((tool, index) => (
          <img key={index} src={retImgUrl(tool)} />
        ))}
      </div>
      <CircularProgress
        style={{
          display: inviting ? "flex" : "none",
          width: "30px",
          height: "30px",
          position: "absolute",
          bottom: "20px",
        }}
      />
      <div
        id="IndDetails__btn"
        style={{ display: inviting ? "none" : "flex" }}
        onClick={async () => {
          try {
            setInviting(true);
            const recaptchaToken = await recapthaRef.current.executeAsync();
            sendInvite(userId, recaptchaToken)
              .then(async () => {
                setInvited(true);
                setInviting(false);
              })
              .catch((err) => {
                setInviting(false);
                var curMode = cookies.load("mode");
                //console.log(curMode);
                curMode == "light"
                  ? toastDark(
                      err ? err : "Something Went Wrong! Please try again!"
                    )
                  : toastLight(
                      err ? err : "Something Went Wrong! Please try again!"
                    );
              });
          } catch {
            // console.log(`Caught by try/catch ${error}`);
          }
        }}
        className={invited ? "IndDetails__invited" : "dummy"}
      >
        <h4>{invited ? "INVITE SENT" : "INVITE"}</h4>
      </div>
      <ReCAPTCHA
        ref={recapthaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_SITE_KEY}
        //lmao 4
        theme="dark"
      />
    </div>
  );
}
IndDetails.propTypes = {
  mode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  inviteFunc: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  invitedBool: PropTypes.bool.isRequired,
};
