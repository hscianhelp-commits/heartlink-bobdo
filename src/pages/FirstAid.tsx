import { useState } from "react";
import { ChevronDown, ChevronUp, Cross, AlertTriangle, Heart, Thermometer, Droplets, Brain, Flame, Bone, Skull, Bug, Sun, Zap, Activity, Waves, Flower2, BrainCircuit, HeartPulse, Stethoscope } from "lucide-react";

const firstAidTopics = [
  {
    title: "রক্তপাত নিয়ন্ত্রণ",
    icon: Droplets,
    symptoms: ["অতিরিক্ত রক্তক্ষরণ", "ফ্যাকাশে ত্বক", "দুর্বলতা", "মাথা ঘোরা"],
    content: `১. পরিষ্কার কাপড় বা ব্যান্ডেজ দিয়ে ক্ষতস্থানে চাপ দিন
২. আক্রান্ত অংশ হৃদপিণ্ডের উপরে তুলে রাখুন
৩. চাপ অব্যাহত রাখুন যতক্ষণ রক্তপাত বন্ধ না হয়
৪. ব্যান্ডেজ ভিজে গেলে উপরে আরেকটি বাঁধুন
৫. গুরুতর হলে দ্রুত হাসপাতালে নিন`,
    warning: "ধারালো বস্তু টেনে বের করবেন না। রক্তপাত বন্ধ না হলে ১৫ মিনিটের মধ্যে হাসপাতালে নিন।",
  },
  {
    title: "CPR (কার্ডিওপালমোনারি রিসাসিটেশন)",
    icon: HeartPulse,
    symptoms: ["শ্বাস-প্রশ্বাস বন্ধ", "হৃদস্পন্দন অনুভব হচ্ছে না", "অজ্ঞান"],
    content: `১. রোগীকে শক্ত সমতল জায়গায় শুইয়ে দিন
২. বুকের মাঝখানে দুই হাতের তালু রাখুন
৩. সোজা হাতে ১০০-১২০ বার/মিনিট হারে চাপ দিন
৪. প্রতি ৩০ বার চাপের পর ২ বার শ্বাস দিন
৫. সাহায্য না আসা পর্যন্ত চালিয়ে যান`,
    warning: "শুধুমাত্র শ্বাস-প্রশ্বাস ও হৃদস্পন্দন বন্ধ হলে CPR করুন। ভুল পদ্ধতিতে হাড় ভেঙে যেতে পারে।",
  },
  {
    title: "শ্বাসরোধ",
    icon: AlertTriangle,
    symptoms: ["গলায় কিছু আটকে যাওয়া", "কাশি দিতে না পারা", "মুখ নীল হয়ে যাওয়া"],
    content: `১. রোগীকে সামনে ঝুঁকে দাঁড় করান
২. পিঠে ৫ বার জোরে চাপড় দিন
৩. পেটে হাত রেখে ৫ বার উপরের দিকে ঠেলুন (হেইমলিক ম্যানুভার)
৪. বাধা দূর না হওয়া পর্যন্ত পুনরাবৃত্তি করুন
৫. অজ্ঞান হলে CPR শুরু করুন`,
    warning: "শিশুদের ক্ষেত্রে আলতো করে পিঠে চাপ দিন। পেটে জোরে চাপ দেবেন না।",
  },
  {
    title: "অচেতন রোগীর পরিচর্যা",
    icon: Brain,
    symptoms: ["সাড়া দিচ্ছে না", "শ্বাস চলছে কিন্তু অজ্ঞান"],
    content: `১. শ্বাস-প্রশ্বাস পরীক্ষা করুন
২. রিকভারি পজিশনে শুইয়ে দিন (পাশ ফিরিয়ে)
৩. জিভ গলায় আটকে যাচ্ছে কিনা দেখুন
৪. উষ্ণ রাখুন
৫. জরুরি সেবায় কল করুন`,
    warning: "রোগীর গলায় কিছু দেবেন না। রোগী বমি করলে পাশ ফেরান।",
  },
  {
    title: "কাটা-ছেঁড়া",
    icon: Cross,
    symptoms: ["ত্বক কেটে যাওয়া", "রক্তপাত", "ব্যথা"],
    content: `১. প্রথমে হাত পরিষ্কার করুন
২. ক্ষতস্থান পরিষ্কার পানিতে ধুয়ে ফেলুন
৩. অ্যান্টিসেপটিক লাগান
৪. পরিষ্কার ব্যান্ডেজ বাঁধুন
৫. গভীর হলে সেলাই প্রয়োজন হতে পারে`,
    warning: "মরিচা লাগা বস্তু থেকে কাটলে টিটেনাস টিকা নিন।",
  },
  {
    title: "পুড়ে যাওয়া",
    icon: Flame,
    symptoms: ["ত্বক লাল হওয়া", "ফোসকা পড়া", "তীব্র জ্বালা"],
    content: `১. ঠান্ডা পানিতে ১০-২০ মিনিট ধরে রাখুন
২. বরফ ব্যবহার করবেন না
৩. ফোসকা ফাটাবেন না
৪. পরিষ্কার কাপড়ে ঢেকে দিন
৫. গুরুতর হলে হাসপাতালে নিন`,
    warning: "পোড়া জায়গায় তেল, মাখন বা টুথপেস্ট লাগাবেন না। ফোসকা ফাটালে সংক্রমণ হতে পারে।",
  },
  {
    title: "হাড় ভাঙা",
    icon: Bone,
    symptoms: ["তীব্র ব্যথা", "ফুলে যাওয়া", "অস্বাভাবিক আকৃতি", "নড়াচড়া করতে না পারা"],
    content: `১. আক্রান্ত অংশ নাড়াচাড়া করবেন না
২. স্প্লিন্ট দিয়ে স্থির রাখুন
৩. বরফ প্রয়োগ করুন
৪. আক্রান্ত অংশ উঁচুতে রাখুন
৫. দ্রুত হাসপাতালে নিন`,
    warning: "ভাঙা হাড় সোজা করার চেষ্টা করবেন না। রোগীকে হাঁটাবেন না।",
  },
  {
    title: "বিষক্রিয়া",
    icon: Skull,
    symptoms: ["বমি", "পেট ব্যথা", "অস্বাভাবিক আচরণ", "শ্বাসকষ্ট"],
    content: `১. বিষের ধরন জানার চেষ্টা করুন
২. বমি করানোর আগে বিশেষজ্ঞের পরামর্শ নিন
৩. রোগী সচেতন থাকলে দুধ/পানি দিন
৪. বিষের প্যাকেট সংরক্ষণ করুন
৫. জরুরি সেবায় কল করুন`,
    warning: "এসিড বা ক্ষার বিষক্রিয়ায় বমি করাবেন না। পেট্রোলিয়াম পণ্যে দুধ দেবেন না।",
  },
  {
    title: "সাপের কামড়",
    icon: Bug,
    symptoms: ["কামড়ানো স্থানে ব্যথা", "ফুলে যাওয়া", "মাথা ঘোরা", "বমি"],
    content: `১. শান্ত থাকুন ও নড়াচড়া কমান
২. কামড়ানো অংশ হৃদপিণ্ডের নিচে রাখুন
৩. গয়না/আংটি খুলে ফেলুন
৪. ক্ষতস্থান কাটবেন না বা চুষবেন না
৫. দ্রুত হাসপাতালে নিন`,
    warning: "টর্নিকেট বাঁধবেন না। বিষ চুষে বের করার চেষ্টা করবেন না।",
  },
  {
    title: "হিট স্ট্রোক",
    icon: Sun,
    symptoms: ["উচ্চ শরীরের তাপমাত্রা", "শুষ্ক ত্বক", "মাথা ব্যথা", "বিভ্রান্তি"],
    content: `১. রোগীকে ছায়ায় বা ঠান্ডা জায়গায় নিন
২. কাপড় ঢিলা করুন
৩. ঠান্ডা পানিতে কাপড় ভিজিয়ে শরীরে রাখুন
৪. পানি/স্যালাইন পান করান
৫. শরীর ঠান্ডা না হলে হাসপাতালে নিন`,
    warning: "রোগী অজ্ঞান থাকলে মুখে কিছু দেবেন না। খুব ঠান্ডা পানি শরীরে ঢালবেন না।",
  },
  {
    title: "বিদ্যুৎস্পৃষ্ট",
    icon: Zap,
    symptoms: ["পোড়া দাগ", "পেশী সংকোচন", "অজ্ঞান হওয়া"],
    content: `১. প্রথমে বিদ্যুৎ সংযোগ বন্ধ করুন
২. কাঠের লাঠি দিয়ে রোগীকে সরান
৩. শ্বাস-প্রশ্বাস পরীক্ষা করুন
৪. প্রয়োজনে CPR শুরু করুন
৫. পোড়া স্থানের চিকিৎসা করুন`,
    warning: "বিদ্যুৎ চলমান থাকলে রোগীকে স্পর্শ করবেন না। ধাতব বস্তু দিয়ে সরাবেন না।",
  },
  {
    title: "হার্ট অ্যাটাক",
    icon: Heart,
    symptoms: ["বুকে ব্যথা বা চাপ", "শ্বাসকষ্ট", "বাহুতে ব্যথা", "ঘাম"],
    content: `১. রোগীকে আরামদায়ক অবস্থানে বসান
২. টাইট পোশাক ঢিলা করুন
৩. অ্যাসপিরিন চিবিয়ে খাওয়ান (যদি থাকে)
৪. শ্বাসকষ্ট হলে অক্সিজেন দিন
৫. জরুরি সেবায় কল করুন`,
    warning: "রোগীকে হাঁটাবেন না বা পরিশ্রম করাবেন না। ৯৯৯ এ কল করুন।",
  },
  {
    title: "স্ট্রোক",
    icon: BrainCircuit,
    symptoms: ["মুখ বাঁকা", "হাত তুলতে না পারা", "কথা জড়িয়ে যাওয়া"],
    content: `১. FAST পদ্ধতি মনে রাখুন
২. F - Face (মুখ বাঁকা হয়ে গেছে?)
৩. A - Arms (হাত তুলতে পারছে?)
৪. S - Speech (কথা জড়িয়ে যাচ্ছে?)
৫. T - Time (দ্রুত হাসপাতালে নিন)`,
    warning: "প্রতিটি মিনিট গুরুত্বপূর্ণ। ৩ ঘণ্টার মধ্যে চিকিৎসা না পেলে স্থায়ী ক্ষতি হতে পারে।",
  },
  {
    title: "ডুবে যাওয়া",
    icon: Waves,
    symptoms: ["পানিতে ডুবে যাওয়া", "শ্বাস নিতে না পারা"],
    content: `১. পানি থেকে উদ্ধার করুন
২. শ্বাস-প্রশ্বাস পরীক্ষা করুন
৩. CPR শুরু করুন
৪. রিকভারি পজিশনে রাখুন
৫. হাসপাতালে নিন (পানি ফুসফুসে থাকতে পারে)`,
    warning: "নিজে সাঁতার না জানলে পানিতে ঝাঁপ দেবেন না। দড়ি বা লাঠি ব্যবহার করুন।",
  },
  {
    title: "অ্যালার্জি",
    icon: Flower2,
    symptoms: ["চুলকানি", "ফুসকুড়ি", "শ্বাসকষ্ট", "মুখ ফুলে যাওয়া"],
    content: `১. অ্যালার্জেন থেকে দূরে রাখুন
২. অ্যান্টিহিস্টামিন ওষুধ দিন
৩. শ্বাসকষ্ট হলে এপিনেফ্রিন ইনজেকশন
৪. গলা ফুলে গেলে জরুরি সেবায় কল করুন
৫. অ্যানাফিল্যাক্সিস হলে দ্রুত হাসপাতালে নিন`,
    warning: "গলা ফুলে গেলে দ্রুত ৯৯৯ এ কল করুন। এটি জীবন-মরণ জরুরি অবস্থা।",
  },
  {
    title: "খিঁচুনি",
    icon: Activity,
    symptoms: ["শরীর কাঁপুনি", "অনিয়ন্ত্রিত নড়াচড়া", "অজ্ঞান হওয়া"],
    content: `১. রোগীকে মেঝেতে শুইয়ে দিন
২. মাথার নিচে নরম কিছু রাখুন
৩. ধারালো বস্তু সরিয়ে রাখুন
৪. মুখে কিছু দেবেন না
৫. ৫ মিনিটের বেশি হলে হাসপাতালে নিন`,
    warning: "রোগীকে ধরে রাখার চেষ্টা করবেন না। মুখে চামচ বা কিছু দেবেন না।",
  },
  {
    title: "জ্বর",
    icon: Thermometer,
    symptoms: ["শরীর গরম", "কাঁপুনি", "মাথা ব্যথা", "দুর্বলতা"],
    content: `১. হালকা পোশাক পরান
২. কপালে ঠান্ডা পানির পট্টি দিন
৩. পর্যাপ্ত পানি পান করান
৪. প্যারাসিটামল দিন
৫. ১০৩°F এর বেশি হলে ডাক্তার দেখান`,
    warning: "শিশুদের অ্যাসপিরিন দেবেন না। উচ্চ জ্বরে ঠান্ডা পানিতে গোসল করাবেন না।",
  },
  {
    title: "পেট ব্যথা",
    icon: Stethoscope,
    symptoms: ["পেটে ব্যথা", "বমি ভাব", "খাওয়ায় অরুচি"],
    content: `১. রোগীকে আরামদায়ক অবস্থানে রাখুন
২. হালকা গরম সেঁক দিন
৩. ভারী খাবার এড়িয়ে চলুন
৪. পানি/তরল খাবার দিন
৫. তীব্র ব্যথায় ডাক্তার দেখান`,
    warning: "তীব্র পেট ব্যথায় ব্যথানাশক ওষুধ খাওয়াবেন না। অ্যাপেনডিসাইটিস হতে পারে।",
  },
  {
    title: "ডায়রিয়া",
    icon: Droplets,
    symptoms: ["ঘন ঘন পাতলা পায়খানা", "পেট ব্যথা", "দুর্বলতা"],
    content: `১. ওরস্যালাইন পান করান
২. হালকা খাবার খাওয়ান
৩. ডাবের পানি/চিনি-লবণ পানি দিন
৪. বারবার হলে ডাক্তার দেখান
৫. পরিষ্কার-পরিচ্ছন্নতা বজায় রাখুন`,
    warning: "শিশুদের ডায়রিয়া হলে দ্রুত ডাক্তার দেখান। পানিশূন্যতা মারাত্মক হতে পারে।",
  },
  {
    title: "পানিশূন্যতা",
    icon: Droplets,
    symptoms: ["তৃষ্ণা", "মুখ শুকিয়ে যাওয়া", "প্রস্রাব কম হওয়া", "মাথা ঘোরা"],
    content: `১. অল্প অল্প করে পানি দিন
২. ওরস্যালাইন পান করান
৩. ফলের রস/ডাবের পানি দিন
৪. ঠান্ডা জায়গায় রাখুন
৫. গুরুতর হলে IV স্যালাইন দিতে হবে`,
    warning: "একসাথে অনেক পানি দেবেন না। বমি হতে পারে। অল্প অল্প করে দিন।",
  },
];

