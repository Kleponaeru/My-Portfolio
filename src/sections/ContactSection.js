import { contactLinks } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";

export const ContactSection = () => (
  <section className="content-section" id="contact">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Open to product, engineering, and collaboration conversations"
        description="The old email form added third-party runtime dependencies and failure points. This version keeps contact simple, direct, and fast."
      />

      <div className="contact-panel">
        <Reveal className="contact-card">
          <p className="contact-card-kicker">Best way to reach me</p>
          <h3>Email or LinkedIn works best for direct opportunities.</h3>
          <p>
            If the work needs product thinking, frontend implementation, or a
            more structured portfolio-level UI, that is the range this site is now optimized to represent.
          </p>
        </Reveal>
        <div className="contact-links">
          {contactLinks.map((item, index) => (
            <Reveal key={item.label} className="contact-link-card" delay={index * 70}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <a href={item.href} target="_blank" rel="noreferrer">
                Open
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
