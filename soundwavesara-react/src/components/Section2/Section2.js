import React from "react";
import "./Section2.css"
import {Container, Row, Navbar, Nav, Col} from "react-bootstrap";
import logo from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/logo.png"
import micro from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/microphone.svg"
import albums from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/albums.svg"
import more from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/more.svg"
import Covers from "/Users/SARA/Desktop/Factoria-F5/soundwavesara-react/src/covers.jpg"
import { Button } from "react-bootstrap";



function Section2(){

    return ( 
    
        <Container fluid className="background" >

           <Row className="menu">
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

    
            
            <Container className="Textlinks">
              
               <Container className="icons">
             
                <Row xs={8} sm={12} md={6} lg={6} xl={6}>

                   <Col><h1>Discover new music</h1></Col>
                
                </Row>
             
                <Row xs={8} sm={12} md={6} lg={6} xl={6} className="Buttons">
                   <Col className= "iconsbtn">
                    <Button variant="dark"><img src={micro}></img>Charts</Button>
                    <Button variant= "dark"><img src={albums}></img>Albums</Button>
                    <Button variant= "dark"><img src={more}></img>More</Button>
                   </Col>
                </Row>           
               
               <Row>          
                 <Col> <h2> By joining you can benefit by listening to the latest albums released</h2></Col> 
               </Row> 
            
              </Container>

             

             <Container xs={12} sm={12} md={6} lg={6} className="Foto">     
            
               
                
                <img className="layoutfoto" src={Covers}></img> 
                  
              
                 
            </Container> 

            </Container> 

        </Container>
    )

 }

export default Section2;