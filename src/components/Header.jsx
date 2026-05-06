import { useTranslation } from 'react-i18next';

export default function Header({ business, header }) {
  const { t } = useTranslation();
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a href="#" className="wordmark">
          <span className="wordmark__mark">✦</span>
          {business.name}
        </a>
        <nav className="nav">
          {header.navItems.map((n) => (
            <a key={n.key} href={n.href}>
              {t(`headerNav.${n.key}`, { defaultValue: n.label })}
            </a>
          ))}
          <a href={header.ctaHref} className="btn btn--primary" style={{ height: 40 }}>
            {t('header.ctaLabel', { defaultValue: header.ctaLabel })}
          </a>
        </nav>
      </div>
    </header>
  );
}
