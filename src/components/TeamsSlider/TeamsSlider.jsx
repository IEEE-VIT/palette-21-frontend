import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TeamsSlider.css";
import { toggleNeedTeam } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";
import cookies from "react-cookies";
import { searchUsers, searchTeams } from "../../utils/DashboardHelperFuncs";

export default function TeamsSlider({
  looking,
  setLooking,
  needTeam,
  setCurIndDetails,
  setCurTeamsDetails,
  setCurIndDetailsPhone,
  setCurTeamsDetailsPhone,
  setNoPeople,
  setCurPage,
  setCurPagePhone,
  setSearchQuery,
  teamUsers,
}) {
  const [checked, setChecked] = useState(true);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  useEffect(() => {
    //console.log(needTeam);
    if (!needTeam) {
      setChecked(!checked);
    }
  }, [needTeam]);
  function toggleMode() {
    //console.log("toggle invoked");
    if (teamUsers.length <= 1) {
      try {
        toggleNeedTeam()
          .then(() => {
            var ball = document.getElementById("TeamsSlider__ball");
            if (looking) {
              setLooking(!looking);
              setMoveLeft(true);
              setCurPage(1);
              setCurPagePhone(1);
              setSearchQuery("");
              setMoveRight(false);
              setTimeout(function () {
                ball.style.left = "4px";
                setMoveLeft(false);
              }, 180);
              try {
                searchTeams(1)
                  .then((resp) => {
                    //console.log(resp);
                    setNoPeople(resp.data.data.size);
                    setCurTeamsDetails(resp.data.data.teams);
                    setCurTeamsDetailsPhone(resp.data.data.teams);
                  })
                  .catch(() => {
                    var curMode = cookies.load("mode");
                    //console.log(curMode);
                    curMode == "light"
                      ? toastDark("Something Went Wrong! Please try again!")
                      : toastLight("Something Went Wrong! Please try again!");
                  });
              } catch (error) {
                //console.log(`Caught by try/catch ${error}`);
              }
            } else {
              setLooking(!looking);
              setMoveLeft(false);
              setMoveRight(true);
              setCurPage(1);
              setSearchQuery("");
              setCurPagePhone(1);
              setTimeout(function () {
                ball.style.left = "27px";
                setMoveRight(false);
              }, 180);
              try {
                searchUsers(1)
                  .then((resp) => {
                    //console.log(resp);
                    setNoPeople(resp.data.data.size);
                    setCurIndDetails(resp.data.data.usersWithInvites);
                    setCurIndDetailsPhone(resp.data.data.usersWithInvites);
                  })
                  .catch(() => {
                    var curMode = cookies.load("mode");
                    //console.log(curMode);
                    curMode == "light"
                      ? toastDark("Something Went Wrong! Please try again!")
                      : toastLight("Something Went Wrong! Please try again!");
                  });
              } catch (error) {
                //console.log(`Caught by try/catch ${error}`);
              }
            }
            //console.log("toggle switch done");
          })
          .then(() => {
            //console.log("inside enxt then");
            //console.log(looking);
            if (looking) {
              //console.log("insisde looking");
            } else {
              //console.log("insisde not looking");
            }
          })
          .catch(() => {
            var curMode = cookies.load("mode");
            //console.log(curMode);
            curMode == "light"
              ? toastDark("Something Went Wrong! Please try again!")
              : toastLight("Something Went Wrong! Please try again!");
          });
      } catch (error) {
        //console.log(`Caught by try/catch ${error}`);
      }
    }
  }

  return (
    <div
      id="TeamsSlider__container"
      className={teamUsers.length > 1 ? "TeamsSlider__disabled" : ""}
    >
      <div>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => toggleMode()}
          className="checkbox"
          id="TeamsSlider__chk"
        />
        <label
          id="TeamsSlider__label"
          htmlFor="TeamsSlider__chk"
          style={{
            backgroundColor: looking
              ? "rgba(47, 214, 84, 1)"
              : "rgba(235, 72, 47, 1)",
          }}
        >
          <div
            id="TeamsSlider__ball"
            className={
              moveLeft || moveRight
                ? moveLeft
                  ? "TeamsSlider__moveLeft"
                  : "TeamsSlider__moveRight"
                : "dummy"
            }
            style={{
              left: checked ? "27px" : "4px",
            }}
          ></div>
        </label>
      </div>
    </div>
  );
}

TeamsSlider.propTypes = {
  needTeam: PropTypes.bool.isRequired,
  looking: PropTypes.bool.isRequired,
  setLooking: PropTypes.func.isRequired,
  setCurIndDetails: PropTypes.func.isRequired,
  setCurTeamsDetails: PropTypes.func.isRequired,
  setNoPeople: PropTypes.func.isRequired,
  setCurPage: PropTypes.func.isRequired,
  setCurPagePhone: PropTypes.func.isRequired,
  setCurIndDetailsPhone: PropTypes.func.isRequired,
  setCurTeamsDetailsPhone: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  teamUsers: PropTypes.array.isRequired,
};
