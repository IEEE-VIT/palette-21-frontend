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
  useTheme,
  CircularProgress,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { createRef, useState } from "react";
import { useCookies } from "react-cookie";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import api from "../../../api/regPortal";
import PropTypes from "prop-types";
import { toastDark, toastLight } from "../../../utils/Toast";
import ToastContainer from "../../../components/Toast/Toast";
import ReCAPTCHA from "react-google-recaptcha";

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

export default function CreateTeamForm(props) {
  const theme = useTheme();
  const useStyles = makeStyles({
    paper: theme.custom.paper,
    outlinePaper: theme.custom.outlinePaper,
    button: {
      padding: "10px",
      paddingLeft: "25px",
      paddingRight: "25px",
    },
  });
  const [cookies] = useCookies(["token", "mode"]);
  const regPortalApi = new api(
    cookies.token,
    // eslint-disable-next-line no-undef
    process.env.REACT_APP_BACKEND_API
  );
  const [state, setState] = useState({
    checkedA: false,
  });

  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [isTeamNameValid, setTeamNameValid] = useState(false);
  const [isTeamCodeValid, setTeamCodeValid] = useState(false);
  const [codeLoading, setCodeLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

  const recapthaRef = createRef();
  const [recapthaToken, setRecapthaToken] = useState();

  const getRecap = (token) => {
    return new Promise((resolve) => {
      resolve(setRecapthaToken(token));
    });
  };

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

  const handleCreateTeam = async () => {
    const token = await recapthaRef.current.executeAsync();
    await getRecap(token);
    const data = {
      teamName,
      needTeam: state.checkedA,
      token: recapthaToken,
    };
    console.log(data);
    if (teamName.length >= 15) {
      const curMode = theme.palette.type;
      curMode !== "light"
        ? toastDark("Teamname should be less than 15 characters.")
        : toastLight("Teamname should be less than 15 characters.");
      setCreateLoading(false);
      setTeamCodeValid(false);
    } else {
      setCreateLoading(true);
      setTeamCodeValid(false);
    }
    createTeamApi(data);
  };

  const handleJoinTeam = () => {
    const data = {
      teamCode,
    };
    console.log(data);
    setCodeLoading(true);
    setTeamNameValid(false);
    // setTimeout(() => {
    //   setCodeLoading(false);
    //   props.moveNext("userRegCompletionScreen");
    // }, 2000);
    joinTeamApi(data);
  };

  const createTeamApi = (data) => {
    // props.moveNext("userRegCompletionScreen");
    regPortalApi
      .createTeam(data)
      .then((result) => {
        console.log(result);
        props.moveNext("userRegCompletionScreen");
      })
      .catch((error) => {
        console.log(error);
        setCreateLoading(false);
      });
  };

  const joinTeamApi = (data) => {
    regPortalApi
      .joinTeam(data)
      .then((result) => {
        console.log(result);
        props.moveNext("userRegCompletionScreen");
      })
      .catch((error) => {
        console.log(error);
        createTeamApi(false);
      });
  };

  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={12} md={6}>
        <Box m={4} mx={2} mt={10}>
          <Paper class={classes.paper} variant="elevation" elevation={10}>
            <Box p={5}>
              <Grid container direction="column" alignItems="stretch">
                {/* <Grid item>
                  <Grid
                    container
                    direction="row"
                    spacing={0}
                    alignItems="center"
                  >
                    <Grid item>
                      <Box mt={1}>
                        <ArrowBackIosIcon />
                      </Box>
                    </Grid>
                    <Grid item>BACK</Grid>
                  </Grid>
                </Grid> */}
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
                        {createLoading ? (
                          <CircularProgress />
                        ) : (
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
                        )}
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
                          placeholder="ABC123"
                          hint="ABC123"
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
                    {codeLoading ? (
                      <CircularProgress />
                    ) : (
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
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <ToastContainer />{" "}
      <ReCAPTCHA
        ref={recapthaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_SITE_KEY}
        theme="dark"
      />
    </Grid>
  );
}

CreateTeamForm.propTypes = {
  moveNext: PropTypes.func,
};
