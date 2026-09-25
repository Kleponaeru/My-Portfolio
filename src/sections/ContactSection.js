import { contactLinks } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";
import { ArrowUpRight, Mail } from "lucide-react";

export const ContactSection = () => (
  <section className="content-section" id="contact">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Contact Me"
        description="Simple and direct ways to reach me."
      />

      <div className="contact-panel">
        <Reveal className="contact-card">
          <p className="contact-card-kicker"><Mail size={15} /> Best way to reach me</p>
          <h3>Have a good idea? Let&apos;s make it feel real.</h3>
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
                Open <ArrowUpRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
