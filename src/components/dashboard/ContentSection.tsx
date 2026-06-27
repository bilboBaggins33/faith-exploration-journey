
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
  hasStartedReading?: boolean;
}

const ContentSection = ({
  recentlyReadBooks,
  recentTheologyBooks,
  hasStartedReading = false,
}: ContentSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Primary column — reading */}
      <div className="lg:col-span-7 xl:col-span-8 space-y-6">
        {!hasStartedReading && <DailyReadingCard featured />}
        <BibleReadingCard recentlyReadBooks={recentlyReadBooks} />
        <TheologyBooksCard recentTheologyBooks={recentTheologyBooks} />
      </div>

      {/* Sidebar — progress & goals */}
      <aside className="lg:col-span-5 xl:col-span-4 space-y-6">
        <AchievementsCard />
        <TestamentProgressCard />
        {hasStartedReading && <DailyReadingCard />}
      </aside>
    </div>
  );
};

export default ContentSection;
