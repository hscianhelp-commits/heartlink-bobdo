import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  iconBgColor?: string;
  iconColor?: string;
}

const PageHeader = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  iconBgColor = "bg-red-50", 
  iconColor = "text-primary" 
}: PageHeaderProps) => {
  return (
    <div className="text-center mb-6">
      <div className={`w-16 h-16 rounded-2xl ${iconBgColor} flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;