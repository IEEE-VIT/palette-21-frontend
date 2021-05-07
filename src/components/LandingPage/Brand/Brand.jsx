import React from "react";
import './Brand.css';
import brandimg from "../../../images/brand-img-desktop.png";
import brandimg_mobile from "../../../images/brand-img.png"

const Brand = () => {
    return(
            <div class="main-brand-div">
                    <div class="brand-content">
                        <div class="brand-head">Let your creative juices flow</div>
                        <br/>
                        <p>The one of its kind Design Hack</p>
                    </div>
                    <img src={brandimg} id="brand-img" />
                    <img src={brandimg_mobile} id="brand-img-mobile" /> 
            </div>
    );
  
};
export default Brand;



