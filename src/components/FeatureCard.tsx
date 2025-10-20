import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    primary: "border-primary/30 shadow-glow-primary hover:border-primary/50",
    secondary: "border-secondary/30 shadow-glow-secondary hover:border-secondary/50",
    accent: "border-accent/30 shadow-glow-accent hover:border-accent/50",
  };

  const iconColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <Card className={`p-6 bg-gradient-card backdrop-blur-md border ${colorClasses[color]} transition-all duration-300 hover:scale-105 group`}>
      <div className="space-y-4">
        <div className={`w-14 h-14 rounded-lg bg-${color}/10 flex items-center justify-center group-hover:animate-pulse-glow`}>
          <Icon className={`w-7 h-7 ${iconColorClasses[color]}`} />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
