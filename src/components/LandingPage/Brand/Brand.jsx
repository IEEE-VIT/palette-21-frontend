import React, {Component, useState} from "react";
import {Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import './Brand.css';
import Teapot from '../../../images/teapot.png';
import Colors from '../../../images/colors.png';

const Brand = () => {
    return(
        <div class="outer-brand">
            <div class="main-brand-div">
            <Row>
                <Col>
                    <div class="brand-content">
                        <div class="brand-head">Let flow your creative juices</div>
                        <br/>
                        <p>The one of its Design Hack</p>
                    </div>
                </Col>
                <Col>
                    <img src={Teapot} className="teapot"/>
                    <img src={Colors} className="colors"/>
                </Col>
            </Row>  
            </div>
              
        </div>
    );
  
};
export default Brand;



