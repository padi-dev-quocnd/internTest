import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import { en, ja } from "./languages";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(intervalPlural)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ja: {
        translation: ja,
      },
    },
    lng: process.env.REACT_APP_LOCALE,
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
