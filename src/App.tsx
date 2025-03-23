
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

// Pages
import Index from "./pages/Index";
import Challenge from "./pages/Challenge";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import BibleExplorer from "./pages/BibleExplorer";
import TheologyExplorer from "./pages/TheologyExplorer";
import InstallApp from "./pages/InstallApp";
import DailyReading from "./pages/DailyReading";

// Challenge Components
import GenesisDaysChallenge from "@/components/challenges/GenesisDaysChallenge";
import NoahArkChallenge from "@/components/challenges/NoahArkChallenge";
import AbrahamFaithChallenge from "@/components/challenges/AbrahamFaithChallenge";
import BibleChapterChallenge from "@/components/challenges/BibleChapterChallenge";
import TheologyChapterChallenge from "./components/challenges/TheologyChapterChallenge";

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
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/challenge/:id" element={<Challenge />} />
            <Route path="/challenge/creation-quiz" element={<GenesisDaysChallenge />} />
            <Route path="/challenge/noah-quiz" element={<NoahArkChallenge />} />
            <Route path="/challenge/abraham-quiz" element={<AbrahamFaithChallenge />} />
            <Route path="/challenge/bible/:bookId/:chapter" element={<BibleChapterChallenge />} />
            <Route path="/bible" element={<BibleExplorer />} />
            <Route path="/bible/:bookId" element={<BibleExplorer />} />
            <Route path="/daily-reading" element={<DailyReading />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/theology" element={<TheologyExplorer />} />
            <Route path="/theology/:bookId" element={<TheologyExplorer />} />
            <Route path="/theology/:bookId/:chapter" element={<TheologyChapterChallenge />} />
            <Route path="/install-app" element={<InstallApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
