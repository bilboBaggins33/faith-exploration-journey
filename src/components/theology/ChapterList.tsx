
import React from 'react';
import { TheologyChapter } from '@/data/theology/types';
import ChapterCard from './ChapterCard';

interface ChapterListProps {
  chapters: TheologyChapter[];
  getChapterStatus: (bookId: string, chapter: number) => {
    completed: boolean;
    score: number;
    completedAt?: string;
  };
}

const ChapterList: React.FC<ChapterListProps> = ({ 
  chapters,
  getChapterStatus 
}) => {
  return (
    <>
      <h3 className="text-xl font-bold mb-6 mt-8">Chapters</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter: TheologyChapter) => {
          const status = getChapterStatus(chapter.bookId, chapter.chapter);
          return (
            <ChapterCard
              key={`${chapter.bookId}-${chapter.chapter}`}
              chapter={chapter}
              status={status}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChapterList;
