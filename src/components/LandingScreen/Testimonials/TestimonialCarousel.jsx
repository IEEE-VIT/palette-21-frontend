import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Testimonial from "./TestimonialInner";
import testimonialData from "./TestimonialData";

function EventCarousel() {
  const [setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      // console.log(windowWidth);
    });
  }, []);
  return (
    <Carousel fade={true} controls={false}>
      {testimonialData.map((item, idx) => {
        return (
          <Carousel.Item key={idx} interval={8000}>
            <div id="Testimonial__item">
              <Testimonial
                key={idx}
                winnerName={item.winnerName}
                winnerAs={item.winnerAs}
                winnerPic={item.winnerPic}
                winnerQuote={item.winnerQuote}
              />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default EventCarousel;
