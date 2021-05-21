import React, { useEffect, useState } from "react";
import "./PageNotFound.css";
import cookie from "react-cookies";
import nfimg from "../../assets/404image.png";

export default function PageNotFound() {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    var mode = cookie.load("mode");
    //console.log("mode : " + mode);
    if (mode !== "dark" && mode !== "light") {
      setMode("dark");
      cookie.save("mode", "dark");
    } else {
      setMode(mode);
    }
  }, []);
  return (
    <div
      id="PageNotFound__container"
      style={{
        backgroundColor:
          mode == "dark" ? "rgba(20, 20, 20, 1)" : "rgba(255, 255, 255, 1)",
      }}
    >
      <img src={nfimg} />
      <p
        id="PageNotFound__message"
        style={{
          color:
            mode == "light" ? "rgba(20, 20, 20, 1)" : "rgba(255, 255, 255, 1)",
        }}
      >
        The Page you were looking for does not exist!
      </p>
      <p
        onClick={() => {
          window.location.assign("/");
        }}
        id="PageNotFound__link"
      >
        Go back to home page
      </p>
    </div>
  );
}
