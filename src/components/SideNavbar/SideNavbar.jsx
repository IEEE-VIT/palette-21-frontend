import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SideNavbar.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SideNavbarPage from "../SideNavbarPage/SideNavbarPage";

export default function SideNavbar(props) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      id="SideNavbar__container"
      style={{
        backgroundColor: props.mode == "dark" ? "#141414" : "#ffffff",
        boxShadow:
          props.mode == "dark"
            ? "inset -1px 0px 0px #292929"
            : "inset -1px 0px 0px #EBEBEB",
      }}
    >
      <h3 id="SideNavbar__heading">Team</h3>
      <h2
        id="SideNavbar__teamname"
        style={{ color: props.mode == "dark" ? "#ffffff" : "#141414" }}
      >
        {props.teamName}
      </h2>
      <CopyToClipboard text={props.teamCode}>
        <div
          onClick={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2500);
          }}
          id="SideNavbar__teamcode"
          className={copied ? "SideNavbar__copied" : ""}
        >
          {!copied ? (
            <h3>Team Code: {props.teamCode}</h3>
          ) : (
            <h3>Code copied</h3>
          )}
          {!copied ? (
            <i style={{ marginLeft: "8px" }} className="fas fa-clone"></i>
          ) : (
            <i
              style={{ marginLeft: "8px" }}
              className="fas fa-check-circle"
            ></i>
          )}
        </div>
      </CopyToClipboard>
      <div id="SideNavbar__generator" onClick={() => props.setSelectedPage(5)}>
        <i className="fas fa-palette"></i>
        <div className="SideNavbar__generator_text">Problem Generator</div>
      </div>
      <SideNavbarPage
        mode={props.mode}
        icon="fas fa-calendar"
        title="Event Overview"
        selected={props.selectedPage == 0 ? true : false}
        selectThis={() => props.setSelectedPage(0)}
      />
      <SideNavbarPage
        mode={props.mode}
        icon="fas fa-users"
        title="Teams"
        selected={props.selectedPage == 1 ? true : false}
        selectThis={() => props.setSelectedPage(1)}
      />
      <SideNavbarPage
        mode={props.mode}
        icon="fas fa-skating"
        title="Review and Rounds"
        selected={props.selectedPage == 2 ? true : false}
        selectThis={() => props.setSelectedPage(2)}
      />
      <SideNavbarPage
        mode={props.mode}
        icon="fas fa-cog"
        title="Help and Support"
        selected={props.selectedPage == 4 ? true : false}
        selectThis={() => props.setSelectedPage(4)}
      />
    </div>
  );
}
SideNavbar.propTypes = {
  mode: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  teamCode: PropTypes.string.isRequired,
  selectedPage: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};
