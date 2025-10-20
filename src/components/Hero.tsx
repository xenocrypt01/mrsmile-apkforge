import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-glow" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-md border border-primary/30 shadow-glow-primary">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">Mr Smile Modders™ Projects</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Advanced APK
            </span>
            <br />
            <span className="text-foreground">Modding Tool</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Customize, modify, and rebuild Android apps with professional-grade tools. 
            No coding knowledge required.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">Decompile & Recompile</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/30 backdrop-blur-sm border border-secondary/20">
              <Smartphone className="w-5 h-5 text-secondary" />
              <span className="text-sm text-foreground">UI Customization</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/20">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm text-foreground">One-Click Patching</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Start Modding
            </Button>
            <Button variant="cyber" size="lg" className="min-w-[200px]">
              View Features
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
