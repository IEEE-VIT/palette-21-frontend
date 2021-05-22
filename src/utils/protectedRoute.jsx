/* eslint-disable react/prop-types */
import React from "react";
import { useCookies } from "react-cookie";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, redirect, ...rest }) => {
  const [cookies] = useCookies(["token"]);
  const key = cookies.token;

  return (
    <Route
      {...rest}
      render={(props) =>
        key === "undefined" || key == null ? (
          <Redirect to={redirect} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
