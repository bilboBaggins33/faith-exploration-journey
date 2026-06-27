
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register the service worker for PWA/offline support. The SW itself manages
// cache versioning and activation, so we register normally here.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);

