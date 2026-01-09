import HeroSection from "@/components/home/HeroSection";
import SocialLinks from "@/components/home/SocialLinks";
import MenuGrid from "@/components/home/MenuGrid";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="animate-fade-in pb-8">
      <HeroSection />
      
      <div className="space-y-6 py-6">
        <SocialLinks />
        
        <StatsSection />
        
        {/* Section Title */}
        <div className="px-4">
          <h2 className="text-lg font-bold text-foreground">আমাদের সেবা</h2>
        </div>
        
        <MenuGrid />
      </div>
    </div>
  );
};

export default Index;