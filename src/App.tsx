import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import Profile from '@/pages/Profile';
import Bible from '@/pages/Bible';
import Chapter from '@/pages/Chapter';
import DailyReading from '@/pages/DailyReading';
import Dashboard from '@/pages/Dashboard';
import Theology from '@/pages/Theology';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is online when the component mounts
    setIsOnline(navigator.onLine);

    // Update the online status when the user goes online or offline
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    if (!isOnline) {
      // Redirect to the offline page
      navigate('/not-found');
    }
  }, [isOnline, navigate]);

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="bible-app-theme">
        <div className="app">
          <RouterProvider
            router={
              createBrowserRouter([
                {
                  path: '/',
                  element: <Index />,
                },
                {
                  path: '/auth',
                  element: <Auth />,
                },
                {
                  path: '/profile',
                  element: <Profile />,
                },
                {
                  path: '/dashboard',
                  element: <Dashboard />,
                },
                {
                  path: '/bible',
                  element: <Bible />,
                },
                {
                  path: '/bible/:bookId',
                  element: <Bible />,
                },
                {
                  path: '/challenge/bible/:bookId/:chapter',
                  element: <Chapter />,
                },
                {
                  path: '/daily-reading',
                  element: <DailyReading />,
                },
                {
                  path: '/theology',
                  element: <Theology />,
                },
                {
                  path: '/contact',
                  element: <Contact />,
                },
                {
                  path: '/about',
                  element: <About />,
                },
                {
                  path: '/not-found',
                  element: <NotFound />,
                },
                {
                  path: '*',
                  element: <NotFound />,
                },
              ])
            }
          />
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
