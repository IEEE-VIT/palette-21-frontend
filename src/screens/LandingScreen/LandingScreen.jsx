import React from "react";
import Flashback from "../../components/LandingScreen/Flashback/Flashback";
import Sponsors from "../../components/LandingScreen/Sponsors/Sponsors";
import Prizes from "../../components/LandingScreen/Prizes/Prizes";
import Register from "../../components/LandingScreen/Register/Register";
import Brand from "../../components/LandingScreen/Brand/Brand";
import Faq from "../../components/LandingScreen/Faq/Faq";
import Covid from "../../components/LandingScreen/Covid/Covid";
import Fade from 'react-reveal/Fade';

const LandingScreen = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Fade bottom duration={1000}>
                <Flashback/>
            </Fade>
            <Fade bottom duration={1000}>
                <Sponsors/>
            </Fade> 
                <Prizes/>
            <Fade bottom duration={1000}>
                <Brand/>
            </Fade>
            <Fade bottom duration={1000}>
                <Register/>
            </Fade>
            <Faq/>
            <Fade bottom duration={1000}>
                <Covid/>
            </Fade>
        </div>
    );
};
export default LandingScreen;
