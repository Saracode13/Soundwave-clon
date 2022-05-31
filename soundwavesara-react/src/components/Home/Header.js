import React from "react";
import {Navbar, Container, Nav, Row, Col} from "react-bootstrap";
import "./Header.css"
import logo from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/logo.png"
function Header() {
    
    return (

    
        <Container fluid className="background">
        <Row>
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
        </Container>

    )

}



export default Header