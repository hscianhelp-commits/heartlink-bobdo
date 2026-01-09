import { MapPin, Phone, Building2, Navigation, ExternalLink } from "lucide-react";

const hospitals = [
  {
    name: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল",
    type: "সরকারি",
    address: "বগুড়া সদর, বগুড়া",
    phone: "051-78001",
    description: "বগুড়া জেলার প্রধান সরকারি হাসপাতাল। ৫০০ শয্যা বিশিষ্ট।",
    mapUrl: "https://maps.google.com/?q=Shahid+Ziaur+Rahman+Medical+College+Hospital+Bogra",
  },
  {
    name: "মোহাম্মাদ আলী হাসপাতাল",
    type: "সরকারি",
    address: "বনানী, বগুড়া",
    phone: "051-67890",
    description: "বিশেষায়িত চিকিৎসা সেবা প্রদানকারী সরকারি হাসপাতাল।",
    mapUrl: "https://maps.google.com/?q=Mohammad+Ali+Hospital+Bogra",
  },
  {
    name: "ক্রিসেন্ট হাসপাতাল",
    type: "বেসরকারি",
    address: "সাতমাথা, বগুড়া",
    phone: "051-62345",
    description: "আধুনিক সুযোগ-সুবিধা সম্পন্ন বেসরকারি হাসপাতাল।",
    mapUrl: "https://maps.google.com/?q=Crescent+Hospital+Satmatha+Bogra",
  },
  {
    name: "ইসলামী ব্যাংক হাসপাতাল",
    type: "বেসরকারি",
    address: "কালীতলা, বগুড়া",
    phone: "051-66789",
    description: "সকল প্রকার চিকিৎসা সেবা প্রদানকারী হাসপাতাল।",
    mapUrl: "https://maps.google.com/?q=Islami+Bank+Hospital+Bogra",
  },
  {
    name: "শাহ সুলতান হাসপাতাল",
    type: "বেসরকারি",
    address: "থানা রোড, বগুড়া",
    phone: "051-71234",
    description: "জরুরি সেবা ও সাধারণ চিকিৎসা।",
    mapUrl: "https://maps.google.com/?q=Shah+Sultan+Hospital+Bogra",
  },
  {
    name: "মডার্ন হাসপাতাল",
    type: "বেসরকারি",
    address: "সাতমাথা, বগুড়া",
    phone: "051-65432",
    description: "২৪ ঘণ্টা জরুরি সেবা প্রদানকারী।",
    mapUrl: "https://maps.google.com/?q=Modern+Hospital+Satmatha+Bogra",
  },
  {
    name: "নাজমুল হক ডায়াগনস্টিক সেন্টার",
    type: "ডায়াগনস্টিক",
    address: "বনানী রোড, বগুড়া",
    phone: "051-63456",
    description: "আধুনিক ল্যাব সুবিধা সম্পন্ন ডায়াগনস্টিক সেন্টার।",
    mapUrl: "https://maps.google.com/?q=Nazmul+Haque+Diagnostic+Center+Bogra",
  },
  {
    name: "পপুলার ডায়াগনস্টিক সেন্টার",
    type: "ডায়াগনস্টিক",
    address: "থানা রোড, বগুড়া",
    phone: "051-78123",
    description: "সকল প্রকার টেস্ট সুবিধা।",
    mapUrl: "https://maps.google.com/?q=Popular+Diagnostic+Center+Bogra",
  },
  {
    name: "আল আমিন ক্লিনিক",
    type: "ক্লিনিক",
    address: "কালীবাড়ি, বগুড়া",
    phone: "051-69876",
    description: "সাধারণ চিকিৎসা ও জরুরি সেবা।",
    mapUrl: "https://maps.google.com/?q=Al+Amin+Clinic+Bogra",
  },
  {
    name: "সিটি ক্লিনিক",
    type: "ক্লিনিক",
    address: "সাতমাথা, বগুড়া",
    phone: "051-64321",
    description: "সার্জারি ও জেনারেল মেডিসিন সুবিধা।",
    mapUrl: "https://maps.google.com/?q=City+Clinic+Satmatha+Bogra",
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "সরকারি":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "বেসরকারি":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "ডায়াগনস্টিক":
      return "bg-violet-50 text-violet-700 border border-violet-200";
    default:
      return "bg-amber-50 text-amber-700 border border-amber-200";
  }
};

const Hospitals = () => {
  const openInMap = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
          <Building2 className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">হাসপাতাল</h1>
        <p className="text-muted-foreground">
          বগুড়া শহরের হাসপাতাল ও ক্লিনিক
        </p>
      </div>

      {/* Hospital Cards */}
      <div className="space-y-4">
        {hospitals.map((hospital, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-4 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground leading-tight">{hospital.name}</h3>
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mt-1.5 ${getTypeStyles(hospital.type)}`}>
                  {hospital.type}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {hospital.description}
            </p>

            {/* Info & Actions */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/50">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-sm text-foreground mb-1">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">{hospital.address}</span>
                </div>
                <a
                  href={`tel:${hospital.phone}`}
                  className="flex items-center gap-2 text-sm text-primary font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {hospital.phone}
                </a>
              </div>
              
              {/* Map Button */}
              <button
                onClick={() => openInMap(hospital.mapUrl)}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                ম্যাপ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All on Map */}
      <div className="pt-4">
        <a
          href="https://maps.google.com/?q=Hospitals+in+Bogra+Bangladesh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary/10 text-primary rounded-2xl font-semibold hover:bg-primary/20 active:scale-[0.98] transition-all"
        >
          <ExternalLink className="w-5 h-5" />
          সকল হাসপাতাল ম্যাপে দেখুন
        </a>
      </div>
    </div>
  );
};

export default Hospitals;
