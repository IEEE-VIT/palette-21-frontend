import React from "react";
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.css";
import corona from "../../../assets/2020-footer.svg";
import ieeeLogo from "../../../assets/ieee-logo-footer.svg";

import footerInIcon from "../../../assets/footer-linkedin.svg";
import footerTwitterIcon from "../../../assets/footer-twitter.svg";
import footerInstaIcon from "../../../assets/footer-insta.svg";
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
              <h3>Designathon-some catchy line</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
            <img src={corona} />
          </div>
          <div className="col-lg-5 col-md-0 d-flex flex-column justify-content-center align-items-end">
            <div className="palette-desc-right">
              <h1>Palette&apos;21</h1>
              <h3>Designathon-some catchy line</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-bg-2 d-flex flex-row justify-content-between align-items-start whiteb">
          <div className="col-md-5 d-flex flex-column justify-content-start align-items-start">
            <div className="palette-desc-left">
              <img src={ieeeLogo} />
            </div>
          </div>
          <div className="col-md-2 d-flex flex-row justify-content-around align-items-center pt-3">
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
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-start align-items-end">
            <div className="col-md-1 col-lg-6"></div>
            <div className="col-md-11 col-lg-6">
              <div className="pb-3">
                <a href="tel:+919560434342">
                  <img src={phoneFooterIcon} className="pr-3" />
                </a>

                <span id="Footer__phone">9560434342</span>
              </div>
              <div>
                <a href="mailto:contact@ieevit.org">
                  <img src={mailFooterIcon} className="pr-3" />
                </a>
                <span id="Footer__email">contact@ieevit.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none d-md-none">
        <div className="container-fluid footer-bg-sm d-flex flex-column justify-content-center align-items-center whiteb">
          <div className="palette-desc-right-sm">
            <h1>Palette&apos;21</h1>
            <h3>Designathon-some catchy line</h3>
          </div>
          <img src={corona} className="pt-8rem" />
          <img src={ieeeLogo} className="pt-10rem" />
          <div className="pb-4 pt-5">
            <a href="tel:+919560434342">
              <img src={phoneFooterIcon} className="pr-3" />
            </a>
            <span id="Footer__phone">9560434342</span>
          </div>
          <div className="pb-5">
            <a href="mailto:contact@ieevit.org">
              <img src={mailFooterIcon} className="pr-3" />
            </a>
            <span id="Footer__email">contact@ieevit.org</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
