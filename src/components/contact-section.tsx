import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@nexusai.com",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    action: "Call Now"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with support",
    contact: "Available 24/7",
    action: "Start Chat"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Market Street, Suite 400",
    country: "United States"
  },
  {
    city: "London",
    address: "45 Shoreditch High Street",
    country: "United Kingdom"
  },
  {
    city: "Singapore",
    address: "1 Marina Bay Drive",
    country: "Singapore"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in
            <span className="block gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="transition-smooth focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input 
                      placeholder="Your Company" 
                      className="transition-smooth focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project and how we can help..." 
                      rows={5}
                      className="transition-smooth focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Other ways to reach us</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="shadow-card border-border hover-lift transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg gradient-primary">
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{method.title}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                          <p className="text-primary font-medium">{method.contact}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our offices</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="shadow-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-secondary">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{office.city}</h4>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                          <p className="text-sm text-muted-foreground">{office.country}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="shadow-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Support Hours</h4>
                </div>
                <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p className="text-muted-foreground mb-4">Weekend: Limited support available</p>
                
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Enterprise customers get 24/7 priority support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Quick Answers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">How quickly will you respond?</h4>
              <p className="text-muted-foreground">We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Do you offer demos?</h4>
              <p className="text-muted-foreground">Yes! We offer personalized demos for teams of 10+ users. Book one through our contact form.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Can I schedule a call?</h4>
              <p className="text-muted-foreground">Absolutely. Mention your preferred time in the message and we'll coordinate a call.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Do you offer custom integrations?</h4>
              <p className="text-muted-foreground">Yes, our Enterprise plan includes custom integrations and API access.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}