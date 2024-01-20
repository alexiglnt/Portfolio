import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jsonProjects from "../../jsons/projects.json"
import { useEffect } from "react";

function Projects() {

  useEffect(() => {
    console.log(jsonProjects.projects)
  }, [])


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple"> Projets </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}

        <br></br> <br></br>

        {jsonProjects.projects.map((project, index) => (
          <ProjectCard key={index} data={project} id={index} />
        ))}

      </Container>
    </Container>
  );
}

export default Projects;
