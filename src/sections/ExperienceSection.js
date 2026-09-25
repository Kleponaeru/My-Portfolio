import { experienceItems } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";
import { ArrowUpRight } from "lucide-react";

export const ExperienceSection = () => (
  <section className="content-section" id="experience">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="My Experience"
        description="Here are the main roles and companies I want to highlight."
      />

      <div className="experience-grid">
        {experienceItems.map((item, index) => (
          <Reveal
            key={item.company}
            className={`experience-card experience-card-${item.accent}`}
            delay={index * 70}
          >
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-meta">
              <img src={item.logo} alt="" />
              <div>
                <p>{item.role}</p>
                <h3>{item.company}</h3>
              </div>
              <span>{item.period}</span>
            </div>
            <p className="experience-summary">{item.summary}</p>
            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <span className="experience-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
