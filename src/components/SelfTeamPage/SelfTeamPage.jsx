import React, { useState, useEffect } from "react";
import "./SelfTeamPage.css";
import cookies from "react-cookies";
import PropTypes from "prop-types";
import { editTeamName, leaveTeam } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";

export default function SelfTeamPage({
  mode,
  selectedComp,
  teamName,
  teamUsers,
}) {
  //console.log(teamName);
  const [changingName, setChangingName] = useState(false);
  const [curTeamName, setCurTeamName] = useState("");
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
                .catch(() => {
                  setCurTeamName(teamName);
                  var curMode = cookies.load("mode");
                  curMode == "light"
                    ? toastDark("Something Went Wrong! Please try again!")
                    : toastLight("Something Went Wrong! Please try again!");
                });
            } catch (error) {
              setCurTeamName(teamName);
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
      <h4
        id="SelfTeamPage__leave"
        onClick={() => {
          try {
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
              .catch(() => {
                var curMode = cookies.load("mode");
                curMode == "light"
                  ? toastDark(
                      teamUsers.length == 1
                        ? "You can't leave your own team!"
                        : "Something Went Wrong! Please try again!"
                    )
                  : toastLight(
                      teamUsers.length == 1
                        ? "You can't leave your own team!"
                        : "Something Went Wrong! Please try again!"
                    );
              });
          } catch (error) {
            //console.log(`Caught by try/catch ${error}`);
          }
        }}
      >
        Leave Team
      </h4>
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
