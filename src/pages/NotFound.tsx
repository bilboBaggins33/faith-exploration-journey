import React from 'react';
import { Compass, Home, BookOpen, WifiOff, RefreshCw } from 'lucide-react';
import MessageScreen from '@/components/MessageScreen';

const NotFound = () => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const checkOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);
    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, []);

  if (!isOnline) {
    return (
      <MessageScreen
        icon={<WifiOff className="h-8 w-8" />}
        eyebrow="No connection"
        title="You're offline"
        description="Please check your internet connection and try again."
        actions={[
          {
            label: 'Retry',
            onClick: () => window.location.reload(),
            icon: <RefreshCw className="mr-2 h-4 w-4" />,
          },
        ]}
      />
    );
  }

  return (
    <MessageScreen
      icon={<Compass className="h-8 w-8" />}
      eyebrow="Error 404"
      title="This page wandered off"
      description="The page you're looking for doesn't exist or may have moved. Let's get you back on the path."
      actions={[
        { label: 'Return Home', to: '/', icon: <Home className="mr-2 h-4 w-4" /> },
        {
          label: 'Browse the Bible',
          to: '/bible',
          variant: 'outline',
          icon: <BookOpen className="mr-2 h-4 w-4" />,
        },
      ]}
    />
  );
};

export default NotFound;
