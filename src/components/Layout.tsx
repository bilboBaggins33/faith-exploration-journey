import React from 'react';
import { Outlet } from 'react-router-dom';
import CookieConsent from './CookieConsent';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
