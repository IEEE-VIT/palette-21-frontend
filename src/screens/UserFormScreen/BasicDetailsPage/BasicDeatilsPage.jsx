import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import BasicDetailsBanner from "./BasicDetailsBanner";
import BasicDetailsForm from "./BasicDetailsForm";

export default function BasicDeatilsPage() {
  return (
    <div>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={6}>
            <BasicDetailsBanner />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <BasicDetailsForm />
        </Grid>
      </Grid>
    </div>
  );
}
