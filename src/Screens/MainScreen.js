import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TechStack from "../Components/TechStack";
import Header from "../Components/Header";
import Game from "../Components/Game";
import Calculator from "../Components/Calculator/Calculator";
import TodoAPP from "../Components/Todo App/TodoAPP";
import { BsFillClockFill } from "react-icons/bs";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import { getWindowDimensions } from "../Components/WindowDimension";
function MainScreen() {
  
  return (
    <Container fluid className="container">
      <Header />
      {/* ***************************************    <Welcome />     ******************************************************* */}
      <Row className="rowWelcome">
        <Col 
          xs={12} 
          sm={12} 
          md={12} 
          lg={12} 
          className="centeredColumn"
          style = {{height: getWindowDimensions().width < 376 ? '10rem' 
                              : getWindowDimensions().width > 376 && getWindowDimensions().width < 600 ? '12rem'
                              : getWindowDimensions().width > 600 && getWindowDimensions().width < 900 ? '14rem'
                              : getWindowDimensions().width > 900 && getWindowDimensions().width < 1000 ? '16rem'
                              : getWindowDimensions().width > 100 && getWindowDimensions().width < 1100 ? '18rem'
                              : getWindowDimensions().width > 1500 ? '25rem' : '13rem'
          }}
          >
          <p 
            className="textWelcome"
            style={{fontSize: getWindowDimensions().width < 376 ? '3rem' 
                              : getWindowDimensions().width > 376 && getWindowDimensions().width < 600 ? '3.5rem'
                              : getWindowDimensions().width > 600 && getWindowDimensions().width < 900 ? '6rem'
                              : getWindowDimensions().width > 900 && getWindowDimensions().width < 1000 ? '9rem'
                              : getWindowDimensions().width > 100 && getWindowDimensions().width < 1100 ? '10rem'
                              : getWindowDimensions().width > 1500 ? '15rem' : '11rem',
                              }}
            >{'<Welcome />'}</p>
        </Col>
      </Row>
      {/* ***************************************    TITLU (CITAT)         ******************************************************* */}
      <Row className="topRowTitle">
        <Col xs={12} sm={6} md={6} lg={6} style={{ marginTop: "5rem" }}>
          <h3 className="biggerTextCenter">
            "Life has no remote. Get up and change it yourself."
          </h3>
          <Image
            src="./images/pozacumine.jpg"
            roundedCircle
            height={230}
            className="rounded mx-auto d-block"
          />
        </Col>
      </Row>

      {/* ***************************************    ABOUT ME        ******************************************************* */}
      <Row className="rows">
        <Col xs={12} sm={12} md={12} lg={12} className="centeredColumn">
          <p className="biggerTextSecondaryTitle scrollToAboutMe">About me</p>
        </Col>
      </Row>
      <Row className="rows">
        <Col sm={12} md={12} lg={12} className="centeredColumn">
          <p className="normalText">
            Hello! My name is Andrei, i'm 24y/o and i am a software developer at
            the beggining of my journey. I'm based in romania and i work for a
            tech company named "Logit Consulting Solutions." I studied at
            "Universitatea Petrol-Gaze din Ploiesti" where i obtained my
            bachelor's degree in CS. I'm passionate about programming and i'm
            trying to learn as much as i can!
          </p>
        </Col>
      </Row>

      {/* ***************************************    MYSKILLS         ******************************************************* */}
      <Row className="rows">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={6}
          className="centeredColumn"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="biggerTextSecondaryTitle scrollMySkills">My Skills</p>
          <p className="normalText">
            My main stack is composed by the following components:
          </p>
          <ul className="normalText unorderedListTechStack">
            <li className="listItemTechStack">HTML/CSS</li>
            <li className="listItemTechStack">Javascript</li>
            <li className="listItemTechStack">React.js</li>
            <li className="listItemTechStack">React Native</li>
            <li className="listItemTechStack">Redux</li>
            <li className="listItemTechStack">Python</li>
            <li className="listItemTechStack">Django</li>
            <li className="listItemTechStack">Git/Github/Gitlab</li>
            <li className="listItemTechStack">PostgreSQL</li>
            <li className="listItemTechStack">Sass/Scss</li>
          </ul>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={6}
          className="centeredColumn"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <TechStack />
        </Col>
      </Row>

      {/* ***************************************    MY WORK        ******************************************************* */}
      <Row style={{ marginTop: "2rem" }}>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="centeredColumn"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <p className="biggerTextSecondaryTitle scrollToMyWork">My work</p>
        </Col>
      </Row>
      <Row className="rowProjectsTitles">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={4}
          className="centeredColumn"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="normalText">
            Before we begin talking about some serious projects, maybe you wanna
            play a little game and relax.
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={4}
          className="centeredColumn"
          style={{ alignItems: "center" }}
        >
          <p className="normalText">
            Or maybe you are taking a math-test and you want to calculate
            something fast!
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={4}
          className="centeredColumn"
          style={{ alignItems: "center" }}
        >
          <p className="normalText">
            Also you may have some chores to finish! Don't hesitate to put them
            on a ToDo App!
          </p>
          
        </Col>
      </Row>
      <Row className="rowProjects">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={4}
          className="centeredColumn"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Game />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={4}
          className="centeredColumn"
          style={{ alignItems: "center" }}
        >
          <Calculator />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={4}
          className="centeredColumn"
          style={{ alignItems: "center" }}
        >
          <TodoAPP />
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="centeredColumn"
          style={{ alignItems: "center" }}
        >
          <p className="normalText">
            * All the above mini-projects are made using React.js and are
            components of this app!*
          </p>
        </Col>
      </Row>
      {/* ***************************************    MY WORK - Big projects       ******************************************************* */}
      <Row className="rows">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={6}
          className="centeredColumn"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <p
            className="normalText"
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            Timesheets Mobile App
          </p>
          <p className="normalText">
            I created a timesheets mobile aplication <BsFillClockFill />, for
            the company I am an employee, based on existent Odoo backend ! The
            implementation was made with React Native. The app is soon to go
            live!
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xxl={6}
          className="centeredColumn"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <p
            className="normalText"
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            Django based project
          </p>
          <p className="normalText">
            I was working on an existing django application, where i implemented
            a new custom User Model, created authentication based on
            JSONWebToken and contributed with different API-s for the
            aplication's functionality. As database i used PostgreSQL.
          </p>
        </Col>
        
        <Row className="rows">
        <Col xs={12} sm={12} md={12} lg={12} className="centeredColumn">
          <p className="biggerTextSecondaryTitle scrollToAboutMe">Upgrade + Stripe API Integration</p>
        </Col>
      </Row>
      <Row className="rows">
        <Col sm={12} md={12} lg={12} className="centeredColumn">
          <p className="normalText">
            Full upgrade on React Native old application + Stripe integration both in backend(Django) and frontend!
            I upgraded the react and react-native versions, gradle version, all npm packages and fully converted the class based components
            into functional components. I also upgraded the Django app, integrating new functionalities and API's. 
          </p>
        </Col>
      </Row>

        {/* ***************************************    CONTACT FORM       ******************************************************* */}
      </Row>
      <Row className="rows">
        <Col xs={12} sm={12} md={12} lg={12} className="centeredColumn">
          <p 
            className="normalText scrollToContactMe" 
            style = {{fontWeight:'normal'}}>You can contact me by sending me an E-mail at : <strong>andrei.cioc97@gmail.com </strong> 
            or you can send me a message now by completing the below form:</p>
        </Col>
      </Row>
      <ContactForm />
      {/* ***************************************   FOOTER       ******************************************************* */}
      <Footer />
    </Container>
  );
}

export default MainScreen;
