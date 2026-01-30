import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn("p-8 rounded-2xl glass-effect hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group", className)}>
      <div className="w-16 h-16 rounded-2xl premium-gradient flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;