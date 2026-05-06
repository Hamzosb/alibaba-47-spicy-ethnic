import { useTranslation } from 'react-i18next';

const LANGS = ['de', 'fr', 'en'];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const active = (i18n.resolvedLanguage || i18n.language || 'de').slice(0, 2);

  return (
    <span className="lang" role="group" aria-label={t('common.languageSelectLabel')}>
      {LANGS.map((lng, idx) => (
        <span key={lng} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <a
            href={`?lng=${lng}`}
            onClick={(e) => {
              e.preventDefault();
              i18n.changeLanguage(lng);
            }}
            className={lng === active ? 'is-active' : undefined}
            aria-current={lng === active ? 'true' : undefined}
            lang={lng}
          >
            {lng.toUpperCase()}
          </a>
          {idx < LANGS.length - 1 && <span className="lang__sep">·</span>}
        </span>
      ))}
    </span>
  );
}
