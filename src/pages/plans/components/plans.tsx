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

const plans = [
  {
    name: "Basic Coverage",
    price: "0.10",
    description: "Perfect for occasional drivers",
    features: [
      "Pay only for kilometers driven",
      "Basic liability coverage",
      "24/7 roadside assistance",
      "Mobile app tracking",
    ],
    icon: Car,
  },
  {
    name: "Premium Protection",
    price: "0.15",
    description: "Comprehensive coverage for peace of mind",
    features: [
      "All Basic Coverage features",
      "Comprehensive insurance",
      "Theft protection",
      "Natural disaster coverage",
    ],
    icon: Shield,
    popular: true,
  },
  {
    name: "Smart Driver",
    price: "0.12",
    description: "Rewards safe driving habits",
    features: [
      "Usage-based pricing",
      "Safe driver rewards",
      "Advanced trip analytics",
      "Family driver tracking",
    ],
    icon: Gauge,
  },
];

const Plans = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Coverage Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pay only for the kilometers you drive. Our flexible plans adapt to
            your lifestyle, ensuring you never overpay for insurance again.
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
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include our standard features:
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> Secure GPS Tracking
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> 24/7 Customer Support
            </span>
            <span className="flex items-center gap-2">
              <Car className="w-4 h-4" /> Instant Policy Changes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
