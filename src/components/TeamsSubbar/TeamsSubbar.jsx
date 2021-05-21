import React from "react";
import "./TeamsSubbar.css";
import TeamsSearchbar from "../TeamsSearchbar/TeamsSearchbar";
import TeamsSlider from "../TeamsSlider/TeamsSlider";
import PropTypes from "prop-types";

export default function TeamsSubbar({
  mode,
  looking,
  setLooking,
  needTeam,
  selectedComp,
  setCurIndDetails,
  setCurTeamsDetails,
  setCurIndDetailsPhone,
  setCurTeamsDetailsPhone,
  setNoPeople,
  setCurPage,
  setCurPagePhone,
  searchQuery,
  setSearchQuery,
  teamUsers,
}) {
  return (
    <div
      id="TeamsSubbar__container"
      style={{
        display: selectedComp == 1 ? "none" : "flex",
      }}
    >
      <TeamsSearchbar
        mode={mode}
        selectedComp={selectedComp}
        setCurIndDetails={setCurIndDetails}
        setCurTeamsDetails={setCurTeamsDetails}
        setCurIndDetailsPhone={setCurIndDetailsPhone}
        setCurTeamsDetailsPhone={setCurTeamsDetailsPhone}
        looking={looking}
        setNoPeople={setNoPeople}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setCurPage={setCurPage}
        setCurPagePhone={setCurPagePhone}
      />
      <div id="TeamsSubbar__teammates">
        <h3
          style={{
            opacity: teamUsers.length > 1 ? 0.25 : 1,
            color:
              mode == "dark" ? "rgba(255, 255, 255, 1)" : "rgba(20, 20, 20, 1)",
          }}
        >
          Looking for teammates
        </h3>
        <TeamsSlider
          needTeam={needTeam}
          looking={looking}
          setLooking={setLooking}
          setCurIndDetails={setCurIndDetails}
          setCurTeamsDetails={setCurTeamsDetails}
          setCurIndDetailsPhone={setCurIndDetailsPhone}
          setCurTeamsDetailsPhone={setCurTeamsDetailsPhone}
          setNoPeople={setNoPeople}
          setCurPage={setCurPage}
          setCurPagePhone={setCurPagePhone}
          setSearchQuery={setSearchQuery}
          teamUsers={teamUsers}
        />
      </div>
    </div>
  );
}
TeamsSubbar.propTypes = {
  mode: PropTypes.string.isRequired,
  looking: PropTypes.bool.isRequired,
  setLooking: PropTypes.func.isRequired,
  selectedComp: PropTypes.number.isRequired,
  needTeam: PropTypes.bool.isRequired,
  setCurIndDetails: PropTypes.func.isRequired,
  setCurTeamsDetails: PropTypes.func.isRequired,
  setNoPeople: PropTypes.func.isRequired,
  setCurPage: PropTypes.func.isRequired,
  setCurPagePhone: PropTypes.func.isRequired,
  setCurIndDetailsPhone: PropTypes.func.isRequired,
  setCurTeamsDetailsPhone: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  teamUsers: PropTypes.array.isRequired,
};
