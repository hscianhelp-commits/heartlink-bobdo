import { ExternalLink, Copy, Check, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageHeader from "@/components/shared/PageHeader";

const paymentMethods = [
  { name: "বিকাশ", number: "01722528164", color: "bg-pink-500" },
  { name: "নগদ", number: "01722528164", color: "bg-orange-500" },
  { name: "রকেট", number: "01722528164", color: "bg-purple-500" },
];

const instructions = [
  "উপরের যেকোনো একটি নম্বরে Send Money করুন",
  "রেফারেন্সে আপনার নাম লিখুন",
  "স্ক্রিনশট সংরক্ষণ করুন",
  "অনুদান ফর্ম পূরণ করুন",
];

const usages = [
  "অফিস ভাড়া ও রক্ষণাবেক্ষণ",
  "রক্তদান ক্যাম্পেইন আয়োজন",
  "সচেতনতামূলক সেমিনার",
  "দরিদ্র রোগীদের সহায়তা",
  "জরুরি পরিবহন খরচ",
  "প্রিন্টিং ও প্রচারণা সামগ্রী",
];

const Donation = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedNumber(number);
      toast.success("নম্বর কপি হয়েছে!");
      setTimeout(() => setCopiedNumber(null), 2000);
    } catch {
      toast.error("কপি করতে সমস্যা হয়েছে");
    }
  };

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <PageHeader
        icon={Heart}
        title="অনুদান"
        subtitle="আপনার অনুদান জীবন বাঁচাতে সাহায্য করে"
        iconBgColor="bg-pink-50"
        iconColor="text-pink-400"
      />

      {/* Payment Methods */}
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="card-native flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-12 h-12 rounded-xl ${method.color} text-white font-bold flex items-center justify-center text-sm`}
              >
                {method.name.slice(0, 2)}
              </span>
              <div>
                <h3 className="font-medium text-foreground">{method.name}</h3>
                <p className="text-lg font-bold text-primary">{method.number}</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy(method.number)}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-primary/10"
            >
              {copiedNumber === method.number ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Donation Form */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeRg5unKNOp5OAalKuoPS0FZ2y1W7TUEt5MXvhUKIv-lnt7NA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full btn-primary text-center py-4"
      >
        <span className="flex items-center justify-center gap-2">
          অনুদান ফর্ম পূরণ করুন
          <ExternalLink className="w-4 h-4" />
        </span>
      </a>

      {/* Payment Instructions */}
      <div className="card-native">
        <h2 className="section-title">পেমেন্ট নির্দেশনা</h2>
        <div className="space-y-3">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-foreground">{instruction}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="card-native">
        <h2 className="section-title">অনুদানের ব্যবহার</h2>
        <ul className="space-y-2">
          {usages.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Transparency Note */}
      <div className="info-card">
        <p className="text-sm text-foreground">
          <span className="font-bold text-primary">স্বচ্ছতা:</span> প্রতি মাসে আয়-ব্যয়ের হিসাব
          ফেসবুক পেজ ও গ্রুপে প্রকাশ করা হয়।
        </p>
      </div>
    </div>
  );
};

export default Donation;
