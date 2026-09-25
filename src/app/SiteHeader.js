import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigationItems, siteMeta } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "../components/common/ThemeToggle";
import { SocialLinks } from "../components/common/SocialLinks";

const sectionIds = navigationItems.map((item) => item.id);

export const SiteHeader = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="section-shell site-header-inner">
        <a className="site-mark" href="#home">
          <span className="site-mark-badge">KL</span>
          <span className="site-mark-copy">
            <strong>{siteMeta.name}</strong>
            <small>Software engineer</small>
          </span>
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact-link" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="site-header-actions">
          <SocialLinks links={siteMeta.socialLinks} className="header-socials" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
};
