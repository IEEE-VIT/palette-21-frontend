import { Button, Grid, Box } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import BasicDeatilsPage from "./BasicDetailsPage/BasicDeatilsPage";
import UserFormCompletionScreen from "./FormHelpers/UserFormCompletionScreen";
import CreateTeamForm from "./TeamFormation/CreateTeamForm";
import TeamFormationForm from "./TeamFormation/TeamForm";
import api from "../../api/regPortal";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function UserFormScreen(props) {
  const [screen, setScreen] = useState("userBasicDetails");
  const [name, setName] = useState("Epic Designer");
  const [img, setImage] = useState("");
  const [cookies] = useCookies(["token"]);
  const history = useHistory();

  const setPage = (input) => {
    setScreen(input);
  };

  useEffect(() => {
    const regPortal = new api(cookies.token, process.env.REACT_APP_BACKEND_API);
    regPortal
      .didFillForm()
      .then((result) => {
        console.log(result.data);
        const apiData = result.data;
        if (apiData.data.round0 && !apiData.data.teamFormed) {
          switchPage("teamFormation");
        } else if (apiData.data.round0) {
          history.push("/");
        }
        setName(apiData.data.name);
        setImage(apiData.data.userImg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <TopHeader
              name={name}
              img={img}
              toggleDarkTheme={props.toggleTheme}
            />
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
