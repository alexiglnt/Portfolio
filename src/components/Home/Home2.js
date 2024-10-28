import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  AiOutlineArrowRight,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineLineChart,
  AiOutlineThunderbolt
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Home2() {
  const navigate = useNavigate();

  return (
    <Container fluid className="home-about-section" id="about">

      <Container className="home-about-left-side">
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              JE ME <span className="purple"> PRÉSENTE </span>
            </h1>
            <p className="home-about-body">
              Je suis passionné par le <b className="purple">développement web</b>, que ce soit le coté front-end ou back-end.
              <br />
              Je suis actuellement en formation en tant qu'ingénieur en informatique à <b className="purple">ISIMA</b> En alternance chez <b className="purple">PI System Automation</b>, une entreprise du groupe <b className="purple">Galilé</b>.<br />
              <br />
              {/* <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />*/}
              J'ai eu l'opportunité de concrétiser divers projets, que ce soit pendant mes études ou à titre personnel, afin de maîtriser les multiples langages et technologies du domaine.
              <br />
              <br />
              J'apprécie particulièrement le langage de programmation <b className="purple">JavaScript</b> et les frameworks <b className="purple"> React </b> et <b className="purple"> Next.js </b>
            </p>
          </Col>
        </Row>
      </Container>


      <Container className="home-about-right-side">
        <Col className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            POUR EN SAVOIR <span className="purple"> PLUS </span>
          </h1> <br></br>
          {/* ICI */}
        </Col>

        <Container className="home-about-cards">
          <Row>
            {/* Première carte */}
            <Col md={6} xs={12}>
              <a href="/projects" onClick={(e) => { e.preventDefault(); navigate("/projects") }}>
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                      {" "} Projets
                    </Card.Title>
                    <br />
                    <Card.Text> Cliquez ici pour découvrir les projets que j'ai réalisés </Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* Deuxième carte */}
            <Col md={6} xs={12}>
              <a href="/skills" onClick={(e) => { e.preventDefault(); navigate("/skills") }}>
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineLineChart style={{ marginBottom: "2px" }} />
                      {" "} Compétences
                    </Card.Title>
                    <br />
                    <Card.Text> Venez découvrir mes compétences dans différents domaines en cliquant ici </Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* Troisième carte */}
            <Col md={6} xs={12} marginBottom={20} >
              <a href="/experiences" onClick={(e) => { e.preventDefault(); navigate("/experiences") }}>
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineThunderbolt style={{ marginBottom: "2px" }} />
                      {" "} Expériences
                    </Card.Title>
                    <br />
                    <Card.Text> Vous voulez savoir les expériences que j'ai eu en entreprise ? Cliquez ici </Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>

            {/* Quatrième carte */}
            <Col md={6} xs={12}>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact") }}>
                <Card className="home-cards">
                  <Card.Body>
                    <Card.Title>
                      <AiOutlineUser style={{ marginBottom: "2px" }} />
                      {" "} Contact
                    </Card.Title>
                    <br />
                    <Card.Text> Si vous voulez me contacter, c'est par ici ! </Card.Text>
                    <AiOutlineArrowRight className="icon-card-move" style={{ marginBottom: "2px" }} />
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>

    </Container>
  );
}
export default Home2;
