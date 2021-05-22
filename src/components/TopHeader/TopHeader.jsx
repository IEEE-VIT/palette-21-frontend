/* eslint-disable react/prop-types */
import {
  Grid,
  Typography,
  Hidden,
  withStyles,
  Switch,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import paletteLogo from "../../assets/palette-logo-reg-screen.svg";
import PropTypes from "prop-types";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 45,
    height: 25,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 3,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(19px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 19,
    height: 19,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
export default function TopHeader(props) {
  const theme = useTheme();
  const [state, setState] = useState({
    checkedA: theme.palette.type === "light",
  });
  const handleChange = (event) => {
    props.toggleDarkTheme();
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={6}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        ></Grid>
        <img src={paletteLogo} />
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <AntSwitch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Typography variant="subtitle1">
                Hey There, {props.name}
              </Typography>
            </Grid>
          </Hidden>
          <Grid item>
            <img
              src={props.img}
              height={50}
              width={50}
              style={{ borderRadius: "50%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

TopHeader.PropTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};
