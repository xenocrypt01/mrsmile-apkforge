import FeatureCard from "./FeatureCard";
import { 
  Package, 
  Palette, 
  Shield, 
  FileCode, 
  Wand2, 
  Download,
  Eye,
  Lock
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Package,
      title: "APK Decompile & Recompile",
      description: "Extract and rebuild APK files with ease. Full control over app structure and resources.",
      color: "primary" as const,
    },
    {
      icon: Palette,
      title: "UI Theme Editor",
      description: "Customize app icons, colors, backgrounds, and layouts with visual previews.",
      color: "secondary" as const,
    },
    {
      icon: FileCode,
      title: "Manifest & Resource Editor",
      description: "Edit permissions, activities, and XML resources through intuitive interface.",
      color: "accent" as const,
    },
    {
      icon: Wand2,
      title: "One-Click Patching",
      description: "Apply popular mods and patches without manual code editing.",
      color: "primary" as const,
    },
    {
      icon: Eye,
      title: "Live Preview",
      description: "See your changes in real-time before building the final APK.",
      color: "secondary" as const,
    },
    {
      icon: Shield,
      title: "Security Validation",
      description: "Automatic security checks ensure your modified APK remains safe and functional.",
      color: "accent" as const,
    },
    {
      icon: Download,
      title: "Export & Install",
      description: "Build and sign your modified APK ready for installation on any device.",
      color: "primary" as const,
    },
    {
      icon: Lock,
      title: "Signature Management",
      description: "Handle keystore creation and APK signing with built-in security tools.",
      color: "secondary" as const,
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-cyber opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to customize and modify Android applications like a pro
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
