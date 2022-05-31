import React from "react";
import Girl from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/landing-page-girl.png";
import {Col, Container} from "react-bootstrap";
import "./Heroimg.css";

function Heroimg () {

    return (

        <Container>

        <Col className="Girl">
      <img className="fotogirl" src={Girl}></img>
      </Col>
      </Container>
    )
}


export default Heroimg