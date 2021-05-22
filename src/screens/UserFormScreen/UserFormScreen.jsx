/* eslint-disable no-undef */
import { Grid, Box, useTheme, makeStyles, Paper } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import BasicDeatilsPage from "./BasicDetailsPage/BasicDeatilsPage";
import UserFormCompletionScreen from "./FormHelpers/UserFormCompletionScreen";
import CreateTeamForm from "./TeamFormation/CreateTeamForm";
import api from "../../api/regPortal";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Stepper from "react-stepper-horizontal";
import PropTypes from "prop-types";
import background from "../../assets/basicDetails/regBackground.svg";

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
    // if (cookies.token === undefined) {
    //   return history.push("/");
    // }
    const imgUrl = localStorage.getItem("userImage");
    const userName = localStorage.getItem("userName");
    if ((imgUrl !== null) | (userName !== null)) {
      setName(userName);
      setImage(imgUrl);
    }
    const regPortal = new api(cookies.token, process.env.REACT_APP_BACKEND_API);
    regPortal
      .didFillForm()
      .then((result) => {
        console.log(result.data);
        const apiData = result.data;
        if (apiData.data.round0 && !apiData.data.teamFormed) {
          setPage("teamFormation");
        } else if (apiData.data.round0) {
          history.push("/dashboard");
        }
        localStorage.setItem("userImage", apiData.data.userImg);
        localStorage.setItem("userName", apiData.data.name);
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
        return <CreateTeamForm moveNext={setPage} />;
      case "userRegCompletionScreen":
        if (activity != 3) setActivity(3);
        return <UserFormCompletionScreen />;
    }
  };
  const mediaQuery = window.matchMedia("(min-width: 480px)");
  const theme = useTheme();
  const useStyles = makeStyles({
    regCompletedPaper: {
      backgroundImage: `url(${background})`,
      backgroundColor: theme.palette.background.default,
    },
    normalPaper: {
      backgroundColor: theme.palette.background.default,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Paper
        className={
          screen === "userRegCompletionScreen"
            ? classes.regCompletedPaper
            : classes.normalPaper
        }
      >
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
          </Grid>
          <Grid item>{switchPage(screen)}</Grid>
        </Grid>
      </Paper>
    </div>
  );
}

UserFormScreen.propTypes = {
  toggleTheme: PropTypes.func,
};
