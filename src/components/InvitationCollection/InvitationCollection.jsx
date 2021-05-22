import React, { useState, useEffect } from "react";
import "./InvitationCollection.css";
import PropTypes from "prop-types";
import cookies from "react-cookies";
import Invitation from "../Invitation/Invitation";
import { sentInvites, recievedInvites } from "../../utils/DashboardHelperFuncs";
import { toastDark, toastLight } from "../../utils/Toast";

export default function InvitationCollection({
  mode,
  selectedComp,
  selectedInvitationComp,
}) {
  const [usersDets, setUsersDets] = useState([]);
  useEffect(() => {
    if (selectedInvitationComp == 0) {
      try {
        sentInvites()
          .then((resp) => {
            console.log(resp);
            setUsersDets(resp.data.data);
          })
          .catch(() => {
            var curMode = cookies.load("mode");
            //console.log(curMode);
            curMode == "light"
              ? toastDark("Something Went Wrong! Please try again!")
              : toastLight("Something Went Wrong! Please try again!");
          });
      } catch (error) {
        console.log(`Caught by try/catch ${error}`);
      }
    } else {
      try {
        recievedInvites()
          .then((resp) => {
            console.log(resp.data.data);
            setUsersDets(resp.data.data);
          })
          .catch(() => {
            var curMode = cookies.load("mode");
            //console.log(curMode);
            curMode == "light"
              ? toastDark("Something Went Wrong! Please try again!")
              : toastLight("Something Went Wrong! Please try again!");
          });
      } catch (error) {
        console.log(`Caught by try/catch ${error}`);
      }
    }
  }, [selectedInvitationComp]);

  return (
    <div
      id="InvitationCollection__container"
      style={{
        display: selectedComp == 1 ? "flex" : "none",
      }}
    >
      {usersDets.length !== 0 &&
        usersDets.map((k) => {
          if (selectedInvitationComp == 0 && k.sentTo) {
            return (
              <Invitation
                key={k.sentTo._id}
                mode={mode}
                name={k.sentTo.name}
                imgUrl={k.sentTo.userImg}
                skills={k.sentTo.skills}
                tools={k.sentTo.tools}
                inviteFunc={() => {}}
                selectedInvitationComp={selectedInvitationComp}
                status={k.status}
                userId={k.sentTo._id}
                teamId={k.teamId}
              />
            );
          } else if (selectedInvitationComp == 1 && k.sentBy) {
            return (
              <Invitation
                key={k.sentBy._id}
                mode={mode}
                name={k.sentBy.name}
                imgUrl={k.sentBy.userImg}
                skills={k.sentBy.skills}
                tools={k.sentBy.tools}
                status={k.status}
                inviteFunc={() => {}}
                selectedInvitationComp={selectedInvitationComp}
                userId={k.sentBy._id}
                teamId={k.teamId}
              />
            );
          }
        })}
    </div>
  );
}

InvitationCollection.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedComp: PropTypes.number.isRequired,
  selectedInvitationComp: PropTypes.number.isRequired,
};
