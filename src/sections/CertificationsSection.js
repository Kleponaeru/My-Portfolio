import { certificationItems } from "../data/portfolio";
import { SectionHeading } from "../components/common/SectionHeading";
import { Reveal } from "../components/common/Reveal";
import { ArrowUpRight } from "lucide-react";

export const CertificationsSection = () => (
  <section className="content-section" id="certifications">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="My Certifications"
        description="A few certifications that support my design and engineering background."
      />

      <div className="certification-grid">
        {certificationItems.map((item, index) => (
          <Reveal key={item.title} className="certification-card" delay={index * 70}>
            <div className="certification-top">
              <img src={item.logo} alt="" />
              <div>
                <p>{item.issuer}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
            <span className="certification-date">{item.issued}</span>
            <p>{item.description}</p>
            <a href={item.href} target="_blank" rel="noreferrer">
              View credential <ArrowUpRight size={16} />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
