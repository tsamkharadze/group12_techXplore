import { FeatureCard } from "@/components/feature-card";
import { Brain, Car, FileCheck, Leaf, Link, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  console.log(t("landing-translation.feature_1_title"));
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("landing-translation.features")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Car}
            title={t("landing-translation.feature_1_title")}
            description={t("landing-translation.feature_1_desc")}
          />
          <FeatureCard
            icon={Brain}
            title={t("landing-translation.feature_2_title")}
            description={t("landing-translation.feature_2_desc")}
          />
          <FeatureCard
            icon={Trophy}
            title={t("landing-translation.feature_3_title")}
            description={t("landing-translation.feature_3_desc")}
          />
          <FeatureCard
            icon={FileCheck}
            title={t("landing-translation.feature_4_title")}
            description={t("landing-translation.feature_4_desc")}
          />
          <FeatureCard
            icon={Link}
            title={t("landing-translation.feature_5_title")}
            description={t("landing-translation.feature_5_desc")}
          />
          <FeatureCard
            icon={Leaf}
            title={t("landing-translation.feature_6_title")}
            description={t("landing-translation.feature_6_desc")}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
