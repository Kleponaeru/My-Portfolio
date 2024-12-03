import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Container, Row, Col, Nav } from "react-bootstrap";
import useScrollAnimation from "./useScrollAnimation";
import intuitLogo from "../assets/img/intuit.png";
import codeCampLogo from "../assets/img/code-camp.png";
import adobeLogo from "../assets/img/adobe.png";
import kpnLogo from "../assets/img/kpn-logo.png";
import ukdwLogo from "../assets/img/logo-ukdw.png";
import mesLogo from "../assets/img/my-edu.webp";
import pkmLogo from "../assets/img/dikti.png";

const CertificateItem = ({ project, showLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

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

  const handleDescriptionClick = () => {
    if (window.innerWidth < 768) {
      setIsDescriptionExpanded(!isDescriptionExpanded);
    }
  };

  const isMobile = window.innerWidth < 768;
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
          {isHovered || isDescriptionExpanded
            ? isMobile
              ? project.mobileTitle
              : project.title
            : truncateTitle(
                isMobile ? project.mobileTitle : project.title,
                isMobile ? 30 : 65
              )}
        </h3>

        <p
          className={`certificate-description ${
            isHovered || isDescriptionExpanded ? "" : "truncated"
          }`}
          onClick={handleDescriptionClick}
        >
          {isHovered || isDescriptionExpanded
            ? isMobile
              ? project.mobileDescription
              : project.description
            : truncateDescription(
                isMobile ? project.mobileDescription : project.description,
                isMobile ? 30 : 70
              )}
        </p>
      </div>
      <div className="certificate-issued">
        <div className="certificate-date">
          <p>{project.issued}</p>
        </div>
        {showLink && (
          <div className="certificate-link">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <TbExternalLink style={{ fontSize: "30px" }} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState("experience"); // Default to experience
  const animationRef = useScrollAnimation();

  const certifData = [
    {
      imageUrl: intuitLogo,
      title: "Intuit Design for Delight Innovator",
      description:
        "Intuit Design for Delight Innovator certification recognizes expertise in applying UX principles to create user-centered designs, focusing on innovation and delighting users.",
      mobileTitle: "Intuit Design for Delight Innovator",
      mobileDescription: "Certified in user-centered UX design.",
      issued: "Issued: Sept 2023",
      link: "https://www.certiport.com/portal/pages/credentialverification.aspx",
    },
    {
      imageUrl: adobeLogo,
      title:
        "Adobe Certified Associate in Graphic Design & Illustration Using Adobe Illustrator",
      description:
        "Adobe Certified Associate in Graphic Design & Illustration with Adobe Illustrator validates skills in creating digital artwork, logos, and illustrations using Illustrator.",
      mobileTitle: "Adobe Certified Associate - Illustrator",
      mobileDescription: "Certified in graphic design using Illustrator.",
      issued: "Issued: Oct 2023",
      link: "https://www.certiport.com/portal/pages/credentialverification.aspx",
    },
    {
      imageUrl: codeCampLogo,
      title: "Foundational C# with Microsoft",
      description:
        "Foundational C# with Microsoft certification demonstrates core knowledge and skills in C# programming, covering basic concepts, syntax, and object-oriented programming with Microsoft technologies.",
      mobileTitle: "C# Certification",
      mobileDescription: "Certified in C# programming and OOP concepts.",
      issued: "Issued: Mar 2024",
      link: "https://freecodecamp.org/certification/Kleponaeru/foundational-c-sharp-with-microsoft",
    },
  ];

  const experienceData = [
    {
      imageUrl: kpnLogo,
      title: "KPN CORP - Web Developer",
      description:
        "Developed internal web applications for the company using Laravel, JavaScript, and SQL, focusing on front-end, back-end, and database optimization while collaborating to meet company needs.",
      mobileTitle: "Web Dev - KPN CORP",
      mobileDescription:
        "Developed web apps using Laravel, JavaScript, and SQL.",
      issued: "Jul 24 - Present",
      link: "https://example.com/certificate1",
    },
    {
      imageUrl: mesLogo,
      title: "UI/UX Apprentice",
      description:
        "Designed logos, icons, wireframes, and web layouts using Figma and Illustrator, including real-world projects like the Mamikos job portal app to enhance recruitment tools.",
      mobileTitle: "UI/UX Apprentice",
      mobileDescription:
        "Designed logos, icons, and web layouts with Figma and Illustrator.",
      issued: "Aug 23 - Jan 24",
      link: "https://example.com/certificate2",
    },
    {
      imageUrl: pkmLogo,
      title: "PKM-PM - Team Leader",
      description:
        "Recipient of the PKM-PM funding stage from DIKTI for the development of DeafLearn, a mobile game designed to support learning for deaf children.",
      mobileTitle: "Team Leader PKM-PM",
      mobileDescription:
        "Led DeafLearn project for DIKTI, supporting learning for deaf children.",
      issued: "Jun 23 - Jan 24",
      link: "https://example.com/certificate2",
    },
    {
      imageUrl: ukdwLogo,
      title: "Assistant Lectures",
      description:
        "Taught Programming Fundamentals, Database Design Practicum, and Database System Practicum to classes of 40-50 students each, providing hands-on guidance and expertise in PHP, CSS, Java, JavaScript, and MySQL.",
      mobileTitle: "Assistant Lecturer",
      mobileDescription:
        "Taught programming and database design to students in PHP, Java, and MySQL.",
      issued: "Aug 22 - Feb 24",
      link: "https://example.com/certificate2",
    },
    {
      imageUrl: ukdwLogo,
      title: "IT Faculty Lab Part-Time Worker",
      description:
        "Serving as a part-time worker in the Information Technology Faculty lab, supporting various IT functions and assisting students in a dynamic academic environment.",
      mobileTitle: "FTI Lab Part Time Worker",
      mobileDescription:
        "Assisted students and supported IT functions in the faculty lab.",
      issued: "Apr 23 - Sep 23",
      link: "https://example.com/certificate2",
    },
  ];

  const isMobile = window.innerWidth < 768;
  return (
    <section
      className="certificates-section"
      id="experience"
      ref={animationRef}
      style={{ opacity: 0, transform: "translateY(30px)" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="certificates-header">
              <h1>Experience & Certifications </h1>
              <p>Here are some experiences and certifications I have earned</p>
            </div>
            <div className="tech-tools-bx">
              <Nav variant="tabs" className="justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "experience"}
                    onClick={() => setActiveTab("experience")}
                  >
                    {isMobile ? "Exp" : "Experience"}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === "certifications"}
                    onClick={() => setActiveTab("certifications")}
                  >
                    {isMobile ? "Certif" : "Certificates"}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              {activeTab === "experience" && (
                <div className="experience-list">
                  {experienceData.map((project, index) => (
                    <CertificateItem key={index} project={project} />
                  ))}
                </div>
              )}
              {activeTab === "certifications" && (
                <div className="certificates-list">
                  {certifData.map((project, index) => (
                    <CertificateItem
                      key={index}
                      project={project}
                      showLink={activeTab === "certifications"}
                    />
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
