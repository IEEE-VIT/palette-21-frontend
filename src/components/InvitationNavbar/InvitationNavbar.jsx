import React from "react";
import "./InvitationNavbar.css";
import PropTypes from "prop-types";

export default function InvitationNavbar({
  selectedComp,
  selectedInvitationComp,
  setSelectedInvitationComp,
}) {
  return (
    <div
      id="InvitationNavbar__container"
      style={{ display: selectedComp == 1 ? "flex" : "none" }}
    >
      <div
        className={
          selectedInvitationComp == 0
            ? "InvitationNavbar__component InvitationNavbar__component-sel"
            : "InvitationNavbar__component"
        }
        onClick={() => {
          if (selectedInvitationComp != 0) {
            setSelectedInvitationComp(0);
          }
        }}
      >
        <h3>Sent</h3>
      </div>
      <div
        className={
          selectedInvitationComp == 1
            ? "InvitationNavbar__component InvitationNavbar__component-sel"
            : "InvitationNavbar__component"
        }
        onClick={() => {
          if (selectedInvitationComp != 1) {
            setSelectedInvitationComp(1);
          }
        }}
      >
        <h3>Received</h3>
      </div>
    </div>
  );
}

InvitationNavbar.propTypes = {
  selectedComp: PropTypes.number.isRequired,
  selectedInvitationComp: PropTypes.number.isRequired,
  setSelectedInvitationComp: PropTypes.func.isRequired,
};
