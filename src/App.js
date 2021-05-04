import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import LandingPage from "./pages/LandingPage";

const App = () => {
    return (
        <Layout>
    
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
        
        </Layout>
    );
};

export default App;
