import React from "react";
import { Carousel } from "react-bootstrap";
import EventBanner from "./EventBanner";
import eventData from "./EventData";
import Fade from "react-reveal";

function EventCarousel() {
  return (
    <Fade bottom duration={1000}>
      <Carousel fade={true} controls={false}>
        {eventData.map((item, idx) => {
          return (
            <Carousel.Item key={idx}>
              <div id="EventCarousel__item">
                <EventBanner
                  key={idx}
                  date={item.date}
                  speakerName={item.speakerName}
                  speakerDesc={item.speakerDesc}
                  speakerPic={item.speakerPic}
                  eventName={item.eventName}
                  eventCategory={item.eventCategory}
                  eventDesc={item.eventDesc}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Fade>
  );
}

export default EventCarousel;
