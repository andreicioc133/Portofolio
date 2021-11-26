import React from "react";
import { Col,  Row, Button } from "react-bootstrap";
import { scroller } from "react-scroll";
import { linearGradients } from "../styles/styles";
import {  BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { getWindowDimensions } from "./WindowDimension";

function Header() {

  const scrollToSection = (section) => {
    scroller.scrollTo(`${section}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -75,
    });
  };

  

  return (
    <Row
      className="header"
      style={{ backgroundImage: linearGradients.purpleToBlue }}
    >
      <Col 
        xs={2}
        sm={12} 
        md={12} 
        lg={1}
        xxl={3}
        >
          <button
            className="logoButton"
            onClick={() => window.location.reload(true)}
          >
            <p className="logo">CA</p>
          </button>
      </Col>
      <Col 
        xs={10} 
        sm={12} 
        md={12} 
        lg={5} 
        xxl={4} 
        className="headerIcons"
        >
          
          <a href='https://www.instagram.com/ciiioc/'><p 
            className = "headerIconsText"
            ><BsInstagram />
          </p></a>
          <a href='https://www.linkedin.com/in/andrei-cioc-1639bb206/'><p 
            className = "headerIconsText"
            ><BsLinkedin />
          </p></a>
          <a href='https://github.com/andreicioc133'><p 
            className = "headerIconsText"
            ><BsGithub />
          </p></a>
      </Col>
      <Col 
        xs={12} 
        sm={12} 
        md={12} 
        lg={6} 
        xxl={5} 
        className="headerButtons"
        >
          <Button
            style = {{fontSize: getWindowDimensions().width < 600 ? '0.5rem' : '1.2rem'}}
            variant="outline-secondary"
            className="buttonHeader"
            onClick={() => scrollToSection("scrollToAboutMe")}
          >
            About me
          </Button>
          <Button
            style = {{fontSize: getWindowDimensions().width < 600 ? '0.5rem' : '1.2rem'}}
            variant="outline-secondary"
            className="buttonHeader"
            onClick={() => scrollToSection("scrollMySkills")}
          >
            Skills
          </Button>
          <Button
            style = {{fontSize: getWindowDimensions().width < 600 ? '0.5rem' : '1.2rem'}}
            variant="outline-secondary"
            className="buttonHeader"
            onClick={() => scrollToSection("scrollToMyWork")}
          >
            My work
          </Button>
          <Button
            style = {{fontSize: getWindowDimensions().width < 600 ? '0.5rem' : '1.2rem'}}
            variant="outline-secondary"
            className="buttonHeader"
            onClick={() => scrollToSection("scrollToContactMe")}
          >
            Contact
          </Button>
      </Col>
    </Row>
  );
}

export default Header;
