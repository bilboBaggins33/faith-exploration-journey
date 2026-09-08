import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { bibleBooks } from '@/data/bible';
import { Progress } from '@/components/ui/progress';

const ResetProgressSection = () => {
  const [bibleDialogOpen, setBibleDialogOpen] = useState(false);
  const [theologyDialogOpen, setTheologyDialogOpen] = useState(false);
  const [resettingBible, setResettingBible] = useState(false);
  const [resettingTheology, setResettingTheology] = useState(false);

  const { updateProgress: updateBibleProgress, progress: bibleProgress } = useBibleProgress();
  const { updateProgress: updateTheologyProgress, progress: theologyProgress } = useTheologyProgress();

  const handleResetBibleProgress = async () => {
    setResettingBible(true);
    try {
      await updateBibleProgress('reset');
      setBibleDialogOpen(false);
    } catch (error) {
      console.error('Error resetting Bible progress:', error);
    } finally {
      setResettingBible(false);
    }
  };

  const handleResetTheologyProgress = async () => {
    setResettingTheology(true);
    try {
      await updateTheologyProgress({
        completed_chapters: [],
        books_started: [],
        books_completed: [],
        total_chapters_read: 0,
        total_points: 0
      });
      setTheologyDialogOpen(false);
    } catch (error) {
      console.error('Error resetting Theology progress:', error);
    } finally {
      setResettingTheology(false);
    }
  };

  const totalBibleChapters = bibleBooks.reduce((sum, book) => sum + book.chapters, 0);
  const completedBibleChapters = bibleProgress?.total_chapters_read || 0;
  const bibleCompletionPercentage = Math.round((completedBibleChapters / totalBibleChapters) * 100) || 0;
  const theologyCompletedChapters = theologyProgress?.total_chapters_read || 0;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-serif font-semibold">Reset Progress</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <h4 className="text-base font-medium text-foreground">Bible Reading</h4>
            <p className="text-sm text-muted-foreground mt-1">
              {completedBibleChapters} of {totalBibleChapters} chapters ({bibleCompletionPercentage}%)
            </p>
          </div>
          <Progress value={bibleCompletionPercentage} className="h-2" />
          <Button
            variant="destructive"
            onClick={() => setBibleDialogOpen(true)}
            className="w-full"
            disabled={resettingBible}
          >
            <RefreshCw className="h-4 w-4" />
            Reset Bible Progress
          </Button>
        </div>

        <div className="space-y-4 md:border-l md:border-border md:pl-8">
          <div>
            <h4 className="text-base font-medium text-foreground">Books & Theology</h4>
            <p className="text-sm text-muted-foreground mt-1">
              {theologyCompletedChapters} chapters completed
            </p>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{theologyProgress?.books_completed?.length || 0} books completed</p>
            <p>{theologyProgress?.books_started?.length || 0} books started</p>
          </div>
          <Button
            variant="destructive"
            onClick={() => setTheologyDialogOpen(true)}
            className="w-full"
            disabled={resettingTheology}
          >
            <RefreshCw className="h-4 w-4" />
            Reset Books Progress
          </Button>
        </div>
      </div>

      <AlertDialog open={bibleDialogOpen} onOpenChange={setBibleDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-destructive" />
              Reset Bible Progress?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all your Bible reading progress,
              completed chapters, and challenge scores. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleResetBibleProgress}
              className="bg-destructive hover:bg-destructive/90"
              disabled={resettingBible}
            >
              {resettingBible ? "Resetting..." : "Reset Bible Progress"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={theologyDialogOpen} onOpenChange={setTheologyDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-destructive" />
              Reset Books Progress?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all your book reading progress,
              completed chapters, and course completions. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleResetTheologyProgress}
              className="bg-destructive hover:bg-destructive/90"
              disabled={resettingTheology}
            >
              {resettingTheology ? "Resetting..." : "Reset Books Progress"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ResetProgressSection;
