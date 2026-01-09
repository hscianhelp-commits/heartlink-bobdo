import { ExternalLink, Award } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

const certificates = [
  {
    title: "রক্তদাতা সার্টিফিকেট",
    eligibility: [
      "BOBDO এর মাধ্যমে কমপক্ষে ৩ বার রক্তদান করেছেন",
      "রক্তদানের রেকর্ড সংরক্ষিত আছে",
      "BOBDO এর সাথে নিবন্ধিত",
    ],
    formLink: "https://forms.gle/BTTHxTawvvsjnRtK6",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    title: "স্বেচ্ছাসেবক সার্টিফিকেট",
    eligibility: [
      "কমপক্ষে ৬ মাস সক্রিয় স্বেচ্ছাসেবক হিসেবে কাজ করেছেন",
      "কমপক্ষে ১০ জন রক্তদাতা ম্যানেজ করেছেন",
      "নিয়মিত মিটিং ও কার্যক্রমে অংশগ্রহণ করেছেন",
      "মাসিক চাঁদা নিয়মিত প্রদান করেছেন",
    ],
    formLink: "https://forms.gle/BTTHxTawvvsjnRtK6",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

const applicationProcess = [
  "উপরে আপনার ক্যাটাগরি নির্বাচন করুন",
  "আবেদনের যোগ্যতা পূরণ হয়েছে কিনা নিশ্চিত হন",
  "গুগল ফর্মে ক্লিক করে ফর্ম পূরণ করুন",
  "সঠিক তথ্য প্রদান করুন",
  "আবেদন জমা দিন",
  "যাচাই-বাছাইয়ের পর সার্টিফিকেট প্রদান করা হবে",
];

const Certificate = () => {
  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <PageHeader
        icon={Award}
        title="সার্টিফিকেট"
        subtitle="আপনার অবদানের স্বীকৃতি"
        iconBgColor="bg-amber-50"
        iconColor="text-amber-500"
      />

      {/* Certificate Types */}
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="card-native">
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl ${cert.color} flex items-center justify-center flex-shrink-0`}>
                <Award className={`w-6 h-6 ${cert.iconColor}`} />
              </div>
              <h3 className="font-bold text-foreground text-lg">{cert.title}</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-foreground mb-2">আবেদন যোগ্যতা:</h4>
              <ul className="space-y-2">
                {cert.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={cert.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-primary text-center py-3"
            >
              <span className="flex items-center justify-center gap-2">
                আবেদন করুন
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Application Process */}
      <div className="card-native">
        <h2 className="section-title">আবেদন প্রক্রিয়া</h2>
        <div className="space-y-3">
          {applicationProcess.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="info-card">
        <p className="text-sm text-foreground">
          <span className="font-bold text-primary">দ্রষ্টব্য:</span> সার্টিফিকেট যাচাই-বাছাইয়ের
          পর ডিজিটাল ও হার্ড কপি উভয়ই প্রদান করা হয়।
        </p>
      </div>
    </div>
  );
};

export default Certificate;
