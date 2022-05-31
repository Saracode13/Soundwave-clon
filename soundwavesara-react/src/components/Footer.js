import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Twitter from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/twitter.svg"
import Facebook from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/facebook.svg"
import "./Footer.css"


function Footer () {

    return (

        <Container fluid className="Footer">

            <Row className="socialmedia">
              
                    <Col className="About" lg={2}> <h2>About Us</h2></Col>
                    <Col className="Contact" lg={2}> <h2>Contact</h2></Col>
                 
                    <Col className="Twitter" lg={2}><img src={Twitter}></img>Twitter</Col>
                    <Col className="Facebook" lg={2}> <img src={Facebook}></img>Facebook</Col>    
            </Row>
        </Container>

    )
}

export default Footer