import Hero from "../components/hero";
import Features from "../components/features";
import { Leaderboard } from "@/pages/landing/components/leaderboard";
import FAQSection from "../components/faq";

const LandingView = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Leaderboard Section */}

      <Leaderboard />

      <FAQSection />
    </>
  );
};

export default LandingView;
