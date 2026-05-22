import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
