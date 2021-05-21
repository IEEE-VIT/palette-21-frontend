import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import BasicDetailsBanner from "./BasicDetailsBanner";
import BasicDetailsForm from "./BasicDetailsForm";
import PropTypes from "prop-types";
export default function BasicDeatilsPage(props) {
  return (
    <div>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={6}>
            <BasicDetailsBanner />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <BasicDetailsForm moveNext={props.moveNext} />
        </Grid>
      </Grid>
    </div>
  );
}

BasicDeatilsPage.propTypes = {
  moveNext: PropTypes.func,
};
