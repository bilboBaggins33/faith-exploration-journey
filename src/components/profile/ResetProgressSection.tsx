
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { bibleBooks } from '@/data/bible';

const ResetProgressSection = () => {
  // State for dialogs
  const [bibleDialogOpen, setBibleDialogOpen] = useState(false);
  const [theologyDialogOpen, setTheologyDialogOpen] = useState(false);
  
  // State for tracking reset operations
  const [resettingBible, setResettingBible] = useState(false);
  const [resettingTheology, setResettingTheology] = useState(false);
  
  // Hooks for progress data
  const { updateProgress: updateBibleProgress, progress: bibleProgress } = useBibleProgress();
  const { updateProgress: updateTheologyProgress, progress: theologyProgress } = useTheologyProgress();
  
  const handleResetBibleProgress = async () => {
    setResettingBible(true);
    
    try {
      // Reset Bible progress - properly typed to accept 'reset'
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
      // Reset Theology progress - passing an empty object with required fields
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
  
  // Calculate Bible stats
  const totalBibleChapters = bibleBooks.reduce((sum, book) => sum + book.chapters, 0);
  const completedBibleChapters = bibleProgress?.total_chapters_read || 0;
  const bibleCompletionPercentage = Math.round((completedBibleChapters / totalBibleChapters) * 100) || 0;
  
  // Calculate Theology stats
  const theologyCompletedChapters = theologyProgress?.total_chapters_read || 0;
  
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium mb-4">Reset Progress</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bible Reset Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Bible Reading Progress</CardTitle>
            <CardDescription>
              {completedBibleChapters} of {totalBibleChapters} chapters ({bibleCompletionPercentage}%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-bible-blue" 
                style={{ width: `${bibleCompletionPercentage}%` }}
              ></div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="destructive" 
              onClick={() => setBibleDialogOpen(true)}
              className="w-full flex items-center justify-center"
              disabled={resettingBible}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset Bible Progress
            </Button>
          </CardFooter>
        </Card>
        
        {/* Theology Reset Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Books & Theology Progress</CardTitle>
            <CardDescription>
              {theologyCompletedChapters} chapters completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-sm">
                {theologyProgress?.books_completed?.length || 0} books completed
              </div>
              <div className="text-sm">
                {theologyProgress?.books_started?.length || 0} books started
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="destructive" 
              onClick={() => setTheologyDialogOpen(true)}
              className="w-full flex items-center justify-center"
              disabled={resettingTheology}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset Books Progress
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Bible Reset Confirmation Dialog */}
      <AlertDialog open={bibleDialogOpen} onOpenChange={setBibleDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
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
              className="bg-red-500 hover:bg-red-600"
              disabled={resettingBible}
            >
              {resettingBible ? "Resetting..." : "Reset Bible Progress"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Theology Reset Confirmation Dialog */}
      <AlertDialog open={theologyDialogOpen} onOpenChange={setTheologyDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
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
              className="bg-red-500 hover:bg-red-600"
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
