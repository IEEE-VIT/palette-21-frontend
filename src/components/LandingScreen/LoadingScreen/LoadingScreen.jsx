// /* eslint-disable no-constant-condition */
import React from "react";
import "./Loading.css";
import { LinearProgress } from "@material-ui/core";

const LoadingScreen = () => {
  const randomColor = () => {
    const colors = [
      "#F0DB49",
      "#84D321",
      "#35A7FF",
      "#FA8426",
      "#FB2022",
      "#4329E8",
      "#DE0D92",
      "#0101FF",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="loading-body">
      <b className="palette-loader-title">
        <span
          style={{
            color: randomColor(),
          }}
        >
          Pa
        </span>
        <span style={{ color: randomColor() }}>le</span>
        <span style={{ color: randomColor() }}>tt</span>
        <span style={{ color: randomColor() }}>e&apos;</span>
        <span style={{ color: randomColor() }}>21</span>
      </b>
      <div className="loading-subtitle">Prototype your imagination</div>
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="loading-text">Loading</div>
        <LinearProgress
          //   color={randomColor()}
          style={{ width: "200px", marginTop: "32px" }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
