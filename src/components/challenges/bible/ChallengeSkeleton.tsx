
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ChallengeSkeletonProps {
  children: React.ReactNode;
}

const ChallengeSkeleton = ({ children }: ChallengeSkeletonProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChallengeSkeleton;
