import quintalLogo from "../assets/images/companies/quintal-logo.png";
import ciputraLogo from "../assets/images/companies/ciputra-logo.png";
import kpnLogo from "../assets/images/companies/kpn-logo.png";
import reactLogo from "../assets/images/skills/react-logo.png";
import laravelLogo from "../assets/images/skills/laravel-logo.png";
import djangoLogo from "../assets/images/skills/django-logo.png";
import nodeLogo from "../assets/images/skills/node-js-logo.png";
import phpLogo from "../assets/images/skills/php-logo.png";
import jsLogo from "../assets/images/skills/javascript-logo.png";
import mySqlLogo from "../assets/images/skills/mysql-logo.png";
import figmaLogo from "../assets/images/skills/figma-logo.png";
import pythonLogo from "../assets/images/skills/python-logo.png";
import htmlLogo from "../assets/images/skills/html-logo.png";
import cssLogo from "../assets/images/skills/css-logo.svg";
import bootstrapLogo from "../assets/images/skills/bootstrap-logo.png";
import javaLogo from "../assets/images/skills/java-logo.png";
import gitLogo from "../assets/images/skills/git-logo.png";
import navicatLogo from "../assets/images/skills/navicat-logo.png";
import intuitLogo from "../assets/images/skills/intuit-logo.png";
import adobeLogo from "../assets/images/skills/adobe-logo.png";
import codeCampLogo from "../assets/images/skills/code-camp-logo.png";
import pbaLogo from "../assets/images/skills/pba-logo.jpg";
import dbDesignIcon from "../assets/images/skills/db-design.png";
import cardEngineering from "../assets/images/projects/software-engineering.jpg";
import cardWeb from "../assets/images/projects/web-engineering.jpg";
import cardDesign from "../assets/images/projects/portfolio-refresh.jpg";
import heroArtwork from "../assets/images/hero/hero-artwork.png";
import githubIcon from "../assets/images/social/github-logo.svg";
import linkedinIcon from "../assets/images/social/linkedin-logo.svg";
import instagramIcon from "../assets/images/social/instagram-logo.svg";

export const siteMeta = {
  name: "Kelvin Lie",
  title: "Software Engineer",
  location: "Indonesia",
  email: "kelvinlie08@gmail.com",
  resumeFileName: "Kelvin Lie-resume.pdf",
  intro:
    "I build web products with clean UI, solid backend structure, and practical database work.",
  summary:
    "I am currently working at Quintal ID and previously contributed to work for Ciputra Group and KPN CORP. This portfolio now reflects the work I want to represent clearly.",
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
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const experienceItems = [
  {
    company: "Quintal ID",
    role: "Current",
    period: "Present",
    summary:
      "Building product-facing work with focus on frontend implementation, iteration speed, and cleaner delivery quality.",
    highlights: [
      "Shipping work for live product needs.",
      "Balancing UI quality with maintainable code.",
      "Improving clarity, interaction, and delivery speed.",
    ],
    accent: "current",
    logo: quintalLogo,
  },
  {
    company: "Ciputra Group",
    role: "Past",
    period: "Previous",
    summary:
      "Contributed to business-facing work in a structured enterprise environment with stronger delivery expectations.",
    highlights: [
      "Worked within real business and stakeholder constraints.",
      "Focused on production-oriented output.",
      "Improved reliability and communication.",
    ],
    accent: "past",
    logo: ciputraLogo,
  },
  {
    company: "KPN CORP",
    role: "Earlier",
    period: "Earlier",
    summary:
      "Built internal web applications and strengthened full-stack execution across frontend, backend, and database work.",
    highlights: [
      "Worked with Laravel, JavaScript, and SQL.",
      "Handled full-stack implementation needs.",
      "Gained practical experience from internal company tools.",
    ],
    accent: "base",
    logo: kpnLogo,
  },
];

export const certificationItems = [
  {
    title: "Blockchain Developer Bootcamp",
    issuer: "Pelita Bangsa Academy",
    issued: "Jan 2026",
    description:
      "Program topics: blockchain fundamentals; Solidity from basics to advanced; smart contract testing and security; gas optimization and Yul; DeFi, NFTs, and DAOs; and frontend integration and DeFi engineering.",
    logo: pbaLogo,
    href: "https://www.linkedin.com/in/klvnlie08/overlay/Position/2725851088/treasury/?profileId=ACoAADv7WQ8BCgXv7xN55LXKmAgu7W68KHAF9Sw",
  },
  {
    title: "Intuit Design for Delight Innovator",
    issuer: "Certiport",
    issued: "September 2023",
    description: "User-centered design and innovation thinking.",
    logo: intuitLogo,
    href: "https://www.certiport.com/portal/pages/credentialverification.aspx",
  },
  {
    title: "Adobe Certified Associate",
    issuer: "Adobe",
    issued: "October 2023",
    description: "Graphic design and illustration using Adobe Illustrator.",
    logo: adobeLogo,
    href: "https://www.certiport.com/portal/pages/credentialverification.aspx",
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    issued: "March 2024",
    description: "Core C# fundamentals and object-oriented programming.",
    logo: codeCampLogo,
    href: "https://freecodecamp.org/certification/Kleponaeru/foundational-c-sharp-with-microsoft",
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    description: "UI implementation, responsive layout, and visual structure.",
    items: [
      { name: "React", level: "Advanced", icon: reactLogo },
      { name: "JavaScript", level: "Advanced", icon: jsLogo },
      { name: "HTML", level: "Advanced", icon: htmlLogo },
      { name: "CSS", level: "Advanced", icon: cssLogo },
      { name: "Bootstrap", level: "Advanced", icon: bootstrapLogo },
      { name: "Figma", level: "Advanced", icon: figmaLogo },
    ],
  },
  {
    name: "Backend",
    description: "Application logic, APIs, and server-side implementation.",
    items: [
      { name: "Laravel", level: "Advanced", icon: laravelLogo },
      { name: "Node.js", level: "Intermediate", icon: nodeLogo },
      { name: "PHP", level: "Advanced", icon: phpLogo },
      { name: "Python", level: "Intermediate", icon: pythonLogo },
      { name: "Django", level: "Advanced", icon: djangoLogo },
      { name: "Java", level: "Intermediate", icon: javaLogo },
    ],
  },
  {
    name: "Data",
    description: "Database work, tooling, and structured data handling.",
    items: [
      { name: "MySQL", level: "Advanced", icon: mySqlLogo },
      { name: "Git", level: "Advanced", icon: gitLogo },
      { name: "Navicat", level: "Intermediate", icon: navicatLogo },
      { name: "Database Design", level: "Advanced", icon: dbDesignIcon },
    ],
  },
];

export const projectItems = [
  {
    title: "Ponflix",
    description:
      "An anime and manga platform for streaming anime and reading manga, manhwa, and manhua.",
    image: cardWeb,
    tags: ["Anime", "Manga", "Streaming"],
    href: "https://ponflix.vercel.app/",
  },
  {
    title: "PonCoins - Coin & Portfolio Tracker",
    description:
      "A crypto portfolio tracking dashboard inspired by CoinMarketCap.",
    image: cardEngineering,
    tags: ["Crypto", "Portfolio Tracker", "Dashboard"],
    href: "https://poncoins.vercel.app/dashboard",
  },
  {
    title: "Quintal Internal App",
    description:
      "Active internal application development at Quintal, built with Django.",
    image: cardDesign,
    tags: ["Django", "Internal App"],
    status: "Active",
    note: "Internal development project",
  },
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
