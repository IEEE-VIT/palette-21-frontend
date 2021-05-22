/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
const axios = require("axios");

export default function successfulAuth() {
  const [, setCookies] = useCookies(["token"]);
  const history = useHistory();
  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let googleAuth = params.get("token");
    let figmaAuth = params.get("code");
    console.log("Google auth", googleAuth);
    if (googleAuth === null) {
      console.log("Found figma token lmaooo", figmaAuth);
      figmaAuthApi(figmaAuth);
    } else {
      console.log("Found Token lmao", googleAuth);
      setCookies("token", googleAuth);
      history.push("/userForm");
    }
  }, []);

  const figmaAuthApi = (code) => {
    const data = {
      code,
      redirectUri: process.env.REACT_APP_FIGMA_CALLBACK,
    };
    axios
      // eslint-disable-next-line no-undef
      .post(process.env.REACT_APP_OAUTH_URL + "/auth/figma", data)
      .then((result) => {
        console.log("Figma Token", result.data.data.token);
        setCookies("token", result.data.data.token);
        history.push("/userForm");
      })
      .catch((err) => {
        console.log("Figma auth error", err);
        history.push("/");
      });
  };
  return <div>Logging you in.....</div>;
}
