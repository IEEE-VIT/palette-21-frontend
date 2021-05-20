import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import play from "./screens/Playground/play";
import UserFormScreen from "./screens/UserFormScreen/UserFormScreen";
import SuccesfulAuth from "./screens/successfulAuth";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const AppRouter = () => {
  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: ["Inter"].join(","),
    },
    palette: {
      type: "dark",
      background: {
        default: "#141414",
      },
      primary: {
        main: "#563AE8",
        contrastText: "#fff",
      },
      secondary: {
        main: "#FFF",
        contrastText: "#fff",
      },
    },
    custom: {
      paper: {
        backgroundColor: "#1D1D1D",
        color: "#FFFF",
        borderRadius: 12,
      },
      outlinePaper: {
        backgroundColor: "#1D1D1D",
        borderColor: "#694FEF",
        color: "#FFFF",
      },
      disabledButton: "#292929",
      groupedButtonText: "#C2C2C2",
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      background: {
        default: "#FAFAFA",
      },
      primary: {
        main: "#563AE8",
        // contrastText: "#000000",
      },
    },
    custom: {
      paper: {
        backgroundColor: "#FFFF",
        color: "#000000",
        borderRadius: 12,
      },
      outlinePaper: {
        backgroundColor: "#FFFF",
        borderColor: "#694FEF",
      },
      disabledButton: "#EBEBEB",
      groupedButtonText: "#3D3D3D",
    },
  });

  const [theme, setTheme] = useState(darkTheme);

  const toggleDarkTheme = () => {
    let newPaletteType =
      theme.palette.type === "light" ? darkTheme : lightTheme;
    setTheme(newPaletteType);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/play" component={play} />
            <Route
              exact
              path="/userForm"
              component={() => <UserFormScreen toggleTheme={toggleDarkTheme} />}
            />
            <Route exact path="/successfulAuth" component={SuccesfulAuth} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default AppRouter;
