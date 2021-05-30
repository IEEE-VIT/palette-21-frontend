import React from "react";
import "./PageNotFound.css";
//import cookie from "react-cookies";
import nfimg from "../../assets/404image.png";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export default function PageNotFound() {
  //const [mode, setMode] = useState("dark");
  const history = useHistory();
  /*useEffect(() => {
    var mode = cookie.load("mode");
    //console.log("mode : " + mode);
    if (mode !== "dark" && mode !== "light") {
      setMode("dark");
      cookie.save("mode", "dark");
    } else {
      setMode(mode);
    }
  }, []);*/
  return (
    <div
      id="PageNotFound__container"
      style={{
        backgroundColor: "rgba(20, 20, 20, 1)",
      }}
    >
      <img src={nfimg} />
      <p
        id="PageNotFound__message"
        style={{
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        <Typography>
          This page doesn&apos;t exists!, unlike the design in your head
        </Typography>
      </p>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          history.push("/");
        }}
      >
        Go back to home page
      </Button>
    </div>
  );
}
