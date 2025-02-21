import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className=" h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t("landing-translation.hero_title")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          {t("landing-translation.hero_subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              alt="Get it on Google Play"
              className="h-[60px]"
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
              className="h-[60px]"
            />
          </a>
        </div>
        <ArrowDown className="w-8 h-8 mx-auto mt-16 animate-bounce text-muted-foreground" />
      </div>
    </div>
  );
};

export default Hero;
