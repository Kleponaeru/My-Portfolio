import { experienceItems } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";

export const ExperienceSection = () => (
  <section className="content-section" id="experience">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Current and relevant work first"
        description="The emphasis is now on current work at Quintal ID and previous work tied to Ciputra Group, with older context kept as supporting background instead of the main story."
      />

      <div className="experience-grid">
        {experienceItems.map((item, index) => (
          <Reveal
            key={item.company}
            className={`experience-card experience-card-${item.accent}`}
            delay={index * 70}
          >
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
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
