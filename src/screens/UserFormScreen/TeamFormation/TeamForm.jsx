import { Grid } from "@material-ui/core";
import React from "react";
import CreateTeamForm from "./CreateTeamForm";

export default function TeamFormationForm() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={6}>
        <CreateTeamForm />
      </Grid>
    </Grid>
  );
}
