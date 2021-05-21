import React from "react";
import PropTypes from "prop-types";
import "./TeamDetail.css";

export default function TeamDetail({ mode, teamDet }) {
  //console.log(teamDet);
  return (
    <div
      id="TeamDetail__container"
      style={{
        border:
          mode == "dark"
            ? "1px solid rgba(41, 41, 41, 1)"
            : "1px solid rgba(235, 235, 235, 1)",
      }}
    >
      <h3
        style={{
          color:
            mode == "dark" ? "rgba(255, 255, 255, 1)" : "rgba(20, 20, 20, 1)",
        }}
      >
        {teamDet.name}
      </h3>
      {teamDet.users.map((k, i) => (
        <div className="TeamDetail__userdetail" key={i}>
          <div className="TeamDetail__userimg">
            <img src={k.userImg} />
          </div>
          <div className="TeamDetail__rightdiv">
            <div id="TeamDetail__name">
              <h4
                style={{
                  color:
                    mode == "dark"
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(20, 20, 20, 1)",
                }}
              >
                {k.name}
              </h4>
            </div>
            <div id="TeamDetail__skillscollection">
              {k.skills.map((skill, index) => (
                <div
                  key={index}
                  className="TeamDetail__skill"
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
          </div>
        </div>
      ))}
    </div>
  );
}

TeamDetail.propTypes = {
  mode: PropTypes.string.isRequired,
  teamDet: PropTypes.object.isRequired,
};
