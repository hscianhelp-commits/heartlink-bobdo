import { ExternalLink, Users } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

const qualifications = [
  "বয়স ১৬ বছরের উপরে হতে হবে",
  "বগুড়া জেলায় বসবাস করতে হবে",
  "সততা ও দায়িত্ববোধ থাকতে হবে",
  "মানবসেবায় আগ্রহী হতে হবে",
  "নিয়মিত যোগাযোগ রাখতে সক্ষম হতে হবে",
];

const structure = [
  "প্রধান কাজ: অসহায় রোগীদের জন্য রক্ত ম্যানেজ করা, দুর্যোগকালীন সময়ে মানুষের পাশে দাঁড়ানো ও অন্যান্য মানবিক কাজ।",
  "প্রতিদিন অন্তত একজন ডোনার ম্যানেজ করার চেষ্টা করতে হবে। সম্ভব না হলে মাসে অন্তত ৫ জন ডোনার ম্যানেজ করে ৫ জন অসহায় রোগীকে সাহায্য করতে হবে।",
  "সংগঠনে কোনো স্থায়ী কমিটি নেই। কাজের সুবিধার্থে ৬টি টিমে ভাগ করা হয়েছে।",
  "প্রতিটি টিমে একজন টিম লিডার/কো-অর্ডিনেটর আছেন। কোনো সমস্যা থাকলে টিম লিডারের সাথে যোগাযোগ করতে হবে।",
  "প্রতি মাসে আলোচনা সভা অনুষ্ঠিত হয়। সকল সদস্যের উপস্থিতি বাধ্যতামূলক, সমস্যা থাকলে টিম লিডারকে জানাতে হবে।",
  "সংগঠন পরিচালনার জন্য একটি অফিস রয়েছে। অফিস ভাড়া, ক্যাম্পেইন, সেমিনার ইত্যাদি খরচের জন্য ফান্ড গঠন করা হয়েছে।",
  "সদস্যদের মাসিক চাঁদা সর্বনিম্ন ৫০ টাকা। সামর্থ্য অনুযায়ী অতিরিক্ত দিতে পারবেন।",
  "চাঁদা প্রতি মাসের ১০ তারিখের মধ্যে টিম লিডারকে জমা দিতে হবে। সমস্যায় পড়লে টিম লিডারকে জানাতে হবে।",
  "আমাদের একজন কোষাধ্যক্ষ আছেন যিনি প্রতিমাসে আয়-ব্যয়ের হিসাব স্বচ্ছতার সাথে প্রকাশ করেন।",
];

const cancellationRules = [
  '"BOBDO" কোন সদস্য যদি একটানা ৩ মাসের মাসিক ফি প্রদান না করেন।',
  '"BOBDO" এর দায়িত্ব ও কর্তব্য যদি যথারীতি পালন না করেন বা সংগঠনের কাজে নিষ্ক্রিয় হয়ে পড়েন।',
  '"BOBDO" প্রাসঙ্গিক কারণে কোন সদস্যকে বহিষ্কার করার এখতিয়ার সংগঠনের প্রধান ব্যক্তিগণ সংরক্ষণ করেন।',
  "৩ মাস কার্যকরী পরিষদের সভায় অনুপস্থিত থাকলে সদস্যপদ বাতিল হবে (যদি দায়িত্বশীলকে না জানানো হয়)।",
  '"BOBDO" এর কোন সদস্য মাদকাসক্ত হলে।',
  "সদস্যদের প্রদত্ত সকল প্রকার চাঁদা অফেরতযোগ্য এবং তা দান বলিয়া গণ্য হবে।",
  "সংগঠনকে রাজনৈতিক প্রভাবমুক্ত রাখতে সদস্যদের সংঘবদ্ধ থাকতে হবে।",
  "প্রতিটি সদস্যকে প্রতি মাসে গ্রুপে অন্তত ৩টি পোস্ট করতে হবে।",
  "বগুড়া জেলায় অন্য কোন রক্তদান সংগঠনের সাথে যুক্ত হওয়া যাবে না।",
  "মেসেঞ্জার গ্রুপে কথা বলার পূর্বে কো-অর্ডিনেটরের সাথে আলোচনা করতে হবে।",
  "বিশেষ কারণে সংগঠন থেকে চলে যেতে চাইলে দায়িত্বশীলকে জানিয়ে আইডি কার্ড ফেরত দিতে হবে।",
];

const whyVolunteer = [
  "মানবসেবায় অংশগ্রহণের সুযোগ",
  "নেতৃত্ব ও দলগত কাজের অভিজ্ঞতা",
  "সামাজিক নেটওয়ার্ক বৃদ্ধি",
  "সার্টিফিকেট ও স্বীকৃতি",
  "জীবন বাঁচানোর সন্তুষ্টি",
];

const volunteerRoles = [
  "রক্তদাতা খোঁজা ও ম্যানেজ করা",
  "রোগী ও দাতার মধ্যে সমন্বয়",
  "সচেতনতামূলক ক্যাম্পেইন পরিচালনা",
  "সোশ্যাল মিডিয়া পরিচালনা",
  "অফিস ও প্রশাসনিক কাজ",
];

const Volunteer = () => {
  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <PageHeader
        icon={Users}
        title="স্বেচ্ছাসেবক হন"
        subtitle="মানবসেবায় যোগ দিন"
        iconBgColor="bg-blue-50"
        iconColor="text-blue-500"
      />

      <a
        href="https://docs.google.com/forms/d/1r6AHUr2biiREYTnF-Bqb0eK9YINEyPbAk52dqmMcLvc/viewform?edit_requested=true"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-blue-50 text-blue-600 font-semibold py-4 rounded-xl"
      >
        স্বেচ্ছাসেবক ফর্ম পূরণ করুন
        <ExternalLink className="w-4 h-4" />
      </a>

      {/* Qualifications */}
      <div className="card-native">
        <h2 className="section-title">প্রয়োজনীয় যোগ্যতা</h2>
        <ul className="space-y-2">
          {qualifications.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-primary">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Volunteer */}
      <div className="card-native">
        <h2 className="section-title">কেন স্বেচ্ছাসেবক হবেন</h2>
        <ul className="space-y-2">
          {whyVolunteer.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-green-500">★</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Volunteer Roles */}
      <div className="card-native">
        <h2 className="section-title">স্বেচ্ছাসেবকের ভূমিকা</h2>
        <ul className="space-y-2">
          {volunteerRoles.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Organization Structure */}
      <div className="card-native">
        <h2 className="section-title">সংগঠনের ভূমিকা ও কাঠামো</h2>
        <ul className="space-y-3">
          {structure.map((item, index) => (
            <li key={index} className="text-foreground text-sm leading-relaxed">
              <span className="text-primary font-bold mr-2">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Cancellation Rules */}
      <div className="card-native">
        <h2 className="section-title">সদস্য পদ বাতিল ও স্থগিতের নিয়মাবলী</h2>
        <ul className="space-y-3">
          {cancellationRules.map((item, index) => (
            <li key={index} className="text-foreground text-sm leading-relaxed">
              <span className="text-red-500 font-bold mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Volunteer;
