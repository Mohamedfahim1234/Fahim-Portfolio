import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "React.js & JavaScript", level: 90 },
    { name: "Node.js & Express.js", level: 85 },
    { name: "AWS Cloud (EC2, S3, Lambda)", level: 80 },
    { name: "MongoDB & MySQL", level: 75 },
    { name: "Docker & CI/CD", level: 70 },
    { name: "Flutter (Basic)", level: 65 },
    { name: "Git & GitHub", level: 85 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 92 },
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 88 },
    { name: "Adaptability", level: 85 },
  ];

  const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
    <div className="mb-7">
      <div className="flex justify-between mb-3">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-glow-cyan font-display">{level}%</span>
      </div>
      <div className="h-3 bg-muted/30 rounded-full overflow-hidden border border-primary/20 relative">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
            background: "linear-gradient(90deg, hsl(189 97% 55%), hsl(271 91% 65%))",
            boxShadow: "0 0 20px hsl(189 97% 55% / 0.5)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div id="skills-section" className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-neon mb-4 animate-reveal">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full glow-neon" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-neon p-10 rounded-3xl border-neon hover-lift-neon">
            <h3 className="text-3xl font-display font-bold mb-8 text-glow-cyan">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="space-y-6">
            <div className="glass-neon p-10 rounded-3xl border-neon hover-lift-neon">
              <h3 className="text-3xl font-display font-bold mb-8 text-glow-purple">Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>

            <div className="glass-neon p-10 rounded-3xl border-neon hover-lift-neon">
              <h3 className="text-3xl font-display font-bold mb-8 text-glow-magenta">Languages</h3>
              <div className="flex gap-6">
                <div className="flex-1 glass-panel p-6 rounded-2xl text-center border-neon group hover:glow-neon transition-all">
                  <p className="font-display font-semibold text-xl mb-2 text-glow-cyan">English</p>
                  <p className="text-sm text-muted-foreground">Fluent</p>
                </div>
                <div className="flex-1 glass-panel p-6 rounded-2xl text-center border-neon group hover:glow-neon transition-all">
                  <p className="font-display font-semibold text-xl mb-2 text-glow-cyan">Tamil</p>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
