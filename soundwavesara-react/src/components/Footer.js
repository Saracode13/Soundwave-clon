import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Twitter from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/twitter.svg"
import Facebook from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/facebook.svg"
import "./Footer.css"


function Footer () {

    return (

        <Container fluid className="Footer">

            <Row xs={12} sm= {12} className="socialmedia">
              
                    <Col className="About" xs={3} sm={3} lg={3}> <h2>About Us</h2></Col>
                    <Col className="Contact" xs={3} sm={3} lg={3}> <h2>Contact</h2></Col>
                 
                    <Col className="Twitter" xs={2} sm={2}lg={2}><img src={Twitter}></img>Twitter</Col>
                    <Col className="Facebook" xs={2} sm={2} lg={2}> <img src={Facebook}></img>Facebook</Col>    
            </Row>
        </Container>

    )
}

export default Footer