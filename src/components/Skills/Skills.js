import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";

function About() {

  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Mes <strong className="purple"> Compétences </strong>
          </h1>

          <Techstack /> <br></br>

          {/* <Github /> */}

        </Container>
      </Container>
    </>

  );
}

export default About;



