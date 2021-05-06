import React from "react";
import "./LandingScreen.css";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import Hero from "../../components/LandingPage/Hero/Hero";
import About from "../../components/LandingPage/About/About";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Neue Montreal"].join(","),
  },
});

export default function LandingScreen() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <About />
      </ThemeProvider>
    </div>
  );
}
