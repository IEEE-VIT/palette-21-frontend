import React, { useState, useEffect, createRef } from "react";
import "./SelfTeamPage.css";
import ReCAPTCHA from "react-google-recaptcha";
import cookies from "react-cookies";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { editTeamName, leaveTeam } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";
import { joinTeam } from "../../utils/DashboardHelperFuncs";
import { CircularProgress } from "@material-ui/core";

export default function SelfTeamPage({
  mode,
  selectedComp,
  teamName,
  teamUsers,
  teamCode,
}) {
  //console.log(teamName);
  const recapthaRef = createRef();
  const [changingName, setChangingName] = useState(false);
  const [curTeamName, setCurTeamName] = useState("");
  const [joinTeamCode, setJoinTeamCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [joining, setJoining] = useState(false);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    setCurTeamName(teamName);
  }, [teamName]);
  return (
    <div
      id="SelfTeamPage__container"
      className={teamUsers.length == 1 ? "singleteam" : "doubleteam"}
      style={{
        display: selectedComp == 2 ? "flex" : "none",
        border:
          mode == "dark"
            ? "1px solid #292929"
            : "1px solid rgba(235, 235, 235, 1)",
        boxShadow:
          mode == "dark"
            ? "0px 0px 3px 1px rgba(0, 0, 0, 0.25)"
            : "0px 0px 3px 1px rgba(184, 184, 184, 0.25)",
      }}
    >
      <input
        id="SelfTeamPage__input"
        style={{
          color:
            mode == "dark" ? "rgba(255, 255, 255, 1)" : "rgba(20, 20, 20, 1)",
          backgroundColor: "transparent",
          border: "0",
          paddingBottom: "5px",
          outline: "none",
        }}
        value={curTeamName}
        onChange={(newInput) => setCurTeamName(newInput.target.value)}
        readOnly={!changingName}
      />
      <div
        id="SelfTeamPage__editbtn"
        onClick={() => {
          if (changingName) {
            try {
              editTeamName(curTeamName)
                .then(() => {
                  window.location.reload();
                })
                .catch((err) => {
                  setCurTeamName(teamName);
                  var curMode = cookies.load("mode");
                  curMode == "light" ? toastDark(err) : toastLight(err);
                });
            } catch (error) {
              var curMode = cookies.load("mode");
              curMode == "light" ? toastDark(error) : toastLight(error);
              //setCurTeamName(teamName);
              //console.log(`Caught by try/catch ${error}`);
            }
            setChangingName(false);
          } else {
            document.getElementById("SelfTeamPage__input").focus();
            setChangingName(true);
          }
        }}
      >
        <h4>{changingName ? "Save Team Name" : "Edit Team Name"}</h4>
      </div>
      <div
        id="SelfTeamPage__userdetails"
        className={teamUsers.length == 1 ? "singleteam" : "doubleteam"}
      >
        {teamUsers.map((k, i) => (
          <div id="SelfTeamPage__userdetail" key={i}>
            <div id="SelfTeamPage__userinfo">
              <img src={teamUsers[i].userImg} />
              <h4
                style={{
                  color:
                    mode == "dark"
                      ? "rgba(194, 194, 194, 1)"
                      : "rgba(61, 61, 61, 1)",
                }}
              >
                {teamUsers[i].name}
              </h4>
              <h5>{teamUsers[i].discordHandle}</h5>
            </div>
            <div id="SelfTeamPage__skills">
              {teamUsers[i].skills.map((skill, index) => (
                <div
                  key={index}
                  className="SelfTeamPage__skill"
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
          </div>
        ))}

        <div
          id="SelfTeamPage__jointeam"
          style={{ display: teamUsers.length == 1 ? "flex" : "none" }}
        >
          <h3
            id="SelfTeamPage__jointeam-title"
            style={{
              color: mode == "dark" ? "#FFFFFF" : "rgba(20, 20, 20, 1)",
            }}
          >
            Join a Team
          </h3>
          <div
            id="SelfTeamPage__enterteam"
            style={{
              border:
                mode == "dark"
                  ? "1px solid rgba(255, 255, 255, 1)"
                  : "1px solid rgba(20, 20, 20, 1)",
            }}
          >
            <div>
              <h2
                style={{
                  color: mode == "dark" ? "#FFFFFF" : "rgba(20, 20, 20, 1)",
                }}
              >
                Enter Team Code
              </h2>
              <input
                type="text"
                value={joinTeamCode}
                onChange={(event) => setJoinTeamCode(event.target.value)}
                placeholder="Ex: GGWP99"
                style={{
                  color: mode == "dark" ? "#FFFFFF" : "rgba(20, 20, 20, 1)",
                }}
              />
            </div>
            <CircularProgress
              style={{
                display: joining ? "flex" : "none",
                width: "30px",
                height: "30px",
                marginLeft: "35px",
              }}
            />
            <div
              id="SelfTeamPage__jointeambtn"
              style={{ display: joining ? "none" : "flex" }}
              onClick={async () => {
                try {
                  setJoining(true);
                  const recaptchaToken =
                    await recapthaRef.current.executeAsync();
                  joinTeam(joinTeamCode.toUpperCase(), recaptchaToken)
                    .then(() => {
                      var curMode = cookies.load("mode");
                      curMode == "light"
                        ? toastDark(
                            "Joined team successfully! Reloading in 5 secs!"
                          )
                        : toastLight(
                            "Joined team successfully! Reloading in 5 secs!"
                          );
                      window.location.reload();
                    })
                    .catch((err) => {
                      setJoining(false);
                      var curMode = cookies.load("mode");
                      curMode == "light" ? toastDark(err) : toastLight(err);
                    });
                } catch (error) {
                  var curMode = cookies.load("mode");
                  curMode == "light" ? toastDark(error) : toastLight(error);
                }
              }}
            >
              <h4>Join Team</h4>
            </div>
          </div>
          <p style={{ color: "rgba(122, 122, 122, 1)" }}>or</p>
          <CopyToClipboard text={teamCode}>
            <div
              onClick={() => {
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2500);
              }}
              id="SelfTeamPage__teamcode"
              className={copied ? "SelfTeamPage__copied" : ""}
            >
              {!copied ? <h3>Team Code: {teamCode}</h3> : <h3>Code copied</h3>}
              {!copied ? (
                <i style={{ marginLeft: "8px" }} className="fas fa-clone"></i>
              ) : (
                <i
                  style={{ marginLeft: "8px" }}
                  className="fas fa-check-circle"
                ></i>
              )}
            </div>
          </CopyToClipboard>
          <p style={{ color: "rgba(122, 122, 122, 1)" }}>
            Send this code to your friend to join your team
          </p>
        </div>
      </div>
      <div id="SelfTeamPage__discord">
        <h4
          style={{
            color:
              mode == "dark" ? "rgba(194, 194, 194, 1)" : "rgba(61, 61, 61, 1)",
          }}
        >
          {teamUsers.length == 1
            ? "Get a chance to network with other designers on discord!"
            : "Say hi to each other on discord. Happy designing :)."}
        </h4>
        <div
          id="SelfTeamPage__discordbtn"
          onClick={() => {
            window.open("http://palette-discord.ieeevit.org/", "_blank");
          }}
        >
          <h4>Click Here</h4>
        </div>
      </div>
      <CircularProgress
        style={{
          display: leaving ? "flex" : "none",
          width: "20px",
          height: "20px",
          color: "red",
          marginTop: "18px",
          marginBottom: "18px",
        }}
      />
      <h4
        id="SelfTeamPage__leave"
        style={{ display: leaving ? "none" : "flex" }}
        onClick={() => {
          try {
            setLeaving(true);
            leaveTeam()
              .then(() => {
                var curMode = cookies.load("mode");
                curMode == "light"
                  ? toastDark("Team left successfully! Reloading in 2 secs!")
                  : toastLight("Team left successfully!  Reloading in 2 secs!");
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              })
              .catch((err) => {
                setLeaving(false);
                var curMode = cookies.load("mode");
                curMode == "light"
                  ? toastDark(teamUsers.length == 1 ? err : err)
                  : toastLight(teamUsers.length == 1 ? err : err);
              });
          } catch (error) {
            //console.log(`Caught by try/catch ${error}`);
          }
        }}
      >
        Leave Team
      </h4>
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

SelfTeamPage.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedComp: PropTypes.number.isRequired,
  teamName: PropTypes.string.isRequired,
  teamCode: PropTypes.string.isRequired,
  teamUsers: PropTypes.array.isRequired,
};
