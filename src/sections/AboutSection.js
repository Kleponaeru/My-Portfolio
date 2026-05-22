import { siteMeta } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";

export const AboutSection = () => (
  <section className="content-section" id="about">
    <div className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        description="This portfolio is now focused on the work and skills I want to represent clearly."
      />

      <div className="about-grid">
        <Reveal className="about-card">
          <p className="about-lead">{siteMeta.title}</p>
          <p>{siteMeta.summary}</p>
          <div className="about-mini-highlights">
            <span>Current work at Quintal ID</span>
            <span>Past work for Ciputra Group</span>
            <span>Earlier experience at KPN CORP</span>
          </div>
        </Reveal>

        <Reveal className="about-visual-card" delay={90}>
          <div className="about-visual-overlay" aria-hidden="true">
            <span>Frontend</span>
            <span>Backend</span>
            <span>Data</span>
          </div>
          <div className="about-visual-copy">
            <p>Current Focus</p>
            <h3>Clean product UI with practical engineering underneath.</h3>
            <span>Move across the page to activate the background effect.</span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
