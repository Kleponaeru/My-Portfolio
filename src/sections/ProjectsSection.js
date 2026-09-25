import { projectItems } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => (
  <section className="content-section" id="projects">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="My Projects"
        description="A mix of live products and the internal app I’m currently building at Quintal."
      />

      <div className="project-grid">
        {projectItems.map((project, index) => (
          <Reveal key={project.title} className="project-card" delay={index * 80}>
            <div className="project-image-wrap">
              <div
                className="project-image"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 11, 19, 0.1), rgba(9, 11, 19, 0.78)), url(${project.image})` }}
              />
              <span className="project-index">0{index + 1}</span>
            </div>
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
                {project.status ? <span className="project-status">{project.status}</span> : null}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer">
                  Open project <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="project-note">{project.note}</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
