import React from "react";
import './Brand.css';
import brandimg from "../../../images/brand-img-desktop.png";
import brandimgbigger from "../../../images/brand-img-bigger.png";

const Brand = () => {
    return(
            <div class="main-brand-div">
                    <div class="brand-content">
                        <div class="brand-head">Let your creative juices flow</div>
                        <br/>
                        <p>The one of its kind Design Hack</p>
                    </div>
                    <img src={brandimg} id="brand-img" />
                    <img src={brandimgbigger} id="brand-img-bigger" />
            </div>
    );
  
};
export default Brand;



