
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force unregister old service workers and register new one
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // Get all service worker registrations
      const registrations = await navigator.serviceWorker.getRegistrations();
      
      // Unregister all existing service workers
      for (const registration of registrations) {
        await registration.unregister();
        console.log('SW unregistered:', registration);
      }
      
      // Clear all caches
      const cacheNames = await caches.keys();
      for (const cacheName of cacheNames) {
        await caches.delete(cacheName);
        console.log('Cache deleted:', cacheName);
      }
      
      // Register fresh service worker
      const registration = await navigator.serviceWorker.register('/sw.js?v=7');
      console.log('SW registered fresh:', registration);
      
    } catch (error) {
      console.log('SW handling failed:', error);
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);

