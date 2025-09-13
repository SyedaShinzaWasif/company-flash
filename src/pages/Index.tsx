import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = "Nexus AI - Transform Your Workflow with AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-powered productivity platform that revolutionizes how teams collaborate. Automate tasks, generate insights, and boost productivity by 10x.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
