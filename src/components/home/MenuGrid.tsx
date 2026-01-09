import { Link } from "react-router-dom";
import {
  Search,
  UserPlus,
  Users,
  Heart,
  Building2,
  Cross,
  Award,
  Bell,
  AlertCircle,
  Info,
} from "lucide-react";

const menuItems = [
  { path: "/find-donor", icon: Search, label: "ডোনার খুঁজুন", bgColor: "bg-red-50", iconColor: "text-red-500" },
  { path: "/become-donor", icon: UserPlus, label: "ডোনার হন", bgColor: "bg-green-50", iconColor: "text-green-500" },
  { path: "/volunteer", icon: Users, label: "স্বেচ্ছাসেবক", bgColor: "bg-blue-50", iconColor: "text-blue-500" },
  { path: "/donation", icon: Heart, label: "অনুদান", bgColor: "bg-pink-50", iconColor: "text-pink-400" },
  { path: "/hospitals", icon: Building2, label: "হাসপাতাল", bgColor: "bg-purple-50", iconColor: "text-purple-500" },
  { path: "/first-aid", icon: Cross, label: "প্রাথমিক চিকিৎসা", bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  { path: "/certificate", icon: Award, label: "সার্টিফিকেট", bgColor: "bg-amber-50", iconColor: "text-amber-500" },
  { path: "/notice", icon: Bell, label: "নোটিশ", bgColor: "bg-blue-100", iconColor: "text-blue-500" },
  { path: "/emergency", icon: AlertCircle, label: "জরুরি", bgColor: "bg-orange-50", iconColor: "text-orange-500" },
  { path: "/about", icon: Info, label: "আমাদের সম্পর্কে", bgColor: "bg-teal-50", iconColor: "text-teal-500" },
];

const MenuGrid = () => {
  return (
    <div className="grid-menu">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="menu-item"
          >
            <div className={`menu-item-icon ${item.bgColor}`}>
              <Icon className={`w-6 h-6 ${item.iconColor}`} />
            </div>
            <span className="text-sm font-medium text-foreground text-center">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuGrid;
