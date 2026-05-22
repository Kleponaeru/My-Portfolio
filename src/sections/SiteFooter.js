import { footerText, siteMeta } from "../data/portfolio";
import { SocialLinks } from "../components/common/SocialLinks";

export const SiteFooter = () => (
  <footer className="site-footer">
    <div className="section-shell site-footer-inner">
      <div>
        <p className="site-footer-name">{siteMeta.name}</p>
        <p>{footerText}</p>
      </div>
      <SocialLinks links={siteMeta.socialLinks} />
    </div>
  </footer>
);
