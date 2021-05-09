import React from "react";
import './Brand.css';
import brandimg from "../../../images/brand-img-desktop.png";

const Brand = () => {
    return(
            <div class="main-brand-div">
                    <div class="brand-content">
                        <div class="brand-head">Let your creative juices flow</div>
                        <br/>
                        <p>The one of its kind Design Hack</p>
                    </div>
                    <img src={brandimg} id="brand-img" />
            </div>
    );
  
};
export default Brand;



