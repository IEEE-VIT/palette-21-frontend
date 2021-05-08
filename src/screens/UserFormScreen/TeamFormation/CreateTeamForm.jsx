import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Button,
  TextField,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <Box m={4} mx={15} mt={10}>
      <Paper class={classes.paper} variant="elevation" elevation={10}>
        <Box p={4}>
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
                      variant="contained"
                      color="primary"
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
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                          />
                        </Grid>
                        <Grid item>Looking for teammates</Grid>
                      </Grid>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
