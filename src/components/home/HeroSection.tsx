const HeroSection = () => {
  return (
    <div className="relative">
      <div className="hero-curved-bottom pt-20 pb-16 px-4">
        <div className="flex flex-col items-center text-center text-white">
          {/* Logo with white circular background */}
          <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 p-2">
            <img
              src="https://bobdo.vercel.app/bobdo.png"
              alt="BOBDO Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-bold mb-2">
            বগুড়া অনলাইন রক্তদান সংগঠন
          </h1>
          <p className="text-white/90 text-sm">
            স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
