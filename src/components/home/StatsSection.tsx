import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 70000, label: "সদস্য সংখ্যা", color: "text-primary" },
  { value: 2500, label: "নিবন্ধিত দাতা", color: "text-cyan-500" },
  { value: 5000, label: "জীবন রক্ষা", color: "text-primary" },
  { value: 100, label: "স্বেচ্ছাসেবক", color: "text-cyan-500" },
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

  return (
    <div ref={ref} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
      <p className={`text-2xl font-bold ${stat.color}`}>
        {count.toLocaleString()}+
      </p>
      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;