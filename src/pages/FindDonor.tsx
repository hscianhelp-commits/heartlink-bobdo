import { Copy, ExternalLink, Check, Search, Clipboard, Heart, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageHeader from "@/components/shared/PageHeader";
import BloodGroupChart from "@/components/shared/BloodGroupChart";

const postTemplate = `🩸 জরুরী রক্তের প্রয়োজন 🩸
👤 রোগী নাম:
🩺 রোগীর সমস্যা:
🧬 রক্তের গ্রুপ:
🩸 রক্তের পরিমাণ:
💉 প্লেটলেটের পরিমাণ:
📅 তারিখ:
⏰ সময়:
📍 ঠিকানা:
📞 যোগাযোগ:
🔗 রেফারেন্স:BOBDO(https://bobdo.vercel.app)
#BOBDO #রক্তদান #বগুড়া #BloodDonation #BOBDOapp`;

const steps = [
  { step: "বাটন ক্লিক", desc: "উপরের বাটনে ক্লিক করুন" },
  { step: "কপি", desc: "টেমপ্লেট কপি হয়ে যাবে" },
  { step: "গ্রুপে যান", desc: "ফেসবুক গ্রুপে যান" },
  { step: "পোস্ট করুন", desc: "তথ্য পূরণ করে পোস্ট করুন" },
];

const duties = [
  "রক্তদাতাকে ধন্যবাদ জানান",
  "রক্তদানের পর বিশ্রাম ও খাবার নিশ্চিত করুন",
  "প্রয়োজনে যাতায়াত সুবিধা দিন",
  "সঠিক তথ্য প্রদান করুন",
  "সময়মতো যোগাযোগ করুন",
];

const tips = [
  "পোস্টে সঠিক ও সম্পূর্ণ তথ্য দিন",
  "যোগাযোগ নম্বর সক্রিয় রাখুন",
  "হাসপাতালের সঠিক ঠিকানা দিন",
  "জরুরি হলে একাধিক গ্রুপে পোস্ট করুন",
  "রক্ত পেলে পোস্ট আপডেট করুন",
];

const FindDonor = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAndOpen = async () => {
    try {
      await navigator.clipboard.writeText(postTemplate);
      setCopied(true);
      toast.success("টেমপ্লেট কপি হয়েছে!");
      
      setTimeout(() => {
        window.open("https://www.facebook.com/groups/BOBO.BD", "_blank");
      }, 500);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("কপি করতে সমস্যা হয়েছে");
    }
  };

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <PageHeader 
        icon={Search} 
        title="ডোনার খুঁজুন" 
        subtitle="জরুরি রক্তের প্রয়োজনে ফেসবুক গ্রুপে পোস্ট করুন"
      />

<button
  onClick={handleCopyAndOpen}
  className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95"
>
  {copied ? (
    <>
      <Check className="w-5 h-5" />
      কপি হয়েছে! গ্রুপে যাচ্ছে...
    </>
  ) : (
    <>
      <Copy className="w-5 h-5" />
      গ্রুপে পোস্ট করুন
      <ExternalLink className="w-4 h-4" />
    </>
  )}
</button>

      {/* Steps - Like BecomeDonor process */}
      <div className="card-native">
        <h2 className="section-title">পোস্ট করার প্রক্রিয়া</h2>
        <div className="space-y-4">
          {steps.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-foreground">{item.step}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Template */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <Clipboard className="w-5 h-5 text-primary" />
          পোস্ট টেমপ্লেট
        </h2>
        <div className="bg-muted rounded-xl p-4">
          <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
            {postTemplate}
          </pre>
        </div>
      </div>

      {/* Tips */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          পোস্টের টিপস
        </h2>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Blood Group Chart */}
      <div className="card-native">
        <h2 className="section-title">রক্তের গ্রুপ চার্ট</h2>
        <BloodGroupChart />
      </div>

      {/* Duties */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          রক্তদাতাদের প্রতি কর্তব্য
        </h2>
        <ul className="space-y-3">
          {duties.map((duty, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm">♥</span>
              </span>
              {duty}
            </li>
          ))}
        </ul>
      </div>

      {/* Caution */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          সতর্কতা
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-sm">⚠</span>
            </span>
            কখনো রক্ত বিক্রির জন্য পোস্ট করবেন না
          </li>
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-sm">⚠</span>
            </span>
            ভুয়া তথ্য দিয়ে পোস্ট করবেন না
          </li>
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-sm">⚠</span>
            </span>
            রক্ত পেলে পোস্ট মুছে দিন বা আপডেট করুন
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FindDonor;
