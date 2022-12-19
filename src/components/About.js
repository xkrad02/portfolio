import React from "react";
import { Col, Row } from "react-bootstrap";
import intro from "../assets/images/intro.png";
import "../styles.css";

function About() {
  return (
    <section id="about" className="fadeIn">
      <Row className="intro">
        <Col sm={12} md={7} className="abt-intro">
          <div className="container-content">
            <h1 className="intro-title">
              <b>Hi There!</b>
            </h1>
            <h2>I'm Sheryl..</h2>
            <h3>
              an{" "}
              <span style={{ color: "orange" }}>
                aspiring Software Engineer
              </span>
            </h3>
            <br />
            <h3 style={{ letterSpacing: "0.02rem" }}>
              Currently focused on front-end development using ReactJS to create
              beautiful and reusable user interfaces.
            </h3>
          </div>
        </Col>

        <Col sm={8} md={5}>
          <img src={intro} alt="developer" className="intro-image" />
        </Col>
      </Row>
    </section>
  );
}

export default About;
