import React from "react";
import "./SideNavbarPage.css";
import PropTypes from "prop-types";

export default function SideNavbarPage(props) {
  return (
    <div
      id="SideNavbarPage__container"
      className={props.mode == "dark" ? "dark" : "light"}
      style={{
        borderLeft: props.selected ? "3px solid #563AE8" : "0px",
        backgroundColor: props.selected
          ? props.mode == "dark"
            ? "#191725"
            : "#F2EFFD"
          : "transparent",
        color: props.selected ? "#563AE8" : "#7A7A7A",
      }}
      onClick={() => props.selectThis()}
    >
      <i className={props.icon}></i>
      <h3>{props.title}</h3>
    </div>
  );
}
SideNavbarPage.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  selectThis: PropTypes.func.isRequired,
};
