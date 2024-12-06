import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Nav } from "react-bootstrap";
import useScrollAnimation from "./useScrollAnimation";
import jsLogo from "../assets/img/jslogo.png";
import mySqlLogo from "../assets/img/5968363.png";
import laravelLogo from "../assets/img/Laravel.svg.png";
import csharpLogo from "../assets/img/csharp-logo.png";
import reactLogo from "../assets/img/react.png";
import phpLogo from "../assets/img/php.png";
import bootstrapLogo from "../assets/img/bootsrap.png";
import javaLogo from "../assets/img/java.png";
import pythonLogo from "../assets/img/python-logo.png";
import cplusLogo from "../assets/img/c++ (2).png";
import htmlLogo from "../assets/img/html.png";
import cssLogo from "../assets/img/css-logo.svg";
import vsCodeLogo from "../assets/img/vscode.png";
import gitLogo from "../assets/img/git-icon.png";
import gitHubLogo from "../assets/img/github.jpg";
import xamppLogo from "../assets/img/XAMPP_Logo.png";
import figmaLogo from "../assets/img/figma.png";
import androidStdLogo from "../assets/img/andr-studio.png";
import tailWindLogo from "../assets/img/tailwind.jpg";
import nodeLogo from "../assets/img/node-js.png";
import navicatLogo from "../assets/img/navicat.png";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("tech");
  const animationRef = useScrollAnimation();

  const techItems = [
    { name: "Laravel", icon: laravelLogo, level: "Advanced" },
    { name: "C#", icon: csharpLogo, level: "Advanced" },
    { name: "JavaScript", icon: jsLogo, level: "Intermediate" },
    { name: "React JS", icon: reactLogo, level: "Intermediate" },
    { name: "MySQL", icon: mySqlLogo, level: "Advanced" },
    { name: "PHP", icon: phpLogo, level: "Advanced" },
    { name: "Java", icon: javaLogo, level: "Advanced" },
    { name: "Python", icon: pythonLogo, level: "Advanced" },
    { name: "C++", icon: cplusLogo, level: "Advanced" },
    { name: "HTML", icon: htmlLogo, level: "Advanced" },
    { name: "CSS", icon: cssLogo, level: "Intermediate" },
    { name: "Bootstrap", icon: bootstrapLogo, level: "Advanced" },
    { name: "Tailwind", icon: tailWindLogo, level: "Intermediate" },
    { name: "Node JS", icon: nodeLogo, level: "Intermediate" },
  ];

  const toolItems = [
    { name: "VS Code", icon: vsCodeLogo, level: "Advanced" },
    { name: "Git", icon: gitLogo, level: "Intermediate" },
    { name: "GitHub", icon: gitHubLogo, level: "Advanced" },
    { name: "XAMPP", icon: xamppLogo, level: "Advanced" },
    { name: "Figma", icon: figmaLogo, level: "Advanced" },
    { name: "Android Studio", icon: androidStdLogo, level: "Intermediate" },
    { name: "Navicat", icon: navicatLogo, level: "Intermediate" },
    // Add more tool items...
  ];

  return (
    <section
      className="tech-tools"
      id="skills"
      ref={animationRef}
      style={{ opacity: 0, transform: "translateY(30px)" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h1>Tech Stack & Tools</h1>
            <p>
              There are some tech stack and tools that I've learned and
              experienced
            </p>
            <div className="tech-tools-bx">
              <Nav variant="tabs" className="justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "tech"}
                    onClick={() => setActiveTab("tech")}
                  >
                    Tech Stack
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "tools"}
                    onClick={() => setActiveTab("tools")}
                  >
                    Tools
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="tech-tools-grid">
                {(activeTab === "tech" ? techItems : toolItems).map(
                  (item, index) => (
                    <div key={index} className="tech-tool-item">
                      <LazyLoad height={50} offset={100}>
                        <img src={item.icon} alt={item.name} />
                      </LazyLoad>
                      <span>{item.name}</span>
                      <span className="skill-level">{item.level}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt="background"/> */}
    </section>
  );
};
