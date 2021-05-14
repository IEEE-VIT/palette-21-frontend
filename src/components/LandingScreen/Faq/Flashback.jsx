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
      <Fade bottom duration={1600} delay={1000}>
        <div id="Flashback__leftcontainer">
          <h4>These are few glimpses from our past editions of Palette</h4>
          <p>
            Palette ‘21 is the 4th edition of the prestigious design-a-thon
            conducted yearly by IEEE VIT.{" "}
          </p>
          <img src={FlashbackLeftPic1} />
          <img src={FlashbackLeftPic2} />
          <img src={FlashbackLeftPic3} />
          <img src={FlashbackLeftPic4} />
        </div>
      </Fade>
      <Fade right duration={1600} delay={1000}>
        <div
          style={{ marginTop: moveRight }}
          id="Flashback__rightcontainerdesktop"
        ></div>
      </Fade>
      <Fade bottom duration={1600} delay={1000}>
        <div
          style={{ marginTop: moveRight }}
          id="Flashback__rightcontainermobile"
        >
          <Carousel infiniteLoop autoPlay interval={5000}>
            <div>
              <img src={FlashbackRightPic1} />
            </div>
            <div>
              <img src={FlashbackRightPic2} />
            </div>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};
export default Flashback;
