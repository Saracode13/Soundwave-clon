import React from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/logo.png";
import micro from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/microphone.svg";
import albums from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/albums.svg";
import more from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/more.svg";
import Covers from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/covers.jpg";
import { Button } from "react-bootstrap";

function Section2() {
  return (
    <Container fluid className="background vh-100">
      <Container
        id="home"
        fluid
        className="background"
        style={{ position: "relative" }}
      >
        <Row xl={12} className="logomenu">
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

        <Container
          lg={8}
          style={{ display: "flex", flexDirection: "row", paddingTop: "2em", width:"60%" }}
          className="Textlinks mt-5"
        >
          <Container className="Sectiondiscover" >
            <Row>
              <Col>
                <h1
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "300",
                    paddingTop: "3em",
                  }}
                  id="Discover"
                >
                  Discover new music
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className="Buttons d-flex mt-3">
                <Button
                  className="align-content-center"
                  style={{ width: "40", height: "40" }}
                  variant="dark"
                >
                  <img
                    className="Micro d-flex text-center"
                    src={micro}
                    width="30"
                    height="30"
                  ></img>
                  Charts
                </Button>
                <Button
                  className="justify-content-center"
                  style={{ marginLeft: "1em", width: "40", height: "40" }}
                  variant="dark"
                >
                  <Col xs={10}>
                    <img
                      className="Albums d-flex text-center"
                      src={albums}
                      width="30"
                      height="30"
                    ></img>
                  </Col>
                  Albums
                </Button>
                <Button
                  className="justify-content-center"
                  style={{ marginLeft: "1em", width: "40", height: "40" }}
                  variant="dark"
                >
                  <img
                    className="More d-flex align-items-center"
                    src={more}
                    width="30"
                    height="30"
                  ></img>
                  More
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2
                  style={{
                    marginTop: "1em",
                    fontSize: "0.8em",
                    fontWeight: "200",
                  }}
                >
                  {" "}
                  By joining you can benefit by listening to the latest albums
                  released
                </h2>{" "}
              </Col>
            </Row>
          </Container>
          
          <Row>
            <Col>
              <img
                className="layoutfoto"
                src={Covers}
                style={{ width: "13em", height: "13em"}}
              ></img>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Section2;
