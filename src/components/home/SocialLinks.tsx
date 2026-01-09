import { Facebook, Mail, Youtube, Users } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/bobdo.official",
    icon: Facebook,
  },
  {
    href: "https://www.facebook.com/groups/BOBO.BD",
    icon: Users,
  },
  {
    href: "mailto:bobdo.bd@gmail.com",
    icon: Mail,
  },
  {
    href: "https://www.youtube.com/@BOBDO",
    icon: Youtube,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-6 px-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 transition-transform active:scale-95"
            aria-label={link.label}
          >
            <Icon className="w-7 h-7 text-red-600" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
