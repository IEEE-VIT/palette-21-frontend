/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {
  Row,
  Col,
  Card,
  Accordion,
  Button,
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap";
import "./Faq.css";
import plusIcon from "../../../assets/plusIcon.png";
import minusIcon from "../../../assets/minusIcon.svg";
import Fade from "react-reveal/Fade";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Row onClick={decoratedOnClick}>
      <Col xs={10} className="question">
        {children}
      </Col>
      <Col xs={2}>
        <button
          type="button"
          style={{
            float: "right",
          }}
          className="faq-btn"
        >
          {isCurrentEventKey ? (
            <img className="plus" src={minusIcon} />
          ) : (
            <img className="plus" src={plusIcon} />
          )}
        </button>
      </Col>
    </Row>
  );
}

const Faq = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is Palette?",
      answer:
        "Palette is a design oriented hackathon event where hackers collaborate to solve a problem and compete for cash prizes. It’s one part party, one part work-your-butt-off overnight battle against the clock and the competitors.",
    },
    {
      question: "How to participate?",
      answer:
        "Head over to the *link* , follow the instructions to register and start hacking!",
    },
    {
      question: "Why would someone participate in Palette?",
      answer:
        "We encourage you to participate in Palette to join the innovative design community and collaborate with fellow designers. Join in for the creative outlet, the community collaboration, the networking, the speaker sessions and the mind-blowing prizes and swags.",
    },
    {
      question: "Who is this event for?",
      answer:
        "This event is open to the participants interested in the field of UI/UX.",
    },
    {
      question:
        "Who can participate? Are there any prerequisites or required skills?",
      answer:
        "Anyone is welcome to participate in this event. There are no prerequisites necessary.",
    },
    {
      question: "How much does it cost?",
      answer:
        "There is NO registration fee for Palette. It is FREE for all participants. ",
    },
    {
      question: "Will there be prizes?",
      answer:
        "You bet! Head over to the prizes section to find out what we have in store.",
    },
    {
      question: "Who will be judging?",
      answer:
        "The judge panel consists of industry experts in the field of UI/UX. Head over to speaker’s section to know more.",
    },
  ]);
  const [bg, setBg] = useState([
    "rgba(67, 41, 232, 0.16)",
    "white",
    "white",
    "white",
    "white",
  ]);

  const eligibility = () => {
    setQuestions([
      {
        question:
          "What are the elgibilty criteria to participate in the designathon?",
        answer: "Lorem Ipsum",
      },
      {
        question:
          "What are the elgibilty criteria to participate in the designathon?",
        answer: "Lorem Ipsum",
      },
      {
        question:
          "What are the elgibilty criteria to participate in the designathon?",
        answer: "Lorem Ipsum",
      },
      {
        question:
          "What are the elgibilty criteria to participate in the designathon?",
        answer: "Lorem Ipsum",
      },
      {
        question:
          "What are the elgibilty criteria to participate in the designathon?",
        answer: "Lorem Ipsum",
      },
    ]);
    setBg(["rgba(67, 41, 232, 0.16)", "white", "white", "white", "white"]);
  };

  return (
    <div style={{ margin: "auto 8vw" }} id="FAQs">
      <Accordion defaultActiveKey="0">
        <Row>
          <Col xs={0} sm={1}></Col>
          <Col xs={12}>
            <br />
            <p className="faq-heading">FAQ</p>
            <br />
            <Fade bottom duration={1600} cascade>
              {questions.map((item, index) => {
                return (
                  <Row key={index}>
                    <Col xs={12} className="faq-question">
                      <ContextAwareToggle eventKey={index + 1}>
                        {item.question}
                        <Accordion.Collapse eventKey={index + 1}>
                          <Card.Body style={{ padding: 10 }} className="answer">
                            {item.answer}
                          </Card.Body>
                        </Accordion.Collapse>
                      </ContextAwareToggle>
                    </Col>
                  </Row>
                );
              })}
              <br />
              <br />
              <Row>
                <Col></Col>
                <Col xs={12} md={8} lg={6} className="text-center">
                  Couldn’t find your question? Hit us up at any below social
                  handles and we will get back to as soon as possible.
                </Col>
                <Col></Col>
              </Row>
              <br />
              <div className="text-center">
                <a
                  href="#Footer__container"
                  className="btn contact-btn"
                  role="button"
                >
                  Contact Us
                </a>
              </div>
              <br />
            </Fade>
          </Col>
          <Col xs={0} sm={1}></Col>
        </Row>
      </Accordion>
    </div>
  );
};
export default Faq;
