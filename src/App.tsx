import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Layout from "@/components/layout/Layout";
import SplashScreen from "@/components/SplashScreen";
import ExternalRedirect from "@/components/ExternalRedirect";

// Pages
import Index from "./pages/Index";
import FindDonor from "./pages/FindDonor";
import BecomeDonor from "./pages/BecomeDonor";
import Volunteer from "./pages/Volunteer";
import Donation from "./pages/Donation";
import Hospitals from "./pages/Hospitals";
import FirstAid from "./pages/FirstAid";
import Certificate from "./pages/Certificate";
import Notice from "./pages/Notice";
import Emergency from "./pages/Emergency";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <ScrollToTop />
        <SplashScreen />
        <ExternalRedirect />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/find-donor" element={<FindDonor />} />
            <Route path="/become-donor" element={<BecomeDonor />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/first-aid" element={<FirstAid />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
