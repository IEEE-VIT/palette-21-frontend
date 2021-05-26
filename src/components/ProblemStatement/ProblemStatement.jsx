import React, { useState } from "react";
import "./ProblemStatement.css";
import PropTypes from "prop-types";
import linkedin from "../../assets/linkedin_logo.svg";
import twitter from "../../assets/twitter_logo.svg";
import instagram from "../../assets/instagram_logo.svg";
import linkedin_dark from "../../assets/linkedin_logo_dark.svg";
import twitter_dark from "../../assets/twitter_logo_dark.svg";
import instagram_dark from "../../assets/instagram_logo_dark.svg";
//import cookies from "react-cookies";
export default function ProblemStatement(props) {
  const [attLeft] = useState(3);
  const [part1Locked, setPart1Locked] = useState(false);
  const [part2Locked, setPart2Locked] = useState(false);
  const [part3Locked, setPart3Locked] = useState(false);
  const [stLocked] = useState(false);
  const [part1] = useState("A mobile app");
  const [part2] = useState("for VIT students");
  const [part3] = useState("to identify red tag annas");
  // console.log(mode);
  //<i class="fas fa-lock"></i>
  //<i class="fas fa-unlock"></i>
  return (
    <div
      id="ProblemStatement__container"
      style={{
        display: props.selectedPage == 5 ? "flex" : "none",
      }}
    >
      <div id="ProblemStatement__divscont">
        <div
          id="ProblemStatement__generator"
          style={{
            color:
              props.mode == "dark"
                ? "rgba(255, 255, 255, 1)"
                : "rgba(0, 0, 0, 1)",
            backgroundColor:
              props.mode == "dark"
                ? "rgba(29, 29, 29, 1)"
                : "rgba(255, 255, 255, 1)",
            boxShadow:
              props.mode == "dark"
                ? "0px 25px 50px 0px rgba(0, 0, 0, 0.24)"
                : "0px 25px 50px 0px rgba(139, 139, 139, 0.24)",
          }}
        >
          <div
            id="ProblemStatement__generator-title"
            style={{
              borderBottom:
                props.mode == "dark"
                  ? " 0.5px solid rgba(255, 255, 255, 1)"
                  : "0.5px solid rgba(0, 0, 0, 1)",
            }}
          >
            <h3>Problem Statement Generator</h3>
          </div>
          <div id="ProblemStatement__parts">
            <div className="ProblemStatement__part">
              <div>
                {part1Locked ? (
                  <i className="fas fa-lock"></i>
                ) : (
                  <i
                    className="fas fa-unlock"
                    onClick={() => {
                      setPart1Locked(true);
                    }}
                  ></i>
                )}
                <h4>Design</h4>
              </div>
              <div>
                <h4>{part1}</h4>
              </div>
            </div>
            <div className="ProblemStatement__part">
              <div>
                {part2Locked ? (
                  <i className="fas fa-lock"></i>
                ) : (
                  <i
                    className="fas fa-unlock"
                    onClick={() => {
                      setPart2Locked(true);
                    }}
                  ></i>
                )}
                <h4>for</h4>
              </div>
              <div>
                <h4>{part2}</h4>
              </div>
            </div>
            <div className="ProblemStatement__part">
              <div>
                {part3Locked ? (
                  <i className="fas fa-lock"></i>
                ) : (
                  <i
                    className="fas fa-unlock"
                    onClick={() => {
                      setPart3Locked(true);
                    }}
                  ></i>
                )}
                <h4>to</h4>
              </div>
              <div>
                <h4>{part3}</h4>
              </div>
            </div>
          </div>
          <div
            id="ProblemStatement__attempts"
            style={{
              borderTop:
                props.mode == "dark"
                  ? " 0.5px solid rgba(255, 255, 255, 1)"
                  : "0.5px solid rgba(0, 0, 0, 1)",
            }}
          >
            <h4>Attempts Left : {attLeft}</h4>
          </div>
          <div
            id="ProblemStatement__genagain"
            style={{
              borderBottom:
                props.mode == "dark"
                  ? " 0.5px solid rgba(255, 255, 255, 1)"
                  : "0.5px solid rgba(0, 0, 0, 1)",
              borderTop:
                props.mode == "dark"
                  ? " 0.5px solid rgba(255, 255, 255, 1)"
                  : "0.5px solid rgba(0, 0, 0, 1)",
            }}
          >
            <i className="fas fa-sync"></i>
            <h3>Generate Again</h3>
          </div>
          <div id="ProblemStatement__lockst">
            <div
              style={{
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              {stLocked ? (
                <i className="fas fa-lock"></i>
              ) : (
                <i className="fas fa-unlock"></i>
              )}
            </div>
            <div style={{ color: "rgba(255, 255, 255, 1)" }}>
              <h4>Click to lock the statement</h4>
            </div>
          </div>
        </div>

        <div id="ProblemStatement__rightdiv">
          <div
            id="ProblemStatement__instructions"
            style={{
              backgroundColor:
                props.mode == "dark"
                  ? "rgba(29, 29, 29, 1)"
                  : "rgba(255, 255, 255, 1)",
              color:
                props.mode == "dark"
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(0, 0, 0, 1)",
            }}
          >
            <h3>Instructions</h3>
            <ul>
              <li>
                To qualify for Round 2, you must join our slack workspace as we
                will roll out additional information personally to you. Click
                here to join
              </li>
              <li>
                You can not generate new problem statements once you finalise on
                a problem statement you want to go with
              </li>
              <li>
                For any guidance or queries, kindly email to design@ieeevit.org
              </li>
            </ul>
          </div>
          <div
            id="ProblemStatement__socials"
            style={{
              backgroundColor:
                props.mode == "dark"
                  ? "rgba(29, 29, 29, 1)"
                  : "rgba(255, 255, 255, 1)",
              color:
                props.mode == "dark"
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(0, 0, 0, 1)",
            }}
          >
            <h4>For more updates follow IEEE VIT on </h4>
            <div id="ProblemStatement__socialicons">
              <a
                href="https://www.linkedin.com/company/ieee-vit-vellore"
                target="_blank"
                rel="noreferrer"
              >
                <img src={props.mode == "dark" ? linkedin : linkedin_dark} />
              </a>
              <a
                href="https://twitter.com/ieeevitvellore"
                target="_blank"
                rel="noreferrer"
              >
                <img src={props.mode == "dark" ? twitter : twitter_dark} />
              </a>
              <a
                href="https://www.instagram.com/ieeevitvellore/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={props.mode == "dark" ? instagram : instagram_dark} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProblemStatement.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.func.isRequired,
};
