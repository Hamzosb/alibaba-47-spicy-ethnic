import { useTranslation } from 'react-i18next';

export default function FAQ({ faq }) {
  const { t } = useTranslation();
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">{t('faq.eyebrow')}</span>
          <h2 className="section-title">
            {t('faq.titleBefore')}
            <em>{t('faq.titleItalic')}</em>
          </h2>
        </div>
        <div className="faq__list">
          {faq.items.map((item) => {
            const q = t(`faqItems.${item.id}.q`, { defaultValue: item.q });
            const a = t(`faqItems.${item.id}.a`, { defaultValue: item.a });
            return (
              <details key={item.id} className="q" {...(item.openByDefault ? { open: true } : {})}>
                <summary>
                  <span>{q}</span>
                  <span className="toggle" aria-hidden="true">+</span>
                </summary>
                <div className="a">{a}</div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
