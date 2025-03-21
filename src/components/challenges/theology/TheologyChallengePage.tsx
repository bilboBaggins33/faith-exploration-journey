
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChallengeLoading from './ChallengeLoading';
import ChallengeError from './ChallengeError';
import ChallengeContent from './ChallengeContent';
import { useTheologyChallenge } from '@/hooks/theology/use-theology-challenge';

const TheologyChallengePage = () => {
  const {
    // Loading states
    isLoading,
    error,
    challenge,
    bookInfo
  } = useTheologyChallenge();

  if (isLoading) {
    return <ChallengeLoading />;
  }

  if (error || !challenge || !bookInfo) {
    return <ChallengeError />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ChallengeContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TheologyChallengePage;
