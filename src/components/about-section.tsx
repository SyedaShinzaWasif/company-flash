import { Users, Target, Award, Heart } from "lucide-react";

const stats = [
  { number: "50,000+", label: "Active Users" },
  { number: "10M+", label: "Tasks Automated" },
  { number: "99.9%", label: "Uptime" },
  { number: "150+", label: "Countries" }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "👩‍💼",
    bio: "Former VP of Product at Google. Stanford CS graduate with 15+ years in AI research."
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder", 
    image: "👨‍💻",
    bio: "Ex-Tesla lead engineer. MIT PhD in Machine Learning and distributed systems expert."
  },
  {
    name: "Dr. Elena Kozlov",
    role: "Head of AI Research",
    image: "👩‍🔬",
    bio: "Former DeepMind researcher. Published 50+ papers on neural networks and NLP."
  }
];

const values = [
  {
    icon: Users,
    title: "People First",
    description: "We believe technology should empower humans, not replace them. Our AI amplifies human creativity and potential."
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "We're constantly pushing the boundaries of what's possible with AI, delivering cutting-edge solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from product quality to customer support."
  },
  {
    icon: Heart,
    title: "Impact",
    description: "We measure success by the positive impact we have on our users' productivity and work satisfaction."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About
            <span className="block gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              Nexus AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're on a mission to revolutionize how teams work by making AI accessible, 
            practical, and transformative for businesses of all sizes.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h3>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2023 by a team of AI researchers and product leaders from Google, Tesla, and DeepMind, 
                Nexus AI was born from a simple observation: while AI technology was advancing rapidly, 
                most businesses struggled to harness its power effectively.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We saw teams drowning in repetitive tasks, valuable insights buried in data, and creativity 
                stifled by manual processes. So we set out to build an AI platform that could understand 
                how teams actually work and seamlessly integrate intelligence into their existing workflows.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Nexus AI powers productivity for over 50,000 users across 150 countries, from 
                fast-growing startups to Fortune 500 companies. But we're just getting started.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl gradient-primary mb-6 group-hover:shadow-glow transition-smooth">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full glass flex items-center justify-center text-4xl mb-4 group-hover:shadow-primary transition-smooth">
                    {member.image}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Us on This Journey</h3>
            <p className="text-muted-foreground mb-8">
              Ready to transform how your team works? Start your free trial today and experience 
              the future of AI-powered productivity.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20">
              <span className="text-sm text-muted-foreground mr-2">Ready to get started?</span>
              <a 
                href="#contact" 
                className="text-primary font-semibold hover:text-primary-glow transition-smooth"
              >
                Start free trial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}