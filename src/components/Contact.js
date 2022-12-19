import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import contact from "../assets/images/contact.gif";
import emailjs from "@emailjs/browser";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import '../styles.css';

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_97pnt3y",
        "template_u2cu9ka",
        // form.current,
        "#contact-form",
        "HM5BCiKjU2GdYoLiN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent.");
          setValidated(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("There was a problem sending your message", error);
        }
      );
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // alert("Message was sent!");
      sendEmail(event);
    }
    setValidated(true);
  };

  return (
    <div>
      <section id="contact">
        <div className="container-content">
          <h5>Contact</h5>
          <h1>Let's connect.</h1>
          <p style={{ paddingBottom: "30px" }}>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
          <Form
            noValidate
            ref={form}
            // onSubmit={sendEmail}
            onSubmit={handleSubmit}
            validated={validated}
            id="contact-form"
          >
            <Row style={{ alignContent: "center" }}>
              <Col span={8} md={12} lg={8}>
                <Form.Group className="mb-4" controlId="nameValidation">
                  <FloatingLabel controlId="floatingInput" label="Name">
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="user_name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    {/* </Form.Label> */}
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-4" controlId="emailValidation">
                  {/* <Form.Label>
                  <p style={{margin: "0"}}>Email address</p>
                </Form.Label> */}
                  <FloatingLabel controlId="floatingInput" label="Email">
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="user_email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email.
                    </Form.Control.Feedback>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-4" controlId="messageValidation">
                  {/* <Form.Label>
                  <p style={{margin: "0"}}>Message</p>
                </Form.Label> */}
                  <FloatingLabel controlId="floatingInput" label="Message">
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      name="message"
                      required
                      style={{ height: "100px" }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a message.
                    </Form.Control.Feedback>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                  </FloatingLabel>
                </Form.Group>

                <div style={{ textAlign: "right" }}>
                  <Button
                    className="button"
                    variant="primary"
                    type="submit"
                    value="Send"
                  >
                    Submit
                  </Button>
                </div>
              </Col>

              <Col
                span={4}
                xs={8}
                sm={8}
                md={6}
                lg={4}
                style={{ margin: "auto", paddingBottom: "50px" }}
              >
                <img src={contact} alt="" className="intro-image" />
              </Col>
            </Row>
          </Form>
        </div>
      </section>
    </div>
  );
}
