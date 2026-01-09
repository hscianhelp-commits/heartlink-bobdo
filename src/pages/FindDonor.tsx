import { Copy, ExternalLink, Check, Search, Clipboard, Heart } from "lucide-react";
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
  "উপরের বাটনে ক্লিক করুন",
  "টেমপ্লেট কপি হয়ে যাবে",
  "ফেসবুক গ্রুপে যান",
  "নতুন পোস্ট লিখুন ক্লিক করুন",
  "পেস্ট করুন এবং তথ্য পূরণ করুন",
  "পোস্ট করুন",
];

const duties = [
  "রক্তদাতাকে ধন্যবাদ জানান",
  "রক্তদানের পর বিশ্রাম ও খাবার নিশ্চিত করুন",
  "প্রয়োজনে যাতায়াত সুবিধা দিন",
  "সঠিক তথ্য প্রদান করুন",
  "সময়মতো যোগাযোগ করুন",
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
        className="w-full btn-primary flex items-center justify-center gap-2 py-4"
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

      {/* Steps */}
      <div className="card-native">
        <h2 className="section-title flex items-center gap-2">
          <Clipboard className="w-5 h-5 text-primary" />
          ফেসবুক গ্রুপে পোস্ট করার ধাপ সমূহ
        </h2>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-foreground pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Info */}
      <div className="card-native">
        <h2 className="section-title">প্রয়োজনীয় তথ্য</h2>
        <div className="bg-muted rounded-xl p-4">
          <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
            {postTemplate}
          </pre>
        </div>
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
                <span className="text-primary text-sm">✓</span>
              </span>
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FindDonor;
