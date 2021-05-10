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
                <a href="https://www.sketch.com/"><img src ={sketch} /></a>
                <a href="https://www.accioibis.com/"><img src={acciolbis} /></a>
                <a href="https://www.axure.com/"><img src={axure} /></a>
                <a href="https://rosenfeldmedia.com/"><img src={rosenfeld} /></a>
                <a href="https://www.divami.com/"><img src={divami} className="Sponsors__smallerlogo"/></a>
                <a href="https://www.github.com/"><img src={github} /></a>
            </div>
        </div>
    );
};

