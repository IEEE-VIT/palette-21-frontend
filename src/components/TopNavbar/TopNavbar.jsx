import React from "react";
import "./TopNavbar.css";
import PropTypes from "prop-types";
import ModeSlider from "../ModeSlider/ModeSlider";

export default function TopNavbar(props) {
  return (
    <div
      id="TopNavbar__container"
      style={{
        backgroundColor: props.mode == "dark" ? "#141414" : "#FAFAFA",
        color: props.mode == "dark" ? "#ffffff" : "#141414",
      }}
    >
      <h1 id="TopNavbar__title">{props.title}</h1>
      <div id="TopNavbar__profile">
        <ModeSlider mode={props.mode} setMode={(m) => props.setMode(m)} />
        <h2>Hey, {props.name}</h2>
        <img src={props.imgUrl} />
      </div>
    </div>
  );
}

TopNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
