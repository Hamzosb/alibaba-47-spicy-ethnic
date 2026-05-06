import { useTranslation } from 'react-i18next';

const DAY_KEYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export default function HoursLocation({ business, hours }) {
  const { t } = useTranslation();
  const todayKey = DAY_KEYS[new Date().getDay()];

  return (
    <section className="info" id="hours">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">{t('hours.eyebrow')}</span>
          <h2 className="section-title">
            {t('hours.titleBefore')}
            <em>{t('hours.titleItalic')}</em>
          </h2>
        </div>
        <div className="info__grid">
          <div className="card">
            <div className="card__head">
              <h3 className="card__title">{t('hours.kitchenHoursTitle')}</h3>
              <div className="card__sub">{t('hours.kitchenHoursSub')}</div>
            </div>
            <ul className="hours">
              {(business.openingHoursDisplay || []).map((row) => (
                <li key={row.dayKey} className={row.dayKey === todayKey ? 'is-today' : undefined}>
                  <span className="hours__day">{t(`days.${row.dayKey}`)}</span>
                  <span className="hours__time">
                    {row.hours === 'Closed' ? t('common.closedShort') : row.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <iframe
              className="map"
              title={t('hours.mapTitle')}
              src={business.googleMapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="address">
              <div className="address__lines">
                <b>{business.name}</b><br />
                {business.address.street}<br />
                {business.address.postalCode} {business.address.city}
              </div>
              <a href={business.googleMapsUrl || business.googleMapsLink || '#'} className="btn btn--ghost">
                {t('hours.directions')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
