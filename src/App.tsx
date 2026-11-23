import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexJa from "./pages/IndexJa";
import HiroMessage from "./pages/HiroMessage";
import HiroMessageJa from "./pages/HiroMessageJa";
import MessageDetail from "./pages/MessageDetail";
import MessageDetailJa from "./pages/MessageDetailJa";
import Media from "./pages/Media";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicyJa from "./pages/PrivacyPolicyJa";
import TermsAndConditionsJa from "./pages/TermsAndConditionsJa";
import NotFound from "./pages/NotFound";
import RouteMeta from "./components/RouteMeta";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <style>{`
@media (max-width: 767px) {
  figure img { max-height: none !important; aspect-ratio: auto !important; height: auto !important; object-fit: contain !important; }
}
@keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
.animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }
.animate-delay-400 { animation-delay: 400ms; }
.animate-delay-500 { animation-delay: 500ms; }
`}</style>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteMeta />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ja" element={<IndexJa />} />
          <Route path="/messages" element={<HiroMessage />} />
          <Route path="/ja/messages" element={<HiroMessageJa />} />
          <Route path="/message/:id" element={<MessageDetail />} />
          <Route path="/ja/message/:id" element={<MessageDetailJa />} />
          <Route path="/media" element={<Media />} />
          <Route path="/ja/media" element={<Media lang="ja" />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/ja/privacy" element={<PrivacyPolicyJa />} />
          <Route path="/ja/terms" element={<TermsAndConditionsJa />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
