import { Phone, AlertCircle, Ambulance, Shield, Flame } from "lucide-react";

const emergencyContacts = [
  {
    title: "পরিচালক",
    number: "01780703075",
    icon: AlertCircle,
    color: "bg-red-500",
    description: "BOBDO প্রধান",
  },
  {
    title: "BOBDO হেল্প লাইন",
    number: "01722528164",
    icon: Phone,
    color: "bg-primary",
    description: "২৪/৭ রক্তদান সহায়তা",
  },
  {
    title: "জাতীয় জরুরি সেবা",
    number: "999",
    icon: Ambulance,
    color: "bg-blue-500",
    description: "অ্যাম্বুলেন্স, পুলিশ, ফায়ার সার্ভিস",
  },
  {
    title: "পুলিশ",
    number: "999",
    icon: Shield,
    color: "bg-indigo-500",
    description: "জরুরি পুলিশ সহায়তা",
  },
  {
    title: "ফায়ার সার্ভিস",
    number: "999",
    icon: Flame,
    color: "bg-orange-500",
    description: "অগ্নিনির্বাপণ ও উদ্ধার",
  },
];

const Emergency = () => {
  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">জরুরি যোগাযোগ</h1>
        <p className="text-muted-foreground">
          জরুরি প্রয়োজনে কল করুন
        </p>
      </div>

      <div className="info-card mb-4">
        <p className="text-sm text-foreground text-center">
          <span className="font-bold text-primary">জরুরি রক্তের প্রয়োজনে</span> নিচের
          নম্বরে যোগাযোগ করুন
        </p>
      </div>

      <div className="space-y-4">
        {emergencyContacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={`tel:${contact.number}`}
              className="card-native flex items-center gap-4"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${contact.color} flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{contact.title}</h3>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
                <p className="text-lg font-bold text-primary mt-1">{contact.number}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
            </a>
          );
        })}
      </div>

      <div className="card-native bg-primary/5 border border-primary/20">
        <p className="text-center text-foreground">
          <span className="font-bold">অফিস ঠিকানা:</span>
          <br />
          বি আর টি সি শপিং কমপ্লক্স ৩য় তলা,
          <br />
          সাতমাথা, বগুড়া
        </p>
      </div>
    </div>
  );
};

export default Emergency;
