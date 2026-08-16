import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import deTranslation from './locales/de.json';

const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  },
  de: {
    translation: deTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // default language is French
    fallbackLng: 'en', // fallback to English if string is missing
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
