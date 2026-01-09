import { Link, useLocation } from "react-router-dom";
import { Home, Search, AlertCircle, Info } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/find-donor", icon: Search, label: "Find Donor" },
  { path: "/emergency", icon: AlertCircle, label: "Emergency" },
  { path: "/about", icon: Info, label: "About" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav h-16 flex items-center justify-around px-2 bg-background border-t border-border">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center py-2 px-4"
          >
            <Icon className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs mt-1.5 font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
