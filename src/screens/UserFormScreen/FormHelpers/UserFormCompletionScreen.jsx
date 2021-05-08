import { Grid, Button, Box } from "@material-ui/core";
import React from "react";

export default function UserFormCompletionScreen() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>Yay! you are set to shift pixels</Grid>
      <Grid item>
        <Box my={10}>
          <Button variant="contained" color="primary">
            Take me to my Dashboard
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
