import { Grid } from "@material-ui/core";
import React from "react";
import BasicDetailsBanner from "./BasicDetailsBanner";
import BasicDetailsForm from "./BasicDetailsForm";

export default function BasicDeatilsPage() {
  return (
    <div>
      <Grid container>
        <Grid item md={6}>
          <BasicDetailsBanner />
        </Grid>
        <Grid item md={6}>
          <BasicDetailsForm />
        </Grid>
      </Grid>
    </div>
  );
}
