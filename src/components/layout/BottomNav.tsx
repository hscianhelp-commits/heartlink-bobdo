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
    <nav className="bottom-nav h-16 flex items-center justify-around px-2">
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
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${
                isActive ? "bg-primary/10" : ""
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
            </div>
            <span className="text-xs mt-0.5 font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
