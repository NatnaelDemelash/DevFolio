import ExperienceSection from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 px-6 max-w-6xl mx-auto">
        <HeroSection />
        <ExperienceSection />
      </div>
    </div>
  );
}
