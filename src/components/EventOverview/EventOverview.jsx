import React from "react";
import "./EventOverview.css";
import ResourceCollection from "../ResourceCollection/ResourceCollection";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import PropTypes from "prop-types";

export default function EventOverview({ mode, selectedPage }) {
  return (
    <div
      id="EventOverview__container"
      style={{
        display: selectedPage == 0 ? "flex" : "none",
        backgroundColor: mode == "dark" ? "#141414" : "#FAFAFA",
      }}
    >
      <div id="EventOverview__leftdiv">
        <div id="EventOverview__start">
          <h3>
            <b>
              <i>Palette</i>
            </b>
          </h3>
          <h4>
            <i>Prototype your imagination</i>
          </h4>
          <CountdownTimer />
        </div>
        <div
          id="EventOverview__timeline-phone"
          style={{
            backgroundColor: mode == "dark" ? "#1D1D1D" : "#FBFBFB",
            boxShadow:
              mode == "light"
                ? "0px 25px 50px rgba(204, 204, 204, 0.25)"
                : "0px 0px 0px 0px",
          }}
        >
          <h1
            id="EventOverview__timelineheading-phone"
            style={{ color: mode == "dark" ? "#ffffff" : "#141414" }}
          >
            Timeline and updates
          </h1>
          <div
            id="EventOverview__timelinesoondiv-phone"
            style={{
              backgroundColor:
                mode == "dark" ? "#252525" : "rgba(244, 244, 244, 1)",
            }}
          >
            <h3
              style={{
                color: mode == "dark" ? "#FFFFFF" : "rgba(20, 20, 20, 1)",
              }}
            >
              To be revealed soon
            </h3>
            <h4 style={{ color: "rgba(61, 61, 61, 1)" }}>Stay Tuned!</h4>
          </div>
        </div>
        <h1
          id="EventOverview__getstarted"
          style={{ color: mode == "dark" ? "#ffffff" : "#141414" }}
        >
          Get Started
        </h1>
        <ResourceCollection />
      </div>
      <div id="EventOverview__rightdiv">
        <div
          id="EventOverview__timeline"
          style={{
            backgroundColor: mode == "dark" ? "#1D1D1D" : "#FBFBFB",
            boxShadow:
              mode == "light"
                ? "0px 25px 50px rgba(204, 204, 204, 0.25)"
                : "0px 0px 0px 0px",
          }}
        >
          <h1
            id="EventOverview__timelineheading"
            style={{ color: mode == "dark" ? "#ffffff" : "#141414" }}
          >
            Timeline and updates
          </h1>
          <div
            id="EventOverview__timelinesoondiv"
            style={{
              backgroundColor:
                mode == "dark" ? "#252525" : "rgba(244, 244, 244, 1)",
            }}
          >
            <h3
              style={{
                color: mode == "dark" ? "#FFFFFF" : "rgba(20, 20, 20, 1)",
              }}
            >
              To be revealed soon
            </h3>
            <h4 style={{ color: "rgba(61, 61, 61, 1)" }}>Stay Tuned!</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
EventOverview.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.number.isRequired,
};
