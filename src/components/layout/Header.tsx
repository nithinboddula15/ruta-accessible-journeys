
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, MapPin, Accessible, Menu, X } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-lg shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display font-bold text-primary">
            RUTA
          </a>
          
          <nav className="hidden md:flex ml-10 space-x-8">
            {["Home", "Plan Journey", "Accessibility", "About"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(`/${item.toLowerCase().replace(" ", "-")}`) 
                    ? "text-primary" 
                    : "text-foreground/80"
                )}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <CustomButton 
            variant="ghost" 
            size="sm"
            icon={<Search className="h-4 w-4" />}
          >
            Search
          </CustomButton>
          
          <CustomButton 
            variant="outline" 
            size="sm"
            icon={<Accessible className="h-4 w-4" />}
          >
            Accessibility
          </CustomButton>
          
          <CustomButton 
            variant="default"
            size="sm"
            icon={<MapPin className="h-4 w-4" />}
          >
            Start Journey
          </CustomButton>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-slide-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Home", "Plan Journey", "Accessibility", "About"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={cn(
                  "py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive(`/${item.toLowerCase().replace(" ", "-")}`) 
                    ? "text-primary" 
                    : "text-foreground/80"
                )}
              >
                {item}
              </a>
            ))}
            
            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
              <CustomButton 
                variant="ghost" 
                size="sm"
                icon={<Search className="h-4 w-4" />}
                className="justify-start"
              >
                Search
              </CustomButton>
              
              <CustomButton 
                variant="outline" 
                size="sm"
                icon={<Accessible className="h-4 w-4" />}
                className="justify-start"
              >
                Accessibility
              </CustomButton>
              
              <CustomButton 
                variant="default"
                size="sm"
                icon={<MapPin className="h-4 w-4" />}
                className="justify-start"
              >
                Start Journey
              </CustomButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
