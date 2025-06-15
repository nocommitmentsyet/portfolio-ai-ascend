import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CoverLetterWriter from "./pages/CoverLetterWriter";
import ATSResume from "./pages/ATSResume";
import CareerCoaching from "./pages/CareerCoaching";
import AIPortfolioBuilder from "./pages/AIPortfolioBuilder";
import MockInterviewCoach from "./pages/MockInterviewCoach";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-portfolio-builder" element={<AIPortfolioBuilder />} />
          <Route path="/cover-letter-writer" element={<CoverLetterWriter />} />
          <Route path="/ats-resume" element={<ATSResume />} />
          <Route path="/career-coaching" element={<CareerCoaching />} />
          <Route path="/mock-interview-coach" element={<MockInterviewCoach />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
