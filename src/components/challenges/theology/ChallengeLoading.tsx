
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ChallengeLoading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading challenge...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChallengeLoading;
