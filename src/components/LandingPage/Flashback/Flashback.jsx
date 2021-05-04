import React, {Component, useState} from "react";
import {Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import './Flashback.css';
import FlashbackRight from '../../../images/flashback-right.png';
import FlashbackLeft from '../../../images/flashback-left.png';

const Flashback = () => {
    return(
        <div>
            <Row>
                <Col><div>
                    <p>This our few glimpses from our past edition</p>
                    <p>Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.</p>
                    <img src={FlashbackRight}/>
                </div></Col>
                <Col><img src={FlashbackLeft} style={{width:'100%'}}/></Col>
            </Row>
        </div>
    );
  
};
export default Flashback;



