import { Box, Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  button: {
    // filter: `url(#round)`,
    clipPath: `polygon(86% 0, 100% 49%, 86% 100%, 0 100%, 0 0)`,
    padding: "0px",
    width: "282px",
    height: "56px",
  },
  button2: {
    clipPath: `polygon(0 0, 86% 0%, 100% 50%, 86% 100%, 0 100%, 14% 50%)`,
    padding: "0px",
    width: "282px",
    height: "56px",
  },
  button3: {
    clipPath: `polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 14% 50%)`,
    padding: "0px",
    width: "282px",
    height: "56px",
  },
});

export default function play() {
  const classes = useStyles();
  return (
    <Box p={4}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        style={{ filter: `url(#round)` }}
      >
        <svg
          style={{ visibility: "hidden", position: "absolute" }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="round">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        Suppppppp
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button2}
        style={{ filter: `url(#round)` }}
      >
        <svg
          style={{ visibility: "hidden", position: "absolute" }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="round">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        Suppppppp
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button2}
        style={{ filter: `url(#round)` }}
      >
        <svg
          style={{ visibility: "hidden", position: "absolute" }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="round">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        Suppppppp
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button3}
        style={{ filter: `url(#round)` }}
      >
        <svg
          style={{ visibility: "hidden", position: "absolute" }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="round">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        Suppppppp
      </Button>
    </Box>
  );
}
