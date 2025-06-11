import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate("/project");
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Centered Button */}
        <Row className="mb-4 justify-content-center">
          <Col md="auto">
            <button
              className="btn btn-primary"
              onClick={handleProjectClick}
            >
              View My Projects
            </button>
          </Col>
        </Row>

        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate full-stack developer with a strong background in software engineering and DevOps.
              <br />
              <br />
              I am proficient in languages like
              <i>
                <b className="purple"> C++, Java, and JavaScript. </b>
              </i>
              <br />
              <br />
              My expertise includes developing scalable
              <i>
                <b className="purple"> Web Applications and Enterprise Solutions </b>
              </i>
              using modern frameworks and technologies.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple"> MERN Stack and Java Full-Stack Development </b>
              </i>
              with <b className="purple">React.js</b> and <b className="purple">Spring Boot</b>.
              <br />
              <br />
              Additionally, I am well-versed in
              <i>
                <b className="purple"> DevOps tools and automation </b>
              </i>
              such as <b className="purple">Jenkins, Ansible, and Terraform</b> for CI/CD and infrastructure management.
              <br />
              <br />
              I also have an interest in
              <i>
                <b className="purple"> AI/ML and Cloud Computing </b>
              </i>
              and am constantly learning and working on innovative projects in these fields.
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
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mani-swaroop-pinnaka-6a09a5257/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
