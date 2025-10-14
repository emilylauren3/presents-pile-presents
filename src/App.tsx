import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import ByPrice from "./pages/ByPrice";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import PreteenGiftGuide from "./pages/blog/PreteenGiftGuide";
import TechGadgetsTweenBoys from "./pages/blog/TechGadgetsTweenBoys";
import AccessoriesTweenGirls from "./pages/blog/AccessoriesTweenGirls";
import GiftsAllTweens from "./pages/blog/GiftsAllTweens";
import LuxuryPile from "./pages/blog/LuxuryPile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/by-price" element={<ByPrice />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/blog/preteen-gift-guide" element={<PreteenGiftGuide />} />
          <Route path="/blog/tech-gadgets-tween-boys" element={<TechGadgetsTweenBoys />} />
          <Route path="/blog/accessories-tween-girls" element={<AccessoriesTweenGirls />} />
          <Route path="/blog/gifts-all-tweens" element={<GiftsAllTweens />} />
          <Route path="/blog/luxury-pile" element={<LuxuryPile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
