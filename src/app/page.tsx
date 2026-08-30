import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import LearningPaths from "@/components/LearningPaths";
import FeaturesPillars from "@/components/FeaturesPillars";
import AchievementBanner from "@/components/AchievementBanner";
import CourseCatalog from "@/components/CourseCatalog";
import LearningModes from "@/components/LearningModes";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <LearningPaths />
      <StatsSection />
      <FeaturesPillars />
      <AchievementBanner />
      <CourseCatalog />
      <LearningModes />
      <ConsultationCTA />
    </div>
  );
}
