import { ExternalLink, UserPlus, CheckCircle, AlertTriangle, Heart } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import BloodGroupChart from "@/components/shared/BloodGroupChart";

const conditions = [
  "বয়স ১৮ থেকে ৬০ বছরের মধ্যে হতে হবে",
  "ওজন কমপক্ষে ৫০ কেজি হতে হবে",
  "সুস্থ ও রোগমুক্ত হতে হবে",
  "গত ৪ মাসে রক্ত দেননি",
  "গর্ভবতী বা স্তন্যদানকারী মা নন",
  "কোনো সংক্রামক রোগ নেই",
  "মাদকাসক্ত নন",
];

const process = [
  { step: "নিবন্ধন", desc: "ফর্ম পূরণ করে নিবন্ধন করুন" },
  { step: "স্ক্রিনিং", desc: "স্বাস্থ্য পরীক্ষা ও রক্তচাপ মাপা" },
  { step: "রক্তদান", desc: "৮-১০ মিনিটে রক্তদান সম্পন্ন" },
  { step: "বিশ্রাম", desc: "১৫-২০ মিনিট বিশ্রাম ও খাবার" },
];

const precautions = [
  "রক্তদানের আগে ভালো ঘুম নিন",
  "পর্যাপ্ত পানি পান করুন",
  "হালকা খাবার খান",
  "রক্তদানের পর ভারী কাজ এড়িয়ে চলুন",
  "২৪ ঘণ্টা মদ্যপান এড়িয়ে চলুন",
];

const benefits = [
  "হৃদরোগের ঝুঁকি কমায়",
  "ক্যান্সারের ঝুঁকি হ্রাস করে",
  "রক্ত উৎপাদন বাড়ায়",
  "মানসিক প্রশান্তি দেয়",
  "ফ্রি হেলথ চেকআপ পাওয়া যায়",
  "৩টি জীবন বাঁচাতে পারেন",
];

const BecomeDonor = () => {
  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <PageHeader 
        icon={UserPlus} 
        title="ডোনার হন" 
        subtitle="রক্তদান করে জীবন বাঁচান"
        iconBgColor="bg-green-50"
        iconColor="text-green-500"
      />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdaQ3_aRcF8Fn306NamZZ87AKy4Vu-e5wiQ92jPNLdChWfUrA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full btn-primary text-center py-4"
      >
        <span className="flex items-center justify-center gap-2">
          রক্তদাতা ফর্ম পূরণ করুন
          <ExternalLink className="w-4 h-4" />
        </span>
      </a>

      {/* Conditions */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          রক্তদানের শর্ত
        </h2>
        <ul className="space-y-3">
          {conditions.map((condition, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </span>
              {condition}
            </li>
          ))}
        </ul>
      </div>

      {/* Blood Group Chart */}
      <div className="card-native">
        <h2 className="section-title">রক্তের গ্রুপ চার্ট</h2>
        <BloodGroupChart />
      </div>

      {/* Donation Process */}
      <div className="card-native">
        <h2 className="section-title">রক্তদানের প্রক্রিয়া</h2>
        <div className="space-y-4">
          {process.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-foreground">{item.step}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Precautions */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          সতর্কতা
        </h2>
        <ul className="space-y-3">
          {precautions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground">
              <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 text-sm">⚠</span>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          রক্তদানের উপকারিতা
        </h2>
        <ul className="space-y-3">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">♥</span>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BecomeDonor;