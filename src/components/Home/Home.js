import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import img_avatar from "../../Assets/ReadyPlayerMe-Avatar.jpeg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from 'react-i18next'; 

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('hero.hello')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t('hero.nameIntro')}
                <strong className="main-name"> ALEXI GALLONET</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="tilt-container">
              <Tilt tiltEnable={true}>
                <div>
                <img
                  src={img_avatar}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "350px", borderRadius: "50%", marginBottom: "100px", marginLeft: "100px" }}
                />
                </div>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
