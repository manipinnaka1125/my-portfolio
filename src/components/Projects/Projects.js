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
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Small Cautionary Note */}
        <p style={{ color: "#ffcc00", fontSize: "14px", textAlign: "center" }}>
          ⚠️ Some backend services are not currently deployed due to hosting costs.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Learning Management System (LMS)"
              techStack="React, Spring Boot, MySQL"
              description="A full-featured LMS with course management, authentication, and role-based access."
              features={[
                "Course management system with CRUD operations",
                "Role-based authentication (Admin, Instructor, Student)",
                "User-friendly dashboard for course and student management",
                "Uses MySQL for structured data storage"
              ]}
              ghLink="https://github.com/manipinnaka1125/lms-frontned1"
              demoLink="https://learningmanagementsystem1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="YNJ Homes Real Estate Website"
              techStack="React, Spring Boot, MySQL"
              description="A real estate website with property listings, OTP-based authentication, and an admin dashboard."
              features={[
                "Property listings with images and descriptions",
                "OTP-based authentication for secure user login",
                "Admin dashboard for property and user management",
                "Integrated search and filtering for an enhanced experience"
              ]}
              ghLink="https://github.com/manipinnaka1125/ynjhomes"
              demoLink="https://ynjhomes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Airline Reservation System"
              techStack="React.js, Node.js, Express, MongoDB"
              description="A web application for booking and managing airline reservations."
              features={[
                "Flight booking and seat selection system",
                "User authentication and profile management",
                "Search and filter flights by date, price, and destination",
                "Admin panel for managing flights and bookings"
              ]}
              ghLink="https://github.com/manipinnaka1125/airline-main-f--routes"
              demoLink="https://airline-main-f-routes-cr8m.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Electricity Billing System"
              techStack="Java EE, JSP, JPA, SQL"
              description="A Java-based electricity billing system featuring user authentication, bill generation, and payment tracking."
              features={[
                "User authentication for secure access",
                "Automatic bill generation based on electricity consumption",
                "Payment tracking and history for users",
                "Developed using Java EE and SQL for data storage"
              ]}
              ghLink="https://github.com/manipinnaka1125/probilling2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Uranus Website"
              techStack="React.js, Node.js, MongoDB, Express.js"
              description="Developed the homepage for the Uranus website, focused on systematic altruism."
              features={[
                "Homepage designed for systematic altruism",
                "Modern UI/UX with responsive design",
                "Built using React.js, Node.js, and MongoDB"
              ]}
              ghLink="https://github.com/manipinnaka1125/uranus"
              demoLink="https://uranus-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Crypto Meme-Token Website"
              techStack="React.js, Node.js, MongoDB, Express.js"
              description="A website providing information about various crypto meme coins and crypto wallets."
              features={[
                "Displays various meme-based cryptocurrencies",
                "Crypto wallet integration",
                "Tracks real-time crypto prices"
              ]}
              ghLink="https://github.com/manipinnaka1125/phase2"
              demoLink="https://crypto-meme-token99.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coming Soon: Integrated Resume Builder"
              description="A project aimed at integrating resume building with various companies like Google, allowing users to create resumes and apply for jobs easily."
              features={[
                "Interactive resume-building interface",
                "Integration with companies like Google for direct job applications",
                "Cloud-based storage for easy retrieval"
              ]}
              ghLink="https://github.com/manipinnaka1125/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Nacto Care"
              description="Contributed to the Nacto Care project by submitting pull requests that were merged into the main repository."
              features={[
                "Healthcare-focused project",
                "Provided contributions through pull requests",
                "Features include medical resources and services"
              ]}
              ghLink="https://github.com/manipinnaka1125/Nacto-Care"
              demoLink="https://nacto-care.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
