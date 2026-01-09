import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Menu,
  X,
  Download,
  Home,
  Search,
  UserPlus,
  Users,
  Heart,
  Building2,
  Cross,
  Award,
  AlertCircle,
  Info,
} from "lucide-react";
import { usePWAInstall } from "@/hooks/usePWAInstall";

const menuItems = [
  { path: "/", label: "হোম", icon: Home },
  { path: "/find-donor", label: "ডোনার খুঁজুন", icon: Search },
  { path: "/become-donor", label: "ডোনার হন", icon: UserPlus },
  { path: "/volunteer", label: "স্বেচ্ছাসেবক", icon: Users },
  { path: "/donation", label: "অনুদান", icon: Heart },
  { path: "/hospitals", label: "হাসপাতাল", icon: Building2 },
  { path: "/first-aid", label: "প্রাথমিক চিকিৎসা", icon: Cross },
  { path: "/certificate", label: "সার্টিফিকেট", icon: Award },
  { path: "/notice", label: "নোটিশ", icon: Bell },
  { path: "/emergency", label: "জরুরি", icon: AlertCircle },
  { path: "/about", label: "আমাদের সম্পর্কে", icon: Info },
];

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { canInstall, promptInstall } = usePWAInstall();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header className="top-nav h-14 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://bobdo.vercel.app/bobdo.png"
            alt="BOBDO Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-primary text-lg">BOBDO</span>
        </Link>

        <div className="flex items-center gap-2">
          {canInstall && (
            <button
              onClick={promptInstall}
              className="btn-native bg-primary text-primary-foreground px-3 py-1.5 text-sm rounded-lg flex items-center gap-1"
            >
              <Download className="w-4 h-4" />
              Install
            </button>
          )}
          
          <button
            onClick={() => navigate("/notice")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors relative"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      {/* Slide-in Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-background shadow-xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <img
                src="https://bobdo.vercel.app/bobdo.png"
                alt="BOBDO Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-primary">BOBDO</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors text-foreground font-medium flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNav;