import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingEn from "./en/landing.json";
import landingKa from "./ka/landing.json";
import FAQka from "./ka/FAQ.json";
import FAQen from "./en/FAQ.json";
import partnersKa from "./ka/partners.json";
import partnersEn from "./en/partners.json";
import plansEn from "./en/plans.json";
import plansKa from "./ka/plans.json";
import headerKa from "./ka/header.json";
import headerEn from "./en/header.json";
import footerEn from "./en/footer.json";
import footerKa from "./ka/footer.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ka: {
        translation: {
          "header-translation": headerKa,
          "landing-translation": landingKa,
          "FAQ-translations": FAQka,
          "Partners-translations": partnersKa,
          "plans-translations": plansKa,
          "footer-translations": footerKa,
        },
      },
      en: {
        translation: {
          "header-translation": headerEn,
          "landing-translation": landingEn,
          "FAQ-translations": FAQen,
          "Partners-translations": partnersEn,
          "plans-translations": plansEn,
          "footer-translations": footerEn,
        },
      },
    },
    lng: "ka",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
