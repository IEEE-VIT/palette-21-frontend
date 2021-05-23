import { Grid, Button, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const useStyles = makeStyles({
  button: {
    padding: "10px",
    textTransform: "none",
  },
  textColor: {
    color: "#563AE8",
  },
});

export default function UserFormCompletionScreen() {
  const classes = useStyles();
  const history = useHistory();
  const [, setCookies] = useCookies(["ffcheck"]);

  const navigate = () => {
    setCookies("ffcheck", "true");
    history.push("/dashboard");
  };
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>
        <div>
          <Typography style={{ display: "inline-block" }} variant="h6">
            Yay! you are set to{" "}
            <Typography
              style={{ display: "inline-block" }}
              className={classes.textColor}
              variant="h6"
            >
              shift pixels{" "}
            </Typography>
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <Box my={10}>
          <Button
            onClick={() => {
              navigate();
            }}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Take me to my Dashboard
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
