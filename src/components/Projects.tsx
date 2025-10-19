import { Card } from "@/components/ui/card";
import { ExternalLink, Smartphone, Globe, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dockerized Full Stack Application",
      description: "A containerized full stack application using React, Node.js, and MongoDB orchestrated with Docker Compose. Demonstrates microservices architecture and container portability across different environments for scalable deployment.",
      icon: Code2,
      tags: ["React", "Node.js", "MongoDB", "Docker"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "CI/CD Pipeline for Web App",
      description: "Automated build, test, and deployment pipeline using GitHub Actions and Jenkins. Containerized application deployed to AWS EC2 with automated testing and zero-downtime deployments showcasing DevOps automation practices.",
      icon: Globe,
      tags: ["GitHub Actions", "Jenkins", "Docker", "AWS EC2"],
      gradient: "from-secondary to-accent"
    },
    {
      title: "Raven Portal",
      description: "A simple student portal developed using Flutter for attendance tracking and academic notices. Created intuitive UI screens for easy navigation. Integrated Firebase for authentication and real-time data updates.",
      icon: Smartphone,
      tags: ["Flutter", "Firebase", "Google Cloud"],
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-neon mb-4 animate-reveal">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full glow-neon" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-neon p-8 rounded-3xl hover-lift-neon group border-neon relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
              
              {/* Holographic shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl w-fit border border-primary/30 glow-neon">
                  <project.icon className="h-10 w-10 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 text-glow-cyan group-hover:text-glow-purple transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 glass-panel text-primary rounded-full border border-primary/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors group/btn font-display">
                  <span className="font-semibold">Explore Project</span>
                  <ExternalLink className="h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-neon rounded-full border-neon hover-lift-neon group"
          >
            <span className="text-lg font-display font-semibold text-glow-cyan group-hover:text-glow-purple transition-all duration-300">
              View All Projects on GitHub
            </span>
            <ExternalLink className="h-5 w-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
