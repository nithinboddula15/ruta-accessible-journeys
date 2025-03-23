
import { useEffect, useRef } from "react";
import { Brain, MapPin, IndianRupee, Clock, Sparkles, Lightbulb, Shield, Heart } from "lucide-react";
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/CustomCard";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { CustomButton } from "../ui/CustomButton";
import { cn } from "@/lib/utils";

const AIPlanning = () => {
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-on-scroll">
            <span className="text-xs font-semibold tracking-wider uppercase">AI-Powered Planning</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
            Smart Travel Planning for <span className="text-primary">Everyone</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-on-scroll">
            RUTA's AI engine analyzes thousands of routes, schedules, and accessibility data points to create personalized travel plans optimized for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 animate-on-scroll">
            <CustomCard glass className="h-full">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <AnimatedIcon 
                    icon={<Brain className="h-6 w-6" />} 
                    animation="pulse"
                    className="mr-3" 
                  />
                  <CardTitle>AI Travel Assistant</CardTitle>
                </div>
                <CardDescription>
                  Experience conversational travel planning that understands your unique requirements
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 border mb-6">
                  <div className="chat-bubbles space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">I need to travel from Delhi to Agra tomorrow with my grandmother who uses a wheelchair.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-background rounded-2xl rounded-tl-sm px-4 py-2 border max-w-[80%] shadow-sm">
                        <div className="flex items-center mb-2">
                          <Sparkles className="h-4 w-4 text-primary mr-2" />
                          <span className="text-xs font-semibold">RUTA AI Assistant</span>
                        </div>
                        <p className="text-sm">I'll find wheelchair-accessible options for you. Would you prefer a direct train with accessible coaches or a private cab with wheelchair assistance?</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Train would be better if it has accessible bathrooms and ramp boarding.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-background rounded-2xl rounded-tl-sm px-4 py-2 border max-w-[80%] shadow-sm">
                        <div className="flex items-center mb-2">
                          <Sparkles className="h-4 w-4 text-primary mr-2" />
                          <span className="text-xs font-semibold">RUTA AI Assistant</span>
                        </div>
                        <p className="text-sm">Great choice! The Gatimaan Express (12050) has wheelchair-accessible coaches, accessible bathrooms, and ramp boarding assistance at both Delhi and Agra stations. It departs at 8:10 AM and reaches Agra at 9:50 AM. Would you like me to check for wheelchair assistance booking at the stations?</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      icon: <Lightbulb />, 
                      title: "Smart Recommendations", 
                      description: "Personalized suggestions based on accessibility needs, budget, and preferences" 
                    },
                    { 
                      icon: <MapPin />, 
                      title: "Accessible Route Planning", 
                      description: "Detailed directions with accessibility information for every step" 
                    },
                    { 
                      icon: <Shield />, 
                      title: "Safety Prioritization", 
                      description: "Routes vetted for safety with real-time alerts and updates" 
                    },
                    { 
                      icon: <Clock />, 
                      title: "Time Optimization", 
                      description: "Efficient journeys that respect your schedule and pace" 
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg border bg-background/50 transition-all hover:shadow-sm">
                      <AnimatedIcon 
                        icon={feature.icon} 
                        size="sm" 
                        className="mr-3 flex-shrink-0" 
                      />
                      <div>
                        <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </CustomCard>
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: "100ms" }}>
            <CustomCard glass hover className="h-full">
              <CardHeader>
                <CardTitle>Plan Your Next Trip</CardTitle>
                <CardDescription>
                  Let our AI create a personalized, accessible journey for you
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="from" className="block text-sm font-medium mb-1">From</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <input 
                        type="text" 
                        id="from" 
                        placeholder="Starting location"
                        className="w-full rounded-lg border border-input bg-background px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="to" className="block text-sm font-medium mb-1">To</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <input 
                        type="text" 
                        id="to" 
                        placeholder="Destination"
                        className="w-full rounded-lg border border-input bg-background px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Optimize for</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: <Clock className="h-4 w-4" />, label: "Time" },
                        { icon: <IndianRupee className="h-4 w-4" />, label: "Budget" },
                        { icon: <Heart className="h-4 w-4" />, label: "Comfort" },
                      ].map((option, index) => (
                        <button 
                          key={index}
                          type="button"
                          className={cn(
                            "flex flex-col items-center justify-center p-2 rounded-lg border text-center text-xs transition-all",
                            index === 1 ? "bg-primary/10 border-primary text-primary" : "bg-muted hover:bg-muted/80"
                          )}
                        >
                          {option.icon}
                          <span className="mt-1">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <CustomButton 
                      variant="default" 
                      arrow
                      className="w-full"
                      icon={<Sparkles className="h-4 w-4" />}
                    >
                      Plan My Journey
                    </CustomButton>
                  </div>
                </div>
              </CardContent>
            </CustomCard>
          </div>
        </div>
        
        <div className="text-center animate-on-scroll">
          <CustomButton 
            variant="outline" 
            size="lg"
            className="animate-on-scroll"
          >
            Explore AI-Powered Features
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default AIPlanning;
