import { Button, makeStyles, Typography, Icon } from "@material-ui/core";
import PropTypes from "prop-types";
import { React, useState } from "react";
import figmaImage from "../assets/basicDetails/figma.svg";

const useStyles = makeStyles({
  smallText: {
    fontSize: "0.6rem",
    textTransform: "none",
  },
  disabledButton: {
    paddingTop: "5px",
    paddingBottom: "5px",
    background: "#292929",
    color: "#C2C2C2",
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
    background: "#292929",
    color: "#C2C2C2",
    "&:hover": {
      backgroundColor: "#FFF",
      color: "#694FEF",
    },
  },
  iconSettings: {
    display: "inline",
  },
});
export default function GroupedButton(props) {
  const classes = useStyles();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const enableIcon = (iconName) => {
    switch (iconName) {
      case "figmaIcon":
        return figmaIcon;
      default:
        return figmaIcon;
    }
  };

  const figmaIcon = (
    <Icon className={classes.iconSettings}>
      <img alt="icons" src={figmaImage} />
    </Icon>
  );
  return (
    <div>
      {props.iconName != null ? (
        <Button
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
  isSelected: PropTypes.bool,
  iconName: PropTypes.string,
};
