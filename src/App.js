import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SuccessfullRegistrationScreen from "./screens/UserFormScreen/SuccessfulRegistrationScreen";
import UserFormScreen from "./screens/UserFormScreen/UserFormScreen";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route
            exact
            path="/successfulRegistration"
            component={SuccessfullRegistrationScreen}
          />
          <Route exact path="/userForm" component={UserFormScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
