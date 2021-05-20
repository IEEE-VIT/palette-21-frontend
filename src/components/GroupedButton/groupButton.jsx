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
};
