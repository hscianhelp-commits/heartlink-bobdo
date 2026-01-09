import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Only show splash in standalone mode (installed PWA)
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    
    if (!isStandalone) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`splash-screen ${isFading ? "animate-splash-fade" : ""}`}
    >
      <div className="flex flex-col items-center">
        <img
          src="https://bobdo.vercel.app/bobdo.png"
          alt="BOBDO Logo"
          className="w-32 h-32 object-contain animate-pulse-blood"
        />
        <h1 className="mt-4 text-xl font-bold text-primary">BOBDO</h1>
        <p className="text-muted-foreground text-sm mt-1">
          বগুড়া অনলাইন রক্তদান সংগঠন
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
