import React, { useState } from "react";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";
import "./Faq.css";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import insta from "../../../assets/insta.png";
import plusIcon from "../../../assets/plusIcon.png";

const Faq = () => {
  const [questions, setQuestions] = useState([
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
  };

  const team = () => {
    setQuestions([
      { question: "What are the team details here?", answer: "Lorem Ipsum" },
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
  };

  const competition = () => {
    setQuestions([
      { question: "What kind of competition is this?", answer: "Lorem Ipsum" },
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
  };

  const prizes = () => {
    setQuestions([
      { question: "What are the prizes?", answer: "Lorem Ipsum" },
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
  };

  const support = () => {
    setQuestions([
      { question: "Will I be provided with help", answer: "Lorem Ipsum" },
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
  };

  return (
    <div style={{ margin: "auto 8vw" }}>
      <Accordion defaultActiveKey="0">
        <Row>
          <Col xs={0} sm={1}></Col>
          <Col xs={12}>
            <br />
            <p className="faq-heading">FAQ</p>

            <Row style={{ margin: "4vw auto" }}>
              <Col xs={4} md={2}>
                <button onClick={eligibility} className="btn faq-nav">
                  ELIGIBILITY
                </button>
              </Col>
              <Col xs={4} md={2}>
                <button onClick={team} className="btn faq-nav">
                  TEAM
                </button>
              </Col>
              <Col xs={4} md={2}>
                <button onClick={competition} className="btn faq-nav">
                  COMPETITION
                </button>
              </Col>
              <Col xs={6} md={3}>
                <button onClick={prizes} className="btn faq-nav">
                  AWARDS & PRIZES
                </button>
              </Col>
              <Col xs={6} md={3}>
                <button onClick={support} className="btn faq-nav">
                  TECHNICAL SUPPORT
                </button>
              </Col>
            </Row>
            <br />

            <Row>
              <Col></Col>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={8}>{questions[0].question}</Col>
                  <Col xs={4}>
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
                  <Card.Body style={{ padding: 0 }}>
                    {questions[0].answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={8}>
                    What are the elgibilty criteria to participate in the
                    designathon?
                  </Col>
                  <Col xs={4}>
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
                  <Card.Body style={{ padding: 0 }}>Lorem Ipsum</Card.Body>
                </Accordion.Collapse>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={8}>
                    What are the elgibilty criteria to participate in the
                    designathon?
                  </Col>
                  <Col xs={4}>
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
                  <Card.Body style={{ padding: 0 }}>Lorem Ipsum</Card.Body>
                </Accordion.Collapse>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={8}>
                    What are the elgibilty criteria to participate in the
                    designathon?
                  </Col>
                  <Col xs={4}>
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
                  <Card.Body style={{ padding: 0 }}>Lorem Ipsum</Card.Body>
                </Accordion.Collapse>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col xs={12} className="faq-question">
                <Row>
                  <Col xs={8}>
                    What are the elgibilty criteria to participate in the
                    designathon?
                  </Col>
                  <Col xs={4}>
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
                  <Card.Body style={{ padding: 0 }}>Lorem Ipsum</Card.Body>
                </Accordion.Collapse>
              </Col>
              <Col></Col>
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
              <img className="social" src={linkedin} />
              <img className="social" src={twitter} />
              <img className="social" src={insta} />
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
