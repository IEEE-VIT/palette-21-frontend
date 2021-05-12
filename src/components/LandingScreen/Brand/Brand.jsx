import React from "react";
import './Brand.css';
import brandimg from "../../../assets/brand-img-desktop.png";
import brandimgbigger from "../../../assets/brand-img-bigger.png";
import Fade from 'react-reveal/Fade';

const Brand = () => {
    return(
            <div class="main-brand-div">
                    <Fade bottom cascade duration={1600} delay={1000}>
                            <div className="brand-content">
                                <div className="brand-head">Let your creative juices flow</div>
                                <br/>
                                <p>The one of its kind Design Hack</p>
                            </div>
                    </Fade>
                    <Fade right duration={1600} delay={1000}>
                            <img src={brandimg} id="brand-img" />
                            <img src={brandimgbigger} id="brand-img-bigger" />
                    </Fade>
                   
                    
            </div>
    );
  
};
export default Brand;



