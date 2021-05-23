import React from "react";
import "./TeamsSearchbar.css";
import PropTypes from "prop-types";
import cookies from "react-cookies";
import { searchUsers, searchTeams } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";

export default function TeamsSearchbar({
  mode,
  selectedComp,
  setCurIndDetails,
  setCurTeamsDetails,
  setCurIndDetailsPhone,
  setCurTeamsDetailsPhone,
  setNoPeople,
  looking,
  searchQuery,
  setSearchQuery,
  setCurPage,
  setCurPagePhone,
}) {
  const updateSearchPlaceholder = () => {
    if (looking) {
      return "Search for fellow designers looking for a team";
    }
    return "Search for other teams";
  };
  const searchFunc = () => {
    //console.log("fucntion called!");

    if (!looking) {
      try {
        searchTeams(1, searchQuery)
          .then((resp) => {
            //console.log(resp);
            setNoPeople(resp.data.data.size);
            setCurTeamsDetails(resp.data.data.teams);
            setCurTeamsDetailsPhone(resp.data.data.teams);
            setCurPage(1);
            setCurPagePhone(1);
          })
          .catch(() => {
            // console.log(err);
            var curMode = cookies.load("mode");
            curMode == "light"
              ? toastDark("Something Went Wrong! Please try again!")
              : toastLight("Something Went Wrong! Please try again!");
          });
      } catch (error) {
        //console.log(`Caught by try/catch ${error}`);
      }
    } else {
      try {
        searchUsers(1, searchQuery)
          .then((resp) => {
            setNoPeople(resp.data.data.size);
            setCurIndDetails(resp.data.data.usersWithInvites);
            setCurIndDetailsPhone(resp.data.data.usersWithInvites);
            setCurPage(1);
            setCurPagePhone(1);
          })
          .catch(() => {
            var curMode = cookies.load("mode");
            curMode == "light"
              ? toastDark("Something Went Wrong! Please try again!")
              : toastLight("Something Went Wrong! Please try again!");
          });
      } catch (error) {
        //console.log(`Caught by try/catch ${error}`);
      }
    }
  };
  return (
    <div
      id="TeamsSearchbar__container"
      className={selectedComp == 2 ? "TeamsSearchbar__mobnone" : ""}
      style={{
        color:
          mode == "dark" ? "rgba(194, 194, 194, 1)" : "rgba(122, 122, 122, 1)",
        opacity: selectedComp == 2 ? "0" : "1",
      }}
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(newInput) => setSearchQuery(newInput.target.value)}
        onKeyPress={(k) => {
          if (k.key == "Enter") {
            searchFunc();
          }
        }}
        placeholder={updateSearchPlaceholder()}
        style={{
          color:
            mode == "dark" ? "rgba(194, 194, 194, 1)" : "rgba(20, 20, 20, 1)",
          display: selectedComp == 2 ? "none" : "flex",
        }}
      />
      <i
        className="fa fa-search"
        aria-hidden="true"
        style={{
          display: selectedComp == 2 ? "none" : "flex",
          alignItems: "center",
        }}
        onClick={() => {
          searchFunc();
        }}
      ></i>
    </div>
  );
}

TeamsSearchbar.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedComp: PropTypes.number.isRequired,
  looking: PropTypes.bool.isRequired,
  setCurIndDetails: PropTypes.func.isRequired,
  setCurTeamsDetails: PropTypes.func.isRequired,
  setNoPeople: PropTypes.func.isRequired,
  setCurIndDetailsPhone: PropTypes.func.isRequired,
  setCurTeamsDetailsPhone: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  setCurPage: PropTypes.func.isRequired,
  setCurPagePhone: PropTypes.func.isRequired,
};
