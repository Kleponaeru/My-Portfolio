import { footerText, siteMeta } from "../data/portfolio";
import { SocialLinks } from "../components/common/SocialLinks";
import { ArrowUpRight } from "lucide-react";

export const SiteFooter = () => (
  <footer className="site-footer">
    <div className="section-shell site-footer-inner">
      <div>
        <p className="site-footer-name">{siteMeta.name} <span>— built with intent</span></p>
        <p>{footerText}</p>
      </div>
      <div className="site-footer-actions">
        <a href="#home">Back to top <ArrowUpRight size={15} /></a>
        <SocialLinks links={siteMeta.socialLinks} />
      </div>
    </div>
  </footer>
);
