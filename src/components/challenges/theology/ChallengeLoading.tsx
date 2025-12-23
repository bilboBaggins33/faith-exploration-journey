import React from 'react';
import Navbar from '@/components/Navbar';

const ChallengeLoading = () => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading challenge...</p>
        </div>
      </main>
    </div>
  );
};

export default ChallengeLoading;
