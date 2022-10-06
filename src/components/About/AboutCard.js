import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zefri Fahlevi Irdiansyah </span>
            from <span className="purple"> Indonesia</span>
            <br />I am a Junior Developer/Programmer, still Learning and Study.
            Keep Spirit.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding, Study
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success won't find you, you have to look for it!"{" "}
          </p>
          <footer className="blockquote-footer">Zefrifahlevi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
