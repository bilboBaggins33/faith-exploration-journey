
import React from 'react';
import BibleReadingCard from './BibleReadingCard';
import TheologyBooksCard from './TheologyBooksCard';
import AchievementsCard from './AchievementsCard';
import TestamentProgressCard from './TestamentProgressCard';
import DailyReadingCard from './DailyReadingCard';

interface BookProgress {
  id: string;
  name: string;
  progress: number;
}

interface TheologyBook {
  id: string;
  name: string;
  progress: number;
  author: string;
}

interface ContentSectionProps {
  recentlyReadBooks: BookProgress[];
  recentTheologyBooks: TheologyBook[];
  overallProgress: number;
}

const ContentSection = ({ 
  recentlyReadBooks, 
  recentTheologyBooks, 
  overallProgress 
}: ContentSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="lg:col-span-2 space-y-6">
        {/* Bible Reading Card */}
        <BibleReadingCard recentlyReadBooks={recentlyReadBooks} />
        
        {/* Theology Books Card */}
        <TheologyBooksCard recentTheologyBooks={recentTheologyBooks} />
      </div>
      
      <div className="space-y-6">
        <AchievementsCard />
        <TestamentProgressCard overallProgress={overallProgress} />
        <DailyReadingCard />
      </div>
    </div>
  );
};

export default ContentSection;
