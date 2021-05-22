import React, { useState } from "react";
import "./Invitation.css";
import PropTypes from "prop-types";
import figma from "../../assets/figma.svg";
import framer from "../../assets/framer.svg";
import graphic from "../../assets/graphic.png";
import sketch from "../../assets/sketch.svg";
import xd from "../../assets/xd.svg";
import webflow from "../../assets/webflow.svg";
import invision from "../../assets/Invision.svg";
import protopie from "../../assets/ProtoPie.svg";
import principle from "../../assets/Principle.svg";
import ae from "../../assets/adobe-after-effects.svg";
import cookies from "react-cookies";
import Illustrator from "../../assets/adobe-illustrator.svg";
import { toastDark, toastLight } from "../../utils/Toast";
import {
  cancelInvite,
  rejectInvite,
  acceptInvite,
} from "../../utils/DashboardHelperFuncs";
import { useEffect } from "react/cjs/react.development";
export default function Invitation({
  mode,
  name,
  imgUrl,
  skills,
  tools,
  selectedInvitationComp,
  status,
  userId,
  teamId,
}) {
  //console.log(status, status == "Pending");
  const [cancelled, setCancelled] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    if (status.toLowerCase() == "rejected") {
      setRejected(true);
    }
    if (status.toLowerCase() == "accepted") {
      setAccepted(true);
    }
  }, [status]);
  function retImgUrl(toolName) {
    if (toolName == "Figma") {
      return figma;
    } else if (toolName == "Adobe XD") {
      return xd;
    } else if (toolName == "Sketch") {
      return sketch;
    } else if (toolName == "Framer") {
      return framer;
    } else if (toolName == "Graphic") {
      return graphic;
    } else if (toolName == "Illustrator") {
      return Illustrator;
    } else if (toolName == "After Effects") {
      return ae;
    } else if (toolName == "Webflow") {
      return webflow;
    } else if (toolName == "Protopie") {
      return protopie;
    } else if (toolName == "Invision") {
      return invision;
    } else if (toolName == "Principle") {
      return principle;
    }
  }
  return (
    <div
      id="Invitation__container"
      style={{
        backgroundColor:
          mode == "dark" ? "rgba(20, 20, 20, 1)" : "rgba(255, 255, 255, 1)",
        border:
          mode == "dark"
            ? "1px solid rgba(41, 41, 41, 1)"
            : "1px solid rgba(235, 235, 235, 1)",
        height: selectedInvitationComp == 0 ? "380px" : "350px",
      }}
    >
      <img src={imgUrl} />
      <h2
        style={{
          color:
            mode == "dark" ? "rgba(255, 255, 255, 1)" : "rgba(20, 20, 20, 1)",
        }}
      >
        {name}
      </h2>
      <div id="Invitation__skills">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="Invitation__skill"
            style={{
              backgroundColor:
                mode == "dark"
                  ? "rgba(41, 41, 41, 1)"
                  : "rgba(235, 235, 235, 1)",
              color:
                mode == "dark"
                  ? "rgba(194, 194, 194, 1)"
                  : "rgba(61, 61, 61, 1)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
      <div id="Invitation__tools">
        {tools.map((tool, index) => (
          <img key={index} src={retImgUrl(tool)} />
        ))}
      </div>

      {selectedInvitationComp == 0 ? (
        <div id="Invitation__statusbtn">
          <div
            id="Invitation__status"
            style={{ display: selectedInvitationComp == 0 ? "flex" : "none" }}
          >
            <h4
              style={{
                color:
                  status.toLowerCase() == "pending"
                    ? "rgba(86, 58, 232, 1)"
                    : status.toLowerCase() == "accepted"
                    ? "rgba(47, 214, 84, 1)"
                    : "rgba(235, 72, 47, 1)",
              }}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </h4>
          </div>
          <div
            id="Invitation__btn"
            onClick={() => {
              if (!cancelled) {
                try {
                  cancelInvite(userId)
                    .then(() => {
                      setCancelled(true);
                    })
                    .catch(() => {
                      var curMode = cookies.load("mode");
                      curMode == "light"
                        ? toastDark("Something Went Wrong! Please try again!")
                        : toastLight("Something Went Wrong! Please try again!");
                    });
                } catch (error) {
                  //console.log(`Caught by try/catch ${error}`);
                }
              }
            }}
            className={
              cancelled
                ? "Invitation__cancelled Invitation__invited"
                : "Invitation__invited"
            }
            style={{
              display:
                status.toLowerCase() == "rejected" ||
                status.toLowerCase() == "accepted"
                  ? "none"
                  : "flex",
            }}
          >
            <h4>{!cancelled ? "CANCEL INVITE" : "CANCELLED"}</h4>
          </div>
        </div>
      ) : (
        <div
          id="Invitation__receivedbtngr"
          className={
            rejected
              ? "Invitation__rejected"
              : accepted
              ? "Invitation__accepted"
              : ""
          }
        >
          <h4 style={{ display: !rejected ? "none" : "flex" }}>Rejected</h4>
          <h4 style={{ display: !accepted ? "none" : "flex" }}>Accepted</h4>
          <div
            id="Invitation__receivedaccept"
            style={{ display: rejected || accepted ? "none" : "flex" }}
            onClick={() => {
              try {
                acceptInvite(userId, teamId)
                  .then(() => {
                    var curMode = cookies.load("mode");
                    curMode == "light"
                      ? toastDark(
                          "Successfully Accepted the request! Reloading Page in 5 secs!"
                        )
                      : toastLight(
                          "Successfully Accepted the request! Reloading Page in 5 secs!"
                        );
                    setTimeout(() => {
                      window.location.reload();
                    }, 6000);
                  })
                  .catch(() => {
                    var curMode = cookies.load("mode");
                    curMode == "light"
                      ? toastDark("Something Went Wrong! Please try again!")
                      : toastLight("Something Went Wrong! Please try again!");
                  });
              } catch (error) {
                console.log(`Caught by try/catch ${error}`);
              }
            }}
          >
            <h4>ACCEPT</h4>
          </div>
          <div
            id="Invitation__receivedreject"
            style={{ display: rejected || accepted ? "none" : "flex" }}
            onClick={() => {
              try {
                rejectInvite(teamId)
                  .then(() => {
                    setRejected(true);
                  })
                  .catch(() => {
                    var curMode = cookies.load("mode");
                    curMode == "light"
                      ? toastDark("Something Went Wrong! Please try again!")
                      : toastLight("Something Went Wrong! Please try again!");
                  });
              } catch (error) {
                console.log(`Caught by try/catch ${error}`);
              }
            }}
          >
            <h4>REJECT</h4>
          </div>
        </div>
      )}
    </div>
  );
}
Invitation.propTypes = {
  mode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  inviteFunc: PropTypes.func.isRequired,
  selectedInvitationComp: PropTypes.number.isRequired,
  status: PropTypes.string,
  userId: PropTypes.string.isRequired,
  teamId: PropTypes.string.isRequired,
};