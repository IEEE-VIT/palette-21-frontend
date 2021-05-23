import React from "react";
import "./ProblemStatement.css";
import PropTypes from "prop-types";

export default function ProblemStatement({ mode, selectedPage }) {
  console.log(mode, selectedPage);
  return (
    <div
      id="ProblemStatement__container"
      style={{ display: selectedPage == 5 ? "flex" : "none" }}
    >
      <h1> Make an app for vit students to fight depression</h1>
    </div>
  );
}

ProblemStatement.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.func.isRequired,
};
