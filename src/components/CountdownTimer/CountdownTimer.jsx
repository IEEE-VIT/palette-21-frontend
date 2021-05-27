import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";
var moment = require("moment-timezone");
moment.tz("Asia/Kolkata");
function calculateCountdown(endDate) {
  let diff =
    (Date.parse(new Date(endDate)) -
      Date.parse(moment().tz("Asia/Kolkata").toDate())) /
    1000;

  // clear countdown when date is reached
  if (diff <= 0) return false;

  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
  };

  // calculate time difference between now and expected date
  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60);
    diff -= timeLeft.min * 60;
  }
  timeLeft.sec = diff;

  return timeLeft;
}
export default function CountdownTimer() {
  const [left, setLeft] = useState("");
  useEffect(() => {
    const date = calculateCountdown(
      moment.tz("2021-05-27 20:00:00", "Asia/Kolkata").toDate()
    );
    setLeft(date);
    setInterval(() => {
      const date = calculateCountdown(
        moment.tz("2021-05-27 20:00:00", "Asia/Kolkata").toDate()
      );
      setLeft(date);
    }, 60000);
  }, []);

  return (
    <div id="CountdownTimer__container">
      {left ? (
        <h3>
          Starts in{" "}
          <span>
            {left.days} days {left.hours} hours {left.min} mins
          </span>
        </h3>
      ) : (
        <h3 id="CountdownTimer__live">
          Palette is live. Head over to{" "}
          <a
            href="http://palette-discord.ieeevit.org/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              fontFamily: "NeueMontreal-Regular",
              textDecoration: "none",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Discord
          </a>{" "}
          for further announcements!
        </h3>
      )}
    </div>
  );
}
