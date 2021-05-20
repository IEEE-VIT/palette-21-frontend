import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#1D1D1D",
    color: "#FFFF",
    borderRadius: 12,
  },
  button: {
    padding: "20px",
    paddingLeft: "65px",
    paddingRight: "65px",
  },
});

export default function BasicTeamForm() {
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
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Participate Solo
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography vairant="caption">
                      You will still be able to join team later.{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box my={5}>
                <Divider variant="middle" />
              </Box>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Join or create a team
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography vairant="caption">
                      Max 2 person in one team
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
