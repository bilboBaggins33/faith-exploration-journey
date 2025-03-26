import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RotateCcw, BookOpen, BookText } from 'lucide-react';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useTheologyProgress } from '@/hooks/theology/use-theology-progress';
import { useToast } from '@/hooks/use-toast';

const ResetProgressSection = () => {
  const { updateProgress: updateBibleProgress } = useBibleProgress();
  const { updateProgress: updateTheologyProgress } = useTheologyProgress();
  const { toast } = useToast();
  const [isResettingBible, setIsResettingBible] = useState(false);
  const [isResettingBooks, setIsResettingBooks] = useState(false);

  const handleResetBibleProgress = async () => {
    try {
      setIsResettingBible(true);
      await updateBibleProgress({
        completed_chapters: [],
        challenges_completed: [],
        books_progress: {},
        total_chapters_read: 0
      });
      toast({
        title: "Bible progress reset",
        description: "Your Bible reading progress has been reset successfully.",
      });
    } catch (error) {
      console.error('Error resetting Bible progress:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to reset Bible progress. Please try again.",
      });
    } finally {
      setIsResettingBible(false);
    }
  };

  const handleResetTheologyProgress = async () => {
    try {
      setIsResettingBooks(true);
      await updateTheologyProgress({
        completed_chapters: [],
        books_started: [],
        books_completed: [],
        total_chapters_read: 0,
        total_points: 0
      });
      toast({
        title: "Books progress reset",
        description: "Your theological books reading progress has been reset successfully.",
      });
    } catch (error) {
      console.error('Error resetting theology progress:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to reset books progress. Please try again.",
      });
    } finally {
      setIsResettingBooks(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Reset Progress</h3>
        <p className="text-sm text-gray-500 mb-4">
          Resetting your progress will permanently delete all your reading records.
          This action cannot be undone.
        </p>

        <div className="space-y-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="warning" 
                className="w-full sm:w-auto flex items-center"
                disabled={isResettingBible}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                <BookOpen className="h-4 w-4 mr-2" />
                Reset Bible Progress
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset Bible Progress</AlertDialogTitle>
                <AlertDialogDescription>
                  This will reset all your Bible reading progress, including completed chapters and challenges.
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleResetBibleProgress}>
                  Yes, Reset Progress
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="danger" 
                className="w-full sm:w-auto flex items-center"
                disabled={isResettingBooks}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                <BookText className="h-4 w-4 mr-2" />
                Reset Books Progress
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset Books Progress</AlertDialogTitle>
                <AlertDialogDescription>
                  This will reset all your theological books reading progress, including completed chapters and books.
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleResetTheologyProgress}>
                  Yes, Reset Progress
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default ResetProgressSection;
