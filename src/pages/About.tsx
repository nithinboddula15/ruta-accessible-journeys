
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomCard, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/CustomCard";
import { CustomButton } from "@/components/ui/CustomButton";
import { Mail, Phone, MapPin, Globe, Instagram, Facebook, Twitter, Linkedin, Heart } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen flex flex-col pt-16">
      <Header />
      
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-xs font-semibold tracking-wider uppercase">About RUTA</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-primary">Mission</span> & <span className="text-primary">Vision</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              RUTA was created to revolutionize travel in India by making it truly accessible, affordable, and inclusive for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <CustomCard glass className="h-full">
              <CardHeader>
                <CardTitle>Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  RUTA began with a simple observation: travel in India was not equally accessible to everyone. Persons with Disabilities (PwDs) faced numerous challenges when planning journeys, from inaccessible information to unpredictable transportation.
                </p>
                <p className="text-muted-foreground mb-4">
                  Founded in 2023 by a team of technologists and accessibility advocates, RUTA set out to create India's first truly inclusive travel platform. We collaborated with disability organizations, travel experts, and AI researchers to develop a solution that addresses the unique needs of all travelers.
                </p>
                <p className="text-muted-foreground">
                  Today, RUTA is growing into a comprehensive ecosystem that combines cutting-edge technology with deep empathy, making travel more accessible, affordable, and enjoyable for everyone.
                </p>
              </CardContent>
            </CustomCard>
            
            <CustomCard glass className="h-full">
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Inclusivity",
                      description: "We design for everyone, regardless of ability, language, or background"
                    },
                    {
                      title: "Innovation",
                      description: "We leverage cutting-edge technology to solve complex accessibility challenges"
                    },
                    {
                      title: "Empowerment",
                      description: "We believe in giving people the tools to travel independently and confidently"
                    },
                    {
                      title: "Affordability",
                      description: "We make smart travel planning accessible across all economic backgrounds"
                    },
                    {
                      title: "Community",
                      description: "We build and nurture a supportive network of inclusive travelers"
                    }
                  ].map((value, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                        <Heart className="h-3 w-3" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{value.title}</h4>
                        <p className="text-xs text-muted-foreground">{value.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </CustomCard>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground">
              RUTA is made possible by a diverse team of professionals who are passionate about accessibility and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Aarav Sharma",
                role: "Founder & CEO",
                image: "https://source.unsplash.com/collection/8311183/300x300?1"
              },
              {
                name: "Priya Patel",
                role: "CTO",
                image: "https://source.unsplash.com/collection/8311183/300x300?2"
              },
              {
                name: "Vikram Singh",
                role: "Accessibility Director",
                image: "https://source.unsplash.com/collection/8311183/300x300?3"
              },
              {
                name: "Meera Reddy",
                role: "AI Research Lead",
                image: "https://source.unsplash.com/collection/8311183/300x300?4"
              }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions or feedback? We'd love to hear from you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <a href="mailto:contact@rutaapp.in" className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors">
                <Mail className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">contact@rutaapp.in</span>
              </a>
              <a href="tel:+918889990000" className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors">
                <Phone className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">+91 8889990000</span>
              </a>
              <a href="#" className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors">
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <span className="text-sm font-medium">Bengaluru, India</span>
              </a>
            </div>
            
            <div className="flex justify-center space-x-4">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={`Visit our ${social.label} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default About;
