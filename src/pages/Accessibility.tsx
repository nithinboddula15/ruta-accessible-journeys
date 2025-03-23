import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/CustomCard";
import { CustomButton } from "@/components/ui/CustomButton";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { Eye, Ear, MessageSquare, UserCheck, Globe, MapPin, ScanText, Languages, Volume2, Settings } from "lucide-react";

const Accessibility = () => {
  return (
    <main className="min-h-screen flex flex-col pt-16">
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-xs font-semibold tracking-wider uppercase">Accessibility Features</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Travel Without <span className="text-primary">Barriers</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              RUTA is built from the ground up to be fully accessible, with specialized features for travelers with different needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Visual Accessibility",
                icon: <Eye className="h-6 w-6" />,
                description: "Features designed for blind and visually impaired travelers",
                color: "text-blue-500",
                bgColor: "bg-blue-50",
                features: [
                  { title: "Voice Navigation", description: "AI-powered voice guidance for safe travel", icon: <Volume2 /> },
                  { title: "Screen Reader Compatibility", description: "Fully compliant with screen readers", icon: <ScanText /> },
                  { title: "High Contrast Mode", description: "Enhanced visibility options", icon: <Eye /> }
                ]
              },
              {
                title: "Hearing Accessibility",
                icon: <Ear className="h-6 w-6" />,
                description: "Tools for deaf and hard-of-hearing travelers",
                color: "text-purple-500",
                bgColor: "bg-purple-50",
                features: [
                  { title: "Visual Alerts", description: "Flash notifications for important updates", icon: <Eye /> },
                  { title: "Live Transcription", description: "Convert announcements to text instantly", icon: <ScanText /> },
                  { title: "Sign Language Support", description: "AI interpretation of sign language", icon: <Languages /> }
                ]
              },
              {
                title: "Speech Accessibility",
                icon: <MessageSquare className="h-6 w-6" />,
                description: "Solutions for mute and speech-impaired travelers",
                color: "text-green-500",
                bgColor: "bg-green-50",
                features: [
                  { title: "Text-to-Speech", description: "Convert written text to spoken words", icon: <Volume2 /> },
                  { title: "Symbol Communication", description: "Visual tools for complex situations", icon: <Languages /> },
                  { title: "Pre-set Phrases", description: "Quick access to common travel needs", icon: <MessageSquare /> }
                ]
              }
            ].map((category, index) => (
              <CustomCard key={index} glass hover className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full mr-3 ${category.bgColor}`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <AnimatedIcon
                          icon={feature.icon}
                          size="sm"
                          className="mt-0.5 mr-3 flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-semibold">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Additional <span className="text-primary">Accessibility Features</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Crowdsourced Accessibility Data",
                description: "Community-driven information about the accessibility of venues, transport, and services across India",
                icon: <UserCheck className="h-6 w-6" />
              },
              {
                title: "Multi-language Support",
                description: "Use RUTA in multiple Indian languages, making it accessible to non-English speakers",
                icon: <Globe className="h-6 w-6" />
              },
              {
                title: "Wheelchair-Friendly Routes",
                description: "Find paths that are accessible for wheelchair users with information about ramps, elevators, and accessible entrances",
                icon: <MapPin className="h-6 w-6" />
              },
              {
                title: "Customizable Interface",
                description: "Adjust font sizes, color schemes, and interaction methods to suit your specific needs",
                icon: <Settings className="h-6 w-6" />
              }
            ].map((feature, index) => (
              <CustomCard key={index} glass className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AnimatedIcon
                      icon={feature.icon}
                      className="mr-3"
                    />
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </CustomCard>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <CustomButton variant="default" size="lg">
              Learn How to Use Accessibility Features
            </CustomButton>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Accessibility;
