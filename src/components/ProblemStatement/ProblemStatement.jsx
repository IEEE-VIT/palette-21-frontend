import React from "react";
import "./ProblemStatement.css";
import PropTypes from "prop-types";
import cookies from "react-cookies";

import psLockedDark from "../../assets/pslockeddark.png";
import psLockedLight from "../../assets/pslockedlight.png";
export default function ProblemStatement({ selectedPage }) {
  // console.log(mode, selectedPage);
  var curMode = cookies.load("mode");
  return (
    <div
      id="ProblemStatement__container"
      style={{ display: selectedPage == 5 ? "flex" : "none" }}
    >
      {curMode === "dark" ? (
        <img className="non-drag-img" src={psLockedDark} alt="" />
      ) : (
        <img className="non-drag-img" src={psLockedLight} alt="" />
      )}
    </div>
  );
}

ProblemStatement.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.func.isRequired,
};
