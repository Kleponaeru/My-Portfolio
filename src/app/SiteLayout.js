import { useEffect, useState } from "react";
import { ScrollProgress } from "../components/common/ScrollProgress";
import { BackToTopButton } from "../components/common/BackToTopButton";
import { SiteHeader } from "./SiteHeader";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { CertificationsSection } from "../sections/CertificationsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ContactSection } from "../sections/ContactSection";
import { SiteFooter } from "../sections/SiteFooter";

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const SiteLayout = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="site-app">
      <SiteHeader
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
          )
        }
      />
      <ScrollProgress />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <BackToTopButton />
    </div>
  );
};
