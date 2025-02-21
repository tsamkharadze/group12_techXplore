import Hero from "../components/hero";
import Features from "../components/features";
import { Leaderboard } from "@/pages/landing/components/leaderboard";
import FAQSection from "../components/faq";
import PartnersSection from "../components/partners";

const LandingView = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Leaderboard Section */}
      <PartnersSection />
      <Leaderboard />

      <FAQSection />
    </>
  );
};

export default LandingView;
