import React from "react";
import Card from 'react-bootstrap/Card';
import colorSharp from "../assets/img/color-sharp.png";
import cardItem1 from '../assets/img/coding-background.jpg';
import cardItem2 from '../assets/img/coding-background.jpg';
import cardItem3 from '../assets/img/coding-background.jpg';

export const Projects = () => {
  const projectData = [
    {
      imageUrl: cardItem1,
      title: "Web Development",
      description: "Building responsive and interactive web applications.",
    },
    {
      imageUrl: cardItem2,
      title: "Mobile App Development",
      description: "Creating cross-platform mobile apps using React Native.",
    },
    {
      imageUrl: cardItem3,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces.",
    },
    {
      imageUrl: cardItem3,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces.",
    },
    {
      imageUrl: cardItem3,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces.",
    },
  ];

  return (
    <span className="button-more">
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <div className="card-container">
        {projectData.map((project, index) => (
          <Card key={index} className="card-project">
            <Card.Img
              variant="top"
              src={project.imageUrl}
              className="card-image"
            />
            <Card.Body className="card-content">
              <Card.Title className="card-title">{project.title}</Card.Title>
              <Card.Text className="card-description">
                {project.description}
              </Card.Text>
              <button className="more"><span>Learn More</span></button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
    <img className="background-image-right" src={colorSharp} alt="background"/>
    </span>
    
  );
};
