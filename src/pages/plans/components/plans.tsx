import { Car, Gauge, Shield, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Plans = () => {
  const { t } = useTranslation();
  const plans = [
    {
      name: t("plans-translations.plans.basic.name"),
      price: "0.10",
      description: t("plans-translations.plans.basic.description"),
      features: t("plans-translations.plans.basic.features", {
        returnObjects: true,
      }) as string[],
      icon: Car,
    },
    {
      name: t("plans-translations.plans.premium.name"),
      price: "0.15",
      description: t("plans-translations.plans.premium.description"),
      features: t("plans-translations.plans.premium.features", {
        returnObjects: true,
      }) as string[],
      icon: Shield,
      popular: true,
    },
    {
      name: t("plans-translations.plans.smart.name"),
      price: "0.12",
      description: t("plans-translations.plans.smart.description"),
      features: t("plans-translations.plans.smart.features", {
        returnObjects: true,
      }) as string[],
      icon: Gauge,
    },
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("plans-translations.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("plans-translations.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular
                    ? "border-blue-500 shadow-lg transform hover:-translate-y-1"
                    : "hover:shadow-md"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-blue-500" />
                    <div className="text-right">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-gray-500">/km</span>
                    </div>
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {t("plans-translations.get_started")}{" "}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            {t("plans-translations.standard_features")}{" "}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />{" "}
              {t("plans-translations.features_list.0")}
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />{" "}
              {t("plans-translations.features_list.1")}
            </span>
            <span className="flex items-center gap-2">
              <Car className="w-4 h-4" />{" "}
              {t("plans-translations.features_list.2")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
