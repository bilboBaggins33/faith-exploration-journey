
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DashboardLoading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bible-blue"></div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLoading;
