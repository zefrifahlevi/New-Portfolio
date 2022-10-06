import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /> <h5>Linux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <h5>VS Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> <h5>Vercel</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /> <h5>Heroku</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
