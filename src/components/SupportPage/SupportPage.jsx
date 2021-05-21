import React from "react";
import "./SupportPage.css";
import despairimg from "../../assets/supportdespairimg.png";
import linkedin from "../../assets/linkedin_logo.svg";
import twitter from "../../assets/twitter_logo.svg";
import instagram from "../../assets/instagram_logo.svg";
import linkedin_dark from "../../assets/linkedin_logo_dark.svg";
import twitter_dark from "../../assets/twitter_logo_dark.svg";
import instagram_dark from "../../assets/instagram_logo_dark.svg";
import PropTypes from "prop-types";

export default function SupportPage({ mode, selectedPage }) {
  return (
    <div
      id="SupportPage__container"
      style={{ display: selectedPage == 4 ? "flex" : "none" }}
    >
      <h4
        id="SupportPage__heading"
        style={{
          color:
            mode == "light" ? "rgba(20, 20, 20, 1)" : "rgba(255, 255, 255, 1)",
        }}
      >
        Hey, How can we help you?
      </h4>
      <div id="SupportPage__helpcontainer">
        <img src={despairimg} />
        <div id="SupportPage__helpinfo">
          <p
            style={{
              color:
                mode == "light"
                  ? "rgba(20, 20, 20, 1)"
                  : "rgba(255, 255, 255, 1)",
            }}
          >
            To save you from falling into a chasm of confusion, we are here to
            provide support :)
          </p>
          <div id="SupportPage__discordinfo">
            <div
              id="SupportPage__discordlink"
              onClick={() => {
                window.open("http://palette-discord.ieeevit.org/", "_blank");
              }}
            >
              <p>Open a ticket on discord</p>
            </div>
            <p
              style={{
                color:
                  mode == "light"
                    ? "rgba(20, 20, 20, 0.7)"
                    : "rgba(255, 255, 255, 0.7)",
              }}
            >
              We will reach out to you as soon as possible
            </p>
          </div>
        </div>
      </div>
      <div id="SupportPage__socialinfo">
        <p
          style={{
            color:
              mode == "light"
                ? "rgba(20, 20, 20, 1)"
                : "rgba(255, 255, 255, 1)",
          }}
        >
          Stay tuned with the latest updates
        </p>
        <div id="SupportPage__socialicons">
          <a
            href="https://www.linkedin.com/company/ieee-vit-vellore"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mode == "dark" ? linkedin : linkedin_dark} />
          </a>
          <a
            href="https://twitter.com/ieeevitvellore"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mode == "dark" ? twitter : twitter_dark} />
          </a>
          <a
            href="https://www.instagram.com/ieeevitvellore/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mode == "dark" ? instagram : instagram_dark} />
          </a>
        </div>
      </div>
    </div>
  );
}

SupportPage.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.number.isRequired,
};
