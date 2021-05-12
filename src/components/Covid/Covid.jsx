import React from "react";
import "./Covid.css";
import CovidRelief from '../../assets/CovidRelief.png';

const Covid = () => {
   
    return(
        <div id="Covid__container" >
            <div  class="covid-body">
                <div id="Covid__details">
                    <div>
                            <p class="covid-heading">COVID Relief Fund for India</p>
                            <p class="covid-content">Every donation to this fund will help stop the virus's spread and support vulnerable families to tide over COVID-19</p>
                    </div>
                    <img src={CovidRelief} class="covid-relief-mobile" />   
                        <div id="Covid__updatediv">
                            <div><a href="https://covid19.ketto.org/" target="__blank"><p class="covid-update"><button class="btn donate-btn">Donate now</button></p></a></div>
                        </div>                       
                </div>
                <img src={CovidRelief} class="covid-relief"/>
           </div>
        </div>
          
    
    );
};
export default Covid;