import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Button,
  TextField,
} from "@material-ui/core";
// import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import "./UserFormScreen.css";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#141414",
    color: "#FFFF",
    borderRadius: 12,
  },
  miniButton: {
    maxWidth: "20px",
    madHeight: "30px",
  },
  outlinePaper: {
    backgroundColor: "#141414",
    borderColor: "#694FEF",
    color: "#FFFF",
  },
  bg: {
    background: "#FFF",
  },
  inputFields: {
    color: "#FFF",
  },
});

export default function UserFormScreen() {
  const classes = useStyles();
  return (
    <div>
      <Box m={4}>
        <Grid item sm={4}>
          <Paper class={classes.paper} variant="elevation" elevation={10}>
            <Box p={4}>
              <Grid container direction="column">
                <Grid item>Enter your basic details</Grid>
                <Grid item>
                  <Box my={2}>
                    <Paper variant="outlined" className={classes.outlinePaper}>
                      <Box m={2}>
                        <Grid
                          container
                          direction="row-reverse"
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item sm={4}>
                            <TextField
                              className={classes.cssOutlinedInput}
                              required
                              id="standard-required"
                              label="Required"
                              placeholder="Hey There"
                              InputProps={{
                                className: classes.inputFields,
                              }}
                            />
                          </Grid>
                          <Grid item sm={4}>
                            <TextField
                              className={classes.background}
                              required
                              id="standard-required"
                              label="Required"
                              placeholder="Hey There"
                              InputProps={{
                                className: classes.inputFields,
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item>
                  <Box mt={3}>Choose Skills</Box>
                </Grid>
                <Grid item>
                  <div>Set of Buttons</div>
                </Grid>
                <Grid item>
                  <Box mt={3}>Choose tools you use</Box>
                </Grid>
                <Grid item>
                  <div>Choose tools you use Componenet</div>
                </Grid>
                <Grid item>
                  <Box mt={3}>How did you come to know about Palette?</Box>
                </Grid>
                <Grid item>
                  <Box mt={3}>
                    <Button variant="contained" color="default">
                      Save and Next
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Box>
    </div>
  );
}
