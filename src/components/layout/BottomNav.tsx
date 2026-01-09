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
    <nav className="bottom-nav h-16 flex items-center justify-around px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center py-2 px-4 transition-all duration-200"
          >
            <div
              className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200 ${
                isActive 
                  ? "bg-primary/15 shadow-md" 
                  : "hover:bg-muted"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <span className={`text-xs mt-1 font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
