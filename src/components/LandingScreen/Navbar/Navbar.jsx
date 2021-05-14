/* eslint-disable react/prop-types */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import Logo from "../../../assets/palette-nav.svg";
import { Nav, Navbar } from "react-bootstrap";

import "./Navbar.css";

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      show: false,
      screenSize: window.innerWidth,
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", () => {
      if (window.scrollY > screen.availHeight * 0.81) {
        this.setState({ status: "scrolled", show: true });
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top", show: false });
        }
      }
    });
    this.screenListener = window.addEventListener("resize", () => {
      this.setState({ screenSize: window.innerWidth });
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    var title = "Palette'21";
    return (
      <Navbar
        id="Navbar__container"
        style={{
          backgroundColor:
            this.state.screenSize > 991
              ? this.state.status === "top"
                ? "transparent"
                : "white"
              : "white",
          transition: this.state.status === "top" ? "0.3s" : "0.3s",
          boxShadow:
            this.state.status === "top"
              ? "none"
              : "0px 4px 8px 0px rgba(205, 205, 205, 0.26)",
        }}
        expand="lg"
        fixed="top"
      >
        {this.state.show || this.state.screenSize < 992 ? (
          <img src={Logo} alt="" id="Logo"></img>
        ) : (
          <img style={{ opacity: 0 }} src={Logo} alt="" id="Logo"></img>
        )}
        {this.state.screenSize < 991 ? (
          <p id="Navbar__palettetitle">{title}</p>
        ) : null}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <div className="NavLinks">
              <Nav.Link
                href="#about-container"
                style={{
                  color:
                    this.state.status === "top" && this.state.screenSize > 991
                      ? "white"
                      : "black",
                }}
              >
                About
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#Speakers"
                style={{
                  color:
                    this.state.status === "top" && this.state.screenSize > 991
                      ? "white"
                      : "black",
                }}
              >
                Speakers
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#Past"
                style={{
                  color:
                    this.state.status === "top" && this.state.screenSize > 991
                      ? "white"
                      : "black",
                }}
              >
                Past
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#FAQs"
                style={{
                  color:
                    this.state.status === "top" && this.state.screenSize > 991
                      ? "white"
                      : "black",
                }}
              >
                FAQs
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                className="nav-link"
                href="#Donate"
                style={{
                  color: this.state.status === "top" ? "white" : "#4329E8",
                }}
              >
                Donate now
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#ContactUs"
                style={{
                  color:
                    this.state.status === "top" && this.state.screenSize > 991
                      ? "white"
                      : "black",
                }}
              >
                Contact Us
              </Nav.Link>
            </div>
          </Nav>
          {this.state.screenSize < 992 ? (
            <div className="NavLinks  Reg">
              <a href="#Register">Register Now</a>
            </div>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                window.location.replace("/#Register");
              }}
              style={{
                color: this.state.status === "top" ? "white" : "#4329E8",
                borderColor: this.state.status === "top" ? "white" : "#4329E8",
              }}
            >
              REGISTER NOW
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}