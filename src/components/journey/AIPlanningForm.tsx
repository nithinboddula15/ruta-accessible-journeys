import { useState } from "react";
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/CustomCard";
import { CustomButton } from "@/components/ui/CustomButton";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { MapPin, Calendar, Clock, IndianRupee, Heart, Sparkles, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

interface AIPlanningFormProps {
  onPlanComplete: (plan: any) => void;
}

const AIPlanningForm = ({ onPlanComplete }: AIPlanningFormProps) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [optimizeFor, setOptimizeFor] = useState<"time" | "budget" | "comfort">("budget");
  const [isLoading, setIsLoading] = useState(false);
  const [accessibility, setAccessibility] = useState<string[]>([]);

  const handleAccessibilityToggle = (value: string) => {
    setAccessibility(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!from || !to || !date) {
      toast({
        title: "Incomplete form",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Mock response data based on inputs
      const plan = generateMockPlan(from, to, date, optimizeFor, accessibility);
      
      onPlanComplete(plan);
      setIsLoading(false);
      
      toast({
        title: "Plan generated!",
        description: "Your journey has been planned successfully."
      });
    }, 1500);
  };
  
  return (
    <CustomCard glass className="transition-all duration-300">
      <CardHeader>
        <CardTitle>Plan Your Journey</CardTitle>
        <CardDescription>
          Our AI will create a personalized travel plan optimized for your needs.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
                value={from}
                onChange={(e) => setFrom(e.target.value)}
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
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" 
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
              </div>
              <input 
                type="date" 
                id="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Optimize for</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "time", icon: <Clock className="h-4 w-4" />, label: "Time" },
                { value: "budget", icon: <IndianRupee className="h-4 w-4" />, label: "Budget" },
                { value: "comfort", icon: <Heart className="h-4 w-4" />, label: "Comfort" },
              ].map((option) => (
                <button 
                  key={option.value}
                  type="button"
                  onClick={() => setOptimizeFor(option.value as "time" | "budget" | "comfort")}
                  className={cn(
                    "flex flex-col items-center justify-center p-2 rounded-lg border text-center text-xs transition-all",
                    optimizeFor === option.value 
                      ? "bg-primary/10 border-primary text-primary" 
                      : "bg-muted hover:bg-muted/80"
                  )}
                >
                  {option.icon}
                  <span className="mt-1">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Accessibility Requirements</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { value: "wheelchair", label: "Wheelchair Access" },
                { value: "blind", label: "Visual Assistance" },
                { value: "deaf", label: "Hearing Assistance" },
                { value: "speechImpaired", label: "Speech Assistance" },
                { value: "elderlyFriendly", label: "Elderly Friendly" },
                { value: "noiseMinimal", label: "Minimal Noise" },
              ].map((option) => (
                <button 
                  key={option.value}
                  type="button"
                  onClick={() => handleAccessibilityToggle(option.value)}
                  className={cn(
                    "flex items-center justify-center p-2 rounded-lg border text-center text-xs transition-all",
                    accessibility.includes(option.value) 
                      ? "bg-primary/10 border-primary text-primary" 
                      : "bg-muted hover:bg-muted/80"
                  )}
                >
                  <Check className={cn(
                    "h-3 w-3 mr-1.5 transition-opacity",
                    accessibility.includes(option.value) ? "opacity-100" : "opacity-0"
                  )} />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="pt-4">
            <CustomButton 
              variant="default" 
              arrow
              className={cn("w-full", isLoading && "opacity-70 pointer-events-none")}
            >
              {isLoading ? (
                <>
                  <Sparkles className="h-4 w-4" />
                  Planning Your Journey...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Plan My Journey
                </>
              )}
            </CustomButton>
          </div>
        </form>
      </CardContent>
    </CustomCard>
  );
};

function generateMockPlan(
  from: string, 
  to: string, 
  date: string, 
  optimizeFor: "time" | "budget" | "comfort",
  accessibility: string[]
) {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  let duration = "3h 30m";
  let cost = 1200;
  let comfort = 3;
  
  if (optimizeFor === "time") {
    duration = "2h 15m";
    cost = 1800;
    comfort = 4;
  } else if (optimizeFor === "budget") {
    duration = "4h 45m";
    cost = 650;
    comfort = 2;
  } else if (optimizeFor === "comfort") {
    duration = "3h 45m";
    cost = 2200;
    comfort = 5;
  }
  
  const accessibilityFeatures = accessibility.map(feature => {
    switch(feature) {
      case "wheelchair": return "Wheelchair accessible route";
      case "blind": return "Voice navigation available";
      case "deaf": return "Visual alerts for announcements";
      case "speechImpaired": return "Text-to-speech communication";
      case "elderlyFriendly": return "Minimal walking required";
      case "noiseMinimal": return "Quiet zones available";
      default: return "";
    }
  }).filter(f => f);
  
  const steps = [
    {
      title: `Depart from ${from}`,
      time: "10:00 AM",
      description: optimizeFor === "budget" 
        ? `Take the local RTC bus from ${from} Bus Station`
        : `Take a cab from your location in ${from}`,
      icon: <MapPin className="h-4 w-4" />,
      accessibility: accessibility.includes("wheelchair") 
        ? "Wheelchair accessible pickup point"
        : undefined
    },
    {
      title: optimizeFor === "time" ? "Express Train" : "RTC Bus Journey",
      time: "10:30 AM - 1:15 PM",
      description: optimizeFor === "time"
        ? `High-speed train to ${to}`
        : `Regular service to ${to} with 2 stops`,
      icon: <Clock className="h-4 w-4" />,
      accessibility: accessibility.includes("deaf")
        ? "Visual announcements for all stops"
        : accessibility.includes("blind")
        ? "Audio guidance available"
        : undefined
    },
    {
      title: `Arrive at ${to}`,
      time: optimizeFor === "time" ? "12:15 PM" : "2:45 PM",
      description: `Reach ${to} ${optimizeFor === "comfort" ? "Central Station" : "Bus Terminal"}`,
      icon: <MapPin className="h-4 w-4" />,
      accessibility: accessibility.includes("elderlyFriendly")
        ? "Assistance available at arrival"
        : undefined
    }
  ];
  
  return {
    from,
    to,
    date: formattedDate,
    duration,
    cost,
    comfort,
    steps,
    accessibilityFeatures
  };
}

export default AIPlanningForm;
