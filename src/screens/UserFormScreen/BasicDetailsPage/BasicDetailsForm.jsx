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
  Typography,
} from "@material-ui/core";
import React from "react";
import SendIcon from "@material-ui/icons/Send";
import GroupedButton from "../../../components/groupButton";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#1D1D1D",
    color: "#FFFF",
    borderRadius: 12,
  },
  miniButton: {
    maxWidth: "20px",
    madHeight: "30px",
  },
  outlinePaper: {
    backgroundColor: "#1D1D1D",
    borderColor: "#694FEF",
    color: "#FFFF",
  },
  bg: {
    background: "#FFF",
  },
  inputFields: {
    color: "#FFF",
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
});
export default function BasicDetailsForm() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Box m={4} mx={15} mt={10}>
        <Paper class={classes.paper} variant="elevation" elevation={10}>
          <Box p={4}>
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
                            hint="lmao"
                            InputProps={{
                              disableUnderline: true,
                              className: classes.inputFields,
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
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={2}>
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <GroupedButton text="Branding" isSelected="false" />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="Marketing" />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="VFX" />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="UI/UX" />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="Graphic" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={3}>
                  <Typography variant="body2" className={classes.helperTitle}>
                    Choose tools you use
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={2}>
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <GroupedButton
                        text="Figma"
                        isSelected="false"
                        iconName="figmaIcon"
                      />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="Sketch" iconName="figmaIcon" />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="Graphic" iconName="figmaIcon" />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="Framer" iconName="figmaIcon" />
                    </Grid>
                    <Grid item>
                      <GroupedButton text="Unknown" iconName="figmaIcon" />
                    </Grid>
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
                      value={age}
                      onChange={handleChange}
                      label="How did you hear about us?"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twitter</MenuItem>
                      <MenuItem value={20}>Instagram</MenuItem>
                      <MenuItem value={30}>Friend</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                  >
                    Save and Next
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
