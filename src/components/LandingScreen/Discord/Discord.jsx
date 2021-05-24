import React from "react";
import "./Discord.css";
import DiscordLogo from "../../../assets/Discord.png";

export default function Discord() {
  return (
    <a
      href="http://palette-discord.ieeevit.org/"
      target="_blank"
      rel="noreferrer"
    >
      <img id="DiscordIcon" src={DiscordLogo} alt="Palette Discord Server" />
    </a>
  );
}
