import React, { useState } from "react";
import Flashback from "../components/LandingPage/Flashback/Flashback";
import Sponsors from "../components/LandingPage/Sponsors/Sponsors";
import Prizes from "../components/LandingPage/Prizes/Prizes";
import Register from "../components/LandingPage/Register/Register";
import Brand from "../components/LandingPage/Brand/Brand";
import Faq from "../components/LandingPage/Faq/Faq";
import Covid from "../components/LandingPage/Covid/Covid";

const LandingPage = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Flashback/>
            <Sponsors/>
            <Prizes/>
            <Brand/>
            <Register/>
            <Faq/>
            <Covid/>
        </div>
    );
};
export default LandingPage;
