/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";

import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    colour: "black"
  },
  appBarTransparent: {
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  appBarSolid: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
}));

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: screen.availHeight * 0.9,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "rgba(255, 255, 255, 1)" : "transparent",
      color: trigger ? "black" : "black",
      transition: trigger ? "0.3s" : "0.3s",
      boxShadow: trigger ? "0 4px 14px 0 rgba(130, 130, 130, 0.4)" : "none",
      padding: "2px 0px",
      position: "fixed"
    }
  });
};

const ScrollToColor01 = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

const Navbar01scrollToColor = (props) => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ScrollToColor01>
        <AppBar position="static">{props.children}</AppBar>
      </ScrollToColor01>
    </ThemeProvider>
  );
};

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <Navbar01scrollToColor>
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Button variant="outlined" color="secondary">
            Register
          </Button>
        </Toolbar>
      </Navbar01scrollToColor>
    </div>
  );
}
