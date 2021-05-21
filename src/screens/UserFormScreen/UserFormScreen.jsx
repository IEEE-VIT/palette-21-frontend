import { Grid, Box, useTheme } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import BasicDeatilsPage from "./BasicDetailsPage/BasicDeatilsPage";
import UserFormCompletionScreen from "./FormHelpers/UserFormCompletionScreen";
import TeamFormationForm from "./TeamFormation/TeamForm";
import api from "../../api/regPortal";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Stepper from "react-stepper-horizontal";
import PropTypes from "prop-types";

export default function UserFormScreen(props) {
  const [screen, setScreen] = useState("userBasicDetails");
  const [name, setName] = useState("Epic Designer");
  const [img, setImage] = useState("");
  const [cookies] = useCookies(["token"]);
  const [activity, setActivity] = useState(1);
  const history = useHistory();

  const setPage = (input) => {
    setScreen(input);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
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
        if (activity != 1) setActivity(1);
        return <BasicDeatilsPage moveNext={setPage} />;
      case "teamFormation":
        if (activity != 2) setActivity(2);
        return <TeamFormationForm />;
      case "userRegCompletionScreen":
        if (activity != 3) setActivity(3);
        setActivity(3);
        return <UserFormCompletionScreen />;
    }
  };
  const mediaQuery = window.matchMedia("(min-width: 480px)");
  const theme = useTheme();
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
          <Box px={{ xs: 1, md: 0 }}>
            <Stepper
              titleFontSize={mediaQuery.matches ? 16 : 12}
              activeColor="#D5D4E3"
              defaultColor="#7A7A7A"
              activeBorderColor="#563AE8"
              completeBarColor="#563AE8"
              completeColor="#563AE8"
              completeTitleColor="#563AE8"
              activeTitleColor={
                theme.palette.type === "light" ? "#000" : "#FFF"
              }
              completeBorderColor="#FFF"
              circleFontColor=""
              defaultBorderWidth="120px"
              size={40}
              circleTop={10}
              steps={[
                { title: "Register" },
                {
                  title: "Basic Details",
                },
                {
                  title: "Team Formation",
                },
                { title: "Ready to shift pixels" },
              ]}
              activeStep={activity}
            />
          </Box>
          {/* <Grid
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
          </Grid> */}
        </Grid>
        <Grid item>{switchPage(screen)}</Grid>
      </Grid>
    </div>
  );
}

UserFormScreen.propTypes = {
  toggleTheme: PropTypes.func,
};
