
import React from 'react';
import ChallengeSkeleton from './ChallengeSkeleton';

const LoadingState = () => {
  return (
    <ChallengeSkeleton>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bible-blue mx-auto mb-4"></div>
        <p>Loading challenge...</p>
      </div>
    </ChallengeSkeleton>
  );
};

export default LoadingState;
