import { lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouteError from '@/pages/RouteError';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/context/auth';
import { CookieProvider } from '@/context/CookieContext';
import { BibleProgressProvider } from '@/context/BibleProgressContext';
import Layout from '@/components/Layout';

// Route-level code splitting: heavy pages (especially Bible/Chapter, which pull
// in the large challenge dataset) load on demand instead of on first paint.
const Index = lazy(() => import('@/pages/Index'));
const Auth = lazy(() => import('@/pages/Auth'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));
const Profile = lazy(() => import('@/pages/Profile'));
const Bible = lazy(() => import('@/pages/Bible'));
const Chapter = lazy(() => import('@/pages/Chapter'));
const DailyReading = lazy(() => import('@/pages/DailyReading'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Achievements = lazy(() => import('@/pages/Achievements'));
const Theology = lazy(() => import('@/pages/Theology'));
const ChapterChallenge = lazy(() => import('@/components/challenges/ChapterChallenge'));
const ChapterAccessGate = lazy(() => import('@/components/access/ChapterAccessGate'));
const Contact = lazy(() => import('@/pages/Contact'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteError />,
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
        path: 'reset-password',
        element: <ResetPassword />,
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
        element: (
          <ChapterAccessGate type="theology">
            <ChapterChallenge type="theology" />
          </ChapterAccessGate>
        ),
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
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
