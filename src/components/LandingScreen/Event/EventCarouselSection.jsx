import React from "react";
import { Carousel } from "react-bootstrap";
import EventBanner from "./EventBanner";
import eventData from "./EventData";

function EventCarousel() {
  return (
    <Carousel fade={true} controls={false}>
      {eventData.map((item, idx) => {
        return (
          <Carousel.Item key={idx}>
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
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default EventCarousel;
