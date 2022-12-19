import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVisualstudiocode,
  SiGithub,
  SiFigma,
} from "react-icons/si";

function Techstack() {
  return (<section id="techstack">
    <div className="container-md p-0">
      
        <h5>Techstack</h5>
        <h1>Professional Skillset</h1>
        <h2>Web Development</h2>
        <Row className="container-content techstack-icons">
          <Col className="icon md-4">
            <li>
              <SiHtml5 />
            </li>
            <p>HTML</p>
          </Col>

          <Col className="icon md-4">
            <li>
              <SiCss3 />
            </li>
            <p>CSS</p>
          </Col>

          <Col className="icon md-4">
            <li>
              <SiJavascript />
            </li>
            <p>JavaScript</p>
          </Col>

          <Col className="icon md-4">
            <li>
              <SiReact />
            </li>
            <p>ReactJS</p>
          </Col>

          <h2>Softwares</h2>

          <Col className="icon md-4">
            <li>
              <SiVisualstudiocode />
            </li>
            <p>Visual Studio Code</p>
          </Col>

          <Col className="icon md-4">
            <li>
              <SiGithub />
            </li>
            <p>GitHub</p>
          </Col>

          <Col className="icon md-4">
            <li>
              <SiFigma />
            </li>
            <p>Figma</p>
          </Col>
        </Row>
      {" "}
    </div></section>
  );
}

export default Techstack;
