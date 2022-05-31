
import React from "react";
import { Button } from "react-bootstrap";
import "./Section1.css"
import {Container, Row, Nav, Navbar, Col} from "react-bootstrap";
import Girl from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/landing-page-girl.png"
import logo from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/logo.png"
import "./Circlepink.css"
import "./Circleblue.css"


 function Section1(){

    return ( 
    
       <Container fluid className="background">
           
           <Row className="menu">
         <Col className="Navigation">  
            <Navbar>
            
              <img className="logo" src= {logo}
                width="40"
                height="40"
                />
              <a className="Home" href="#home">Soundwave</a>
                 
                  <Col class="Discjoin">
                  
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
         

                <Container className="Heroimg"> 
                  
                  <Row >
             
                     <Col><img className="fotogirl" src={Girl}></img></Col>
                  </Row>
         
                  <Row>
                     <Col className="Text">
                         <h1>Feel The Music</h1>
                         <h2> Stream over 20 thousand songs with one click</h2>
                         <Button className="joinbtn" variant="primary">Join Now</Button>
                    </Col>
                  </Row>

                <Container className="Circleblue2"></Container> 
      
         </Container>
         
      

   </Container>

   
    )
 };

export default Section1;