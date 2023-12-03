import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
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
