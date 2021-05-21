import React from "react";
import "./TeamsNavbar.css";
import PropTypes from "prop-types";

export default function TeamsNavbar({
  selectedComp,
  setSelectedComp,
  looking,
  teamUsers,
}) {
  return (
    <div id="TeamsNavbar__container">
      <div
        className={
          selectedComp == 0
            ? "TeamsNavbar__component TeamsNavbar__component-sel"
            : "TeamsNavbar__component"
        }
        onClick={() => {
          if (selectedComp != 0) {
            setSelectedComp(0);
          }
        }}
      >
        <h3>All Teams</h3>
      </div>
      <div
        style={{
          display: teamUsers.length <= 1 ? (looking ? "flex" : "none") : "none",
        }}
        className={
          selectedComp == 1
            ? "TeamsNavbar__component TeamsNavbar__component-sel"
            : "TeamsNavbar__component"
        }
        onClick={() => {
          if (selectedComp != 1) {
            setSelectedComp(1);
          }
        }}
      >
        <h3>Invitations</h3>
      </div>
      <div
        className={
          selectedComp == 2
            ? "TeamsNavbar__component TeamsNavbar__component-sel"
            : "TeamsNavbar__component"
        }
        onClick={() => {
          if (selectedComp != 2) {
            setSelectedComp(2);
          }
        }}
      >
        <h3>My Team</h3>
      </div>
    </div>
  );
}

TeamsNavbar.propTypes = {
  selectedComp: PropTypes.number.isRequired,
  setSelectedComp: PropTypes.func.isRequired,
  looking: PropTypes.bool.isRequired,
  teamUsers: PropTypes.array.isRequired,
};
