import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import play from "./screens/Playground/play";
import UserFormScreen from "./screens/UserFormScreen/UserFormScreen";
import SuccesfulAuth from "./screens/successfulAuth";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/play" component={play} />
          <Route exact path="/userForm" component={UserFormScreen} />
          <Route exact path="/successfulAuth" component={SuccesfulAuth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
