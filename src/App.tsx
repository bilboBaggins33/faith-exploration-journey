import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import Profile from '@/pages/Profile';
import Bible from '@/pages/Bible';
import Chapter from '@/pages/Chapter';
import DailyReading from '@/pages/DailyReading';
import Dashboard from '@/pages/Dashboard';
import Achievements from '@/pages/Achievements';
import Theology from '@/pages/Theology';
import ChapterChallenge from '@/components/challenges/ChapterChallenge';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CookiePolicy from '@/pages/CookiePolicy';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/context/auth';
import { CookieProvider } from '@/context/CookieContext';
import { BibleProgressProvider } from '@/context/BibleProgressContext';
import CookieConsent from '@/components/CookieConsent';
import Layout from '@/components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Index />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'achievements',
        element: <Achievements />,
      },
      {
        path: 'bible',
        element: <Bible />,
      },
      {
        path: 'bible/:bookId',
        element: <Bible />,
      },
      {
        path: 'bible/:bookId/:chapter',
        element: <Chapter />,
      },
      {
        path: 'daily-reading',
        element: <DailyReading />,
      },
      {
        path: 'theology',
        element: <Theology />,
      },
      {
        path: 'theology/:bookId',
        element: <Theology />,
      },
      {
        path: 'theology/:bookId/:chapter',
        element: <ChapterChallenge type="theology" />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'terms',
        element: <TermsOfService />,
      },
      {
        path: 'privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'cookie-policy',
        element: <CookiePolicy />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Create a client for React Query
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <CookieProvider>
        <AuthProvider>
          <BibleProgressProvider>
            <ThemeProvider defaultTheme="light" storageKey="bible-app-theme">
              <QueryClientProvider client={queryClient}>
                <div className="app">
                  <RouterProvider router={router} />
                </div>
                <Toaster />
              </QueryClientProvider>
            </ThemeProvider>
          </BibleProgressProvider>
        </AuthProvider>
      </CookieProvider>
    </>
  );
}

export default App;
