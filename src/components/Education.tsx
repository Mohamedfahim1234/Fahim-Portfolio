import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "2022 - 2026",
      institution: "Jeppiaar Institute of Technology",
      degree: "B.Tech Information Technology",
      score: "CGPA 7.56",
      status: "Pursuing"
    },
    {
      year: "2021 - 2022",
      institution: "Cheran Vidhayalaya Matric Hr Sec School",
      degree: "Higher Secondary Certificate (HSC)",
      score: "73%",
      status: "Completed"
    },
    {
      year: "2019 - 2020",
      institution: "Cheran Vidhayalaya Matric Hr Sec School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      score: "81%",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      name: "AWS Skill Builder",
      issuer: "Amazon Web Services",
      icon: Award
    },
    {
      name: "Web Development",
      issuer: "Infosys Springboard",
      icon: Award
    },
    {
      name: "JavaScript",
      issuer: "Udemy",
      icon: Award
    },
    {
      name: "DBMS",
      issuer: "NPTEL",
      icon: Award
    },
    {
      name: "Python Internship",
      issuer: "Nexilo Tech",
      icon: Award
    },
    {
      name: "2nd Place - Paper Presentation",
      issuer: "Ecomine",
      icon: Award
    },
    {
      name: "Infosys Springboard",
      issuer: "Infosys",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-neon mb-4 animate-reveal">
            Education & Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full glow-neon" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-10 text-glow-cyan flex items-center gap-3">
              <GraduationCap className="h-8 w-8" />
              Academic Journey
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="glass-neon p-8 rounded-2xl hover-lift-neon relative pl-10 border-l-4 border-primary glow-neon"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-0 top-8 w-5 h-5 bg-primary rounded-full -translate-x-[14px] glow-neon pulse-neon" />
                  
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-glow-cyan font-display font-semibold">{item.year}</span>
                    <span className="text-xs px-3 py-1.5 glass-panel text-primary rounded-full border border-primary/30 font-medium">
                      {item.status}
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-xl mb-2 text-foreground">{item.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{item.institution}</p>
                  <p className="text-glow-purple font-display font-semibold text-lg">{item.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-10 text-glow-purple flex items-center gap-3">
              <Award className="h-8 w-8" />
              Certifications & Achievements
            </h3>
            <div className="grid gap-5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-neon p-6 rounded-2xl hover-lift-neon group border-neon relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-transparent rounded-xl group-hover:glow-neon transition-all border border-primary/30">
                      <cert.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-lg mb-1 text-glow-cyan">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
