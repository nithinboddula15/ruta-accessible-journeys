
import { useEffect, useRef } from "react";
import { 
  Eye, EyeOff, Ear, EarOff, MessageSquare, VolumeX, 
  VolumeX, Volume2, Languages, ScanText, MapPin
} from "lucide-react";
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/CustomCard";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { CustomButton } from "../ui/CustomButton";
import { cn } from "@/lib/utils";

const AccessibilityFeatures = () => {
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
  
  const features = [
    {
      title: "For Blind Travelers",
      icon: <Eye className="h-6 w-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      items: [
        { 
          icon: <Volume2 />, 
          title: "AI Voice Navigation", 
          description: "Advanced voice guidance and object recognition for safe travel" 
        },
        { 
          icon: <ScanText />, 
          title: "Text-to-Speech Reader", 
          description: "Automatic reading of all travel details and information" 
        },
        { 
          icon: <MapPin />, 
          title: "Vibration Alerts", 
          description: "Haptic feedback for notifications and directional guidance" 
        },
      ]
    },
    {
      title: "For Deaf Travelers",
      icon: <Ear className="h-6 w-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      items: [
        { 
          icon: <ScanText />, 
          title: "Real-time Transcription", 
          description: "Convert announcements and speech to readable text instantly" 
        },
        { 
          icon: <Languages />, 
          title: "Sign Language AI", 
          description: "Interpret sign language for seamless communication" 
        },
        { 
          icon: <EyeOff />, 
          title: "Visual Notifications", 
          description: "Flash alerts and visual cues for important information" 
        },
      ]
    },
    {
      title: "For Mute Travelers",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      items: [
        { 
          icon: <Volume2 />, 
          title: "Text-to-Speech Communication", 
          description: "Convert written messages to spoken words for easier interaction" 
        },
        { 
          icon: <Languages />, 
          title: "Pre-set Travel Phrases", 
          description: "Quick access to common travel communications needs" 
        },
        { 
          icon: <MessageSquare />, 
          title: "Symbol-based Communication", 
          description: "Visual communication tools for complex situations" 
        },
      ]
    }
  ];
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 animate-on-scroll">
            <span className="text-xs font-semibold tracking-wider uppercase">Accessibility First</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
            Travel Features for <span className="text-primary">Everyone</span>
          </h2>
          
          <p className="text-lg text-muted-foreground animate-on-scroll">
            RUTA is designed with accessibility at its core, offering specialized features for travelers with different needs and abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-on-scroll" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CustomCard glass hover className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={cn("p-3 rounded-full mr-3", feature.bgColor)}>
                      <div className={feature.color}>
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                  <CardDescription>
                    Specialized features designed to make travel accessible and enjoyable.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <AnimatedIcon 
                          icon={item.icon} 
                          size="sm" 
                          className="mt-0.5 mr-3 flex-shrink-0" 
                        />
                        <div>
                          <h4 className="text-sm font-semibold">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </CustomCard>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <CustomButton 
            variant="outline" 
            size="lg"
            className="animate-on-scroll"
          >
            Explore All Accessibility Features
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityFeatures;
