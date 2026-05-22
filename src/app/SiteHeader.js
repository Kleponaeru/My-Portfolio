import { useEffect, useState } from "react";
import { navigationItems, siteMeta } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "../components/common/ThemeToggle";
import { SocialLinks } from "../components/common/SocialLinks";

const sectionIds = navigationItems.map((item) => item.id);

export const SiteHeader = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="section-shell site-header-inner">
        <a className="site-mark" href="#home">
          <span>{siteMeta.name}</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <SocialLinks links={siteMeta.socialLinks} className="header-socials" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
};
