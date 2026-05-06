import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import content from './data/content.json';
import fr from './i18n/fr.json';
import en from './i18n/en.json';

// Master rule §12 — content.json is the single source of truth for visible
// strings + facts in the DEFAULT locale (DE for Biel leads). The CMS edits
// content.json. FR/EN translations live in src/i18n/{fr,en}.json as partial
// overrides; i18next falls back to DE resources for any untranslated key.

function strip(obj) {
  if (Array.isArray(obj)) return obj.map(strip);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k.startsWith('_')) continue;
      out[k] = strip(v);
    }
    return out;
  }
  return obj;
}

const deResources = strip(content);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: deResources },
      fr: { translation: fr },
      en: { translation: en },
    },
    fallbackLng: 'de',
    supportedLngs: ['de', 'fr', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
  });

// Sync <html lang> with active language so screen readers + SEO get it right.
if (typeof document !== 'undefined') {
  const sync = (lng) => {
    document.documentElement.lang = (lng || 'de').slice(0, 2);
  };
  sync(i18n.resolvedLanguage || i18n.language);
  i18n.on('languageChanged', sync);
}

export default i18n;
