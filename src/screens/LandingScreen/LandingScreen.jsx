import React from "react";
import Flashback from "../../components/Flashback/Flashback";
import Sponsors from "../../components/Sponsors/Sponsors";
import Prizes from "../../components/Prizes/Prizes";
import Register from "../../components/Register/Register";
import Brand from "../../components/Brand/Brand";
import Faq from "../../components/Faq/Faq";
import Covid from "../../components/Covid/Covid";
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
