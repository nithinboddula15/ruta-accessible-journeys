
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIPlanningForm from "@/components/journey/AIPlanningForm";
import { useState } from "react";
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/CustomCard";
import { Calendar, Clock, MapPin, IndianRupee, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const PlanJourney = () => {
  const [planningResult, setPlanningResult] = useState<any | null>(null);
  
  const handlePlanResult = (result: any) => {
    setPlanningResult(result);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="min-h-screen flex flex-col pt-16">
      <Header />
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-xs font-semibold tracking-wider uppercase">Plan Your Trip</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Smart & Accessible <span className="text-primary">Travel Planning</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              RUTA's AI-powered planner creates personalized, accessible travel itineraries optimized for your needs.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <AIPlanningForm onPlanComplete={handlePlanResult} />
          </div>
        </div>
      </section>
      
      {planningResult && (
        <section id="results" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
                Your Personalized <span className="text-primary">Travel Plan</span>
              </h2>
              
              <CustomCard glass className="mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Route Overview</CardTitle>
                      <CardDescription>
                        {planningResult.from} to {planningResult.to}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{planningResult.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-muted/50 rounded-lg flex flex-col items-center">
                      <Clock className="h-6 w-6 text-primary mb-2" />
                      <span className="text-sm font-medium">Duration</span>
                      <span className="text-2xl font-bold">{planningResult.duration}</span>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg flex flex-col items-center">
                      <IndianRupee className="h-6 w-6 text-primary mb-2" />
                      <span className="text-sm font-medium">Total Cost</span>
                      <span className="text-2xl font-bold">₹{planningResult.cost}</span>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg flex flex-col items-center">
                      <Settings className="h-6 w-6 text-primary mb-2" />
                      <span className="text-sm font-medium">Comfort</span>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={cn(
                              "h-2 w-6 mx-0.5 rounded-full",
                              i < planningResult.comfort 
                                ? "bg-primary" 
                                : "bg-muted-foreground/20"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">Traveling Steps</h3>
                    <div className="space-y-4">
                      {planningResult.steps.map((step: any, index: number) => (
                        <div key={index} className="relative pl-8 pb-8">
                          {/* Connector line */}
                          {index < planningResult.steps.length - 1 && (
                            <div className="absolute left-3.5 top-3 bottom-0 w-0.5 bg-muted-foreground/20" />
                          )}
                          
                          {/* Step marker */}
                          <div className="absolute left-0 top-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {step.icon || <MapPin className="h-4 w-4" />}
                          </div>
                          
                          <div className="rounded-lg border p-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">{step.title}</h4>
                              <span className="text-sm text-muted-foreground">{step.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                            
                            {step.accessibility && (
                              <div className="mt-2 text-xs bg-primary/5 text-primary rounded-full px-3 py-1 inline-flex items-center">
                                <Sparkles className="h-3 w-3 mr-1" />
                                {step.accessibility}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </CustomCard>
              
              <div className="text-center">
                <p className="mb-4 text-sm text-muted-foreground">
                  This travel plan has been optimized for your preferences and accessibility needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </main>
  );
};

export default PlanJourney;
