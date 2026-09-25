export const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    <div className="section-heading-topline">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <span className="section-heading-rule" aria-hidden="true" />
    </div>
    <h2>{title}</h2>
    {description ? <p className="section-description">{description}</p> : null}
  </div>
);
