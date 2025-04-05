
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WifiOff, Home, RefreshCw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Check status initially and on network changes
    checkOnlineStatus();
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);

    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, []);

  const handleReturnHome = () => {
    navigate('/');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          {!isOnline ? (
            // Offline state
            <div className="p-10 rounded-lg bg-gray-50 shadow-md">
              <WifiOff className="mx-auto h-16 w-16 text-gray-400 mb-6" />
              <h1 className="text-3xl font-bold mb-2">You're offline</h1>
              <p className="text-gray-600 mb-6">
                Please check your internet connection and try again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleRefresh} className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Retry Connection
                </Button>
              </div>
            </div>
          ) : (
            // 404 state
            <div className="p-10 rounded-lg bg-gray-50 shadow-md">
              <h1 className="text-8xl font-bold text-gray-300 mb-2">404</h1>
              <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
              <p className="text-gray-600 mb-6">
                The page you are looking for doesn't exist or has been moved.
              </p>
              <Button onClick={handleReturnHome} className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Return Home
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
