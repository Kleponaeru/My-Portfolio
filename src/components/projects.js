import React from "react";
import Card from "react-bootstrap/Card";
import useScrollAnimation from "./useScrollAnimation";
// import colorSharp from "../assets/img/color-sharp.png";
import cardItem1 from "../assets/img/coding-background.jpg";
import cardItem2 from "../assets/img/web-dev-2.jpg";
import cardItem3 from "../assets/img/ui-ux.jpg";
import cardItem4 from "../assets/img/microservices.png";
import cardItem5 from "../assets/img/mobile-map.jpg";
import cardItem6 from "../assets/img/mobile-app-dev.jpg";
import LazyLoad from "react-lazyload";

export const Projects = () => {
  const animationRef = useScrollAnimation();
  const projectData = [
    {
      imageUrl: cardItem2,
      title: "Web Development",
      description:
        "Hands-on projects in HTML, CSS, PHP Laravel, and Bootstrap.",
      link: "https://github.com/Kleponaeru/Web-Based-Programming-Practicum",
    },
    {
      imageUrl: cardItem1,
      title: "Software Engineer",
      description:
        "Real-world projects applying software engineering principles.",
      link: "https://github.com/Kleponaeru/Software-Engineering",
    },
    {
      imageUrl: cardItem4,
      title: "Simple API Microservices",
      description:
        "Designing scalable, maintainable APIs using microservices architecture.",
      link: "https://github.com/Kleponaeru/Design-Architecture-Microservices",
    },
    {
      imageUrl: cardItem6,
      title: "Mobile App Development",
      description:
        "Android mobile apps using Flutter, focusing on UI and state management.",
      link: "https://github.com/Kleponaeru/Mobile-Programming-Fultter",
    },
    {
      imageUrl: cardItem5,
      title: "Mobile Map Project",
      description:
        "Location-based Flutter app integrating mapping services and geolocation.",
      link: "https://github.com/Kleponaeru/Flutter-Map-Project",
    },
    {
      imageUrl: cardItem3,
      title: "UI/UX Design",
      description:
        "User-centered designs focusing on research, wireframing, prototyping.",
      link: "https://www.figma.com/design/1zNTfs1VYkSUWuX0NH0XK0/Capstone-Project---Let's-Hire?node-id=0-1&t=Ji7buZf2s9MDBua6-1",
    },
    {
      imageUrl: cardItem3,
      title: "UI Design",
      description:
        "Design focusing on user-friendly interfaces and visual aesthetics.",
      link: "https://www.figma.com/@kelvinlie08",
    },
  ];

  return (
    <span className="button-more">
      <section
        className="projects-section"
        id="projects"
        ref={animationRef}
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        <h1>My Projects</h1>
        <p>
          Welcome to the showcase of my digital craftsmanship.
          <br></br>Each project here represents a unique challenge I've
          embraced, a problem I've solved, and a story of growth.
        </p>
        <div className="card-container">
          {projectData.map((project, index) => (
            <Card key={index} className="card-project">
              <LazyLoad height={50} offset={100}>
                <Card.Img
                  variant="top"
                  src={project.imageUrl}
                  className="card-image"
                />
              </LazyLoad>
              <Card.Body className="card-content">
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-description">
                  {project.description}
                </Card.Text>
                <a href={project.link} className="more">
                  <span>Learn More</span>
                </a>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      {/* <img className="" src={bgBalls} alt="background"/> */}
    </span>
  );
};
