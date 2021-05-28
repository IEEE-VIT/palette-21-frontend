import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import cookies from "react-cookies";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import EventOverview from "../../components/EventOverview/EventOverview";
import TeamsPage from "../../components/TeamsPage/TeamsPage";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import SupportPage from "../../components/SupportPage/SupportPage";
import ReviewsPage from "../../components/ReviewsPage/ReviewsPage";
import ProblemStatement from "../../components/ProblemStatement/ProblemStatement";
import { userFetch } from "../../utils/DashboardHelperFuncs";
import ToastContainer from "../../components/Toast/Toast";
import { toastDark, toastLight } from "../../utils/Toast";
import LoadingScreen from "../../components/LandingScreen/LoadingScreen/LoadingScreen";
import Logo from "../../assets/logo-mobile-view.svg";
import api from "../../api/regPortal";

export default function Dashboard() {
  const [userDetails, setUserDetails] = useState([]);
  const [mode, setMode] = useState("");
  const [selectedPage, setSelectedPage] = useState(0);
  const [pageLoading, setPageLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });
  const history = useHistory();
  const pageTitles = [
    "Palette",
    "Teams",
    "Reviews and Rounds",
    "Guide",
    "Help and Support",
    "Problem Statement",
  ];
  useEffect(() => {
    const ffcheck = cookies.load("ffcheck");
    const token = cookies.load("token");
    if (ffcheck !== "true") {
      // eslint-disable-next-line no-undef
      const regPortal = new api(token, process.env.REACT_APP_BACKEND_API);
      regPortal
        .didFillForm()
        .then((result) => {
          const apiData = result.data;
          if (!apiData.data.round0 || !apiData.data.teamFormed) {
            history.push("/userForm");
          } else {
            cookies.save("ffcheck", "true");
            history.push("/dashboard");
          }
          localStorage.setItem("userImage", apiData.data.userImg);
          localStorage.setItem("userName", apiData.data.name);
        })
        .catch(() => {
          // console.log(err);
          history.push("/");
        });
    }
    try {
      userFetch()
        .then((resp) => {
          setUserDetails(resp.data.data);
          setPageLoading(false);
        })
        .catch(() => {
          var curMode = cookies.load("mode");
          //console.log(curMode);
          curMode == "light"
            ? toastDark("Something Went Wrong! Please try again!")
            : toastLight("Something Went Wrong! Please try again!");
        });
    } catch (error) {
      //console.log(`Caught by try/catch ${error}`);
    }
  }, []);

  if (!pageLoading) {
    if (windowWidth <= 943) {
      // console.log("userDetails", userDetails.user);
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            background: "#121212",
            color: "#FFF",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "50px",
                borderRadius: "50%",
                border: "3px solid #563ae8",
              }}
              src={userDetails.user.userImg}
              alt=""
            />
            <div
              style={{
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "20px",
                /* identical to box height, or 143% */

                textAlign: "center",
                letterSpacing: "0.1px",
                marginTop: "8px",
              }}
            >
              Hey! {userDetails.user.name.split(" ")[0]}
            </div>
            <div
              style={{
                fontSize: "23px",
                lineHeight: "28px",
                marginTop: "30px",
              }}
            >
              Welcome to Palette
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#292929",
              padding: "1rem",
              width: "80%",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "6px",
            }}
          >
            <img src={Logo} alt="" />
            <div
              style={{
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "20px",
              }}
            >
              Palette is too big to come under 1024 pixels. Please switch to the
              desktop for a better experience. 🤗
            </div>
          </div>
          <div
            style={{
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "23px",

              textAlign: "center",
              letterSpacing: "0.115454px",

              color: "#7A7A7A",
            }}
          >
            Thank you for registering for palette 😄
          </div>
        </div>
      );
    }
  }

  if (pageLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      id="Dashboard__container"
      style={{ backgroundColor: mode == "dark" ? "#141414" : "#FAFAFA" }}
    >
      <SideNavbar
        mode={mode}
        teamName={
          userDetails
            ? userDetails["team"]
              ? userDetails["team"]["name"]
              : ""
            : ""
        }
        teamCode={
          userDetails
            ? userDetails["user"]
              ? userDetails["user"]["teamCode"]
              : ""
            : ""
        }
        selectedPage={selectedPage}
        setSelectedPage={(pageNo) => setSelectedPage(pageNo)}
      />
      <TopNavbar
        title={pageTitles[selectedPage]}
        name={
          userDetails
            ? userDetails["user"]
              ? userDetails["user"]["name"]
              : ""
            : ""
        }
        mode={mode}
        setMode={(m) => setMode(m)}
        imgUrl={
          userDetails
            ? userDetails["user"]
              ? userDetails["user"]["userImg"]
              : ""
            : ""
        }
      />
      <EventOverview mode={mode} selectedPage={selectedPage} />
      <TeamsPage
        mode={mode}
        selectedPage={selectedPage}
        needTeam={
          userDetails
            ? userDetails["user"]
              ? userDetails["user"]["needTeam"]
              : true
            : true
        }
        teamCode={
          userDetails
            ? userDetails["user"]
              ? userDetails["user"]["teamCode"]
              : ""
            : ""
        }
        teamName={
          userDetails
            ? userDetails["team"]
              ? userDetails["team"]["name"]
              : ""
            : ""
        }
        teamUsers={
          userDetails
            ? userDetails["team"]
              ? userDetails["team"]["users"]
              : []
            : []
        }
      />
      <ReviewsPage
        mode={mode}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <SupportPage mode={mode} selectedPage={selectedPage} />
      <ProblemStatement mode={mode} selectedPage={selectedPage} />
      <BottomNavbar />
      <ToastContainer />
    </div>
  );
}
