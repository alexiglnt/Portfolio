import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV - Alexi GALLONET - Portfolio.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ExperienceCard from "../Experiences/ExperienceCard";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(800);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="project-section">

        <h1 className="project-heading">
          Mon <strong className="purple"> CV </strong>
        </h1>

        <br/> <br/>

        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="download_btn"
            style={{ width: "200px", marginBottom: "0" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger le CV
          </a>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.47} />
          </Document>
        </Row>


        <br /> <br /> <br /> <br /><br /> <br />



        <h1 className="project-heading">
          Mes <strong className="purple"> Formations </strong>
        </h1>
        <br /> <br />

        <div className="exp-wrapper" >
          <ExperienceCard
            title="BUT Informatique Graphique"
            company="IUT Clermont-Auvergne, Antenne  43"
            date="2021 - 2024"
            description={["", "Le Bachelor Universitaire de Technologie (BUT) Informatique Graphique est un programme de trois ans axé sur l'informatique, offrant une couverture complète des différents domaines de ce secteur.",
              "Il englobe le développement logiciel, web et de jeux vidéo, tout en incluant des aspects cruciaux tels que la modélisation 3D, les bases de données, la réalité virtuelle et la synthèse d'images."]}
            location="Puy-en-Velay"
            logo="uca_logo.jpg"
          />

          <div className="experience-divider-bullet"></div>
          <div className="experience-divider"></div>
          <div className="experience-divider-bullet"></div>

          <ExperienceCard
            title="BAC Général (NSI, Mathématiques)"
            company="Lycée Notre-Dame du Château"
            date="2019 - 2021"
            description={["", "Baccalauréat général avec les spécialités NSI (Numérique et Sciences Informatiques) et Mathématiques",
              "La troisème spécialité choisie était les Sciences Economiques et Sociales (SES)"]}
            location="Monistrol-sur-Loire"
            logo="lycee_logo.jpg"
          />
        </div>

      <br /> <br />


      </Container>
    </div>
  );
}

export default ResumeNew;
