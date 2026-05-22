import { aboutPoints, siteMeta, supportingLogos } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";

export const AboutSection = () => (
  <section className="content-section" id="about">
    <div className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A clearer portfolio, built around real work"
        description="The previous version still spoke like an intern portfolio. This version is structured to better represent current work, past enterprise exposure, and the way I actually build."
      />

      <div className="about-grid">
        <Reveal className="about-card">
          <p className="about-lead">{siteMeta.title}</p>
          <p>{siteMeta.summary}</p>
        </Reveal>

        <div className="about-points">
          {aboutPoints.map((point, index) => (
            <Reveal key={point} className="about-point" delay={index * 60}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{point}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="support-strip">
        {supportingLogos.map((logo, index) => (
          <Reveal key={`${logo}-${index}`} className="support-logo" delay={index * 80}>
            <img src={logo} alt="" />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
