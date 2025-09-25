const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold text-foreground mb-4">
              About Me
            </h2>
            <div className="h-1 w-16 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Passionate about creating meaningful digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a creative professional with a passion for turning complex challenges 
                into elegant solutions. With years of experience in digital innovation, 
                I specialize in creating user-centered designs that not only look beautiful 
                but solve real problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines strategic thinking with creative execution, ensuring 
                every project delivers both aesthetic appeal and functional excellence. 
                I believe in the power of collaboration and continuous learning to push 
                the boundaries of what's possible.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-heading font-medium text-foreground mb-4">
                  What I Bring to the Table
                </h3>
                <ul className="space-y-3">
                  {[
                    "Strategic thinking and problem-solving",
                    "User-centered design approach",
                    "Attention to detail and quality",
                    "Collaborative mindset",
                    "Continuous learning and adaptation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h4 className="font-heading font-medium text-foreground mb-4">
                    My Mission
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "To create digital experiences that inspire, engage, and make 
                    a positive impact on people's lives through thoughtful design 
                    and innovative technology."
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;