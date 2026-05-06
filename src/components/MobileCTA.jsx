import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Sticky mobile CTA — hidden until ~40% of hero has scrolled out of view.
// Pass a ref to the hero section, or it auto-discovers via .hero selector.
//
// Usage:
//   const heroRef = useRef(null);
//   <Hero ref={heroRef} ... />
//   <MobileCTA business={business} heroRef={heroRef} />
export default function MobileCTA({ business, heroRef }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const hero = heroRef && heroRef.current ? heroRef.current : document.querySelector('.hero');
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setVisible(heroBottom < window.innerHeight * 0.4);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [heroRef]);

  return (
    <div
      className={`mobile-cta${visible ? ' is-visible' : ''}`}
      role="region"
      aria-label="Quick call"
      aria-hidden={visible ? 'false' : 'true'}
    >
      <div className="mobile-cta__label">
        <small>{t('common.openNow')} · {t('common.until')} 20:00</small>
        <b>{t('common.phoneOrderLabel')}</b>
      </div>
      <a href={`tel:${business.phoneTel}`}>{t('common.call')} →</a>
    </div>
  );
}
