import { useTranslation } from 'react-i18next';

const SOCIAL_KEYS = ['instagram', 'facebook', 'tiktok', 'newsletter'];

export default function Footer({ business, footer }) {
  const { t } = useTranslation();
  const socialUrls = {
    instagram: business.instagramUrl,
    facebook: business.facebookUrl,
    tiktok: business.tiktokUrl,
    newsletter: business.newsletterUrl,
  };
  const activeSocialKeys = SOCIAL_KEYS.filter((k) => socialUrls[k] && socialUrls[k] !== '#');
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div className="foot__brand">
            <a href="#" className="wordmark">
              <span className="wordmark__mark">✦</span>
              {business.name}
              {business.year && <span className="wordmark__sub">Est. {business.year}</span>}
            </a>
            <p className="foot__about">{t('footer.aboutLine')}</p>
          </div>
          <div>
            <h4>{t('footer.visitLabel')}</h4>
            <ul>
              <li>{business.address.street}</li>
              <li>{business.address.postalCode} {business.address.city}</li>
              <li>
                <a href={`tel:${business.phoneTel}`}>
                  {business.phoneDisplayDe || business.phoneDisplay || business.phoneTel}
                </a>
              </li>
              {business.email && (
                <li>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4>{t('footer.menuLabel')}</h4>
            <ul>
              {footer.menuLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href}>
                    {t(`footerMenu.${link.key}`, { defaultValue: link.label })}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {activeSocialKeys.length > 0 && (
            <div>
              <h4>{t('footer.followLabel')}</h4>
              <ul>
                {activeSocialKeys.map((k) => {
                  const labelKey = `${k}Label`;
                  const fallback = footer[labelKey] || k;
                  return (
                    <li key={k}>
                      <a href={socialUrls[k]}>
                        {t(`footer.${labelKey}`, { defaultValue: fallback })}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="foot__bottom">
          <span>{t('footer.copyright')}</span>
          <span className="concept-tag">{t('footer.conceptTag')}</span>
        </div>
      </div>
    </footer>
  );
}
