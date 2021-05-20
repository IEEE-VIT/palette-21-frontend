/* eslint-disable react/prop-types */
import { Grid, Typography, Hidden } from "@material-ui/core";
import React from "react";
import paletteLogo from "../../assets/logo.svg";
import PropTypes from "prop-types";

export default function TopHeader(props) {
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
          <Hidden mdDown>
            <Grid item>
              <Typography variant="subtitle1">
                Good Evening, {props.name}
              </Typography>
            </Grid>
          </Hidden>
          <Grid item align="center">
            <img
              src={props.img}
              height={32}
              width={32}
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
