import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingEn from "./en/landing.json";
import landingKa from "./ka/landing.json";
import FAQka from "./ka/FAQ.json";
import FAQen from "./en/FAQ.json";
import partnersKa from "./ka/partners.json";
import partnersEn from "./en/partners.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ka: {
        translation: {
          "landing-translation": landingKa,
          "FAQ-translations": FAQka,
          "Partners-translations": partnersKa,
        },
      },
      en: {
        translation: {
          "landing-translation": landingEn,
          "FAQ-translations": FAQen,
          "Partners-translations": partnersEn,
        },
      },
    },
    lng: "ka",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
