import quintalLogo from "../assets/img/logo.svg";
import ciputraLogo from "../assets/img/logo-ukdw.png";
import ukridaLogo from "../assets/img/Ukrida-Logo.png";
import reactLogo from "../assets/img/react.png";
import laravelLogo from "../assets/img/Laravel.svg.png";
import nodeLogo from "../assets/img/node-js.png";
import phpLogo from "../assets/img/php.png";
import jsLogo from "../assets/img/jslogo.png";
import mySqlLogo from "../assets/img/5968363.png";
import figmaLogo from "../assets/img/figma.png";
import pythonLogo from "../assets/img/python-logo.png";
import cardEngineering from "../assets/img/coding-background.jpg";
import cardWeb from "../assets/img/web-dev-2.jpg";
import cardDesign from "../assets/img/ui-ux.jpg";
import heroArtwork from "../assets/img/sword-heart.png";
import githubIcon from "../assets/img/nav-icon4.svg";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import instagramIcon from "../assets/img/nav-icon3.svg";

export const siteMeta = {
  name: "Kelvin Lie",
  title: "Software Engineer and Product-Minded Builder",
  location: "Indonesia",
  email: "kelvinlie08@gmail.com",
  resumeFileName: "Kelvin Lie-resume.pdf",
  intro:
    "I build practical web products with a strong bias toward maintainable frontend systems, backend reliability, and clean user flows.",
  summary:
    "Currently focused on work at Quintal ID and updating this portfolio to better reflect production experience. Previously contributed to work for Ciputra Group, with earlier experience across UI design, internal tools, and academic technical roles.",
  heroImage: heroArtwork,
  roles: [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI Systems Builder",
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/klvnlie08/",
      icon: linkedinIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/klvnlie_/",
      icon: instagramIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/Kleponaeru",
      icon: githubIcon,
    },
  ],
  stats: [
    { value: "2+", label: "Companies represented" },
    { value: "6+", label: "Production and academic builds" },
    { value: "Full stack", label: "Delivery range" },
  ],
};

export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const experienceItems = [
  {
    company: "Quintal ID",
    role: "Current Role",
    period: "Present",
    summary:
      "Actively shipping product work and modernizing how this portfolio communicates current capabilities. Focus areas include frontend implementation, product iteration, and practical delivery quality.",
    highlights: [
      "Working on live product needs instead of intern-era portfolio positioning.",
      "Balancing UI implementation with maintainable engineering decisions.",
      "Improving product communication, interaction quality, and delivery speed.",
    ],
    accent: "current",
    logo: quintalLogo,
  },
  {
    company: "Ciputra Group",
    role: "Past Work",
    period: "Previous",
    summary:
      "Delivered work aligned with enterprise expectations, contributing to business-facing software and sharpening execution in structured environments.",
    highlights: [
      "Built experience operating within established business and stakeholder constraints.",
      "Worked on production-oriented output rather than student-only projects.",
      "Strengthened reliability, clarity, and cross-team communication.",
    ],
    accent: "past",
    logo: ciputraLogo,
  },
  {
    company: "Broader Experience",
    role: "Foundation",
    period: "Earlier",
    summary:
      "Past experience spans UI/UX apprenticeship, teaching support, and student-led technical initiatives. Those roles remain valuable context, but the portfolio now prioritizes current and relevant work.",
    highlights: [
      "UI and design systems exposure through apprenticeship work.",
      "Hands-on teaching and mentoring through assistant roles.",
      "A practical blend of design, engineering, and communication.",
    ],
    accent: "base",
    logo: ukridaLogo,
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    items: [
      { name: "React", level: "Advanced", icon: reactLogo },
      { name: "JavaScript", level: "Advanced", icon: jsLogo },
      { name: "Figma", level: "Advanced", icon: figmaLogo },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Laravel", level: "Advanced", icon: laravelLogo },
      { name: "Node.js", level: "Intermediate", icon: nodeLogo },
      { name: "PHP", level: "Advanced", icon: phpLogo },
      { name: "Python", level: "Intermediate", icon: pythonLogo },
    ],
  },
  {
    name: "Data",
    items: [{ name: "MySQL", level: "Advanced", icon: mySqlLogo }],
  },
];

export const projectItems = [
  {
    title: "Production-Focused Portfolio Refresh",
    description:
      "A redesign and restructuring of this portfolio so the content reflects current work at Quintal ID and past work for Ciputra Group instead of intern-era positioning.",
    image: cardDesign,
    tags: ["React", "IA", "Performance"],
  },
  {
    title: "Web Engineering Experiments",
    description:
      "A collection of implementation work across frontend, backend, and full-stack problem solving using practical web stacks.",
    image: cardWeb,
    tags: ["Laravel", "PHP", "Bootstrap"],
    href: "https://github.com/Kleponaeru/Web-Based-Programming-Practicum",
  },
  {
    title: "Software Engineering Work",
    description:
      "Repository work centered on software architecture, implementation discipline, and building maintainable solutions.",
    image: cardEngineering,
    tags: ["Architecture", "Full Stack", "Systems"],
    href: "https://github.com/Kleponaeru/Software-Engineering",
  },
];

export const aboutPoints = [
  "I prefer shipping interfaces that are visually deliberate, not generic template work.",
  "I care about structure as much as aesthetics, so content, sections, and reusable UI need to be easy to maintain.",
  "This refresh keeps the portfolio lightweight while making the narrative more aligned with current professional work.",
];

export const contactLinks = [
  {
    label: "Email",
    value: "kelvinlie08@gmail.com",
    href: "mailto:kelvinlie08@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Kleponaeru",
    href: "https://github.com/Kleponaeru",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/klvnlie08",
    href: "https://www.linkedin.com/in/klvnlie08/",
  },
];

export const footerText = "Copyright 2026 Kelvin Lie. All rights reserved.";

export const supportingLogos = [ciputraLogo, ukridaLogo];
