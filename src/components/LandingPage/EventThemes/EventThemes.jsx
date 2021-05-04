/* eslint-disable react/prop-types */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from "react";
import { useState } from "react";

import "./EventThemes.css";
import "bootstrap/dist/css/bootstrap.css";
import spikedCircleTr from "../../../assets/star-themes.svg";
import spikedCircleBl from "../../../assets/star-themes-bl.svg";

function SelectorButton(props) {
  return (
    <div
      className={
        props.selected
          ? "bord-radius mar-items pr-1p5 pl-1p5 pt-2 pb-2 bg-selec-itm"
          : "mar-items pr-1 pl-1 pt-2 pb-2"
      }
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}

function EventThemes(props) {
  const eventThemeTitles = ["UI/UX", "Branding", "Marketing", "VFX"];
  const eventThemeDescr = [
    "Something about the track.",
    "Something about the track here.",
    "Something about the track here...",
    "Something about the track here!",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container-fluid headcont whiteb">
      <div className="img-arr">
        <img src={spikedCircleTr} className="img-arr-img-tr" />
        <img src={spikedCircleBl} className="img-arr-img-bl" />
        <div className="row">
          <div className="col-sm-6 col-md-6"></div>
          <div className="col-sm-6 col-md-6">
            <div className="mt-5r mr-5 ml-4">
              <div>
                <h1>
                  <i>Introducing our theme</i>
                </h1>
                <h5
                  style={{ fontWeight: 300 }}
                  className="mt-3 mr-10rm line-sp"
                >
                  Convallis turpis ellat tempus, viverra aliquet. Nul lam num
                  aucter sit ipsum malesuada a, duis volutpat.
                </h5>
              </div>
              <div className="pb-5r">
                <div className="mt-5rbig">
                  <h1 className="big-head">
                    {eventThemeTitles[selectedIndex]}
                  </h1>
                  <h4 className="big-head-subt mt-3">
                    {eventThemeDescr[selectedIndex]}
                  </h4>
                </div>
                <div className="mt-2p6">
                  <div className="d-flex flex-row mb-3">
                    {eventThemeTitles.map((elem, idx) => {
                      var isSelected = selectedIndex === idx;
                      return (
                        <SelectorButton
                          text={elem}
                          key={idx}
                          selected={isSelected}
                          onClick={() => setSelectedIndex(idx)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventThemes;
