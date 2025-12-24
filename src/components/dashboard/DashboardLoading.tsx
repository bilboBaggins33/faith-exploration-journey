import React from 'react';

const DashboardLoading = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-10 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bible-blue"></div>
      </main>
    </div>
  );
};

export default DashboardLoading;
