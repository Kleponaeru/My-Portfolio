export const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
    <h2>{title}</h2>
    {description ? <p className="section-description">{description}</p> : null}
  </div>
);
