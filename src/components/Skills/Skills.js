import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            {t('skillsPage.title.part1')} <strong className="purple">{t('skillsPage.title.part2')}</strong>
          </h1>

          <p className="skills-subtitle">{t('skillsPage.subtitle')}</p>

          <Techstack /> <br></br>

          {/* <Github /> */}

        </Container>
      </Container>
    </>

  );
}

export default About;



