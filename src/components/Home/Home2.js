import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from '../../Assets/image.png';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’ve developed a deep passion for programming, and I’m constantly learning and growing.
              <br />
              <br />
              I am proficient in classics like
              <i>
                <b className="purple"> C++ and Java. </b>
              </i>
              <br />
              <br />
              My areas of interest include building innovative
              <i>
                <b className="purple"> Web Technologies and Products </b>
              </i>
              as well as exploring various fields related to
              <i>
                <b className="purple"> tech innovations. </b>
              </i>
              <br />
              <br />
              I love developing products with 
              <i>
                <b className="purple"> the MERN Stack </b>
              </i>
              and I am enthusiastic about
              <i>
                <b className="purple"> Modern JavaScript Libraries and Frameworks. </b>
              </i>
              I am eager to learn new frameworks and contribute to open source projects.
              <i>
                <b className="purple"> React.js </b>
              </i>
              is one of my favorites.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={image} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manipinnaka1125"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mani-swaroop-pinnaka-6a09a5257/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/swaroop_648"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
