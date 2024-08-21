import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./En/en.json";
import trTranslation from "./TR/tr.json";

i18n.use(initReactI18next).init({
  lng: "tr",
  fallbackLng: "tr",
  resources: {
    en: {
      translation: enTranslation,
    },
    tr: {
      translation: trTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
