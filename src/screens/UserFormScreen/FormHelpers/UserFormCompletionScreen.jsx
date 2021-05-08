import { Grid, Button } from "@material-ui/core";
import React from "react";

export default function UserFormCompletionScreen() {
  return (
    <Grid container diection="column" alignItem="center" justify="center">
      <Grid item>Yay! you are set to shift pixels</Grid>
      <Grid>
        <Button variant="contained" color="primary">
          Take me to my Dashboard
        </Button>
      </Grid>
    </Grid>
  );
}
