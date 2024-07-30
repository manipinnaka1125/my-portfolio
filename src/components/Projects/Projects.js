import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coming Soon: Integrated Resume Builder"
              description="A project aimed at integrating resume building with various companies like Google, allowing users to create resumes on our website and easily apply for jobs."
            ghLink="https://github.com/manipinnaka1125/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Airline Reservation System"
              description="A web application for booking and managing airline reservations."
              ghLink="https://github.com/manipinnaka1125/airline-main-f--routes"
              demoLink="https://airline-main-f-routes-cr8m.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Crypto Meme-Token Website"
              description="A website providing information about various crypto meme coins and crypto wallets."
              ghLink="https://github.com/manipinnaka1125/phase2"
              demoLink="https://crypto-meme-token99.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Nacto Care"
              description="Contributed to the Nacto Care project by submitting pull requests that were merged into the main repository."
              ghLink="https://github.com/manipinnaka1125/Nacto-Care"
              demoLink="https://nacto-care.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Uranus Website"
              description="Developed the homepage for the Uranus website, focused on systematic altruism."
              ghLink="https://github.com/manipinnaka1125/uranus"
              demoLink="https://uranus-sigma.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
