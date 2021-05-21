import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import SendIcon from "@material-ui/icons/Send";
import GroupedButton from "../../../components/GroupedButton/groupButton";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import api from "../../../api/regPortal";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  const MAX_VAL = 10000;
  const withValueLimit = (inputObj) => {
    const { value } = inputObj;
    if (value < MAX_VAL) return inputObj;
  };
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      prefix="# "
      allowLeadingZeros={false}
      allowNegative={false}
      isAllowed={withValueLimit}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function BasicDetailsForm(props) {
  const theme = useTheme();
  const useStyles = makeStyles({
    paper: theme.custom.paper,
    miniButton: {
      maxWidth: "20px",
      madHeight: "30px",
    },
    outlinePaper: theme.custom.outlinePaper,
    bg: {
      background: "#FFF",
    },
    inputFields: {
      color: theme.custom.textFieldColor,
    },
    formControl: {
      // minWidth: 400,
    },
    smallText: {
      fontSize: "0.7rem",
    },
    labelRoot: {
      fontSize: "0.7rem",
    },
    labelRoot2: {
      fontSize: "0.67rem",
    },
    helperTitle: {
      color: "#999999",
    },
    button: {
      padding: "10px",
      paddingLeft: "25px",
      paddingRight: "25px",
    },
  });
  const classes = useStyles();
  const [hearUs, setHearUs] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);
  const [discordUsername, setDiscordUsername] = useState("");
  const [discordHash, setDiscordHash] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [cookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [toolsDisable, setToolsDisable] = useState(false);
  const [skillsDisable, setSkillsDisable] = useState(false);

  useEffect(() => {
    checkValidation();
  }, [hearUs, discordHash, discordUsername, selectedSkills, selectedTools]);

  useEffect(() => {
    console.log("Initialise Call");
  }, []);

  const handleSelectedSkillChange = (input) => {
    if (selectedSkills.includes(input)) {
      const index = selectedSkills.indexOf(input);
      if (index > -1) {
        selectedSkills.splice(index, 1);
        setSkillsDisable(false);
      }
    } else {
      if (selectedSkills.length == 3) {
        selectedSkills.push(input);
        setSelectedTools(selectedSkills);
        setSkillsDisable(true);
      } else {
        selectedSkills.push(input);
        setSelectedSkills(selectedSkills);
      }
    }

    console.log(selectedSkills);
  };

  const handleSelectedToolChange = (input) => {
    if (selectedTools.includes(input)) {
      const index = selectedTools.indexOf(input);
      if (index > -1) {
        selectedTools.splice(index, 1);
        setToolsDisable(false);
      }
    } else {
      if (selectedTools.length == 3) {
        selectedTools.push(input);
        setSelectedTools(selectedTools);
        setToolsDisable(true);
      } else {
        selectedTools.push(input);
        setSelectedTools(selectedTools);
      }
    }
  };

  const handleHearUsSelection = (event) => {
    setHearUs(event.target.value);
  };

  const handleNameChange = (event) => {
    setDiscordUsername(event.target.value);
    console.log(event.target.value);
  };

  const handleHashChange = (event) => {
    setDiscordHash(event.target.value);
    console.log(event.target.value);
  };

  const checkValidation = () => {
    console.log("This is from checkValidation", hearUs);
    if (
      selectedSkills.length !== 0 &&
      selectedTools.length !== 0 &&
      hearUs !== "" &&
      discordUsername !== "" &&
      discordHash !== ""
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  };

  const buttonNext = () => {
    const data = {
      discordHandle: discordUsername + "#" + discordHash,
      skills: selectedSkills,
      tools: selectedTools,
      outreach: hearUs,
    };
    console.log(data);
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   props.moveNext("teamFormation");
    // }, 2000);
    callApi(data);
  };

  const callApi = (data) => {
    const regPortalApi = new api(
      cookies.token,
      // eslint-disable-next-line no-undef
      process.env.REACT_APP_BACKEND_API
    );
    regPortalApi
      .userForm(data)
      .then((result) => {
        console.log(result);
        props.moveNext("teamFormation");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const tools = [
    "Figma",
    "Sketch",
    "Adobe XD",
    "Illustrator",
    "After Effects",
    "Webflow",
    "Principle",
    "Protopie",
    "Framer",
    "Invision",
  ];

  const skills = [
    "Branding",
    "Marketing",
    "VFX",
    "UI/UX",
    "Graphic Design",
    "Interaction Design",
    "Visual Design",
  ];

  return (
    <div>
      <Box m={4} mx={{ xs: 3, md: 15 }} mt={10}>
        <Paper class={classes.paper} variant="elevation" elevation={10}>
          <Box p={5}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h6">Enter your basic details</Typography>
              </Grid>
              <Grid item>
                <Box my={2}>
                  <Paper variant="outlined" className={classes.outlinePaper}>
                    <Box mx={2} my={1}>
                      <Grid
                        spacing={0}
                        container
                        direction="row-reverse"
                        justify="space-between"
                        alignItems="center"
                      >
                        <Grid item xs={5} sm={5}>
                          <TextField
                            color="secondary"
                            required
                            label="Discord Hash"
                            placeholder="#2424"
                            hint="#2424"
                            onChange={handleHashChange}
                            InputProps={{
                              disableUnderline: true,
                              className: classes.inputFields,
                              inputComponent: NumberFormatCustom,
                            }}
                            InputLabelProps={{
                              classes: {
                                root: classes.labelRoot,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <TextField
                            required
                            color="secondary"
                            id="standard-required"
                            label="Discord Username"
                            placeholder="design.melon"
                            onChange={handleNameChange}
                            InputProps={{
                              disableUnderline: true,
                              className: classes.inputFields,
                            }}
                            InputLabelProps={{
                              classes: {
                                root: classes.labelRoot2,
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={3}>
                  <Typography variant="body2" className={classes.helperTitle}>
                    Choose Skills
                    <br /> Max 4 skills
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={2}>
                  <Grid container direction="row" spacing={1}>
                    {skills.map((item, index) => {
                      return (
                        <Grid item key={index}>
                          <GroupedButton
                            text={item}
                            isSelectable={
                              !skillsDisable || selectedSkills.includes(item)
                            }
                            handleSelection={handleSelectedSkillChange}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={3}>
                  <Typography variant="body2" className={classes.helperTitle}>
                    Choose tools you use <br /> Max 4 tools
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={2}>
                  <Grid container direction="row" spacing={1}>
                    {tools.map((item, index) => {
                      return (
                        <Grid item key={index}>
                          <GroupedButton
                            isSelectable={
                              !toolsDisable || selectedTools.includes(item)
                            }
                            text={item}
                            isSelected="false"
                            iconName={item}
                            handleSelection={handleSelectedToolChange}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={3}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel>How did you hear about us?</InputLabel>
                    <Select
                      value={hearUs}
                      onChange={handleHearUsSelection}
                      label="How did you hear about us?"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Twitter"}>Twitter</MenuItem>
                      <MenuItem value={"Instagram"}>Instagram</MenuItem>
                      <MenuItem value={"Facebook"}>Facebook</MenuItem>
                      <MenuItem value={"Linkedin"}>Linkedin</MenuItem>
                      <MenuItem value={"Email"}>Email</MenuItem>
                      <MenuItem value={"Discord"}>Discord</MenuItem>
                      <MenuItem value={"Slack"}>Slack</MenuItem>
                      <MenuItem value={"Reddit"}>Reddit</MenuItem>
                      <MenuItem value={"Word of Mouth"}>Word of Mouth</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={3}>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      disabled={!isValidForm}
                      className={classes.button}
                      onClick={() => {
                        buttonNext();
                      }}
                      variant="contained"
                      color="primary"
                      endIcon={<SendIcon />}
                    >
                      Save and Next
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

BasicDetailsForm.propTypes = {
  moveNext: PropTypes.func,
};
