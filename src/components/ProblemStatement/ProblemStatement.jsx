import React from "react";
import "./ProblemStatement.css";
import PropTypes from "prop-types";
import cookies from "react-cookies";

import psLockedDark from "../../assets/pslockeddark.png";
import psLockedLight from "../../assets/pslockedlight.png";
export default function ProblemStatement(props) {
  // console.log(mode);
  var curMode = cookies.load("mode");
  return (
    <div
      id="ProblemStatement__container"
      style={{ display: props.selectedPage == 5 ? "flex" : "none" }}
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
  mode: PropTypes.string,
  selectedPage: PropTypes.func.isRequired,
};
