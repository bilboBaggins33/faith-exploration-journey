import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CookieConsent from './CookieConsent';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Hide navbar on challenge pages (bible/book/chapter or theology/book/chapter)
  const isChallengePage = /^\/(bible|theology)\/[^/]+\/\d+/.test(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isChallengePage && <Navbar />}
      <div className={`flex-1 flex flex-col ${!isHomePage && !isChallengePage ? 'pt-16' : ''}`}>
        <Outlet />
      </div>
      {!isChallengePage && <Footer />}
      <CookieConsent />
    </div>
  );
};

export default Layout;
