import { siteMeta } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { SocialLinks } from "../components/common/SocialLinks";
import { Reveal } from "../components/common/Reveal";

export const HeroSection = () => {
  const typewriterText = useTypewriter(siteMeta.roles);

  return (
    <section className="hero-section" id="home">
      <div className="section-shell hero-grid">
        <Reveal className="hero-copy">
          <p className="hero-kicker">Portfolio refresh 2026</p>
          <h1>{siteMeta.name}</h1>
          <p className="hero-role">
            {typewriterText}
            <span className="hero-caret" />
          </p>
          <p className="hero-summary">{siteMeta.intro}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View selected work
            </a>
            <a
              className="button-secondary"
              href={`${process.env.PUBLIC_URL}/${siteMeta.resumeFileName}`}
              target="_blank"
              rel="noreferrer"
            >
              Open CV
            </a>
          </div>
          <SocialLinks links={siteMeta.socialLinks} />
        </Reveal>

        <Reveal className="hero-panel" delay={80}>
          <div className="hero-card">
            <div className="hero-card-copy">
              <p className="hero-card-label">Current focus</p>
              <h2>Quintal ID</h2>
              <p>{siteMeta.summary}</p>
            </div>
            <img src={siteMeta.heroImage} alt="Portfolio hero artwork" />
          </div>
          <div className="hero-stats">
            {siteMeta.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
