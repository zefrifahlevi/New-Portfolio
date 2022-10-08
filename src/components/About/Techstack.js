import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiReduxsaga,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> <h5>C++</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> <h5>Node JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <h5>React JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> <h5>Mongo DB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs /> <h5>Next JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga /> <h5>Redux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch /> <h5>Pytorch</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
