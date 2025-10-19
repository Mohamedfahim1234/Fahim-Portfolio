import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-primary/10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-muted-foreground flex items-center justify-center gap-2 mb-3 text-lg">
          Crafted with 
          <Zap className="h-5 w-5 text-primary fill-primary animate-pulse" /> 
          by <span className="text-glow-cyan font-display font-semibold">Mohamed Fahim R</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved • Futuristic Portfolio Experience
        </p>
      </div>
    </footer>
  );
};

export default Footer;
