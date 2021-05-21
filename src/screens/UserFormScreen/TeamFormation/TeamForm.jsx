import { Grid } from "@material-ui/core";
import React from "react";
import CreateTeamForm from "./CreateTeamForm";
import PropTypes from "prop-types";

export default function TeamFormationForm(props) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={12} md={6}>
        <CreateTeamForm moveNext={props.moveNext} />
      </Grid>
    </Grid>
  );
}

TeamFormationForm.propTypes = {
  moveNext: PropTypes.func,
};
