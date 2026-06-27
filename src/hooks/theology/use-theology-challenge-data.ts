
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { theologyChapterChallenges, theologyChapters, theologyBooks } from '@/data/theology';
import { isSupabaseConfigured } from '@/lib/supabase';
import { supabase } from '@/lib/supabase';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { TheologyChallenge } from '@/data/theology/types';

// Extend TheologyChallenge type to include previouslyCompletedScore
interface TheologyChallengeWithScore extends TheologyChallenge {
  previouslyCompletedScore?: number;
}

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
            } as TheologyChallengeWithScore;
          }
        }
      }
      
      return found as TheologyChallengeWithScore;
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
  // The theology works are under copyright, so we point readers to the source
  // and surface the key themes we do have, rather than reproducing the text.
  const themes = chapterInfo?.key_themes?.length
    ? ` Key themes: ${chapterInfo.key_themes.join(', ')}.`
    : '';
  const passageText = `Read ${chapterTitle}${
    bookInfo?.title ? ` of ${bookInfo.title}` : ''
  }${bookInfo?.author ? ` by ${bookInfo.author}` : ''} before taking the challenge.${themes}`;

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
