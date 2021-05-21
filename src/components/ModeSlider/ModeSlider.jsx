import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import PropTypes from "prop-types";
import "./ModeSlider.css";

export default function ModeSlider({ mode, setMode }) {
  const [checked, setChecked] = useState(true);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  useEffect(() => {
    var mode = cookie.load("mode");
    //console.log("mode : " + mode);
    if (mode !== "dark" && mode !== "light") {
      setMode("dark");
      cookie.save("mode", "dark");
    } else {
      setMode(mode);
      if (mode == "light") {
        setChecked(!checked);
      }
    }
  }, []);
  function toggleMode() {
    var ball = document.getElementById("ModeSlider__ball");
    if (mode == "dark") {
      setMode("light");
      //console.log("change to light");
      cookie.save("mode", "light");
      setMoveLeft(true);
      setMoveRight(false);
      //console.log(moveLeft, moveRight);
      setTimeout(function () {
        ball.style.left = "4px";
        setMoveLeft(false);
      }, 180);
    } else {
      setMode("dark");
      //console.log("change to dark");
      cookie.save("mode", "dark");
      setMoveLeft(false);
      setMoveRight(true);
      //console.log(moveLeft, moveRight);
      setTimeout(function () {
        ball.style.left = "29px";
        setMoveRight(false);
      }, 180);
    }
  }
  return (
    <div id="ModeSlider__container">
      <div>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => toggleMode()}
          className="checkbox"
          id="ModeSlider__chk"
        />
        <label
          id="ModeSlider__label"
          htmlFor="ModeSlider__chk"
          style={{
            backgroundColor: mode == "dark" ? "#292929" : "#FFCD1D",
          }}
        >
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div
            id="ModeSlider__ball"
            className={
              moveLeft || moveRight
                ? moveLeft
                  ? "ModeSlider__moveLeft"
                  : "ModeSlider__moveRight"
                : "dummy"
            }
            style={{
              left: checked ? "29px" : "4px",
            }}
          ></div>
        </label>
      </div>
    </div>
  );
}

ModeSlider.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
};
