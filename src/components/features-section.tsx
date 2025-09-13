import { Brain, Zap, Shield, Users, BarChart, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Automation",
    description: "AI-powered workflows that learn from your patterns and automate repetitive tasks, saving hours every day."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data and generate insights in seconds, not hours. Our optimized AI engine delivers instant results."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards. Your data stays protected."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless integration with your existing tools. Share insights and collaborate in real-time."
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Deep insights and predictive analytics to help you make data-driven decisions with confidence."
  },
  {
    icon: Rocket,
    title: "Scalable Platform",
    description: "From startups to enterprises, our platform scales with your needs. No limits on growth."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to supercharge your productivity and transform how your team works together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl glass shadow-card hover-lift border border-white/10"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl gradient-primary">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20">
            <span className="text-sm text-muted-foreground mr-2">Ready to get started?</span>
            <a 
              href="#contact" 
              className="text-primary font-semibold hover:text-primary-glow transition-smooth"
            >
              Try it free →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}