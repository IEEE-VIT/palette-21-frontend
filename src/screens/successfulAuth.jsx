/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import LoadingScreen from "../components/LandingScreen/LoadingScreen/LoadingScreen";
import api from "../api/regPortal";
const axios = require("axios");

export default function successfulAuth() {
  const [, setCookies] = useCookies(["token", "ffcheck"]);
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
      redirectChecker(googleAuth);
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
        redirectChecker(result.data.data.token);
      })
      .catch((err) => {
        console.log("Figma auth error", err);
        history.push("/");
      });
  };

  const redirectChecker = (token) => {
    const regPortal = new api(token, process.env.REACT_APP_BACKEND_API);
    regPortal
      .didFillForm()
      .then((result) => {
        const apiData = result.data;
        if (!apiData.data.round0 || !apiData.data.teamFormed) {
          history.push("/userForm");
        } else {
          setCookies("ffcheck", "true");
          history.push("/dashboard");
        }
        localStorage.setItem("userImage", apiData.data.userImg);
        localStorage.setItem("userName", apiData.data.name);
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
      });
  };
  return <LoadingScreen />;
}
