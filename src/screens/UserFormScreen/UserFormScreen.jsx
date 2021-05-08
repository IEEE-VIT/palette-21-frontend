import { Button, Grid } from "@material-ui/core";
import { React, useState } from "react";
import BasicDeatilsPage from "./BasicDetailsPage/BasicDeatilsPage";
import BasicTeamForm from "./BasicDetailsPage/BasicTeamForm";
import CreateTeamForm from "./TeamFormation/CreateTeamForm";

export default function UserFormScreen() {
  const [screen, setScreen] = useState("userBasicDetails");

  const setPage = (input) => {
    setScreen(input);
  };

  const switchPage = (input) => {
    switch (input) {      
      case "userBasicDetails":
        return <BasicDeatilsPage />;
      case "createTeamForm":
        return <CreateTeamForm />;
      case "teamFormation":
        return <BasicTeamForm />;
    }
  };
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12}>
          Header
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <Button variant="contained" color="primary">
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setPage("userBasicDetails");
                }}
              >
                Basic Details
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setPage("teamFormation");
                }}
              >
                Team Formation
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Ready
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          {switchPage(screen)}
        </Grid>
      </Grid>
    </div>
  );
}
