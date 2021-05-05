/* eslint-disable react/prop-types */
import React from "react";
import "./EventBanner.css";

import "bootstrap/dist/css/bootstrap.css";
import spikedCircleTl from "../../../assets/star-judges.svg";
import judgesText from "../../../assets/judges-text.svg";
import speakersTextBg from "../../../assets/speakers-text-bg.svg";

function EventBanner(props) {
  const speakerName = props.speakerName;
  const speakerDesc = props.speakerDesc;
  const date = props.date;
  const eventName = props.eventName;
  const eventDesc = props.eventDesc;
  const speakerPic = props.speakerPic;
  const eventCategory = props.eventCategory;

  return (
    <div className="container-fluid bg-bg whiteb">
      <div className="big-screen">
        <div className="img-arr d-flex">
          <img src={spikedCircleTl} className="img-arr-img-tl" />
          <img src={judgesText} className="img-arr-judges-topr" />
          <div className="flex-grow-1">
            <div className="d-flex flex-row">
              <div className="col-md-6 flex-grow-1 d-flex flex-column justify-content-between z-index-mid">
                <div className="ml-10rem pt-12rem">
                  <span className="red-allcaps">{eventCategory}</span>
                  <p className="mt-2">
                    <h1>
                      <i>
                        <b>{eventName}</b>
                      </i>
                    </h1>
                  </p>
                  <h5
                    style={{ fontWeight: 300 }}
                    className="mt-4p5 mr-2 line-sp"
                  >
                    {eventDesc}
                  </h5>
                </div>
                <div className="ml-10rem pt-20rem mb-5r">
                  <h1 className="red-text-bold">
                    <b>{date}</b>
                  </h1>
                  <h5 style={{ fontWeight: 300 }} className="mt-1 mr-2 line-sp">
                    Hosted on
                  </h5>
                </div>
              </div>
              <div className="col-md-6 flex-grow-1">
                <div>
                  <img src={speakersTextBg} className="speakers-text" />
                  <img src={speakerPic} className="speaker-pic" />
                </div>
                <div className="z-top-text">
                  <h1 className="white-text-bold">
                    <b>{speakerName}</b>
                  </h1>
                  <h5 style={{ fontWeight: 300 }} className="mt-1 mr-2 line-sp">
                    {speakerDesc}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small-screen">
        {/*} <div className="flex-grow-1">
          <div className="d-flex flex-column">
            <div className="col-md-6 flex-grow-1">
              <div>
                <img src={speakersTextBg} className="speakers-text" />
                <img src={speakerPic} className="speaker-pic" />
              </div>
              <div className="z-top-text">
                <h1 className="white-text-bold">
                  <b>{speakerName}</b>
                </h1>
                <h5 style={{ fontWeight: 300 }} className="mt-1 mr-2 line-sp">
                  {speakerDesc}
                </h5>
              </div>
            </div>
            <div className="col-md-6 flex-grow-1 d-flex flex-column justify-content-between z-index-mid">
              <div className="ml-10rem pt-12rem">
                <span className="red-allcaps">{eventCategory}</span>
                <p className="mt-2">
                  <h1>
                    <i>
                      <b>{eventName}</b>
                    </i>
                  </h1>
                </p>
                <h5 style={{ fontWeight: 300 }} className="mt-4p5 mr-2 line-sp">
                  {eventDesc}
                </h5>
              </div>
              <div className="ml-10rem pt-20rem mb-5r">
                <h1 className="red-text-bold">
                  <b>{date}</b>
                </h1>
                <h5 style={{ fontWeight: 300 }} className="mt-1 mr-2 line-sp">
                  Hosted on
                </h5>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default EventBanner;
