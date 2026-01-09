import { Bell, AlertTriangle, Users, Heart, Calendar, Award } from "lucide-react";

const notices = [
  {
    icon: AlertTriangle,
    title: "জরুরি রক্তের সংকট",
    content: "বর্তমানে O-নেগেটিভ ও AB-নেগেটিভ রক্তের তীব্র সংকট চলছে। সক্ষম দাতাদের এগিয়ে আসার অনুরোধ করা হচ্ছে।",
    type: "urgent",
  },
  {
    icon: Calendar,
    title: "মাসিক মিটিংয়ে উপস্থিত হোন",
    content: "আগামী সপ্তাহে মাসিক আলোচনা সভা অনুষ্ঠিত হবে। সকল সদস্যদের উপস্থিতি বাধ্যতামূলক।",
    type: "meeting",
  },
  {
    icon: Users,
    title: "নতুন স্বেচ্ছাসেবক প্রয়োজন",
    content: "আমাদের টিমে নতুন স্বেচ্ছাসেবক প্রয়োজন। আগ্রহীরা স্বেচ্ছাসেবক ফর্ম পূরণ করুন।",
    type: "recruitment",
  },
  {
    icon: Heart,
    title: "রক্তদাতাদের ধন্যবাদ",
    content: "গত মাসে রক্তদান করে যারা জীবন বাঁচিয়েছেন তাদের সকলকে আন্তরিক ধন্যবাদ ও কৃতজ্ঞতা জানাচ্ছি।",
    type: "appreciation",
  },
  {
    icon: Bell,
    title: "রক্তদান ক্যাম্পেইন",
    content: "শীঘ্রই বগুড়া শহরে বড় রক্তদান ক্যাম্পেইন আয়োজন করা হবে। বিস্তারিত পরে জানানো হবে।",
    type: "event",
  },
  {
    icon: Award,
    title: "সার্টিফিকেট বিতরণ",
    content: "যোগ্য রক্তদাতা ও স্বেচ্ছাসেবকদের সার্টিফিকেট বিতরণ অনুষ্ঠান শীঘ্রই অনুষ্ঠিত হবে।",
    type: "certificate",
  },
  {
    icon: Users,
    title: "টিম লিডার নিয়োগ",
    content: "নতুন টিম গঠনের জন্য অভিজ্ঞ টিম লিডার প্রয়োজন। আগ্রহীরা সমন্বয়কারীদের সাথে যোগাযোগ করুন।",
    type: "recruitment",
  },
  {
    icon: Heart,
    title: "সফল রক্তদান",
    content: "গত সপ্তাহে ১৫ জন রোগীর জীবন রক্ষায় সফল রক্তদান সম্পন্ন হয়েছে। সকল দাতাদের ধন্যবাদ।",
    type: "success",
  },
  {
    icon: Bell,
    title: "অফিস সময়সূচি",
    content: "অফিস প্রতিদিন বিকেল ৪টা থেকে রাত ৯টা পর্যন্ত খোলা থাকে। জরুরি যোগাযোগের জন্য হেল্পলাইনে কল করুন।",
    type: "info",
  },
  {
    icon: Calendar,
    title: "প্রশিক্ষণ কর্মশালা",
    content: "নতুন স্বেচ্ছাসেবকদের জন্য প্রশিক্ষণ কর্মশালা আয়োজন করা হবে। আগ্রহীরা নিবন্ধন করুন।",
    type: "training",
  },
];

const Notice = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-red-50 border-red-200";
      case "meeting":
        return "bg-blue-50 border-blue-200";
      case "recruitment":
        return "bg-green-50 border-green-200";
      case "appreciation":
        return "bg-pink-50 border-pink-200";
      case "event":
        return "bg-purple-50 border-purple-200";
      case "certificate":
        return "bg-amber-50 border-amber-200";
      case "success":
        return "bg-emerald-50 border-emerald-200";
      case "info":
        return "bg-slate-50 border-slate-200";
      case "training":
        return "bg-indigo-50 border-indigo-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "text-red-500";
      case "meeting":
        return "text-blue-500";
      case "recruitment":
        return "text-green-500";
      case "appreciation":
        return "text-pink-500";
      case "event":
        return "text-purple-500";
      case "certificate":
        return "text-amber-500";
      case "success":
        return "text-emerald-500";
      case "info":
        return "text-slate-500";
      case "training":
        return "text-indigo-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">নোটিশ</h1>
        <p className="text-muted-foreground">
          সংগঠনের সর্বশেষ আপডেট
        </p>
      </div>

      <div className="space-y-4">
        {notices.map((notice, index) => {
          const Icon = notice.icon;
          return (
            <div
              key={index}
              className={`rounded-2xl p-4 border ${getTypeColor(notice.type)}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${getIconColor(notice.type)}`} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground">{notice.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notice;
