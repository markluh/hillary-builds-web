import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "hillary.mark@example.com",
      action: "Send Email",
      href: "mailto:hillary.mark@example.com"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Available for project discussions",
      action: "Start Conversation",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a 30-minute consultation",
      action: "Book Now",
      href: "#"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Available for remote collaboration",
      action: "Learn More",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-semibold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and explore how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group border-0 bg-card/80 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-medium text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {method.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={method.href}>{method.action}</a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong">
              <div className="bg-card rounded-xl p-8 shadow-medium">
                <h3 className="text-2xl font-heading font-medium text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I'm here to help turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Start a Project
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;