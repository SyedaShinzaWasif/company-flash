import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-ai-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium">
            <span className="mr-2">🚀</span>
            AI-Powered Productivity Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your
            <span className="block gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-glow">
              Workflow with AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nexus AI revolutionizes how teams collaborate and work. Automate tasks, 
            generate insights, and boost productivity by 10x with our intelligent platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="px-8 py-4 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-white/60">
            <p className="text-sm mb-4">Trusted by 50,000+ teams worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-semibold">Microsoft</div>
              <div className="text-lg font-semibold">Google</div>
              <div className="text-lg font-semibold">Slack</div>
              <div className="text-lg font-semibold">Notion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}