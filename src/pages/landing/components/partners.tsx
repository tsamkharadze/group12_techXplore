import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const partners = [
  {
    id: 1,
    name: "Tesla",
    offer: "10% off Pay-Per-Mile insurance for Tesla owners",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    id: 2,
    name: "Bolt",
    offer: "Special insurance rates for Bolt drivers",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bolt_logo.png/800px-Bolt_logo.png",
  },
  {
    id: 3,
    name: "Tegeta Motors",
    offer: "Discounts on car services for insured users",
    image: "https://www.tegetamotors.ge/Content/img/svg/tegeta-motors.svg",
  },
  {
    id: 4,
    name: "PayPal",
    offer: "Get cashback when paying with PayPal",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    id: 5,
    name: "Toyota",
    offer: "Exclusive discounts on hybrid car insurance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_logo_%28Red%29.svg",
  },
  {
    id: 6,
    name: "Visa",
    offer: "Extra rewards when paying with Visa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/2880px-Visa_2021.svg.png",
  },
  {
    id: 7,
    name: "Amazon",
    offer: "Amazon Prime members get lower premiums",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 8,
    name: "BMW",
    offer: "Save on premium car insurance with BMW",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
];

const PartnersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20">
      <div className="w-full max-w-7xl mx-auto p-6bg-gradient-to-r from-[#0197C4] to-[#A7C9E9] shadow-lg rounded-xl mt-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {t("Partners-translations.title")}
        </h2>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {partners.map((partner) => (
              <CarouselItem
                key={partner.id}
                className="pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="h-full flex flex-col justify-between bg-gray-100 p-6 rounded-lg shadow-md text-center mx-2">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold">{partner.name}</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    {t(`Partners-translations.offer_${partner.id}`)}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default PartnersSection;
