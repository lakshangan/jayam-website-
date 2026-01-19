
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import FloatingAdmissionCTA from "./components/FloatingAdmissionCTA";
import SmoothScroll from "./components/SmoothScroll";
import BackgroundMusic from "./components/BackgroundMusic";

import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

// Lazy load the main page for better performance
const Index = lazy(() => import("./pages/Index"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll />
        <CustomCursor />
        <BackgroundMusic />
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>
        {!isLoading && <FloatingAdmissionCTA />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index isLoading={isLoading} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
