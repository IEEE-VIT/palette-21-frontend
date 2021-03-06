import React from "react";
import "./ResourceComponent.css";
import PropTypes from "prop-types";

export default function ResourceComponent(props) {
  const redirectToResource = () => {
    window.open(props.url, "_blank");
  };
  return (
    <div
      onClick={redirectToResource}
      id="ResourceComponent__container"
      className={
        props.title == "Articles" || props.title == "Illustrations"
          ? "ResourceComponent__lessmargin"
          : ""
      }
    >
      <h3>{props.title}</h3>
      <img src={props.bgimg} />
    </div>
  );
}

ResourceComponent.propTypes = {
  bgimg: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
