import { Box, Grid } from "@material-ui/core";
import React from "react";
import bannerImage from "../../../assets/basicDetails/banner.png";

export default function BasicDetailsBanner() {
  return (
    <Box mt={7}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item>
          <img src={bannerImage} height={380} />
        </Grid>
      </Grid>
    </Box>
  );
}
