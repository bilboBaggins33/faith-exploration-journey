
import React from 'react';
import { Outlet } from 'react-router-dom';
import CookieConsent from './CookieConsent';

const Layout = () => {
  return (
    <>
      <Outlet />
      <CookieConsent />
    </>
  );
};

export default Layout;
