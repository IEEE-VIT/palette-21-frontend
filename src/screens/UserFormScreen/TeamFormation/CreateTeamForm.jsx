import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Button,
  TextField,
  Switch,
  Typography,
  Divider,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import api from "../../../api/regPortal";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#1D1D1D",
    color: "#FFFF",
    borderRadius: 12,
  },
  outlinePaper: {
    backgroundColor: "#1D1D1D",
    borderColor: "#694FEF",
    color: "#FFFF",
  },
  button: {
    padding: "10px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
});
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 45,
    height: 25,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 3,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(19px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 19,
    height: 19,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function CreateTeamForm() {
  const [cookies] = useCookies(["token"]);
  const regPortalApi = new api(
    cookies.token,
    process.env.REACT_APP_BACKEND_API
  );
  const [state, setState] = useState({
    checkedA: false,
  });

  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [isTeamNameValid, setTeamNameValid] = useState(false);
  const [isTeamCodeValid, setTeamCodeValid] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleTeamName = (event) => {
    setTeamName(event.target.value);
    if (event.target.value != "") {
      setTeamNameValid(true);
    } else {
      setTeamNameValid(false);
    }
  };

  const handleTeamCode = (event) => {
    setTeamCode(event.target.value);
    if (event.target.value != "") {
      setTeamCodeValid(true);
    } else {
      setTeamNameValid(false);
    }
  };

  const handleCreateTeam = () => {
    const data = {
      teamName,
      needTeam: state.checkedA,
    };
    console.log(data);
  };

  const handleJoinTeam = () => {
    const data = {
      teamCode,
    };
    console.log(data);
  };

  const createTeamApi = (data) => {
    regPortalApi
      .createTeam(data)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const joinTeamApi = (data) => {
    regPortalApi
      .joinTeam(data)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const classes = useStyles();
  return (
    <Box m={4} mx={2} mt={10}>
      <Paper class={classes.paper} variant="elevation" elevation={10}>
        <Box p={5}>
          <Grid container direction="column" alignItems="stretch">
            <Grid item>
              <Grid container direction="row" spacing={0} alignItems="center">
                <Grid item>
                  <Box mt={1}>
                    <ArrowBackIosIcon />
                  </Box>
                </Grid>
                <Grid item>BACK</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Typography variant="h6">Enter your team name</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box my={1}>
                <Paper variant="outlined" className={classes.outlinePaper}>
                  <Box mx={2} my={2}>
                    <TextField
                      color="secondary"
                      required
                      onChange={handleTeamName}
                      label="Team Name"
                      placeholder="DesignPals"
                      hint="DesignPals"
                      InputProps={{
                        disableUnderline: true,
                        className: classes.inputFields,
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.labelRoot,
                        },
                      }}
                    />
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box my={2}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      disabled={!isTeamNameValid}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleCreateTeam();
                      }}
                      className={classes.button}
                    >
                      Create Team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography component="div">
                      <Grid
                        component="label"
                        container
                        alignItems="center"
                        justify="center"
                        spacing={1}
                      >
                        <Grid item>
                          <AntSwitch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                          />
                        </Grid>
                        <Grid item>Looking for teammates</Grid>
                      </Grid>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box my={2}>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={5}>
                    <Divider />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align="center">or</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Divider />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box my={1}>
                <Paper variant="outlined" className={classes.outlinePaper}>
                  <Box mx={2} my={2}>
                    <TextField
                      color="secondary"
                      required
                      onChange={handleTeamCode}
                      label="Enter team code"
                      placeholder="SSE-213"
                      hint="SSEE-213"
                      InputProps={{
                        disableUnderline: true,
                        className: classes.inputFields,
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.labelRoot,
                        },
                      }}
                    />
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box my={2}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!isTeamCodeValid}
                  onClick={() => {
                    handleJoinTeam();
                  }}
                  className={classes.button}
                  endIcon={<ArrowRightIcon />}
                >
                  Save and Next
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
