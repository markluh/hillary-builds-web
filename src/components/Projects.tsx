import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "M-LUHTECH LLC website",
      description: "A comprehensive company website for M-LUHTECH LLC.",
      category: "Web Application",
      tags: ["Strategy", "UX Design", "Frontend"],
      image: "./mluhtech.jpg",
      links: {
        demo: "m-luh.xyz",
        github: "https://github.com/markluh/mluhtech-showcase-hub"
      }
    },
    {
      title: "meet-your-next online meeting platform",
      description: "an online meeting website for scheduling meetings and interviews.",
      category: "online meetings",
      tags: ["online meetings", "Design System", "incomplete"],
      image: "bg-gradient-to-br from-accent/20 to-primary-glow/30",
      links: {
        demo: "meet.m-luh.xyz",
        github: "https://github.com/markluh/meet-your-next/"
      }
    },
    {
      title: "E-commerce Experience",
      description: "Modern e-commerce platform with focus on user experience, performance optimization, and conversion rate optimization.",
      category: "UX/UI Design",
      tags: ["E-commerce", "UX Research", "Prototyping"],
      image: "bg-gradient-to-br from-primary-glow/20 to-primary/20",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Mobile App Interface",
      description: "Intuitive mobile application interface designed for productivity and collaboration, with focus on accessibility.",
      category: "Mobile Design",
      tags: ["Mobile UI", "Accessibility", "User Research"],
      image: "bg-gradient-to-br from-accent/30 to-primary-light/20",
      links: {
        demo: "#",
        github: null
      }
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data visualization with real-time updates and customizable analytics views.",
      category: "Web Application",
      tags: ["Data Viz", "Dashboard", "Analytics"],
      image: "bg-gradient-to-br from-primary/25 to-accent-soft/30",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Content Management System",
      description: "User-friendly CMS with advanced content editing capabilities, workflow management, and multi-user collaboration.",
      category: "Web Application",
      tags: ["CMS", "User Experience", "Collaboration"],
      image: "bg-gradient-to-br from-primary-light/20 to-primary-glow/25",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-semibold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-strong transition-all duration-300">
              {/* Project Image/Visual */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.links.demo} className="flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Project
                    </a>
                  </Button>
                  {project.links.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.links.github} className="flex items-center justify-center">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;