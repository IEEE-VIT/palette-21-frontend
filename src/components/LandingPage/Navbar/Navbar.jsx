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
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", () => {
      if (window.scrollY > screen.availHeight * 0.9) {
        this.setState({ status: "scrolled", show: true });
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top", show: false });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    var title = "Palette'21";
    return (
      <Navbar
        style={{
          backgroundColor:
            this.state.status === "top" ? "transparent" : "white",
          transition: this.state.status === "top" ? "0.3s" : "0.3s",
          boxShadow:
            this.state.status === "top"
              ? "none"
              : "0px 4px 8px 0px rgba(205, 205, 205, 0.26)",
        }}
        expand="md"
        fixed="top"
      >
        {this.state.show ? <img src={Logo} alt="" id="Logo"></img> : null}
        {screen.availWidth < 768 ? <p>{title}</p> : null}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <div className="NavLinks">
              <Nav.Link
                href="#about-container"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                About
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#Speakers"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                Speakers
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#Timeline"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                Timeline
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#FAQs"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                FAQs
              </Nav.Link>
            </div>
            <div className="NavLinks">
              <Nav.Link
                href="#ContactUs"
                style={{
                  color: this.state.status === "top" ? "white" : "black",
                }}
              >
                Contact Us
              </Nav.Link>
            </div>
            {this.state.show ? (
              <div className="NavLinks">
                <a
                  className="nav-link"
                  href="#Donate"
                  style={{ color: "#4329E8" }}
                >
                  Donate now
                </a>
              </div>
            ) : null}
          </Nav>
          {screen.availWidth < 768 ? (
            <div className="NavLinks  Reg">
              <a href="#Register">Register Now</a>
            </div>
          ) : (
            <Button
              variant="outlined"
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
