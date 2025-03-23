
import { useEffect, useRef } from "react";
import { MapPin, Navigation, Bus, Accessible } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";
import { cn } from "@/lib/utils";

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
  
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary animate-on-scroll">
            <span className="text-xs font-semibold tracking-wider uppercase">India's First Truly Accessible Travel App</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance animate-on-scroll">
            Travel for <span className="text-primary">Everyone</span>,
            <br />
            Journey Without <span className="text-secondary">Limits</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-on-scroll">
            RUTA transforms travel for all, including persons with disabilities, solo travelers, and budget-conscious tourists, ensuring a seamless and inclusive journey across India.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-on-scroll">
            <CustomButton 
              variant="default" 
              size="lg"
              icon={<MapPin className="h-5 w-5" />}
              arrow
            >
              Start Your Journey
            </CustomButton>
            
            <CustomButton 
              variant="outline" 
              size="lg"
              icon={<Accessible className="h-5 w-5" />}
            >
              Explore Accessibility
            </CustomButton>
          </div>
          
          {/* Featured highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { 
                icon: <Navigation className="h-6 w-6" />, 
                title: "Smart Travel Planning", 
                description: "AI-driven routes optimized for your budget, time, and comfort preferences" 
              },
              { 
                icon: <Bus className="h-6 w-6" />, 
                title: "Live Route Tracking", 
                description: "Real-time updates on buses, trains and other public transport" 
              },
              { 
                icon: <Accessible className="h-6 w-6" />, 
                title: "Inclusive Travel", 
                description: "Specialized features for blind, deaf, and mute travelers" 
              },
            ].map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-2xl p-6 border glass animate-on-scroll",
                  "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual element: Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-24"
          fill="currentColor"
          className="text-background"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
