import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for individuals and small teams getting started with AI productivity.",
    features: [
      "Up to 5 team members",
      "10 AI-powered automations",
      "Basic analytics",
      "Email support",
      "1GB storage"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per user/month",
    description: "Advanced features for growing teams that need more power and flexibility.",
    features: [
      "Up to 50 team members",
      "Unlimited automations",
      "Advanced analytics & insights",
      "Priority support",
      "50GB storage",
      "Custom integrations",
      "Team collaboration tools"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations with custom requirements.",
    features: [
      "Unlimited team members",
      "Advanced security & compliance",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited storage",
      "Custom AI model training",
      "On-premise deployment",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent
            <span className="block gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border transition-smooth hover-lift ${
                plan.popular 
                  ? 'border-primary shadow-primary glass' 
                  : 'border-border shadow-card bg-card'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full gradient-primary text-white text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period !== "pricing" && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full" 
                variant={plan.popular ? "hero" : "default"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">Can I switch plans anytime?</h4>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">Is there a free trial?</h4>
              <p className="text-muted-foreground">All paid plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
              <p className="text-muted-foreground">We accept all major credit cards, PayPal, and offer annual billing discounts.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">Do you offer refunds?</h4>
              <p className="text-muted-foreground">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}