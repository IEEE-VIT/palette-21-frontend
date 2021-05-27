import React, { useState, useEffect } from "react";
import "./ProblemStatement.css";
import PropTypes from "prop-types";
import linkedin from "../../assets/linkedin_logo.svg";
import twitter from "../../assets/twitter_logo.svg";
import instagram from "../../assets/instagram_logo.svg";
import linkedin_dark from "../../assets/linkedin_logo_dark.svg";
import twitter_dark from "../../assets/twitter_logo_dark.svg";
import instagram_dark from "../../assets/instagram_logo_dark.svg";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";

import {
  getCurProb,
  generateProb,
  lockProb,
} from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";
import cookies from "react-cookies";
//import cookies from "react-cookies";
const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ProblemStatement(props) {
  const [attLeft, setAttLeft] = useState(3);
  const [part1Locked, setPart1Locked] = useState(false);
  const [part2Locked, setPart2Locked] = useState(false);
  const [part3Locked, setPart3Locked] = useState(false);
  const [part1, setPart1] = useState("What you will design");
  const [part2, setPart2] = useState("for what purpose");
  const [part3, setPart3] = useState("to help whom");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [locking, setLocking] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleOpen = () => {
    if (attLeft == 3) {
      props.mode == "light"
        ? toastDark("You haven't generated a problem statement!")
        : toastLight("You haven't generated a problem statement!");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    try {
      getCurProb()
        .then((resp) => {
          console.log(resp);
          setAttLeft(3 - resp.triesUsed);
          //resp.problemStatement
          setPart1Locked(resp.locked[0]);
          setPart2Locked(resp.locked[1]);
          setPart3Locked(resp.locked[2]);
          if (resp.problemStatement[0]) {
            setPart1(resp.problemStatement[0]);
          }
          if (resp.problemStatement[1]) {
            setPart2(resp.problemStatement[1]);
          }
          if (resp.problemStatement[2]) {
            setPart3(resp.problemStatement[2]);
          }
        })
        .catch((err) => {
          var curMode = cookies.load("mode");
          curMode == "light" ? toastDark(err) : toastLight(err);
        });
    } catch (error) {
      var curMode = cookies.load("mode");
      curMode == "light" ? toastDark(error) : toastLight(error);
    }
  }, []);
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
                  ? " 0.5px solid rgba(255, 255, 255, 0.25)"
                  : "0.5px solid rgba(0, 0, 0, 0.25)",
            }}
          >
            <h3>Problem Statement Generator</h3>
          </div>
          <div id="ProblemStatement__parts">
            <div className="ProblemStatement__part">
              <div>
                <h4>Design</h4>
              </div>
              <div
                style={{
                  backgroundColor:
                    props.mode == "dark"
                      ? "rgba(29, 29, 29, 1)"
                      : "rgba(255, 255, 255, 1)",
                }}
              >
                <h4
                  style={{
                    color:
                      props.mode == "dark"
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(0, 0, 0, 1)",
                  }}
                >
                  {part1}
                </h4>
              </div>
              <div
                onClick={() => {
                  if (!part1Locked) {
                    try {
                      lockProb(true, part2Locked, part3Locked)
                        .then(() => {
                          setPart1Locked(true);
                        })
                        .catch((err) => {
                          var curMode = cookies.load("mode");
                          curMode == "light" ? toastDark(err) : toastLight(err);
                        });
                    } catch (error) {
                      var curMode = cookies.load("mode");
                      curMode == "light" ? toastDark(error) : toastLight(error);
                    }
                  }
                }}
                className={part1Locked ? "ProblemStatement__part-locked" : ""}
              >
                {part1Locked ? (
                  <i className="fas fa-lock"></i>
                ) : (
                  <i className="fas fa-unlock"></i>
                )}
              </div>
            </div>
            <div className="ProblemStatement__part">
              <div>
                <h4>for</h4>
              </div>
              <div
                style={{
                  backgroundColor:
                    props.mode == "dark"
                      ? "rgba(29, 29, 29, 1)"
                      : "rgba(255, 255, 255, 1)",
                }}
              >
                <h4
                  style={{
                    color:
                      props.mode == "dark"
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(0, 0, 0, 1)",
                  }}
                >
                  {part2}
                </h4>
              </div>
              <div
                onClick={() => {
                  if (!part2Locked) {
                    try {
                      lockProb(part1Locked, true, part3Locked)
                        .then(() => {
                          setPart2Locked(true);
                        })
                        .catch((err) => {
                          var curMode = cookies.load("mode");
                          curMode == "light" ? toastDark(err) : toastLight(err);
                        });
                    } catch (error) {
                      var curMode = cookies.load("mode");
                      curMode == "light" ? toastDark(error) : toastLight(error);
                    }
                  }
                }}
                className={part2Locked ? "ProblemStatement__part-locked" : ""}
              >
                {part2Locked ? (
                  <i className="fas fa-lock"></i>
                ) : (
                  <i className="fas fa-unlock"></i>
                )}
              </div>
            </div>
            <div className="ProblemStatement__part">
              <div>
                <h4>to help</h4>
              </div>
              <div
                style={{
                  backgroundColor:
                    props.mode == "dark"
                      ? "rgba(29, 29, 29, 1)"
                      : "rgba(255, 255, 255, 1)",
                }}
              >
                <h4
                  style={{
                    color:
                      props.mode == "dark"
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(0, 0, 0, 1)",
                  }}
                >
                  {part3}
                </h4>
              </div>
              <div
                onClick={() => {
                  if (!part3Locked) {
                    try {
                      lockProb(part1Locked, part2Locked, true)
                        .then(() => {
                          setPart3Locked(true);
                        })
                        .catch((err) => {
                          var curMode = cookies.load("mode");
                          curMode == "light" ? toastDark(err) : toastLight(err);
                        });
                    } catch (error) {
                      var curMode = cookies.load("mode");
                      curMode == "light" ? toastDark(error) : toastLight(error);
                    }
                  }
                }}
                className={part3Locked ? "ProblemStatement__part-locked" : ""}
              >
                {part3Locked ? (
                  <i className="fas fa-lock"></i>
                ) : (
                  <i className="fas fa-unlock"></i>
                )}
              </div>
            </div>
          </div>
          <div
            id="ProblemStatement__attempts"
            style={{
              backgroundColor: "rgba(55, 26, 201, 0.16)",
              color: "rgba(105, 79, 239, 1)",
            }}
          >
            <h4>
              {part1Locked && part2Locked && part3Locked
                ? "You have locked all parts"
                : "Attempts Left : " + attLeft}
            </h4>
          </div>
          <div
            id="ProblemStatement__genagain"
            className={
              part1Locked && part2Locked && part3Locked
                ? "ProblemStatement__nogenagain"
                : generating
                ? "ProblemStatement__generating"
                : ""
            }
            onClick={() => {
              if (!part1Locked || !part2Locked || !part3Locked) {
                if (!generating) {
                  setGenerating(true);
                  try {
                    generateProb()
                      .then((resp) => {
                        setGenerating(false);
                        if (attLeft == 1) {
                          setPart1Locked(true);
                          setPart2Locked(true);
                          setPart3Locked(true);
                          setAttLeft(attLeft - 1);
                        } else {
                          setAttLeft(attLeft - 1);
                        }
                        //resp.problemStatement
                        if (resp.newProblemStatement[0]) {
                          setPart1(resp.newProblemStatement[0]);
                        }
                        if (resp.newProblemStatement[1]) {
                          setPart2(resp.newProblemStatement[1]);
                        }
                        if (resp.newProblemStatement[2]) {
                          setPart3(resp.newProblemStatement[2]);
                        }
                      })
                      .catch((err) => {
                        setGenerating(false);
                        var curMode = cookies.load("mode");
                        curMode == "light" ? toastDark(err) : toastLight(err);
                      });
                  } catch (error) {
                    setGenerating(false);
                    var curMode = cookies.load("mode");
                    curMode == "light" ? toastDark(error) : toastLight(error);
                  }
                }
              }
            }}
            style={{
              backgroundColor: "rgba(81, 51, 235, 0.08)",
              color:
                props.mode == "dark"
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(18, 18, 18, 1)",
            }}
          >
            {part1Locked && part2Locked && part3Locked ? (
              <h4
                style={{
                  color:
                    props.mode == "dark"
                      ? "rgba(122, 122, 122, 1)"
                      : "rgba(18, 18, 18, 1)",
                }}
              >
                You can’t generate the problem statements now
              </h4>
            ) : (
              <>
                <i
                  style={{
                    animation: generating ? "spin 0.9s linear infinite" : "",
                  }}
                  className="fas fa-sync"
                ></i>
                <h3>{attLeft == 3 ? "Generate" : "Generate Again"}</h3>
              </>
            )}
          </div>
          <div
            id="ProblemStatement__lockst"
            className={
              part1Locked && part2Locked && part3Locked
                ? "ProblemStatement__lockedst"
                : ""
            }
          >
            <div
              onClick={() => {
                if (!part1Locked || !part2Locked || !part3Locked) {
                  handleOpen();
                }
              }}
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              <h4>
                {part1Locked && part2Locked && part3Locked
                  ? "Statement has been locked"
                  : "Lock the statement"}
              </h4>
              {part1Locked && part2Locked && part3Locked ? (
                <i className="fas fa-lock"></i>
              ) : (
                ""
              )}
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
                Please make sure that only one of the members of the team
                interacts with the generator for a smoother workflow
              </li>
              <li>
                The problem statements are provided in the{" "}
                <span style={{ whiteSpace: "nowrap", overflow: "none" }}>
                  format of :{" "}
                </span>
                <br />
                <b>Design</b>
                <br />
                <b>For</b>
                <br /> <b>To help</b>
                <br />
              </li>
              <li>
                Each section of the format can be locked in once generated with
                lock button on right. This will make sure that the section which
                is locked in stays static even after you chose to generate
                randomly for other sections.
              </li>
              <li>
                Once you are satisfied with your problem statement, go ahead and
                click on Lock the Statement.
              </li>
              <li>
                Each team will have a total of 3 attempts to generate a problem
                statement of their choice. After the third attempt, the problem
                displayed would get locked automatically.
              </li>
              <li>
                For any guidance or queries, kindly head over to discord and
                open a ticket. We will be there right away.
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
            <h4>
              For more updates<span> follow IEEE VIT on </span>
            </h4>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ border: "0px", outline: "none" }}
      >
        <Fade in={open}>
          <div
            id="ProblemStatement__modal"
            style={{
              backgroundColor: "white",
              border: "0px",
              outline: "none",
              borderRadius: "8px",
              padding: "30px 30px",
              width: "500px",
            }}
          >
            <h4>Are you sure you want to lock the problem statement?</h4>
            <p>
              Design <span>{part1}</span> for <span>{part2}</span> to help{" "}
              <span>{part3}</span>
            </p>
            <div id="ProblemStatement__modal-btngrp">
              {locking ? (
                <CircularProgress
                  style={{
                    width: "27px",
                    height: "27px",
                    alignSelf: "center",
                  }}
                />
              ) : (
                <>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    TAKE ME BACK
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setLocking(true);
                      if (!part1Locked || !part2Locked || !part3Locked) {
                        try {
                          lockProb(true, true, true)
                            .then(() => {
                              setPart1Locked(true);
                              setPart2Locked(true);
                              setPart3Locked(true);
                              setLocking(false);
                              handleClose();
                            })
                            .catch((err) => {
                              setLocking(false);
                              handleClose();
                              var curMode = cookies.load("mode");
                              curMode == "light"
                                ? toastDark(err)
                                : toastLight(err);
                            });
                        } catch (error) {
                          setLocking(false);
                          handleClose();
                          var curMode = cookies.load("mode");
                          curMode == "light"
                            ? toastDark(error)
                            : toastLight(error);
                        }
                      }
                    }}
                  >
                    YES LOCK THE STATEMENT
                  </Button>
                </>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

ProblemStatement.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.func.isRequired,
};
