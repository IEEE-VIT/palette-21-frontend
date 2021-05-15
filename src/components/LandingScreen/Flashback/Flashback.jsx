import React, { useState } from "react";
import "./Flashback.css";
import FlashbackRightPic1 from "../../../assets/flashback-right-pic1.png";
import FlashbackRightPic2 from "../../../assets/flashback-right-pic2.png";
import FlashbackLeftPic1 from "../../../assets/flashback-left-pic1.png";
import FlashbackLeftPic2 from "../../../assets/flashback-left-pic2.png";
import FlashbackLeftPic3 from "../../../assets/flashback-left-pic3.png";
import FlashbackLeftPic4 from "../../../assets/flashback-left-pic4.png";
import { Carousel } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Flashback = () => {
  const [moveRight, setMoveRight] = useState(0);
  return (
    <div
      id="Flashback__container"
      onScroll={(event) => {
        setMoveRight(event.nativeEvent.srcElement.scrollTop);
      }}
    >
      <Fade bottom cascade duration={1000}>
        <div id="Flashback__leftcontainer">
          <h4>Glimpses from our past Palette events</h4>
          <p>
            Mind Blowing Designs, talented Minds, insightful conversations with
            Industry experts - all under the same roof at previous editions of
            Palette.{" "}
          </p>
          <img src={FlashbackLeftPic1} />
          <img src={FlashbackLeftPic2} />
          <img src={FlashbackLeftPic3} />
          <img src={FlashbackLeftPic4} />
        </div>
        <div
          style={{ marginTop: moveRight }}
          id="Flashback__rightcontainermobile"
        >
          <Carousel fade={true} controls={false}>
            <Carousel.Item key={1} interval={5000}>
              <div>
                <img src={FlashbackRightPic1} />
              </div>
            </Carousel.Item>
            <Carousel.Item key={1} interval={5000}>
              <div>
                <img src={FlashbackRightPic2} />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Fade>
      <Fade right duration={1600}>
        <div
          style={{ marginTop: moveRight }}
          id="Flashback__rightcontainerdesktop"
        >
          <Carousel fade={true} controls={false}>
            <Carousel.Item key={1} interval={5000}>
              <div>
                <img src={FlashbackRightPic1} />
              </div>
            </Carousel.Item>
            <Carousel.Item key={1} interval={5000}>
              <div>
                <img src={FlashbackRightPic2} />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};
export default Flashback;
