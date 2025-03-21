import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, Download, SmartphoneIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Define a type for Safari's non-standard navigator property
interface SafariNavigator extends Navigator {
  standalone?: boolean;
}

const InstallAppBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Check if the app can be installed
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Update UI to notify the user they can install the PWA
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if the app is already installed
    // Cast navigator to SafariNavigator to access the standalone property
    const isStandalone = 
      (navigator as SafariNavigator).standalone || 
      window.matchMedia('(display-mode: standalone)').matches;

    // Show banner if on mobile and not already installed
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsVisible(isMobile && !isStandalone);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    
    // Hide banner regardless of outcome
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="mx-auto max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <SmartphoneIcon className="text-bible-blue h-8 w-8 mr-3" />
            <div>
              <h3 className="font-medium text-gray-900">Get the App</h3>
              <p className="text-sm text-gray-600">Install Bible Adventure Quest on your device</p>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center px-4 py-3 bg-gray-50 space-x-3">
          {isInstallable ? (
            <Button 
              onClick={handleInstallClick}
              className="flex-1 bg-bible-blue hover:bg-bible-deepBlue"
            >
              <Download className="h-4 w-4 mr-2" />
              Install Now
            </Button>
          ) : (
            <Link to="/install-app" className="flex-1">
              <Button className="w-full bg-bible-blue hover:bg-bible-deepBlue">
                <Download className="h-4 w-4 mr-2" />
                How to Install
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InstallAppBanner;
