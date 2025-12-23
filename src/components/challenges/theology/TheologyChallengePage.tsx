import React from 'react';
import Navbar from '@/components/Navbar';
import ChallengeLoading from './ChallengeLoading';
import ChallengeError from './ChallengeError';
import ChallengeContent from './ChallengeContent';
import { useTheologyChallenge } from '@/hooks/theology/use-theology-challenge';

const TheologyChallengePage = () => {
  const { isLoading, error, challenge, bookInfo } = useTheologyChallenge();

  if (isLoading) {
    return <ChallengeLoading />;
  }

  if (error || !challenge || !bookInfo) {
    return <ChallengeError />;
  }

  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 pt-24 py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ChallengeContent />
        </div>
      </main>
    </div>
  );
};

export default TheologyChallengePage;
