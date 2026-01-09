import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const ExternalRedirect = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isInAppBrowser =
      userAgent.includes("fban") || // Facebook App
      userAgent.includes("fbav") || // Facebook App
      userAgent.includes("instagram") ||
      userAgent.includes("messenger") ||
      userAgent.includes("whatsapp") ||
      userAgent.includes("linkedin") ||
      userAgent.includes("twitter") ||
      (userAgent.includes("wv") && userAgent.includes("android")); // WebView

    if (isInAppBrowser) {
      setShowOverlay(true);
    }
  }, []);

  const openInChrome = () => {
    const currentUrl = window.location.href;
    
    // Try to open in external browser
    if (navigator.userAgent.toLowerCase().includes("android")) {
      window.location.href = `intent://${currentUrl.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end`;
    } else {
      // For iOS and others, try to force Safari
      window.open(currentUrl, "_system");
    }
  };

  if (!showOverlay) return null;

  return (
    <div className="external-redirect-overlay">
      <div className="bg-background rounded-3xl p-6 max-w-sm w-full text-center animate-slide-up">
        <img
          src="https://bobdo.vercel.app/bobdo.png"
          alt="BOBDO Logo"
          className="w-20 h-20 mx-auto mb-4 object-contain"
        />
        <p className="text-foreground font-medium mb-6">
          সেরা অভিজ্ঞতার জন্য Chrome-এ খুলুন।
        </p>
        <button
          onClick={openInChrome}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-5 h-5" />
          Open in Chrome
        </button>
        <button
          onClick={() => setShowOverlay(false)}
          className="mt-3 text-muted-foreground text-sm"
        >
          এখানেই চালিয়ে যান
        </button>
      </div>
    </div>
  );
};

export default ExternalRedirect;
