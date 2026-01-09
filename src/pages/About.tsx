import { Users, Heart, Award, Eye, Target, Shield, Handshake, Facebook, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const stats = [
  { value: "৭০০০০+", label: "সদস্য সংখ্যা" },
  { value: "২৫০০+", label: "নিবন্ধিত দাতা" },
  { value: "৫০০০+", label: "জীবন রক্ষা" },
  { value: "১০০+", label: "স্বেচ্ছাসেবক" },
];

const goals = [
  "নিরাপদ ও পর্যাপ্ত রক্তের যোগান নিশ্চিত করা",
  "রক্তদান সম্পর্কে জনসচেতনতা বৃদ্ধি করা",
  "জরুরি মুহূর্তে ২৪/৭ সেবা প্রদান করা",
  "প্রাথমিক চিকিৎসা বিষয়ে প্রশিক্ষণ প্রদান",
  "দরিদ্র রোগীদের চিকিৎসা সহায়তা প্রদান",
];

const values = [
  { icon: Heart, title: "মানবতা", desc: "সকল মানুষের প্রতি সমান ভালোবাসা ও সম্মান" },
  { icon: Handshake, title: "সেবা", desc: "নিঃস্বার্থ সেবা প্রদানের প্রতিশ্রুতি" },
  { icon: Eye, title: "স্বচ্ছতা", desc: "সব কার্যক্রমে পূর্ণ স্বচ্ছতা ও জবাবদিহিতা" },
  { icon: Shield, title: "দায়বদ্ধতা", desc: "সমাজের প্রতি আমাদের দায়বদ্ধতা ও অঙ্গীকার" },
];

const leadership = [
  { name: "মোঃ সোহেল মিয়া", role: "প্রতিষ্ঠাতা ও পরিচালক" },
  { name: "শৈবাল খলিফ ছোটন", role: "প্রধান সমন্বয়ক" },
  { name: "রাহিদ হাসান", role: "প্রশাসন ও এইচআর প্রধান" },
  { name: "মোঃ আব্দুল আজিজ", role: "হিসাবরক্ষক" },
];

const coordinators = ["জয়া", "শশী", "সুলতান", "মাহি", "নাঈম", "সাব্বির"];
const teams = ["মতিউর", "লাল সবুজ", "অকুতোভয়", "জাগ্রত", "বিজয়", "বীর সেনা"];

const socialContacts = [
  {
    href: "https://www.facebook.com/bobdo.official",
    icon: Facebook,
    label: "ফেসবুক পেজ",
    color: "bg-blue-50",
  },
  {
    href: "https://www.facebook.com/groups/BOBO.BD",
    icon: Users,
    label: "ফেসবুক গ্রুপ",
    color: "bg-indigo-50",
  },
  {
    href: "mailto:bobdo.bd@gmail.com",
    icon: Mail,
    label: "ইমেইল",
    color: "bg-red-50",
  },
  {
    href: "tel:01722528164",
    icon: Phone,
    label: "ফোন",
    color: "bg-green-50",
  },
];

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="hero-curved-bottom pt-20 pb-16 px-4">
        <div className="flex flex-col items-center text-center text-white">
          {/* Logo with white circular background */}
          <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 p-2">
            <img
              src="https://bobdo.vercel.app/bobdo.png"
              alt="BOBDO Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-bold mb-2">
            বগুড়া অনলাইন রক্তদান সংগঠন
          </h1>
          <p className="text-white/90 text-sm">
            স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
          </p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* About */}
        <div className="card-native">
          <h2 className="section-title flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            আমাদের পরিচয়
          </h2>
          <p className="text-foreground leading-relaxed">
            বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) একটি অলাভজনক সামাজিক সংগঠন যা ২০১৬ সালে
            প্রতিষ্ঠিত হয়েছে। আমাদের মূল উদ্দেশ্য হলো বগুড়া জেলায় রক্তের সংকট দূরীকরণ এবং
            জরুরি মুহূর্তে মানুষের পাশে দাঁড়ানো। আমরা একটি সম্পূর্ণ স্বেচ্ছাসেবী সংগঠন
            যেখানে সকল সদস্য বিনামূল্যে সেবা প্রদান করে।
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="card-native text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Goals */}
        <div className="card-native">
          <h2 className="section-title flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            আমাদের লক্ষ্য
          </h2>
          <ul className="space-y-2">
            {goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground">
                <span className="text-primary">✓</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Values */}
        <div className="card-native">
          <h2 className="section-title">আমাদের মূল্যবোধ</h2>
          <div className="grid grid-cols-2 gap-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-muted rounded-xl p-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{value.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership */}
        <div className="card-native">
          <h2 className="section-title flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            নেতৃত্ব
          </h2>
          <div className="space-y-3">
            {leadership.map((person, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted rounded-xl p-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinators */}
        <div className="card-native">
          <h2 className="section-title">সমন্বয়কারী</h2>
          <div className="flex flex-wrap gap-2">
            {coordinators.map((name, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Teams */}
        <div className="card-native">
          <h2 className="section-title">আমাদের টিম</h2>
          <div className="flex flex-wrap gap-2">
            {teams.map((name, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-muted text-foreground text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Social Contacts */}
        <div className="card-native">
          <h2 className="section-title flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            যোগাযোগ করুন
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {socialContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 bg-muted rounded-xl p-3 transition-all active:scale-95"
                >
                  <div className={`w-10 h-10 rounded-xl ${contact.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{contact.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Office Address */}
        <div className="card-native">
          <h2 className="section-title flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            অফিস ঠিকানা
          </h2>
          <p className="text-foreground mb-4">
            বি আর টি সি শপিং কমপ্লক্স ৩য় তলা, সাতমাথা, বগুড়া
          </p>
          
          {/* Google Map */}
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7240.923283655437!2d89.372963!3d24.848078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5588105b94a3%3A0x5502254b1806651f!2sBogra%20Online%20Blood%20Donation%20Organization%20(BOBDO)!5e0!3m2!1sen!2sbd!4v1759947075752!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BOBDO Office Location"
            />
          </div>
        </div>

        {/* Developer Credits */}
        <div className="card-native text-center">
          <p className="text-sm text-muted-foreground mb-2">Developed by:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://ziptocode.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
            >
              ZiptoCode Tech Solution
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://ridoan-zisan.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
            >
              Md Ridoan Mahmud Zisan
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
