/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";
import "./Faq.css";
import plusIcon from "../../../assets/plusIcon.png";

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
        "The judge panel consists of industry experts in the field of UI/UX. Head over to speaker’s section know more.",
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
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[0].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="2"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="2">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[0].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[1].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="1"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[1].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[2].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="3"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="3">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[2].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[3].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="4"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="4">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[3].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[4].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="5"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="5">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[4].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[5].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="6"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="6">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[5].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[6].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="7"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="7">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[6].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={10} className="question">
                    {questions[7].question}
                  </Col>
                  <Col xs={2}>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="8"
                      style={{ float: "right" }}
                    >
                      <img className="plus" src={plusIcon} />
                    </Accordion.Toggle>
                  </Col>
                </Row>
                <Accordion.Collapse eventKey="8">
                  <Card.Body style={{ padding: 10 }} className="answer">
                    {questions[7].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
            </Row>
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
              <a href="#ContactUs" className="btn contact-btn" role="button">
                Contact Us
              </a>
            </div>
            <br />
          </Col>
          <Col xs={0} sm={1}></Col>
        </Row>
      </Accordion>
    </div>
  );
};
export default Faq;
