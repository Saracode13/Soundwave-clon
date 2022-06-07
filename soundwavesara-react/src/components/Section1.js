import React from "react";
import { Button } from "react-bootstrap";
import "./Mediaqueries.css";
import { Container, Row, Col } from "react-bootstrap";
import Girl from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/landing-page-girl.png";
import logo from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/logo.png";
import "./CirclepinkSection1.css";
import "./CircleblueSection1.css";

function Section1() {
  return (

  
    <Container id="home" fluid className="background"style={{position:"relative"}}>
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
    
      <>
      <Container
        className="Circlebluemain"
  
      ></Container>

      <Container className="Circlepinkmain"></Container>

      <Container style={{overflow: "hidden"}} id="home">
       
       
       
        <Container className= "Heroimg" style={{ display:"flex", flexDirection: "row", justifyItems:"center",alignItems:"center",position:"absolute",left:"20%", bottom:"0em"}}>
      
          <Row >
           <Col> <img
              style={{zIndex: "5", width:"20em", height:"25em"}}
              className="fotogirl"
              src={Girl}></img></Col>
          </Row>
          <Row className="texthome">
            <Col className="Text" style={{position:"relative", left: "30%", top:"25%"}}>
              <h1 style={{ fontSize: "1.8em" }}>Feel The Music</h1>
              <h2 style={{ fontSize: "1em", fontWeight: "200", width:"60%"}}>
                {" "}
                Stream over 20 thousand songs with one click
              </h2>
              <Button size="sm" variant="primary">
                <a style={{textDecoration: "none" }} href="#Join">
                  Join Now
                </a>
              </Button>
            </Col>
          </Row>
      

          <Container className="Circlebluemain2"></Container>
          <Container className="Circlebluemain2"></Container>
          <Container className="Circlebluemain2"></Container>
        </Container>

        </Container>
      </>
      </Container>
      
  
  
  );
}

export default Section1;
