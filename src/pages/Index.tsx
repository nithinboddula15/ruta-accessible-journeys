
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import AccessibilityFeatures from "@/components/features/AccessibilityFeatures";
import TravelModes from "@/components/features/TravelModes";
import AIPlanning from "@/components/features/AIPlanning";
import { CustomButton } from "@/components/ui/CustomButton";
import { Search, Globe, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  // Add scroll animation trigger
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll:not(.animated)");
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if (position.top < window.innerHeight * 0.9) {
          element.classList.add("animated");
        }
      });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener("scroll", animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);
  
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <Hero />
        
        <TravelModes />
        
        <AccessibilityFeatures />
        
        <AIPlanning />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 z-0" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full filter blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
                Ready to Experience Truly Accessible Travel?
              </h2>
              
              <p className="text-lg text-primary-foreground/80 mb-8 animate-on-scroll">
                Join thousands of travelers who are discovering the freedom of inclusive journey planning with RUTA.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
                <CustomButton 
                  variant="glass" 
                  size="lg"
                  icon={<MapPin className="h-5 w-5" />}
                  arrow
                >
                  Start Your Journey
                </CustomButton>
                
                <CustomButton 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                  icon={<Search className="h-5 w-5" />}
                >
                  Explore Features
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why RUTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-on-scroll">
                <span className="text-xs font-semibold tracking-wider uppercase">Why Choose RUTA</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
                What Makes RUTA <span className="text-primary">Unique</span>
              </h2>
              
              <p className="text-lg text-muted-foreground animate-on-scroll">
                RUTA stands apart as India's pioneering travel solution that puts accessibility and inclusion at the forefront of every journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "India's First Truly Accessible Travel App",
                  description: "Built from the ground up with accessibility as a core principle, not an afterthought",
                  icon: <Globe className="h-6 w-6" />
                },
                {
                  title: "Real-Time Route & Bus Tracking",
                  description: "Live updates on government RTC buses, trains, and other transport options",
                  icon: <MapPin className="h-6 w-6" />
                },
                {
                  title: "Inclusive Travel for Everyone",
                  description: "Specialized features for blind, deaf, and mute travelers alongside standard travel tools",
                  icon: <Search className="h-6 w-6" />
                },
                {
                  title: "Smart Budget-Based Planning",
                  description: "AI-driven routes optimized for your financial constraints without compromising on quality",
                  icon: <MessageSquare className="h-6 w-6" />
                },
                {
                  title: "Safe & Secure Journey",
                  description: "Verified accommodations, emergency SOS features, and fraud prevention systems",
                  icon: <ShieldCheck className="h-6 w-6" />
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={cn(
                    "animate-on-scroll",
                    index === 4 && "md:col-span-2 max-w-lg mx-auto"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={cn(
                    "flex items-start p-6 rounded-2xl border glass transition-all hover:shadow-md hover:-translate-y-1",
                    index === 4 && "flex-col items-center text-center"
                  )}>
                    <div className={cn(
                      "p-3 rounded-full bg-primary/10 text-primary",
                      index === 4 ? "mb-4" : "mr-4"
                    )}>
                      {feature.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
};

export default Index;
