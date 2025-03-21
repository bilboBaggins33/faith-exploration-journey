
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { theologyChapterChallenges, theologyChapters, theologyBooks } from '@/data/theology';
import { isSupabaseConfigured } from '@/lib/supabase';
import { supabase } from '@/lib/supabase';
import { useTheologyProgress } from '@/hooks/use-theology-progress';

export const useTheologyChallengeData = () => {
  const { bookId = '', chapter = '' } = useParams();
  const { getChapterStatus } = useTheologyProgress();
  
  // Query for loading the challenge data
  const { data: challenge, isLoading, error } = useQuery({
    queryKey: ['theology-challenge', bookId, chapter],
    queryFn: async () => {
      const chapterNum = parseInt(chapter);
      const found = theologyChapterChallenges.find(
        c => c.bookId === bookId && c.chapter === chapterNum
      );
      
      if (!found) {
        throw new Error('Challenge not found');
      }
      
      if (isSupabaseConfigured()) {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          // Check if the user has already completed this chapter
          const status = getChapterStatus(bookId, chapterNum);
          
          if (status.completed) {
            return {
              ...found,
              previouslyCompletedScore: status.score || 0
            };
          }
        }
      }
      
      return found;
    }
  });

  // Query for loading book info
  const { data: bookInfo } = useQuery({
    queryKey: ['theology-book', bookId],
    queryFn: () => {
      return theologyBooks.find(b => b.id === bookId);
    }
  });

  // Query for loading chapter info
  const { data: chapterInfo } = useQuery({
    queryKey: ['theology-chapter', bookId, chapter],
    queryFn: () => {
      const chapterNum = parseInt(chapter);
      return theologyChapters[bookId as string]?.find(c => c.chapter === chapterNum);
    }
  });

  // Computed values
  const chapterTitle = chapterInfo?.title || `Chapter ${chapter}`;
  const passageText = `This is a placeholder for the text of ${bookInfo?.title || 'the book'}, chapter ${chapter}. In a real application, this would contain the actual text of the chapter from the theological work.`;

  return {
    bookId,
    chapter: parseInt(chapter),
    challenge,
    bookInfo,
    chapterInfo,
    chapterTitle,
    passageText,
    isLoading,
    error,
    previouslyCompletedScore: challenge?.previouslyCompletedScore || null
  };
};
