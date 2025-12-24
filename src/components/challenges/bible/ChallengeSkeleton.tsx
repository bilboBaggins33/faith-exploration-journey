import React from 'react';

interface ChallengeSkeletonProps {
  children: React.ReactNode;
}

const ChallengeSkeleton = ({ children }: ChallengeSkeletonProps) => {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ChallengeSkeleton;
