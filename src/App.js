import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import UserFormScreen from "./screens/UserFormScreen/UserFormScreen";
import SuccesfulAuth from "./screens/successfulAuth";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Dashboard from "./screens/Dashboard/Dashboard";
import PageNotFound from "./screens/PageNotFound/PageNotFound";
import ProtectedRoute from "./utils/protectedRoute";

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
      textFieldColor: "#FFF",
    },
  });

  const lightTheme = createMuiTheme({
    typography: {
      fontFamily: ["Inter"].join(","),
    },
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
      textFieldColor: "#000",
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
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <LandingScreen toggleTheme={toggleDarkTheme} />}
            />
            {/* <CssBaseline /> */}
            <Route exact path="/successfulAuth" component={SuccesfulAuth} />
            <ProtectedRoute
              exact
              path="/userForm"
              component={() => <UserFormScreen toggleTheme={toggleDarkTheme} />}
              redirect="/"
            />
            <ProtectedRoute
              exact
              path="/dashboard"
              component={Dashboard}
              redirect="/"
            />
            <Route page="" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default AppRouter;
