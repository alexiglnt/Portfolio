import React from "react";
import { Col, Container } from "react-bootstrap";
import jsonSkills from "../../jsons/skills.json";
import { useTranslation } from "react-i18next";

function Techstack() {
  const { t } = useTranslation();

  return (
    <>
      {jsonSkills.skills_categories.map((category, idx) => {
        // Traduit seulement "Logiciels / jeux" -> "Software / Games" en EN
        const displayName =
          category.name === "Logiciels / jeux"
            ? t("skills.categories.software_games", "Logiciels / jeux")
            : category.name;

        return (
          <React.Fragment key={`${displayName}-${idx}`}>
            <h3 style={{ textAlign: "left", marginLeft: "15px", marginTop: "100px" }}>
              {displayName}
            </h3>
            <Container className="inline-flex-wrap">
              {category.skills.map((item) => (
                <Col xs={6} md={2} key={item.name} className="tech-icon-wrapper">
                  <a href={item.link} target="_blank" rel="noreferrer" className="tech-icons">
                    <img src={item.logo} alt={item.name} />
                    <p
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginTop: "20px",
                        marginBottom: "0px",
                      }}
                    >
                      {item.name}
                    </p>
                  </a>
                </Col>
              ))}
            </Container>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Techstack;
