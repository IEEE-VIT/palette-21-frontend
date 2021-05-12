import React, {Component, useState} from "react";
import {Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import "./Prizes.css";
import Fade from 'react-reveal/Fade';

const Prizes = () => {
    return(
        <div class="prizes-div">
            <Fade bottom duration={1600} delay={1000}>
                    <p className="prizes-heading">Prizes will be anounced soon!</p>
                    <p className="prizes-content">We are currently in the process of counting money :)</p>
            </Fade>
        </div>
    );
  
};
export default Prizes;



