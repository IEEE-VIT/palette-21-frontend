import React from "react";
import "./ReviewsPage.css";
import monalisa from "../../assets/monalisa.png";
import PropTypes from "prop-types";
export default function ReviewsPage({ selectedPage, mode }) {
  return (
    <div
      id="ReviewsPage__container"
      style={{ display: selectedPage == 2 ? "flex" : "none" }}
    >
      <div
        id="ReviewsPage__contentcontainer"
        style={{
          backgroundColor: mode == "light" ? "rgb(244, 244, 244)" : "#292929",
        }}
      >
        <img src={monalisa} />
        <div id="ReviewsPage__reviewsooninfo">
          <h4
            id="ReviewsPage__heading"
            style={{
              color:
                mode == "light"
                  ? "rgba(20, 20, 20, 1)"
                  : "rgba(255, 255, 255, 1)",
            }}
          >
            Stay tuned. We are so excited! The surprise will be revealed soon!{" "}
          </h4>
          <p
            id="ReviewsPage__fact"
            style={{
              color:
                mode == "light"
                  ? "rgba(20, 20, 20, 1)"
                  : "rgba(255, 255, 255, 1)",
            }}
          >
            A new high-tech study of Leonardo da Vinci’s Mona Lisa suggests that
            the Renaissance master created the painting using a previously
            unknown preparatory sketch.
          </p>
        </div>
      </div>
    </div>
  );
}

ReviewsPage.propTypes = {
  mode: PropTypes.string.isRequired,
  selectedPage: PropTypes.number.isRequired,
};
