import { siteMeta } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { SocialLinks } from "../components/common/SocialLinks";
import { Reveal } from "../components/common/Reveal";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const typewriterText = useTypewriter(siteMeta.roles);

  return (
    <section className="hero-section" id="home">
      <div className="section-shell hero-grid">
        <Reveal className="hero-copy">
          <div className="hero-topline">
            <span className="availability-pill"><span /> Thoughtful work, made useful</span>
            <span className="hero-location"><MapPin size={14} /> {siteMeta.location}</span>
          </div>
          <p className="hero-kicker">Portfolio / 2026</p>
          <h1>Building <em>useful</em> digital experiences.</h1>
          <p className="hero-role">
            <span className="role-label">Currently shaping:</span>
            {typewriterText}
            <span className="hero-caret" />
          </p>
          <p className="hero-summary">{siteMeta.intro}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View selected work <ArrowUpRight size={17} />
            </a>
            <a
              className="button-secondary"
              href={`${process.env.PUBLIC_URL}/${siteMeta.resumeFileName}`}
              target="_blank"
              rel="noreferrer"
            >
              Open CV <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-social-row">
            <SocialLinks links={siteMeta.socialLinks} />
            <a className="hero-scroll-link" href="#about">
              Scroll to explore <ArrowDown size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-panel" delay={80}>
          <div className="hero-visual">
            <div className="hero-visual-grid" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <div className="hero-art-card">
              <div className="hero-art-header">
                <span><Sparkles size={14} /> Field notes</span>
                <span>01 — 04</span>
              </div>
              <img src={siteMeta.heroImage} alt="Portfolio hero artwork" />
              <div className="hero-art-caption">
                <strong>Curious by default.</strong>
                <span>Intentional in every interaction.</span>
              </div>
            </div>
            <div className="hero-code-card">
              <span className="code-dot code-dot-red" />
              <span className="code-dot code-dot-yellow" />
              <span className="code-dot code-dot-green" />
              <pre aria-label="Code illustration"><code>{"const work = {\n  craft: \"with intent\",\n  ship: \"with care\"\n}"}</code></pre>
            </div>
            <div className="hero-focus-card">
              <span className="hero-card-label">Current focus</span>
              <strong>Quintal ID</strong>
              <span>Product-minded engineering, from idea to interface.</span>
            </div>
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
