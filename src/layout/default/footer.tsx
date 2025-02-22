import { Car, Mail, MapPin, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Trial Offer Banner */}
        <div className="mb-12 p-6 bg-indigo-900/30 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-indigo-600 p-3 rounded-full">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-300">
                  {t("footer-translations.trialTitle")}
                </h3>
                <p className="text-gray-400">
                  {t("footer-translations.trialDescription")}
                </p>
              </div>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
              {t("footer-translations.trialButton")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-white">
                {t("footer-translations.companyName")}
              </h3>
            </div>
            <p className="text-gray-400">
              {t("footer-translations.companyDescription")}
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">
              {t("footer-translations.newsletterTitle")}
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder={t("footer-translations.newsletterPlaceholder")}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  {t("footer-translations.newsletterButton")}
                </button>
              </div>
              <p className="text-sm text-gray-400">
                {t("footer-translations.newsletterDescription")}
              </p>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              {t("footer-translations.contactTitle")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{t("footer-translations.contactAddress")}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>{t("footer-translations.contactEmail")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-indigo-400"
              >
                {t("footer-translations.privacyPolicy")}
              </a>
              <a href="/terms" className="text-gray-400 hover:text-indigo-400">
                {t("footer-translations.termsService")}
              </a>
              <a href="/faq" className="text-gray-400 hover:text-indigo-400">
                {t("footer-translations.faq")}
              </a>
            </div>
            <p className="text-gray-400">
              {t("footer-translations.copyright", {
                year: new Date().getFullYear(),
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
