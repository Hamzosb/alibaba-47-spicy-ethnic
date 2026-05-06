import { useTranslation } from 'react-i18next';
import Spice from './Spice';
import PatternBand from './PatternBand';

function Dish({ item }) {
  const { t } = useTranslation();
  const name = t(`dishes.${item.id}.name`, { defaultValue: item.name });
  const subtitle = t(`dishes.${item.id}.subtitle`, { defaultValue: item.subtitle });
  const description = t(`dishes.${item.id}.description`, { defaultValue: item.description });
  const badgeText = item.badgeKey
    ? t(`dishes.badges.${item.badgeKey}`, { defaultValue: '' })
    : null;
  const isVegBadge = item.badgeKey === 'vegan' || item.badgeKey === 'vegetarian';

  return (
    <div className="dish">
      <div className="dish__photo">
        <img src={item.photoUrl} alt={item.photoAlt || ''} />
        {badgeText && (
          <span className={`dish__badge${isVegBadge ? ' dish__badge--veg' : ''}`}>
            {badgeText}
          </span>
        )}
      </div>
      <div className="dish__body">
        <div className="dish__top">
          <h4 className="dish__name">{name}</h4>
          <span className="dish__price">{item.price}</span>
        </div>
        <span className="dish__romanise">{subtitle}</span>
        <p className="dish__desc">{description}</p>
        <div className="dish__meta">
          <Spice heat={item.heat} extraHot={item.extraHot} />
        </div>
      </div>
    </div>
  );
}

function Category({ category }) {
  const { t } = useTranslation();
  const title = t(`menuCategories.${category.id}.title`, { defaultValue: category.title });
  const subtitle = t(`menuCategories.${category.id}.subtitle`, { defaultValue: category.subtitle });
  const intro = t(`menuCategories.${category.id}.intro`, { defaultValue: category.intro });
  const articleClass = `category${category.reverse ? ' category--reverse' : ''}`;

  return (
    <article className={articleClass}>
      <div className="category__media">
        <span className="category__tag">
          {category.tagNumber} · {title}
        </span>
        <img src={category.photoUrl} alt={category.photoAlt || ''} />
      </div>
      <div className="category__head">
        <span className="category__num">— Section {category.sectionNumber}</span>
        <h3 className="category__title">{title}</h3>
        <p className="category__romanise">{subtitle}</p>
        <div className="underline" />
        <p className="category__intro">{intro}</p>

        <div className="dishes">
          {category.items.map((item) => (
            <Dish key={item.id} item={item} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function MenuSection({ menu }) {
  const { t } = useTranslation();
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">{t('menu.eyebrow')}</span>
          <h2 className="section-title">
            {t('menu.titleBefore')}
            <em>{t('menu.titleItalic')}</em>
          </h2>
          <p className="section-intro">{t('menu.intro')}</p>
          <div className="notice">
            <span className="notice__label">{t('menu.sampleNoticeLabel')}</span>
            <span>{t('menu.sampleNoticeText')}</span>
          </div>
        </div>

        {menu.categories.map((category, idx) => (
          <div key={category.id}>
            <Category category={category} />
            {idx < menu.categories.length - 1 && <PatternBand />}
          </div>
        ))}
      </div>
    </section>
  );
}
