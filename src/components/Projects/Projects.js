// src/components/Projects/Projects.js
import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jsonProjects from "../../jsons/projects.json";
import { useTranslation } from "react-i18next";
import { localizeProject } from "../../utils/i18nProjects";

function Projects() {
  const { t, i18n } = useTranslation(["common", "projects"]);
  const [activeBtn, setActiveBtn] = useState("Date");

  const filteredLocalizedProjects = useMemo(() => {
    let arr = jsonProjects.projects;

    if (activeBtn === "Web") {
      arr = arr
        .filter((p) => p.type === "web")
        .sort((a, b) => Number(b.date) - Number(a.date));
    } else if (activeBtn === "Jeux") {
      arr = arr
        .filter((p) => p.type === "game")
        .sort((a, b) => Number(b.date) - Number(a.date));
    }

    // ⚡️ Localise ici à chaque rendu → suit la langue active
    return arr.map((p) => localizeProject(t, p));
  }, [activeBtn, t, i18n.language]); // t OU i18n.language suffisent; je mets les deux pour être safe

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projectsPage.title.part1", "Mes")}{" "}
          <strong className="purple">{t("projectsPage.title.part2", "Projets")}</strong>
        </h1>

        <br /><br />

        <div className="sort-btns-container">
          <button
            className={`sort-btn ${activeBtn === "Date" ? "active-btn" : ""}`}
            onClick={() => setActiveBtn("Date")}
          >
            {t("projectsPage.sort.custom", "Ordre Custom")}
          </button>
          <button
            className={`sort-btn ${activeBtn === "Web" ? "active-btn" : ""}`}
            onClick={() => setActiveBtn("Web")}
          >
            {t("projectsPage.sort.web", "Web")}
          </button>
          <button
            className={`sort-btn ${activeBtn === "Jeux" ? "active-btn" : ""}`}
            onClick={() => setActiveBtn("Jeux")}
          >
            {t("projectsPage.sort.games", "Jeux")}
          </button>
        </div>

        <br /><br />

        {filteredLocalizedProjects.map((project, index) => (
          <ProjectCard key={project.id} data={project} id={index} />
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
