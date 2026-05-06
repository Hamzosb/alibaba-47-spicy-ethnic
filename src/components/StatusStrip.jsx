import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function StatusStrip() {
  const { t } = useTranslation();
  return (
    <div className="status-strip">
      <div className="wrap status-strip__inner">
        <span className="status-pill">
          <span className="status-dot" />
          {t('common.openNow')} · {t('common.until')} {t('statusStrip.openTime')}
        </span>
        <span className="status-meta">
          <span dangerouslySetInnerHTML={{ __html: t('statusStrip.services') }} />
          <LanguageSwitcher />
        </span>
      </div>
    </div>
  );
}
