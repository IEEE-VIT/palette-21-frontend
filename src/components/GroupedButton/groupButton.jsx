import {
  Button,
  makeStyles,
  Typography,
  Icon,
  useTheme,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { React, useState } from "react";
import figmaImage from "../../assets/basicDetails/figma.svg";
// import figmaImage from "../../assets/basicDetails/figma.svg";
import adobeXdImage from "../../assets/basicDetails/adovexd.svg";
import invisionImage from "../../assets/basicDetails/invision.svg";
import principleImage from "../../assets/basicDetails/principle.svg";
import protopieImage from "../../assets/basicDetails/protopie.svg";
import adobeIllustratorImage from "../../assets/basicDetails/illuustrator.svg";
import webflowImage from "../../assets/basicDetails/webflow.svg";
import sketchImage from "../../assets/basicDetails/sketch.svg";
import framerImage from "../../assets/basicDetails/framer.svg";
import aeImage from "../../assets/basicDetails/afterEffects.svg";

export default function GroupedButton(props) {
  const theme = useTheme();
  const useStyles = makeStyles({
    smallText: {
      fontSize: "0.8rem",
      textTransform: "none",
    },
    disabledButton: {
      paddingTop: "5px",
      paddingBottom: "5px",
      background: theme.custom.disabledButton,
      color: theme.custom.groupedButtonText,
      "&:hover": {
        backgroundColor: "#FFF",
        color: "#694FEF",
      },
    },
    focusedButton: {
      paddingTop: "5px",
      paddingBottom: "5px",
    },
    iconButtonFocused: {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
    iconButtonDisabled: {
      paddingTop: "0px",
      paddingBottom: "0px",
      background: theme.custom.disabledButton,
      color: theme.custom.groupedButtonText,
      "&:hover": {
        backgroundColor: "#FFF",
        color: "#694FEF",
      },
    },
    iconSettings: {
      display: "inline",
    },
  });
  const classes = useStyles();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    props.handleSelection(props.text);
  };

  const enableIcon = (iconName) => {
    switch (iconName) {
      case "Figma":
        return iconGenerator(figmaImage);
      case "Protopie":
        return iconGenerator(protopieImage);
      case "Principle":
        return iconGenerator(principleImage);
      case "Invision":
        return iconGenerator(invisionImage);
      case "Sketch":
        return iconGenerator(sketchImage);
      case "Adobe XD":
        return iconGenerator(adobeXdImage);
      case "Illustrator":
        return iconGenerator(adobeIllustratorImage);
      case "After Effects":
        return iconGenerator(aeImage);
      case "Webflow":
        return iconGenerator(webflowImage);
      case "Framer":
        return iconGenerator(framerImage);
      default:
        return iconGenerator(figmaImage);
    }
  };

  const iconGenerator = (image) => {
    return (
      <Icon className={classes.iconSettings}>
        <img alt="icons" src={image} />
      </Icon>
    );
  };

  return (
    <div>
      {props.iconName != null ? (
        <Button
          disabled={!props.isSelectable}
          disableElevation={true}
          classes={{
            startIcon: classes.iconSettings,
          }}
          variant="contained"
          size="small"
          startIcon={enableIcon(props.iconName)}
          color={isSelected ? "primary" : "default"}
          className={
            isSelected ? classes.iconButtonFocused : classes.iconButtonDisabled
          }
          onClick={() => {
            handleClick();
          }}
        >
          <Typography className={classes.smallText}> {props.text}</Typography>
        </Button>
      ) : (
        <Button
          disabled={!props.isSelectable}
          disableElevation={true}
          variant="contained"
          size="small"
          color={isSelected ? "primary" : "default"}
          className={
            isSelected ? classes.focusedButton : classes.disabledButton
          }
          onClick={() => {
            handleClick();
          }}
        >
          <Typography className={classes.smallText}> {props.text}</Typography>
        </Button>
      )}
    </div>
  );
}

GroupedButton.propTypes = {
  text: PropTypes.string,
  iconName: PropTypes.string,
  handleSelection: PropTypes.func,
  isSelectable: PropTypes.bool,
};
