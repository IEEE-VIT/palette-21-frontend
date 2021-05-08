import { Box, Grid } from "@material-ui/core";
import React from "react";
import bannerImage from "../../../assets/basicDetails/banner.png";

export default function BasicDetailsBanner() {
  return (
    <Box mt={20}>
      <Grid item>
        <img src={bannerImage} height={300} />
      </Grid>
    </Box>
  );
}
