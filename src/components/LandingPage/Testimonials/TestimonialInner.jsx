/* eslint-disable react/prop-types */
import React from "react";
import "./TestimonialInner.css";

import "bootstrap/dist/css/bootstrap.css";
import spikedCircleTr from "../../../assets/star-tr-testimonial.svg";
import spikedCircleBl from "../../../assets/star-bl-testimonial.svg";
import spikedCircleTl from "../../../assets/star-tl-testimonial-sm.svg";
import quoteMark from "../../../assets/quote-mark.svg";

function Testimonial(props) {
  const winnerName = props.winnerName;
  const winnerAs = props.winnerAs;
  const winnerPic = props.winnerPic;
  const winnerQuote = props.winnerQuote;

  return (
    <div className="container-fluid testi-section-bg whiteb">
      <div className="d-none d-md-none d-xs-none d-sm-none d-lg-block">
        <div className="img-arr d-flex flex-row justify-content-center align-items-center">
          <div className="testimonial-title-text">
            <h2>Testimonials</h2>
          </div>
          <img src={spikedCircleTr} className="img-arr-img-tr" />
          <img src={spikedCircleBl} className="img-arr-img-bl" />
          <div className="pt-5 d-flex flex-column align-items-center">
            <img src={winnerPic} className="winner-pic-big" />
            <div className="pt-5 winner-desc">
              <h1>{winnerName}</h1>
            </div>
            <div className="pt-2 winner-desc">
              <h3>{winnerAs}</h3>
            </div>
          </div>
          <div className="p-5 d-flex flex-column align-items-start justify-content-center">
            <div className="winner-quote">
              <img src={quoteMark} className="quote-mark" />
              <div className="winner-desc-text">{winnerQuote}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <div className="img-arr-sm d-flex flex-column align-items-center justify-content-center">
          <div>
            <h2>Testimonials</h2>
          </div>
          <img src={spikedCircleTl} className="img-arr-img-tl-sm" />
          <div className="pt-5 d-flex flex-column align-items-center">
            <img src={winnerPic} className="winner-pic-sm" />
          </div>
          <div className="p-5 d-flex flex-column align-items-start justify-content-center">
            <div className="winner-quote">
              <img src={quoteMark} className="quote-mark-sm" />
              <div className="winner-desc-text-sm">{winnerQuote}</div>
            </div>
          </div>
          <div className="pt-5 winner-desc-sm">
            <h1>{winnerName}</h1>
          </div>
          <div className="pt-2 winner-desc-sm">
            <h3>{winnerAs}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
