export const SocialLinks = ({ links, className = "" }) => (
  <div className={`social-links ${className}`.trim()}>
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noreferrer"
        aria-label={link.label}
      >
        <img src={link.icon} alt="" />
      </a>
    ))}
  </div>
);
