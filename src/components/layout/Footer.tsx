
import { cn } from "@/lib/utils";
import { MapPin, Globe, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-primary">
                RUTA
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                India's First Truly Accessible Travel App
              </p>
            </div>
            
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="h-10 w-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={`Visit our ${social} page`}
                >
                  <span className="sr-only">{social}</span>
                  {/* Icon placeholders */}
                  <div className="h-5 w-5 bg-foreground/30 rounded-full" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Features
            </h3>
            <ul className="space-y-3">
              {[
                "Smart Travel Planning", 
                "Multiple Travel Modes", 
                "Live Tracking", 
                "Budget Recommendations", 
                "Secure Booking"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Accessibility
            </h3>
            <ul className="space-y-3">
              {[
                "For Blind Travelers", 
                "For Deaf Travelers", 
                "For Mute Travelers", 
                "Crowdsourced Data", 
                "AI Travel Assistance"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                "About Us", 
                "Contact", 
                "Careers", 
                "Press", 
                "Privacy Policy", 
                "Terms of Service"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} RUTA. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>in India</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <Eye className="h-4 w-4" />
              <span>Accessibility</span>
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <MapPin className="h-4 w-4" />
              <span>Sitemap</span>
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>Languages</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
