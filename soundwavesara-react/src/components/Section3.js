import React from "react";
import {Form} from "react-bootstrap";
import "./Section3.css"
import {Container, Row, Nav, Navbar, Col} from "react-bootstrap";
import logo from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/logo.png";
import Button from "react-bootstrap/Button";
import "./Circlepink.css"
import "./Circleblue.css"



function Section3() {

    return ( 
    
        <Container fluid className="background" >

           <Row>
             <Col className="Navigation">  
                <Navbar>
            
                   <img className="logo" src= {logo} width="40" height="40"/>
                   <a className="Home" href="#home">Soundwave</a>
                 
                    <Col className="Discjoin">
                  
                      <Nav>
                       <a href="#discover">Discover</a>
                       <a href="#join">Join</a>
                       </Nav>
                    </Col>
                </Navbar>
    
              </Col>
             </Row>


             <Container className= "Circleblue1"></Container>

<Container className="Circlepink"></Container>

        <Container className="textform">

        <Row className="Joinform">
        
         <Col  md={6} sm={4} xs={3} className="Textjoin"><h1>Join the <span className="pinktext">fun.</span></h1></Col>
                  

                  <Col md={6} sm={4} xs={3}>

                    <Form className="Form">
                       <Form.Group className=" mb-3 mx-3" controlId="formBasicEmail">
                          <Form.Label>Name:</Form.Label>
                          <Form.Control type="email" placeholder="" />
                       </Form.Group>
                      
                       <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
                          <Form.Label>Email:</Form.Label>
                          <Form.Control type="email" placeholder="" />
                       </Form.Group>
                       
                       <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                          <Form.Label>Password:</Form.Label>
                          <Form.Control type="password" placeholder="" />
                        </Form.Group>
                        
    
                       <Button md={6} sm={4} xs={3} variant="primary" size="sm" type="submit" >Join Now</Button>
                   
                   </Form>
                  </Col>

                </Row>
            </Container>
    

    </Container>    
    )
    };


    export default Section3;