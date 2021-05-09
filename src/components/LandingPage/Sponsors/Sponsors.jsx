import React from "react";
import "./Sponsors.css";
import acciolbis from "../../../images/acciolbis.png";
import axure from "../../../images/axure.svg";
import divami from "../../../images/divami.png";
import github from "../../../images/github.jpg";
import rosenfeld from "../../../images/rosenfeld.png";
import sketch from "../../../images/sketch.png";

export default function Sponsors() {
    return(
        <div id="Sponsors__container">
            <p class="Sponsors__heading">Meet our Sponsors</p>
            <div id="Sponsors__logos">
                <img src ={sketch} />
                <img src={acciolbis} />
                <img src={axure} />
                <img src={rosenfeld} />
                <img src={divami} />
                <img src={github} />
            </div>
        </div>
    );
};

