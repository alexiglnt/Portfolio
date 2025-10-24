// src/components/Experiences/Experiences.js
import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

function Experiences() {
  const { t } = useTranslation();

  // 🔹 On récupère le tableau d’expériences traduit
  const experiences = t("experiences.items", { returnObjects: true });

  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            {t("experiencesPage.title.part1")}{" "}
            <strong className="purple">{t("experiencesPage.title.part2")}</strong>
          </h1>
          <br />

          <div className="exp-wrapper">
            {experiences.map((exp, idx) => (
              <React.Fragment key={idx}>
                <ExperienceCard
                  title={exp.title}
                  company={exp.company}
                  date={exp.date}
                  description={exp.description}
                  location={exp.location}
                  logo={exp.logo}
                />
                {/* séparateurs entre les cartes, pas après la dernière */}
                {idx < experiences.length - 1 && (
                  <>
                    <div className="experience-divider-bullet"></div>
                    <div className="experience-divider"></div>
                    <div className="experience-divider-bullet"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Experiences;
