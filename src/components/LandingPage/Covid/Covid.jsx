import React, {Component, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Covid.css";
import CovidRelief from '../../../images/CovidRelief.png';
import CovidImage from '../../../images/CovidImage.png';

const Covid = () => {
   
    return(
        <div class="covid-body">
            <img class="covid-image-two" src={CovidImage}/>
               <div >
               
               <Row>
                    <Col xs={12} md={7}>
                            <p class="covid-heading">COVID Relief Fund for India</p>
                            <p class="covid-content">Every donation to this fund will help stop the virus's spread and support vulnerable families to tide over COVID-19</p>
                           
                            <Row >
                                <Col xs={12} md={4}><p class="covid-update"><button class="btn donate-btn">Donate now</button></p></Col>
                                <Col xs={12} md={4}><p class="covid-update"><div style={{fontWeight:'bold'}}>Rs. 3000</div>Raised</p></Col>
                                <Col xs={12} md={4}><p class="covid-update"><div style={{fontWeight:'bold'}}>3006918</div>No. of Donors</p></Col>
                            </Row>
                                            
                    </Col>
                    <Col>
                            <img src={CovidRelief} class="covid-relief"/>
                    </Col>
               </Row>
           </div>
           <img class="covid-image-one" src={CovidImage}/>
           
        </div>
          
    
    );
};
export default Covid;