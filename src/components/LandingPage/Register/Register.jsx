import React, {Component, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Register.css";
import StarOne from '../../../images/regStar1.png';
import StarTwo from '../../../images/regStar2.png';
import Illustration from '../../../images/Illustration.png';
import IllustrationTwo from '../../../images/IllustrationTwo.png';
import google from "../../../images/google.png";
import figma from "../../../images/figma.png";

const Register = () => {
    
    return(
        <div class="register-body">
            <img src={StarOne} class="star-one"/>
            <img class="illus-one" src={Illustration}/>
            <p class="register-heading">Register yourself for palette 2021!</p>
            <br/>
            <img src={StarTwo} class="star-two"/>
            <Row>
                <Col xs={2} md={4}></Col>
                <Col>
                    <button className="btn register"><img src={google} />CONTINUE WITH GOOGLE</button>
                </Col>
                <Col xs={2} md={4}></Col>
            </Row>
            <br/>
            <Row>
                <Col xs={2} md={4}></Col>
                <Col>
                <div>
                    <button className="btn register"><img src={figma} />CONTINUE WITH FIGMA</button>
                </div>
                </Col>
                <Col xs={2} md={4}></Col>
           </Row>
           <img class="illus-two" src={IllustrationTwo}/>
        </div>
    
    );
};
export default Register;