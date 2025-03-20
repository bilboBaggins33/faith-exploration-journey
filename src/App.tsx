
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

// Pages
import Index from "./pages/Index";
import Map from "./pages/Map";
import Challenge from "./pages/Challenge";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

// Challenge Components
import GenesisDaysChallenge from "@/components/challenges/GenesisDaysChallenge";
import NoahArkChallenge from "@/components/challenges/NoahArkChallenge";
import AbrahamFaithChallenge from "@/components/challenges/AbrahamFaithChallenge";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/map" element={<Map />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/challenge/:id" element={<Challenge />} />
            <Route path="/challenge/creation-quiz" element={<GenesisDaysChallenge />} />
            <Route path="/challenge/noah-quiz" element={<NoahArkChallenge />} />
            <Route path="/challenge/abraham-quiz" element={<AbrahamFaithChallenge />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
