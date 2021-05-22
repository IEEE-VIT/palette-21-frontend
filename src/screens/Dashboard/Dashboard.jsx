import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import cookies from "react-cookies";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import EventOverview from "../../components/EventOverview/EventOverview";
import TeamsPage from "../../components/TeamsPage/TeamsPage";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import SupportPage from "../../components/SupportPage/SupportPage";
import ReviewsPage from "../../components/ReviewsPage/ReviewsPage";
import { userFetch } from "../../utils/DashboardHelperFuncs";
import ToastContainer from "../../components/Toast/Toast";
import { toastDark, toastLight } from "../../utils/Toast";

export default function Dashboard() {
  const [userDetails, setUserDetails] = useState([]);
  const [mode, setMode] = useState("");
  const [selectedPage, setSelectedPage] = useState(0);
  const pageTitles = [
    "Palette",
    "Team",
    "Reviews",
    "Guide",
    "Help and Support",
    "Problem Statement",
  ];
  useEffect(() => {
    try {
      userFetch()
        .then((resp) => {
          setUserDetails(resp.data.data);
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
      <ReviewsPage mode={mode} selectedPage={selectedPage} />
      <SupportPage mode={mode} selectedPage={selectedPage} />
      <BottomNavbar />
      <ToastContainer />
    </div>
  );
}
