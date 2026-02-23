
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

import SmoothScroll from "./components/SmoothScroll";
import BackgroundMusic from "./components/BackgroundMusic";

import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

// Lazy load the main page for better performance
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const CampusPage = lazy(() => import("./pages/CampusPage"));
const CourseDetailsPage = lazy(() => import("./pages/CourseDetailsPage"));

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
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index isLoading={isLoading} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/course/:id" element={<CourseDetailsPage />} />
              <Route path="/campus" element={<CampusPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
      <Analytics />
    </QueryClientProvider>
  );
};

export default App;
