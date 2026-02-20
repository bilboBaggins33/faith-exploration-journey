import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CookieConsent from './CookieConsent';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDarkHeroPage = ['/dashboard', '/achievements'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className={`flex-1 flex flex-col ${!isHomePage && !isDarkHeroPage && location.pathname !== '/auth' && location.pathname !== '/about' ? 'pt-16' : ''}`}>
        <Outlet />
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
