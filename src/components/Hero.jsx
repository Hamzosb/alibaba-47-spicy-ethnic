import { useTranslation } from 'react-i18next';
import PatternBand from './PatternBand';

export default function Hero({ business, hero }) {
  const { t } = useTranslation();
  return (
    <section className="hero" aria-label="Hero">
      <div className="wrap hero__inner">
        <div className="hero__text">
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1>
            {t('hero.headlineBefore')}
            <em>{t('hero.headlineItalic')}</em>
            {t('hero.headlineAfter')}
          </h1>
          <p className="hero__sub">{t('hero.subhead')}</p>
          <div className="hero__cta">
            <a href={hero.ctaPrimaryHref} className="btn btn--primary">
              {t('hero.ctaPrimary')}
            </a>
            <a href={hero.ctaSecondaryHref} className="btn btn--ghost">
              {t('hero.ctaSecondary')}
            </a>
          </div>
          <div className="hero__trust">
            <span>{t('hero.trustNeighborhood')}</span>
            <span>{t('hero.trustOpenDays')}</span>
            <span>{t('hero.trustVeg')}</span>
          </div>
        </div>
        <div className="hero__media">
          <img
            className="hero__photo"
            src={business.heroImageUrl}
            alt={t('hero.imageAlt', { defaultValue: business.heroImageAlt || '' })}
          />
          <span className="hero__caption">{t('hero.caption')}</span>
        </div>
      </div>
      <div className="wrap hero__divider">
        <PatternBand />
      </div>
    </section>
  );
}
