import React from "react";
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.css";
import corona from "../../../assets/2020-footer.svg";
import ieeeLogo from "../../../assets/ieee-logo-footer.svg";

import footerInIcon from "../../../assets/footer-linkedin.svg";
import footerTwitterIcon from "../../../assets/footer-twitter.svg";
import footerInstaIcon from "../../../assets/footer-insta.svg";
import footerFbIcon from "../../../assets/facebook.svg";
import footerWebsiteIcon from "../../../assets/websitelogo.svg";
import mailFooterIcon from "../../../assets/mail-footer-icon.svg";
import phoneFooterIcon from "../../../assets/phone-footer-icon.svg";

function Footer() {
  return (
    <div id="Footer__container">
      <div className="d-none d-md-block d-xs-none d-sm-none d-lg-block">
        <div className="container-fluid footer-bg d-flex flex-row whiteb">
          <div className="col-md-6 col-lg-5 d-flex flex-column justify-content-center align-items-start">
            <div className="palette-desc-left">
              <h1>Palette&apos;21</h1>
              <h3>Prototype your imagination</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
            <img src={corona} />
          </div>
          <div className="col-lg-5 col-md-0 d-flex flex-column justify-content-center align-items-end">
            <div className="palette-desc-right">
              <h1>Palette&apos;21</h1>
              <h3>Prototype your imagination</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-bg-2 d-flex flex-row justify-content-between align-items-start whiteb">
          <div className="col-md-5 d-flex flex-column justify-content-start align-items-start">
            <div className="palette-desc-left">
              <a href="https://ieeevit.org/" target="_blank" rel="noreferrer">
                <img src={ieeeLogo} />
              </a>
            </div>
          </div>
          <div
            id="Footer__socialicons"
            className="col-md-2 d-flex flex-row justify-content-around align-items-center pt-3"
          >
            <a
              href="https://www.linkedin.com/company/ieee-vit-vellore"
              target="_blank"
              rel="noreferrer"
            >
              <img src={footerInIcon} />
            </a>
            <a
              href="https://www.twitter.com/ieeevitvellore"
              target="_blank"
              rel="noreferrer"
            >
              <img src={footerTwitterIcon} />
            </a>
            <a
              href="https://instagram.com/ieeevitvellore"
              target="_blank"
              rel="noreferrer"
            >
              <img src={footerInstaIcon} />
            </a>
            <a
              href="https://facebook.com/IEEEVIT"
              target="_blank"
              rel="noreferrer"
            >
              <img src={footerFbIcon} />
            </a>
            <a href="https://ieeevit.org/" target="_blank" rel="noreferrer">
              <img src={footerWebsiteIcon} />
            </a>
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-start align-items-end">
            <div className="col-md-1 col-lg-6"></div>
            <div
              className="col-md-11 col-lg-6"
              style={{ zIndex: "1", backgroundColor: "black" }}
            >
              <div id="Footer__phonediv" className="pb-3">
                <a href="tel:+919977955466">
                  <img src={phoneFooterIcon} className="pr-3" />
                </a>

                <span id="Footer__phone">+91 9977955466</span>
              </div>
              <div id="Footer__maildiv">
                <a href="mailto:contact@ieeevit.org">
                  <img src={mailFooterIcon} className="pr-3" />
                </a>
                <span id="Footer__email">contact@ieeevit.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none d-md-none">
        <div className="container-fluid footer-bg-sm d-flex flex-column justify-content-center align-items-center whiteb">
          <div className="palette-desc-right-sm">
            <h1>Palette&apos;21</h1>
            <h3>Prototype your imagination</h3>
          </div>
          <img src={corona} className="pt-8rem" />
          <a href="https://ieeevit.org/" target="_blank" rel="noreferrer">
            <img src={ieeeLogo} className="pt-10rem" />
          </a>
          <div id="Footer__phonediv" className="pb-4 pt-5">
            <a href="tel:+919977955466">
              <img src={phoneFooterIcon} className="pr-3" />
            </a>
            <span id="Footer__phone">+91 9977955466</span>
          </div>
          <div id="Footer__maildiv" className="pb-5">
            <a href="mailto:contact@ieeevit.org">
              <img src={mailFooterIcon} className="pr-3" />
            </a>
            <span id="Footer__email">contact@ieeevit.org</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
