import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Container, Row, Col, Nav } from "react-bootstrap";
import useScrollAnimation from "./useScrollAnimation";
import intuitLogo from "../assets/img/intuit.png";
import codeCampLogo from "../assets/img/code-camp.png";
import adobeLogo from "../assets/img/adobe.png";

const CertificateItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return `${title.substring(0, maxLength)}...`;
    }
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}...`;
    }
  };

  return (
    <div
      className={`certificate-item ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="certificate-image">
        <img src={project.imageUrl} alt={project.title} />
      </div>
      <div className="certificate-info">
        <h3 className="certificate-title">
          {isHovered
            ? project.title
            : window.innerWidth < 768
            ? truncateTitle(project.title, 30)
            : truncateTitle(project.title, 50)}
        </h3>
        <p
          className={`certificate-description ${isHovered ? "" : "truncated"}`}
        >
          {isHovered
            ? project.description
            : window.innerWidth < 768
            ? truncateDescription(project.description, 30)
            : truncateDescription(project.description, 80)}
        </p>
      </div>
      <div className="certificate-issued">
        <div className="certificate-date">
          <p>{project.issued}</p>
        </div>
        <div className="certificate-link">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <TbExternalLink style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const animationRef = useScrollAnimation();

  const certifData = [
    {
      imageUrl: intuitLogo,
      title: "Intuit Design for Delight Innovator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in pede posuere cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      issued: "Issued: Sept 2023",
      link: "https://example.com/certificate1",
    },
    {
      imageUrl: adobeLogo,
      title:
        "Adobe Certified Associate in Graphic Design & Illustration Using Adobe Illustrator",
      description:
        "Description for certificate 2 that is a bit longer than the first one to test the truncation feature.",
      issued: "Issued: Oct 2023",
      link: "https://example.com/certificate2",
    },
    {
      imageUrl: codeCampLogo,
      title: "Foundational C# with Microsoft",
      description:
        "Description for certificate 2 that is a bit longer than the first one to test the truncation feature.",
      issued: "Issued: Mar 2024",
      link: "https://example.com/certificate2",
    },
    // Add more certificates as needed
  ];
  const awardData = [
    {
      imageUrl: intuitLogo,
      title: "Still on development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in pede posuere cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      issued: "Issued: Mar 2024",
      link: "https://example.com/certificate1",
    },
    {
      imageUrl: intuitLogo,
      title: "Still on development",
      description:
        "Description for certificate 2 that is a bit longer than the first one to test the truncation feature.",
      issued: "Issued: Mar 2024",
      link: "https://example.com/certificate2",
    },
    // Add more certificates as needed
  ];

  return (
    <section
      className="certificates-section"
      id="skills"
      ref={animationRef}
      style={{ opacity: 0, transform: "translateY(30px)" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="certificates-header">
              <h1>Certifications & Awards</h1>
              <p>Here are some certificates and awards I have earned</p>
            </div>
            <div className="tech-tools-bx">
              <Nav variant="tabs" className="justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "certifications"}
                    onClick={() => setActiveTab("certifications")}
                  >
                    Certificate
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "awards"}
                    onClick={() => setActiveTab("awards")}
                  >
                    Awards
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              {activeTab === "certifications" && (
                <div className="certificates-list">
                  {certifData.map((project, index) => (
                    <CertificateItem key={index} project={project} />
                  ))}
                </div>
              )}
              {activeTab === "awards" && (
                <div className="awards-list">
                  {awardData.map((project, index) => (
                    <CertificateItem key={index} project={project} />
                  ))}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
