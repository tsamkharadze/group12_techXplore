import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingEn from "./en/landing.json";
import landingKa from "./ka/landing.json";
import FAQka from "./ka/FAQ.json";
import FAQen from "./en/FAQ.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ka: {
        translation: {
          "landing-translation": landingKa,
          "FAQ-translations": FAQka,
        },
      },
      en: {
        translation: {
          "landing-translation": landingEn,
          "FAQ-translations": FAQen,
        },
      },
    },
    lng: "ka",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
