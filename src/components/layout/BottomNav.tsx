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
    <nav className="fixed bottom-4 left-4 right-4 bg-white rounded-full shadow-[0_-4px_20px_rgba(0,0,0,0.1)] h-16 flex items-center justify-around px-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center py-2 px-4 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive ? "text-primary" : ""}`} />
            <span className="text-xs mt-0.5 font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
