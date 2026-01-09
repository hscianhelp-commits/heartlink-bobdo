import { Users, Heart, Award, UserCheck } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 70000, label: "সদস্য সংখ্যা", icon: Users, suffix: "+" },
  { value: 2500, label: "নিবন্ধিত দাতা", icon: UserCheck, suffix: "+" },
  { value: 5000, label: "জীবন রক্ষা", icon: Heart, suffix: "+" },
  { value: 100, label: "স্বেচ্ছাসেবক", icon: Award, suffix: "+" },
];

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
  const { count, ref } = useCountUp(stat.value);
  const Icon = stat.icon;

  return (
    <div ref={ref} className="card-native text-center">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <p className="text-2xl font-bold text-primary">
        {count.toLocaleString("bn-BD")}
        {stat.suffix}
      </p>
      <p className="text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="px-4">
      <h2 className="text-lg font-bold text-foreground mb-4">আমাদের অর্জন</h2>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;