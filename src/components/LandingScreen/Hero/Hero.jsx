import React from "react";
import HeroP from "../../../assets/hero-p.svg";
import HeroS from "../../../assets/hero-star.svg";
import Event from "../../../assets/Hero-leftimg.svg";
import Reg from "../../../assets/regClosing27.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "./Hero.css";

const useStyles = makeStyles(() => ({
  signinButton: {
    color: "white !important",
    borderWidth: "1px",
    borderColor: "white !important",
    width: "12.56rem",
    height: "3.3rem",
    fontSize: "1.11rem",
    borderRadius: "7px",
    fontFamily: "NeueMontreal-Regular",
  },
  caption: {
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: "1.5rem",
    color: "white !important",
  },
}));

export default function Hero() {
  // const [setWindowWidth] = useState(0);
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // });
  const classes = useStyles();
  var title = "Palette'21";
  var caption = "Prototype your imagination";
  return (
    <div id="hero">
      <Row>
        <Col className="bkgd1" xs={12} lg={7}>
          <img src={HeroS} id="hero-star"></img>
          <img src={HeroP} id="hero-p"></img>
        </Col>
        <Col className="content" xs={12} lg={5}>
          <div>
            <Typography variant="h2" id="palette21">
              {title}
            </Typography>
            <Typography id="Hero__caption" className={classes.caption}>
              {caption}
            </Typography>
          </div>
          <div id="bl2">
            <div className="inline-block block-l">
              <img src={Event} alt="" id="event-date"></img>
            </div>
            <div className="inline-block block-r">
              <img src={Reg} alt="" id="reg-date"></img>
            </div>
          </div>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.signinButton}
            onClick={() => {
              window.location.replace("/#Register");
            }}
          >
            LOGIN
          </Button>
        </Col>
      </Row>
    </div>
  );
}
