import { Card } from "@/components/ui/card";
import { Palette, Code, Lightbulb, Users, Target, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Palette,
      title: "Design & UX",
      description: "Creating intuitive and beautiful user experiences",
      items: ["UI/UX Design", "Brand Identity", "Prototyping", "User Research"]
    },
    {
      icon: Code,
      title: "Development",
      description: "Bringing designs to life with clean, efficient code",
      items: ["Frontend Development", "Responsive Design", "Performance", "Accessibility"]
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Strategic thinking that drives meaningful results",
      items: ["Product Strategy", "Digital Marketing", "Analytics", "Optimization"]
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "Working effectively with teams and stakeholders",
      items: ["Team Leadership", "Communication", "Project Management", "Mentoring"]
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Finding innovative solutions to complex challenges",
      items: ["Critical Thinking", "Research", "Analysis", "Innovation"]
    },
    {
      icon: Zap,
      title: "Tools & Tech",
      description: "Proficient in modern tools and technologies",
      items: ["Design Systems", "Version Control", "Automation", "AI Integration"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-semibold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through years of experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm">
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-heading font-medium text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  
                  {/* Skills List */}
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;