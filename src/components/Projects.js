import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles.css";
import weather from "../assets/images/weather.JPG";
import hatgame from "../assets/images/hatgame.jpg";
import responsive from "../assets/images/responsive.jpg";

function Projects() {
  return (
    <div className="p-0 container-md">
      <section id="projects">
        <div className="container-content">
          <h5>Projects</h5>
          <h1 style={{ fontWeight: "bold" }}>What I have done</h1>
          <Row className="projects">
            <Col>
              <div className="project md-4">
                <img src={responsive} alt="responsive web" />
                <div className="pj-description">
                  <div className="pj-title-icon">
                    <h3>Responsive Web Site</h3>
                    <a
                      href="https://github.com/xkrad02/webassessment"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bi bi-github pjGitIcon"></i>
                    </a>
                  </div>
                  <p>HTML, CSS custom properties, flexbox</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="project md-4">
                <img src={hatgame} alt="hatgame" />
                <div className="pj-description">
                  <div className="pj-title-icon">
                    <h3>Find My Hat Game</h3>
                    <a
                      href="https://github.com/xkrad02/findmyhat"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bi bi-github pjGitIcon"></i>
                    </a>
                  </div>
                  <p>JavaScript</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="project md-4">
                <img src={weather} alt="logo" />
                <div className="pj-description">
                  <div className="pj-title-icon">
                    <h3>Weather Forecast</h3>
                    <a
                      href="https://github.com/xkrad02/weatherApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="bi bi-github pjGitIcon"></i>
                    </a>
                  </div>
                  <p>JavaScript</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Projects;
