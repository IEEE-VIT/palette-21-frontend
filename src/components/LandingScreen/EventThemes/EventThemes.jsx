/* eslint-disable react/prop-types */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from "react";
import { useState } from "react";

import "./EventThemes.css";
import "bootstrap/dist/css/bootstrap.css";
import spikedCircleTr from "../../../assets/star-themes.svg";
import spikedCircleBl from "../../../assets/star-themes-bl.svg";
import Fade from "react-reveal";

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
    <div
      id="EventThemes__container"
      className="container-fluid headcont whiteb"
    >
      <div className="img-arr d-flex">
        <img src={spikedCircleTr} className="img-arr-img-tr" />
        <img src={spikedCircleBl} className="img-arr-img-bl" />
        <div className="row flex-grow-1">
          <div className="col-sm-6 col-md-6"></div>
          <div className="col-sm-6 col-md-6 d-flex flex-column justify-content-around pl-5 pr-5 overflow-wrp">
            <Fade right cascade duration={1600}>
              <div className="pt-10rem flex-grow-1 d-flex flex-column justify-content-center">
                <h1 className="mr-2">
                  <i>Introducing our theme</i>
                </h1>
                <h5 style={{ fontWeight: 300 }} className="mt-3 mr-2 line-sp">
                  Convallis turpis ellat tempus, viverra aliquet. Nul lam num{" "}
                  <br />
                  aucter sit ipsum malesuada a, duis volutpat.
                </h5>
              </div>{" "}
            </Fade>
            <div className="pt-8rem d-flex flex-column pb-5r flex-grow-1">
              <div className="flex-grow-1">
                <Fade right duration={1600}>
                  <h1 className="big-head pt-8rem">
                    {eventThemeTitles[selectedIndex]}
                  </h1>
                  <h4 className="big-head-subt mt-3 flex-grow-1">
                    {eventThemeDescr[selectedIndex]}
                  </h4>
                </Fade>
              </div>
              <div className="mt-2p6">
                <Fade right duration={1600}>
                  <div className="d-flex flex-row flex-wrap mb-3">
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
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventThemes;
