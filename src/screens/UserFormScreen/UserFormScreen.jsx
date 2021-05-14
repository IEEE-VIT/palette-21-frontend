import { Button, Grid, Box } from "@material-ui/core";
import { React, useState } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import BasicDeatilsPage from "./BasicDetailsPage/BasicDeatilsPage";
import UserFormCompletionScreen from "./FormHelpers/UserFormCompletionScreen";
import CreateTeamForm from "./TeamFormation/CreateTeamForm";
import TeamFormationForm from "./TeamFormation/TeamForm";

export default function UserFormScreen() {
  const [screen, setScreen] = useState("userBasicDetails");

  const setPage = (input) => {
    setScreen(input);
  };

  const switchPage = (input) => {
    switch (input) {
      case "userBasicDetails":
        return <BasicDeatilsPage moveNext={setPage} />;
      case "createTeamForm":
        return <CreateTeamForm />;
      case "teamFormation":
        return <TeamFormationForm />;
      case "userRegCompletionScreen":
        return <UserFormCompletionScreen />;
    }
  };
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Box p={{ xs: 1, md: 4 }}>
            <TopHeader />
          </Box>
        </Grid>
        <Grid item>
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setPage("userRegCompletionScreen");
                }}
              >
                Ready
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{switchPage(screen)}</Grid>
      </Grid>
    </div>
  );
}
