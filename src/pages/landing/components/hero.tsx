import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/insurance2.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-transparent" />
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-left text-[#661BAD]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              {t("landing-translation.hero_title")}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#3d2454] mb-6 md:mb-8">
              {t("landing-translation.hero_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="Get it on Google Play"
                  className="h-[40px] sm:h-[50px] md:h-[60px]"
                />
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-[40px] sm:h-[50px] md:h-[60px]"
                />
              </a>
            </div>
            <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mt-12 md:mt-16 animate-bounce text-[#661BAD] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
