import React from "react";
import './Brand.css';
import Teapot from '../../../images/teapot.png';
import Colors from '../../../images/colors.png';

const Brand = () => {
    return(
            <div class="main-brand-div">
                    <div class="brand-content">
                        <div class="brand-head">Let your creative juices flow</div>
                        <br/>
                        <p>The one of its Design Hack</p>
                    </div>
                    <img src={Teapot} className="teapot"/>
                    <img src={Colors} className="colors"/>
            </div>
    );
  
};
export default Brand;



