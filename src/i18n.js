import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        description: 'Actor description in English',
      },
    },
    uk: {
      translation: {
        description: 'Опис актора українською',
      },
    },
  },
  lng: 'uk', // Мова за замовчуванням
  fallbackLng: 'en', // Резервна мова
  interpolation: {
    escapeValue: false, // React вже захищає від XSS
  },
});

export default i18n;
