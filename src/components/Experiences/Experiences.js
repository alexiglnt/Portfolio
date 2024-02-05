import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experiences() {

  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Container style={{}} >
          <h1 className="project-heading">
            Mes <strong className="purple"> Expériences </strong>
          </h1> <br/>


          <div className="exp-wrapper" >

            <ExperienceCard
              title="Développeur web full-stack"
              company="isiTecc"
              date="2023 - 2024"
              description={["Dans le cadre d’une alternance d’une durée d’un an, j’ai contribué au développement d’applications web sur le logiciel Smart Portal en utilisant les technologies ASP.NET, React.js et SQL", "IsiTecc est une ESN (Entreprise du Secteur du Digital) créant et intégrant des logiciels informatiques pour l’industrie et le tertiaire."]}
              location="Saint-Just-Malmont"
              logo="isitecc_logo.png"
            />

            <div className="experience-divider-bullet"></div>
            <div className="experience-divider"></div>
            <div className="experience-divider-bullet"></div>

            <ExperienceCard
              title="Développeur web full-stack"
              company="isiTecc"
              date="Avril - Juin 2023"
              description={["Stage d’une durée de trois mois ou j’ai contribué au développement d’applications web sur le logiciel Smart Portal en utilisant les technologies ASP.NET, React.js et SQL", "IsiTecc est une ESN (Entreprise du Secteur du Digital) créant et intégrant des logiciels informatiques pour l’industrie et le tertiaire."]}
              location="Saint-Just-Malmont"
              logo="isitecc_logo.png"
            />

          </div>


        </Container>
      </Container>
    </>

  );
}

export default Experiences;



