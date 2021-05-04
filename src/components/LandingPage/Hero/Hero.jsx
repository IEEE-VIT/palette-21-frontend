import React from "react";
import HeroP from "../../../assets/hero-p.svg";
import HeroS from "../../../assets/hero-star.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Hero.css";

export default function Hero() {
  var title = "Palette'21";
  var caption = "Designathon-some catchy line";
  return (
    <div className="hero">
      <div id="bkgd">
        <img src={HeroS} id="star-bkgd"></img>
        <img src={HeroP} id="p-bkgd"></img>
      </div>
      <div className="content">
        <Typography variant="h2">{title}</Typography>
        <Typography>{caption}</Typography>
        <Typography></Typography>
        <Button variant="outlined" color="secondary">
          Register
        </Button>
      </div>
    </div>
  );
}
