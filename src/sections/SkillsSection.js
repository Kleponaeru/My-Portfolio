import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";

export const SkillsSection = () => (
  <section className="content-section" id="skills">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="My Skills"
        description="Frontend, backend, and data tools I use the most."
      />

      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <Reveal key={group.name} className="skill-group" delay={index * 70}>
            <div className="skill-group-heading">
              <p>{group.name}</p>
              <h3>{group.name}</h3>
              <span>{group.description}</span>
            </div>
            <div className="skill-list">
              {group.items.map((item) => (
                <div key={item.name} className="skill-card">
                  <img src={item.icon} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
