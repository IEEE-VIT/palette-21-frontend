import React, { useState } from "react";
import "./TopNavbar.css";
import PropTypes from "prop-types";
import ModeSlider from "../ModeSlider/ModeSlider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import cookies from "react-cookies";

export default function TopNavbar(props) {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <div
      id="TopNavbar__container"
      style={{
        backgroundColor: props.mode == "dark" ? "#141414" : "#FAFAFA",
        color: props.mode == "dark" ? "#ffffff" : "#141414",
      }}
    >
      <h1 id="TopNavbar__title">{props.title}</h1>
      <div id="TopNavbar__profile">
        <ModeSlider mode={props.mode} setMode={(m) => props.setMode(m)} />
        <h2>Hey, {props.name}</h2>
        <img
          src={props.imgUrl}
          onClick={() => {
            setAnchorEl(!anchorEl);
          }}
        />
      </div>
      <Menu
        id="simple-menu"
        className="TopNavbar__logout"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={anchorEl}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            cookies.remove("token");
            cookies.remove("mode");
            cookies.remove("ffcheck");
            localStorage.clear();
            window.location.reload();
          }}
        >
          <i className="fas fa-sign-out-alt"></i> Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

TopNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
