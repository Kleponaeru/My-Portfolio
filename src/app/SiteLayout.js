import { useEffect, useState } from "react";
import { ScrollProgress } from "../components/common/ScrollProgress";
import { BackToTopButton } from "../components/common/BackToTopButton";
import LiquidEther from "../components/common/LiquidEther";
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
      <div className="site-liquid-background" aria-hidden="true">
        <LiquidEther
          className="site-liquid-canvas"
          colors={
            theme === "light"
              ? ["#0f766e", "#d97706", "#34d399"]
              : ["#34d399", "#f59e0b", "#0ea5e9"]
          }
          mouseForce={12}
          cursorSize={72}
          isViscous={false}
          viscous={30}
          iterationsViscous={20}
          iterationsPoisson={20}
          resolution={0.35}
          isBounce={false}
          autoDemo
          autoSpeed={0.35}
          autoIntensity={1.65}
          takeoverDuration={0.25}
          autoResumeDelay={2200}
          autoRampDuration={0.7}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
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
