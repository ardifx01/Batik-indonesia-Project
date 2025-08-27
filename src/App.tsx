import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcoBatikPage from "./pages/EcoBatikPage";
import HistoryPage from "./pages/HistoryPage";
import GaleriPage from "./pages/GaleriPage";
import BudayaTradisiPage from "./pages/BudayaTradisiPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop"; // ⬅️ import

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      easing: "ease-in-out",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/eco-batik" element={<EcoBatikPage />} />
                <Route path="/sejarah" element={<HistoryPage />} />
                <Route path="/galeri" element={<GaleriPage />} />
                <Route path="/budaya_tradisi" element={<BudayaTradisiPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
