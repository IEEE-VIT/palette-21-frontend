import React, { useState, useEffect } from "react";
import "./TeamsPage.css";
import PropTypes from "prop-types";
import cookies from "react-cookies";
import TeamsNavbar from "../TeamsNavbar/TeamsNavbar";
import TeamsSubbar from "../TeamsSubbar/TeamsSubbar";
import IndCollection from "../IndCollection/IndCollection";
import Pagination from "../Pagination/Pagination";
import SelfTeamPage from "../SelfTeamPage/SelfTeamPage";
import InvitationCollection from "../InvitationCollection/InvitationCollection";
import InvitationNavbar from "../InvitationNavbar/InvitationNavbar";
import TeamDetailCollection from "../TeamDetailCollection/TeamDetailCollection";
import { searchUsers, searchTeams } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";

export default function TeamsPage({
  selectedPage,
  mode,
  needTeam,
  teamName,
  teamCode,
  teamUsers,
}) {
  //change 2 to 6 in constants.js
  const [selectedComp, setSelectedComp] = useState(0);
  const [looking, setLooking] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [curPagePhone, setCurPagePhone] = useState(1);
  const [selectedInvitationComp, setSelectedInvitationComp] = useState(0);
  const [noPeople, setNoPeople] = useState(0);
  const [curTeamsDetails, setCurTeamsDetails] = useState([]);
  const [curTeamsDetailsPhone, setCurTeamsDetailsPhone] = useState([]);
  const [curIndDetails, setCurIndDetails] = useState([]);
  const [curIndDetailsPhone, setCurIndDetailsPhone] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setLooking(needTeam);
    if (needTeam) {
      try {
        searchUsers(1)
          .then((resp) => {
            //console.log(resp);
            setNoPeople(resp.data.data.size);
            setCurIndDetails(resp.data.data.usersWithInvites);
            setCurIndDetailsPhone(resp.data.data.usersWithInvites);
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
    } else {
      try {
        searchTeams(1)
          .then((resp) => {
            //console.log(resp);
            setNoPeople(resp.data.data.size);
            setCurTeamsDetails(resp.data.data.teams);
            setCurTeamsDetailsPhone(resp.data.data.teams);
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
    }
  }, [needTeam]);

  return (
    <div
      id="TeamsPage__container"
      style={{ display: selectedPage == 1 ? "flex" : "none" }}
    >
      <TeamsNavbar
        selectedComp={selectedComp}
        setSelectedComp={setSelectedComp}
        looking={looking}
        teamUsers={teamUsers}
      />
      <TeamsSubbar
        mode={mode}
        looking={looking}
        setLooking={(b) => {
          setLooking(b);
        }}
        setCurIndDetails={setCurIndDetails}
        setCurTeamsDetails={setCurTeamsDetails}
        setCurIndDetailsPhone={setCurIndDetailsPhone}
        setCurTeamsDetailsPhone={setCurTeamsDetailsPhone}
        setNoPeople={setNoPeople}
        needTeam={needTeam}
        selectedComp={selectedComp}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setCurPage={setCurPage}
        setCurPagePhone={setCurPagePhone}
        teamUsers={teamUsers}
      />
      <TeamDetailCollection
        mode={mode}
        selectedComp={selectedComp}
        looking={looking}
        curTeamsDetails={curTeamsDetails}
        setCurTeamsDetails={setCurTeamsDetails}
        curTeamsDetailsPhone={curTeamsDetailsPhone}
        setCurTeamsDetailsPhone={setCurTeamsDetailsPhone}
        curPagePhone={curPagePhone}
        setCurPagePhone={setCurPagePhone}
        searchQuery={searchQuery}
        noPeople={noPeople}
      />
      <IndCollection
        mode={mode}
        selectedComp={selectedComp}
        looking={looking}
        curIndDetails={curIndDetails || []}
        setCurIndDetails={setCurIndDetails}
        curIndDetailsPhone={curIndDetailsPhone || []}
        setCurIndDetailsPhone={setCurIndDetailsPhone}
        curPagePhone={curPagePhone}
        setCurPagePhone={setCurPagePhone}
        searchQuery={searchQuery}
        noPeople={noPeople}
      />
      <Pagination
        selectedComp={selectedComp}
        mode={mode}
        curPage={curPage}
        setCurPage={setCurPage}
        noPeople={noPeople}
        looking={looking}
        setCurIndDetails={setCurIndDetails}
        setCurTeamsDetails={setCurTeamsDetails}
        setCurIndDetailsPhone={setCurIndDetailsPhone}
        setCurTeamsDetailsPhone={setCurTeamsDetailsPhone}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div
        id="TeamsPage__selfteampage-wrapper"
        style={{ display: selectedComp == 2 ? "flex" : "none" }}
      >
        <SelfTeamPage
          mode={mode}
          selectedComp={selectedComp}
          teamName={teamName}
          teamCode={teamCode}
          teamUsers={teamUsers}
        />
      </div>
      <InvitationNavbar
        selectedComp={selectedComp}
        selectedInvitationComp={selectedInvitationComp}
        setSelectedInvitationComp={setSelectedInvitationComp}
      />
      <InvitationCollection
        mode={mode}
        selectedComp={selectedComp}
        selectedInvitationComp={selectedInvitationComp}
      />
    </div>
  );
}
TeamsPage.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.number.isRequired,
  teamName: PropTypes.string.isRequired,
  teamCode: PropTypes.string.isRequired,
  teamUsers: PropTypes.array.isRequired,
  needTeam: PropTypes.bool.isRequired,
};
