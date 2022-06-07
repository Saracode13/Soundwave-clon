import React from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import logo from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/logo.png";
import { Button } from "react-bootstrap";
import "./Circleblue.css";
import "./Circlepink.css";
import "./Main.css";

function Section3() {
  return (
    <Container fluid className="background">
      <Row xs={12} xl={12} className="logomenu">
        <Col
          xs={8}
          xl={6}
          className="Navigation d-flex justify-content-center mt-3"
        >
          <img className="logo" src={logo} width="50" height="50" />
          <a
            href="#home"
            style={{
              paddingLeft: "0.5em",
              fontWeight: "200",
              textDecoration: "none",
            }}
          >
            Soundwave
          </a>
        </Col>

        <Col xs={4} xl={6} className="menuright mt-3">
          <a
            style={{
              paddingLeft: "10em",
              fontSize: "1em",
              fontWeight: "200",
              textDecoration: "none",
            }}
            href="#Discover "
          >
            Discover
          </a>
          <a
            style={{
              paddingLeft: "3em",
              fontSize: "1em",
              fontWeight: "200",
              textDecoration: "none",
            }}
            href="#Join"
          >
            Join
          </a>
        </Col>
      </Row>

      <Container className="Circleblue1"></Container>

      <Container className="Circlepink"></Container>

      <Container>
        <Row id="Joinform" style={{ marginTop: "4em" }}>
          <Col
            xs={10}
            sm={4}
            md={6}
            lg={6}
            xl={6}
            className="Textjoin d-flex justify-content-center"
          >
            <h1
              style={{
                fontSize: "2em",
                fontWeight: "800",
                fontFamily: "Poppins",
                marginTop: "4em",
                paddingLeft: "1em",
              }}
            >
              Join the{" "}
              <span style={{ color: "#bc3a80" }} className="pinktext">
                fun.
              </span>
            </h1>
          </Col>

          <Col xs={10} sm={6} md={6} lg={6} xl={6}>
            <Form
              id="Join"
              style={{
                backgroundColor: "#202027",
                borderRadius: "5%",
                width: "20em",
                height: "17em",
                marginLeft: "-2em",
              }}
              className="Form"
            >
              <Form.Group className=" mb-3 mx-3" controlId="formBasicEmail">
                <Form.Label className="mt-2">Name:</Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "#202027",
                    border: "1px solid #2E3852",
                  }}
                  type="email"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "#202027",
                    border: "1px solid #2E3852",
                  }}
                  type="email"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "#202027",
                    border: "1px solid #2E3852",
                  }}
                  type="password"
                  placeholder=""
                />
              </Form.Group>

              <Button
                style={{ width: "25em", marginLeft: "1em", marginTop: "-1em" }}
                className="Formbtn"
                md={6}
                sm={4}
                xs={6}
                variant="primary"
                size="sm"
                type="submit"
              >
                Join Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Section3;
