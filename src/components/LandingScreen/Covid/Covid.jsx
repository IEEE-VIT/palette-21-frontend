import React from "react";
import "./Covid.css";
import CovidRelief from "../../../assets/CovidRelief.png";

const Covid = () => {
  return (
    <div id="Covid__container">
      <div className="covid-body">
        <div id="Covid__details">
          <div>
            <p className="covid-heading">COVID Relief Fund for India</p>
            <p className="covid-content">
              Every donation to this fund will help stop the virus&apos;s spread
              and support vulnerable families to tide over COVID-19
            </p>
          </div>
          <img src={CovidRelief} className="covid-relief-mobile" />
          <div id="Covid__updatediv">
            <div>
              <a href="https://covid19.ketto.org/" target="__blank">
                <p className="covid-update">
                  <button className="btn donate-btn">Donate now</button>
                </p>
              </a>
            </div>
          </div>
        </div>
        <img src={CovidRelief} className="covid-relief" />
      </div>
    </div>
  );
};
export default Covid;
