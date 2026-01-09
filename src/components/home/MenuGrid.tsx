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
  { path: "/find-donor", icon: Search, label: "ডোনার খুঁজুন", bgColor: "bg-red-100", iconColor: "text-red-500" },
  { path: "/become-donor", icon: UserPlus, label: "ডোনার হন", bgColor: "bg-green-100", iconColor: "text-green-500" },
  { path: "/volunteer", icon: Users, label: "স্বেচ্ছাসেবক", bgColor: "bg-cyan-100", iconColor: "text-cyan-600" },
  { path: "/donation", icon: Heart, label: "অনুদান", bgColor: "bg-pink-100", iconColor: "text-pink-500" },
  { path: "/hospitals", icon: Building2, label: "হাসপাতাল", bgColor: "bg-purple-100", iconColor: "text-purple-500" },
  { path: "/first-aid", icon: Cross, label: "প্রাথমিক চিকিৎসা", bgColor: "bg-rose-100", iconColor: "text-rose-500" },
  { path: "/certificate", icon: Award, label: "সার্টিফিকেট", bgColor: "bg-orange-100", iconColor: "text-orange-500" },
  { path: "/notice", icon: Bell, label: "নোটিশ", bgColor: "bg-blue-100", iconColor: "text-blue-500" },
  { path: "/emergency", icon: AlertCircle, label: "জরুরি", bgColor: "bg-amber-100", iconColor: "text-amber-500" },
  { path: "/about", icon: Info, label: "আমাদের সম্পর্কে", bgColor: "bg-sky-100", iconColor: "text-sky-500" },
];

const MenuGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all active:scale-[0.98] hover:shadow-md"
          >
            <div className={`w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center`}>
              <Icon className={`w-8 h-8 ${item.iconColor}`} />
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
