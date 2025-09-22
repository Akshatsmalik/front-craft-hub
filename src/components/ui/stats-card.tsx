import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  gradient?: "card-1" | "card-2" | "card-3" | "card-4";
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  gradient = "card-1",
  className 
}: StatsCardProps) {
  return (
    <Card className={cn(
      "relative p-6 border-0 text-white overflow-hidden",
      `bg-gradient-${gradient}`,
      className
    )}>
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold text-white mt-2">{value}</p>
            {subtitle && (
              <p className="text-white/70 text-sm mt-1">{subtitle}</p>
            )}
          </div>
          <div className="rounded-full bg-white/10 p-3">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10" />
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5" />
    </Card>
  );
}