const FirstAid = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      {/* Page Header with Icon */}
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
          <Cross className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">প্রাথমিক চিকিৎসা</h1>
        <p className="text-muted-foreground">
          জরুরি অবস্থায় প্রথম পদক্ষেপ
        </p>
      </div>

      <div className="info-card mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-sm text-foreground">
            <span className="font-bold text-primary">গুরুত্বপূর্ণ:</span> এগুলো প্রাথমিক
            পদক্ষেপ। গুরুতর অবস্থায় অবশ্যই ডাক্তারের পরামর্শ নিন এবং ৯৯৯ এ কল করুন।
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {firstAidTopics.map((topic, index) => {
          const Icon = topic.icon;
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="card-native overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-foreground text-left flex-1">{topic.title}</h3>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-border space-y-4 animate-fade-in">
                  {/* Symptoms */}
                  <div className="bg-blue-50 rounded-xl p-3">
                    <h4 className="font-bold text-sm text-blue-700 mb-2">লক্ষণসমূহ:</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.symptoms.map((symptom, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Treatment Steps */}
                  <div className="bg-green-50 rounded-xl p-3">
                    <h4 className="font-bold text-sm text-green-700 mb-2">চিকিৎসার ধাপসমূহ:</h4>
                    <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                      {topic.content}
                    </pre>
                  </div>
                  
                  {/* Warning */}
                  <div className="bg-red-50 rounded-xl p-3 flex gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-red-700 mb-1">সতর্কতা:</h4>
                      <p className="text-sm text-red-700">{topic.warning}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Emergency Call Section */}
      <div className="card-native bg-primary text-primary-foreground">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">জরুরি প্রয়োজনে কল করুন</h3>
          <a 
            href="tel:999" 
            className="inline-block bg-white text-primary font-bold text-2xl px-8 py-3 rounded-xl"
          >
            ৯৯৯
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstAid;