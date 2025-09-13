import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">Nexus AI</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Transforming productivity with AI-powered solutions. 
              Join thousands of teams already revolutionizing their workflow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">API</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Nexus AI. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Built with ❤️ for the future of work
          </p>
        </div>
      </div>
    </footer>
  );
}