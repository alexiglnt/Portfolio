import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jsonProjects from "../../jsons/projects.json"
import { useEffect, useState } from "react";

function Projects() {
  const [activeBtn, setActiveBtn] = useState("Date")
  const [projects, setProjects] = useState(jsonProjects.projects)

  const handleBtnClick = (btn) => {
    setActiveBtn(btn);

    switch (btn) {
      case "Date":
        setProjects(jsonProjects.projects)
        break;
      case "Web":
        setProjects(jsonProjects.projects.filter(project => project.type === "web").reverse())
        break;
      case "Jeux":
        setProjects(jsonProjects.projects.filter(project => project.type === "game"))
        break;
      default:
        setProjects(jsonProjects.projects)
        break;
    }

  };

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


        <div className="sort-btns-container">
          <button
            className={`sort-btn ${activeBtn === "Date" ? "active-btn" : ""}`}
            onClick={() => handleBtnClick("Date")}
          >
            Ordre Custom
          </button>
          <button
            className={`sort-btn ${activeBtn === "Web" ? "active-btn" : ""}`}
            onClick={() => handleBtnClick("Web")}
          >
            Web
          </button>
          <button
            className={`sort-btn ${activeBtn === "Jeux" ? "active-btn" : ""}`}
            onClick={() => handleBtnClick("Jeux")}
          >
            Jeux
          </button>
        </div>

        <br></br> <br></br>



        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} id={index} />
        ))}

      </Container>
    </Container>
  );
}

export default Projects;
