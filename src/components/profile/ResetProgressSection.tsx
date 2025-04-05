
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
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

const ResetProgressSection = () => {
  const [resetting, setResetting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { updateProgress: updateBibleProgress } = useBibleProgress();
  const { updateProgress: updateTheologyProgress } = useTheologyProgress();
  
  const handleResetProgress = async () => {
    setResetting(true);
    
    try {
      // Reset Bible progress
      await updateBibleProgress('reset');
      
      // Reset Theology progress - passing an empty object as data
      await updateTheologyProgress({});
      
      setDialogOpen(false);
    } catch (error) {
      console.error('Error resetting progress:', error);
    } finally {
      setResetting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Reset Progress</h3>
          <p className="text-sm text-gray-600">
            Reset all your Bible reading and Theology course progress. This action cannot be undone.
          </p>
        </div>
        
        <Button 
          variant="destructive" 
          onClick={() => setDialogOpen(true)}
        >
          Reset Progress
        </Button>
      </div>
      
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all your Bible reading progress, 
              completed challenges, and course completions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleResetProgress}
              className="bg-red-500 hover:bg-red-600"
              disabled={resetting}
            >
              {resetting ? "Resetting..." : "Yes, reset everything"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ResetProgressSection;
