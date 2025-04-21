
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedHackers } from "@/components/home/featured-hackers";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTASection } from "@/components/home/cta-section";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedHackers />
        <HowItWorks />
        <FeaturedProjects />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
