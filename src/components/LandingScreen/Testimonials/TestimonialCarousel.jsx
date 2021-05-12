import React from "react";
import { Carousel } from "react-bootstrap";
import Testimonial from "./TestimonialInner";
import testimonialData from "./TestimonialData";

function EventCarousel() {
  return (
    <Carousel fade={true} controls={false}>
      {testimonialData.map((item, idx) => {
        return (
          <Carousel.Item key={idx}>
            <Testimonial
              key={idx}
              winnerName={item.winnerName}
              winnerAs={item.winnerAs}
              winnerPic={item.winnerPic}
              winnerQuote={item.winnerQuote}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default EventCarousel;
