
import { cn } from "@/lib/utils";
import { Eye, MapPin, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <img 
                  src="/ruta-logo.svg" 
                  alt="RUTA Logo" 
                  className="h-10 w-auto mr-2" 
                />
                <span className="text-2xl font-display font-bold text-primary">RUTA</span>
              </Link>
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
                { label: "Smart Travel Planning", path: "/plan-journey" }, 
                { label: "Multiple Travel Modes", path: "/" }, 
                { label: "Live Tracking", path: "/" }, 
                { label: "Budget Recommendations", path: "/plan-journey" }, 
                { label: "Secure Booking", path: "/" }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
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
                { label: "For Blind Travelers", path: "/accessibility" }, 
                { label: "For Deaf Travelers", path: "/accessibility" }, 
                { label: "For Mute Travelers", path: "/accessibility" }, 
                { label: "Crowdsourced Data", path: "/accessibility" }, 
                { label: "AI Travel Assistance", path: "/plan-journey" }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
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
                { label: "About Us", path: "/about" }, 
                { label: "Contact", path: "/about" }, 
                { label: "Careers", path: "/about" }, 
                { label: "Press", path: "/about" }, 
                { label: "Privacy Policy", path: "/about" }, 
                { label: "Terms of Service", path: "/about" }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
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
            <Link 
              to="/accessibility" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <Eye className="h-4 w-4" />
              <span>Accessibility</span>
            </Link>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <MapPin className="h-4 w-4" />
              <span>Sitemap</span>
            </Link>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>Languages</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
