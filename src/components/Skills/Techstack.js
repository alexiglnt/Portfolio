import React from "react";
import { Col, Row } from "react-bootstrap";
import jsonSkills from "../../jsons/skills.json"

function Techstack() {
  return (
    <>
      {
        jsonSkills.skills_categories.map((skill) => {
          return (
            <>
              <h3 style={{textAlign: "left", marginLeft: "15px", marginTop: "100px"}} > {skill.name} </h3>
              <Row>
                {skill.skills.map((skill) => (
                  <Col xs={4} md={2} key={skill.name} className="tech-icon-wrapper">
                    <a href={skill.link} target="_blank" rel="noreferrer" className="tech-icons">
                      <img src={skill.logo} alt={skill.name} />
                      <p style={{ color: "black", fontSize: "20px", marginTop: "20px", marginBottom: "0px" }}>{skill.name}</p>
                    </a>
                  </Col>
                ))}
              </Row> 
            </>
          )
        })
      }
    </>
  );
}

export default Techstack;
