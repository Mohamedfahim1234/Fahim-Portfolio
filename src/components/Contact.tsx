import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mdfahim52060@gmail.com",
      href: "mailto:mdfahim52060@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7010730182",
      href: "tel:+917010730182"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sithayankottai, Dindigul, Tamil Nadu",
      href: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Mohamedfahim1234",
      href: "https://github.com/Mohamedfahim1234"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mohamed Fahim R",
      href: "https://www.linkedin.com/in/mohamed-fahim-b9256825b"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-neon mb-4 animate-reveal">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full glow-neon" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-neon p-10 rounded-3xl border-neon hover-lift-neon">
            <h3 className="text-3xl font-display font-bold mb-8 text-glow-cyan">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  className="glass-panel border-primary/20 focus:border-primary focus:glow-neon transition-all text-foreground h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="glass-panel border-primary/20 focus:border-primary focus:glow-neon transition-all text-foreground h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-muted-foreground">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="glass-panel border-primary/20 focus:border-primary focus:glow-neon transition-all resize-none text-foreground"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-transparent border-neon hover:bg-primary/20 text-primary font-display text-lg h-14 glow-neon pulse-neon"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-neon p-10 rounded-3xl border-neon hover-lift-neon">
              <h3 className="text-3xl font-display font-bold mb-8 text-glow-purple">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-transparent rounded-xl group-hover:glow-neon transition-all border border-primary/30">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-glow-cyan transition-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-neon p-10 rounded-3xl text-center border-neon hover-lift-neon">
              <p className="text-muted-foreground mb-6 text-lg">
                Open to new opportunities and collaborations
              </p>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/Mohamedfahim1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-panel rounded-2xl hover:glow-neon transition-all group border border-primary/30"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-fahim-b9256825b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-panel rounded-2xl hover:glow-purple transition-all group border border-secondary/30"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-7 w-7 text-secondary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
