import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import Profile from '@/pages/Profile';
import Bible from '@/pages/Bible';
import Chapter from '@/pages/Chapter';
import DailyReading from '@/pages/DailyReading';
import Dashboard from '@/pages/Dashboard';
import Achievements from '@/pages/Achievements';
import Theology from '@/pages/Theology';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CookiePolicy from '@/pages/CookiePolicy';
import Plans from '@/pages/Plans';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/context/auth';
import { CookieProvider } from '@/context/CookieContext';
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
        path: 'plans',
        element: <Plans />,
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

  return (
    <>
      <CookieProvider>
        <AuthProvider>
          <ThemeProvider defaultTheme="light" storageKey="bible-app-theme">
            <div className="app">
              <RouterProvider router={router} />
            </div>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </CookieProvider>
    </>
  );
}

export default App;
