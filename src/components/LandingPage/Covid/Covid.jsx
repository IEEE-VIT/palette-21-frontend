import React from "react";
import "./Covid.css";
import CovidRelief from '../../../images/CovidRelief.png';

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
                            <div><p class="covid-update"><button class="btn donate-btn">Donate now</button></p></div>
                            <div><p class="covid-update"><span>Rs. 3000</span>Raised</p></div>
                            <div><p class="covid-update"><span>3006918</span>No. of Donors</p></div>
                        </div>                       
                </div>
                <img src={CovidRelief} class="covid-relief"/>
           </div>
        </div>
          
    
    );
};
export default Covid;