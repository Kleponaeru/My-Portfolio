import { siteMeta } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";
import { ArrowUpRight, Layers3, WandSparkles } from "lucide-react";

export const AboutSection = () => (
  <section className="content-section" id="about">
    <div className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        description="This portfolio is now focused on the work and skills I want to represent clearly."
      />

      <div className="about-grid">
        <Reveal className="about-card about-card-copy">
          <p className="about-lead">{siteMeta.title}</p>
          <h3>Engineering with a designer&apos;s eye.</h3>
          <p>{siteMeta.summary}</p>
          <div className="about-mini-highlights">
            <span><Layers3 size={15} /> Product thinking</span>
            <span><WandSparkles size={15} /> Visual polish</span>
            <span><ArrowUpRight size={15} /> Full-stack range</span>
          </div>
        </Reveal>

        <Reveal className="about-visual-card" delay={90}>
          <div className="about-visual-overlay" aria-hidden="true">
            <span>Frontend</span>
            <span>Backend</span>
            <span>Data</span>
          </div>
          <div className="about-visual-copy">
            <p>Working philosophy</p>
            <h3>Good interfaces feel obvious, alive, and considered.</h3>
            <span>From first interaction to final detail, I care about how the work feels to use.</span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
