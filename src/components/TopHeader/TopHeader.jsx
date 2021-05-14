import { Grid, Typography } from "@material-ui/core";
import React from "react";
import paletteLogo from "../../assets/logo.svg";

export default function TopHeader() {
  return (
    <Grid container direction="row">
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
            <Typography variant="subtitle1"> Good Evening, John</Typography>
          </Grid>
          <Grid item>Photo</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
