import React from 'react';
import Navbar from '@/components/Navbar';

const DashboardLoading = () => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bible-blue"></div>
      </div>
    </div>
  );
};

export default DashboardLoading;
