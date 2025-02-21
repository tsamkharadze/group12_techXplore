import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import {
  HelpCircle,
  Car,
  DollarSign,
  MapPin,
  CreditCard,
  Star,
} from "lucide-react";

const FAQSection = () => {
  const { t } = useTranslation();

  // Icon mapping for each question
  const icons = [HelpCircle, Car, DollarSign, MapPin, CreditCard, Star];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {t("FAQ-translations.title")}
      </h2>

      <Accordion type="single" collapsible>
        {[...Array(6)].map((_, index) => {
          const questionKey = `FAQ-translations.question_${index + 1}`;
          const answerKey = `FAQ-translations.answer_${index + 1}`;
          const Icon = icons[index];

          return (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-600">
                <Icon className="w-5 h-5 text-blue-500" />
                {t(questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-6 py-2">
                {t(answerKey)}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQSection;
