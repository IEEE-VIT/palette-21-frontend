import React from "react";
import "./Sponsors.css";
import acciolbis from "../../assets/acciolbis.png";
import axure from "../../assets/axure.svg";
import divami from "../../assets/divami.png";
import github from "../../assets/github.jpg";
import rosenfeld from "../../assets/rosenfeld.png";
import sketch from "../../assets/sketch.png";
import Fade from 'react-reveal/Fade';

export default function Sponsors() {
    return(
        <div id="Sponsors__container">
            <Fade bottom cascade duration={1600} delay={1000}>
                    <p id="Sponsors__heading">Meet our Sponsors</p>
                    <div id="Sponsors__logos">
                        <a href="https://www.sketch.com/"><img src ={sketch} /></a>
                        <a href="https://www.accioibis.com/"><img src={acciolbis} /></a>
                        <a href="https://www.axure.com/"><img src={axure} /></a>
                        <a href="https://rosenfeldmedia.com/"><img src={rosenfeld} /></a>
                        <a href="https://www.divami.com/"><img src={divami} className="Sponsors__smallerlogo"/></a>
                        <a href="https://www.github.com/"><img src={github} /></a>
                    </div>
            </Fade>
            
        </div>
    );
};

