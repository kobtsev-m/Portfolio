import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationDE from './de/translation.json';
import translationES from './es/translation.json';
import translationFR from './fr/translation.json';
import translationIT from './it/translation.json';
import translationPT from './pt/translation.json';
import translationZH from './zh/translation.json';
import translationJA from './ja/translation.json';
import translationKO from './ko/translation.json';
import translationRU from './ru/translation.json';

// Order here is the order in the language menu.
export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'ru', label: 'Русский' }
] as const;

const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
  es: { translation: translationES },
  fr: { translation: translationFR },
  it: { translation: translationIT },
  pt: { translation: translationPT },
  zh: { translation: translationZH },
  ja: { translation: translationJA },
  ko: { translation: translationKO },
  ru: { translation: translationRU }
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

/** Current language code without region, e.g. 'en' for 'en-US'. */
export const currentLanguage = (): string => {
  const code = (i18n.language || 'en').split('-')[0];
  return LANGUAGES.some((l) => l.code === code) ? code : 'en';
};

/** CV PDFs exist in Russian and English; every other language gets English. */
export const isRussian = (): boolean => currentLanguage() === 'ru';
