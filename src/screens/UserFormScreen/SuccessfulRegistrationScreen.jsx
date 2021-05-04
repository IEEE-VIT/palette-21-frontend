import { Grid, Button, Box } from "@material-ui/core";
import React from "react";
import "./UserFormScreen.css";
import { useHistory } from "react-router-dom";

export default function SuccessfullRegistrationScreen() {
  const history = useHistory();
  const naviagateToReg = () => {
    history.push("/userForm");
  };
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          You have sucessfully registered for Palette&apos;21
        </Grid>
        <Grid item xs={12}>
          <Box mt={4}>Let&apos;s setup your profile</Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                naviagateToReg();
              }}
            >
              Continue
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
