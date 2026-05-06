import { useTranslation } from 'react-i18next';

// Heat scale — 3 dots in turmeric. heat (0-3) = number of filled dots.
// extraHot=true makes the LAST filled dot saffron-red instead of turmeric.
// heat 0 = 3 off
// heat 1 = 1 turmeric + 2 off
// heat 2 = 2 turmeric + 1 off
// heat 3 = 3 turmeric (or 2 turmeric + 1 saffron when extraHot)
export default function Spice({ heat, extraHot = false }) {
  const { t } = useTranslation();
  if (typeof heat !== 'number') return null;

  const dotClass = (i) => {
    if (i >= heat) return 'spice__dot spice__dot--off';
    if (extraHot && i === heat - 1) return 'spice__dot spice__dot--hot';
    return 'spice__dot';
  };

  return (
    <span className="spice">
      <span className="spice__label">{t('dishes.heatLabel', { defaultValue: 'Heat' })}</span>
      {[0, 1, 2].map((i) => (
        <span key={i} className={dotClass(i)} aria-hidden="true" />
      ))}
    </span>
  );
}
