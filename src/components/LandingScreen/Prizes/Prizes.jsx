import React from "react";
import "./Prizes.css";
import Fade from "react-reveal/Fade";
import { Box } from "@material-ui/core";
import PrizeIllus from "../../../assets/prizeIllus.svg";

const Prizes = () => {
  return (
    <div className="prizes-div">
      <Fade bottom duration={1000} delay={500}>
        <Box
          display="flex"
          justifyContent="space-evenly"
          className="prizes-box"
          alignItems="center"
        >
          {/* <p className="prizes-heading">Prizes will be anounced soon!</p>
          <p className="prizes-content">
            We are currently in the process of counting money :)
          </p> */}
          <Box display="flex" flexDirection="column">
            <Box display="flex" className="prize-rows">
              <Box className="top-prize">First Prize</Box>
              <Box display="flex" flexDirection="column" alignItems="baseline">
                <Box className="top-prize-money">Rs 12000</Box>
                <Box className="top-prize-text">
                  Unbearable tees and Icons 8 subscription
                </Box>
              </Box>
            </Box>
            <Box display="flex" className="prize-rows">
              <Box className="top-prize">Second Prize</Box>
              <Box display="flex" flexDirection="column" alignItems="baseline">
                <Box className="top-prize-money">Rs 6000</Box>
                <Box className="top-prize-text">
                  Icons 8 subscription and UX E-books
                </Box>
              </Box>
            </Box>
            <div className="prizes-sub-head">Other special prizes</div>
            <Box display="flex" className="prize-rows">
              <Box className="bottom-prize">Best Graphic Design</Box>
              <Box display="flex" flexDirection="column" alignItems="baseline">
                <Box className="bottom-prize-money">Rs 1000</Box>
                <Box className="bottom-prize-text">
                  Sketch licenses and UX E-books
                </Box>
              </Box>
            </Box>
            <Box display="flex" className="prize-rows">
              <Box className="bottom-prize">Best Pitch</Box>
              <Box display="flex" flexDirection="column" alignItems="baseline">
                <Box className="bottom-prize-money">Rs 1000</Box>
                <Box className="bottom-prize-text">
                  Sketch licenses and UX E-books
                </Box>
              </Box>
            </Box>
            <Box display="flex" className="prize-rows">
              <Box className="bottom-prize">Best Freshers team</Box>
              <Box display="flex" flexDirection="column" alignItems="baseline">
                <Box className="bottom-yellow-prize-money">
                  Goodies and subscriptions
                </Box>
                <Box className="bottom-prize-text">
                  Unbearable tees and Axure RP Team licenses
                </Box>
              </Box>
            </Box>
            <Box display="flex" className="prize-rows">
              <Box className="bottom-prize">Best Community Voted Solution</Box>
              <Box display="flex" flexDirection="column" alignItems="baseline">
                <Box className="bottom-yellow-prize-money">
                  Goodies and subscriptions
                </Box>
                <Box className="bottom-prize-text">
                  Axure RP Team licenses and E-books
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <div className="prizes-heading">Prize Pool</div>
            <img src={PrizeIllus} className="prizes-img" alt="" />
          </Box>
        </Box>
        <Box className="prizes-footer">
          Participate in mini events to win special prizes from Github,
          Unbearable, Axure, and Hackclub.
        </Box>
        <Box className="prizes-footer gst-footer">
          *Prizes are inclusive of GST
        </Box>
      </Fade>
    </div>
  );
};

export default Prizes;
