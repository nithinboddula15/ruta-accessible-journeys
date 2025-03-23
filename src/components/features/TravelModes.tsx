
import { useEffect, useRef } from "react";
import { Bus, Train, Plane, Car, MapPin, Clock, IndianRupee } from "lucide-react";
import { CustomCard, CardContent } from "../ui/CustomCard";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { CustomButton } from "../ui/CustomButton";
import { cn } from "@/lib/utils";

const TravelModes = () => {
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
  
  const travelModes = [
    {
      icon: <Bus className="h-10 w-10" />,
      name: "Buses",
      description: "Track government and private buses in real-time with accurate fare estimates",
      features: ["Live RTC bus tracking", "Accessible seating options", "Route optimization"]
    },
    {
      icon: <Train className="h-10 w-10" />,
      name: "Trains",
      description: "Get real-time updates on train schedules, platform changes, and accessibility options",
      features: ["Station accessibility details", "Seat availability alerts", "Wheelchair assistance"]
    },
    {
      icon: <Plane className="h-10 w-10" />,
      name: "Flights",
      description: "Compare flights with accessibility ratings and special assistance options",
      features: ["Special assistance booking", "Terminal navigation guides", "Airline accessibility ratings"]
    },
    {
      icon: <Car className="h-10 w-10" />,
      name: "Cabs & Rentals",
      description: "Book accessible vehicles with drivers trained to assist travelers with disabilities",
      features: ["Wheelchair accessible vehicles", "Trained drivers", "Door-to-door service"]
    }
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-on-scroll">
            <span className="text-xs font-semibold tracking-wider uppercase">Multiple Travel Modes</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
            Your Journey, <span className="text-primary">Your Way</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-on-scroll">
            RUTA integrates all transport options, providing real-time information, accessible options, and secure booking across multiple travel modes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {travelModes.map((mode, index) => (
            <div 
              key={index} 
              className="animate-on-scroll" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CustomCard glass hover className="text-center h-full flex flex-col">
                <CardContent className="pt-8 pb-6 flex-grow flex flex-col">
                  <div className="mb-6 mx-auto">
                    <AnimatedIcon 
                      icon={mode.icon} 
                      size="lg" 
                      animation="float" 
                      className="mx-auto" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{mode.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{mode.description}</p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-3">
                      {mode.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </CustomCard>
            </div>
          ))}
        </div>
        
        {/* Example travel route */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <CustomCard glass className="bg-gradient-to-r from-background to-background/70 relative">
            <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Sample Route
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Mumbai to Pune</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: <Bus />, mode: "Express Bus", details: "Mumbai Central to Pune Station", time: "3h 15m", price: "₹450" },
                    { icon: <Train />, mode: "Intercity Train", details: "CSMT to Pune Junction", time: "3h 30m", price: "₹320" },
                    { icon: <Car />, mode: "Shared Cab", details: "Door to Door", time: "2h 45m", price: "₹700" },
                  ].map((option, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-background/50 border transition-all hover:shadow-sm">
                      <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                        {option.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium">{option.mode}</h4>
                        <p className="text-xs text-muted-foreground">{option.details}</p>
                      </div>
                      
                      <div className="text-sm flex flex-col items-end">
                        <div className="flex items-center mb-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{option.time}</span>
                        </div>
                        <div className="flex items-center text-primary font-medium">
                          <IndianRupee className="h-3 w-3 mr-1" />
                          <span>{option.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <CustomButton 
                    variant="default" 
                    size="sm"
                    icon={<MapPin className="h-4 w-4" />}
                    arrow
                  >
                    View Detailed Route
                  </CustomButton>
                </div>
              </div>
              
              <div className="flex-1 relative rounded-lg overflow-hidden border bg-muted min-h-[200px] md:min-h-[unset]">
                {/* Placeholder for route map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-primary/50 mx-auto mb-3" />
                    <p className="text-sm font-medium">Interactive Route Map</p>
                    <p className="text-xs text-muted-foreground">With accessibility information</p>
                  </div>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    </section>
  );
};

export default TravelModes;
