import React, { useState, useEffect } from "react";
import "./TeamDetailCollection.css";
import TeamDetail from "../TeamDetail/TeamDetail";
import PropTypes from "prop-types";
import { TeamsPerPage } from "../../utils/Constants";
import cookies from "react-cookies";
import { searchTeams } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";

export default function TeamDetailCollection({
  mode,
  selectedComp,
  looking,
  curTeamsDetails,
  curTeamsDetailsPhone,
  setCurTeamsDetailsPhone,
  curPagePhone,
  setCurPagePhone,
  noPeople,
  searchQuery,
}) {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", (x) => {
      setWindowWidth(x.currentTarget.innerWidth);
    });
  }, []);
  return (
    <div
      id="TeamDetailCollection__container"
      style={{
        display: selectedComp == 0 ? (!looking ? "flex" : "none") : "none",
      }}
    >
      {windowWidth <= 425
        ? curTeamsDetailsPhone.map((data) => {
            //console.log("TeamDetailcoll phone");
            return <TeamDetail key={data._id} mode={mode} teamDet={data} />;
          })
        : curTeamsDetails.map((data) => {
            return <TeamDetail key={data._id} mode={mode} teamDet={data} />;
          })}
      <h4
        id="TeamDetailCollection__loadmore"
        onClick={() => {
          if (curPagePhone * TeamsPerPage >= noPeople) {
            var curMode = cookies.load("mode");
            curMode == "light"
              ? toastDark("Sorry, You have reached the end!")
              : toastLight("Sorry, You have reached the end!");
          } else {
            try {
              searchTeams(curPagePhone + 1, searchQuery)
                .then((resp) => {
                  setCurPagePhone(curPagePhone + 1);
                  setCurTeamsDetailsPhone([
                    ...curTeamsDetailsPhone,
                    ...resp.data.data.teams,
                  ]);
                })
                .catch(() => {
                  // console.log(err);
                  var curMode = cookies.load("mode");
                  //console.log(curMode);
                  curMode == "light"
                    ? toastDark("Something Went Wrong! Please try again!")
                    : toastLight("Something Went Wrong! Please try again!");
                });
            } catch {
              // console.log(`Caught by try/catch ${error}`);
            }
          }
        }}
      >
        Load more
      </h4>
    </div>
  );
}

TeamDetailCollection.propTypes = {
  selectedComp: PropTypes.number.isRequired,
  looking: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  curTeamsDetails: PropTypes.array.isRequired,
  curTeamsDetailsPhone: PropTypes.array.isRequired,
  setCurTeamsDetailsPhone: PropTypes.func.isRequired,
  curPagePhone: PropTypes.number.isRequired,
  setCurPagePhone: PropTypes.func.isRequired,
  noPeople: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
