import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV - Alexi GALLONET - Portfolio.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
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
      </Container>
    </div>
  );
}

export default ResumeNew;
