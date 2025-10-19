import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Cloud & DevOps Enthusiast | Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-8">
          <h2 className="text-lg md:text-xl text-muted-foreground mb-4 font-light tracking-wider">
            INITIALIZING PORTFOLIO...
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-neon animate-reveal">
            Mohamed Fahim R
          </h1>
          <div className="h-16 md:h-20 flex items-center justify-center">
            <p className="text-3xl md:text-5xl font-display font-semibold text-glow-cyan">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Automating deployments and building scalable web applications with React.js, Node.js, AWS, and Docker.
          <br className="hidden md:block" />
          Passionate about optimizing workflows and implementing efficient CI/CD pipelines.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-transparent border-neon hover:bg-primary/20 text-primary font-display text-lg px-8 glow-neon pulse-neon"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            className="bg-transparent border-neon hover:bg-secondary/20 text-secondary font-display text-lg px-8 glow-purple"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
        </div>

        <div className="flex gap-8 justify-center mb-8">
          <a 
            href="https://github.com/Mohamedfahim1234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub Profile"
          >
            <Github className="h-7 w-7 text-muted-foreground group-hover:text-glow-cyan transition-all" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohamed-fahim-b9256825b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-7 w-7 text-muted-foreground group-hover:text-glow-purple transition-all" />
            <div className="absolute inset-0 bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="mailto:mdfahim52060@gmail.com"
            className="group relative"
            aria-label="Email"
          >
            <Mail className="h-7 w-7 text-muted-foreground group-hover:text-glow-magenta transition-all" />
            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="tel:+917010730182"
            className="group relative"
            aria-label="Phone"
          >
            <Phone className="h-7 w-7 text-muted-foreground group-hover:text-glow-cyan transition-all" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-muted-foreground glass-panel px-6 py-3 rounded-full w-fit mx-auto">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="font-light">Sithayankottai, Dindigul, Tamil Nadu</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
