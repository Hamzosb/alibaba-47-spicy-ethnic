import { useTranslation } from 'react-i18next';

function Stars({ count }) {
  const filled = Math.floor(count);
  const half = count - filled >= 0.5;
  const total = 5;
  const off = total - filled - (half ? 1 : 0);
  return (
    <span className="review__stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(filled)}
      {half && <span className="star--half">★</span>}
      {Array.from({ length: off }).map((_, i) => (
        <span key={i} className="star--off">★</span>
      ))}
    </span>
  );
}

export default function Reviews({ business, reviews }) {
  const { t } = useTranslation();
  if (!reviews?.quotes?.length) return null;
  return (
    <section className="reviews" aria-label="What people say">
      <div className="wrap">
        <div className="reviews__head">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="section-eyebrow">{t('reviews.eyebrow')}</span>
            <h2 className="section-title">
              {t('reviews.titleBefore')}
              <em>{t('reviews.titleItalic')}</em>
            </h2>
          </div>
          {(business.rating || business.reviewCount) ? (
            <span className="reviews__summary">
              <Stars count={Number(business.rating) || 0} />
              {business.rating ? <b>{business.rating}</b> : null}
              {business.reviewCount ? (
                <span> · {business.reviewCount} {t('reviews.summarySuffix', { defaultValue: 'reviews' })}</span>
              ) : null}
            </span>
          ) : null}
        </div>

        <div className="reviews__grid">
          {reviews.quotes.map((q) => {
            const text = t(`reviewsQuotes.${q.id}.text`, { defaultValue: q.text });
            const attribution = t(`reviewsQuotes.${q.id}.attribution`, { defaultValue: q.attribution });
            return (
              <article key={q.id} className="review">
                {q.stars ? <Stars count={q.stars} /> : null}
                <p className="review__quote">“{text}”</p>
                <div className="review__author">
                  — <b>{attribution}</b>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
