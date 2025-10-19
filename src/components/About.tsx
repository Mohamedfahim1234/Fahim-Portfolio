import { Code2, Smartphone, Database, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack",
      description: "React.js, Node.js, Express.js"
    },
    {
      icon: Smartphone,
      title: "Cloud & DevOps",
      description: "AWS (EC2, S3, Lambda), Docker"
    },
    {
      icon: Database,
      title: "Databases",
      description: "MongoDB, MySQL"
    },
    {
      icon: Lightbulb,
      title: "Mobile Dev",
      description: "Flutter (basic knowledge)"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-neon mb-4 animate-reveal">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full glow-neon" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <div className="glass-neon p-8 rounded-2xl border-neon">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Motivated <span className="text-glow-cyan">DevOps and Full Stack Developer</span> with a solid understanding 
                of web development and automation practices. Skilled in React.js, Node.js, and familiar with AWS, Docker, 
                and CI/CD pipelines.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Enthusiastic about automating deployments, optimizing development workflows, and building scalable, 
                efficient web applications. Continuously learning and applying modern DevOps practices to streamline 
                software delivery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing <span className="text-glow-cyan">B.Tech in Information Technology</span> at 
                Jeppiaar Institute of Technology with a CGPA of <span className="text-glow-purple">7.56</span>, 
                continuously expanding my skillset in cloud computing and infrastructure automation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-neon p-6 rounded-2xl hover-lift-neon group border-neon relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit glow-neon">
                    <item.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-glow-cyan">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
