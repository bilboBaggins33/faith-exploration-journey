
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { bibleBooks, bibleChapters, sampleChapterChallenges } from '@/data/bibleData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { 
  Book, CheckCircle, ArrowRight, ArrowLeft, Award, 
  BookOpen, AlertCircle, X, HelpCircle, Bookmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import ReadConfirmationSheet from './ReadConfirmationSheet';
import BiblePassageDialog from './BiblePassageDialog';

const BibleChapterChallenge = () => {
  const { bookId, chapter } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { completeChallenge, isCompleted, progress } = useBibleProgress();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [retakeInProgress, setRetakeInProgress] = useState(false);
  const [readConfirmationOpen, setReadConfirmationOpen] = useState(false);
  const [hasConfirmedReading, setHasConfirmedReading] = useState(false);
  
  // Find challenge data
  const book = bibleBooks.find(b => b.id === bookId);
  
  // For demonstration, we'll use the sample challenges
  const challenge = sampleChapterChallenges.find(
    c => c.bookId === bookId && c.chapter === Number(chapter)
  ) || sampleChapterChallenges[0]; // Default to Genesis 1 for demo
  
  // Track whether this challenge is already completed
  const challengeId = `${bookId}-${chapter}`;
  const challengeCompleted = isCompleted(challengeId);
  
  useEffect(() => {
    console.log('BibleChapterChallenge component mounted', { bookId, chapter });
    console.log('Current user:', user?.id);
    console.log('Current progress:', progress);
    console.log('Challenge completed?', challengeCompleted);
    
    // Check if the challenge exists and initialize
    if (challenge) {
      setLoading(false);
      
      // Check if we're explicitly restarting via URL params or state
      const urlParams = new URLSearchParams(window.location.search);
      const forceRestart = urlParams.get('restart') === 'true' || retakeInProgress;
      
      // If already completed and not forcing restart, load the saved score but don't auto-show the results
      if (challengeCompleted && !forceRestart) {
        console.log('Challenge is already completed');
        
        // Find the saved score for this chapter
        const chapterData = progress?.completed_chapters?.find(
          c => c.book_id === bookId && c.chapter === Number(chapter)
        );
        
        if (chapterData && chapterData.score !== undefined) {
          console.log('Found saved score:', chapterData.score);
          // Ensure score doesn't exceed max possible points
          const maxPossibleScore = challenge.questions.length;
          setScore(Math.min(chapterData.score, maxPossibleScore));
        } else {
          // If no specific score saved, default to max points
          console.log('No saved score found, defaulting to max points');
          setScore(challenge.questions.length);
        }
        
        // Show the read confirmation first instead of immediately showing the quiz
        if (!hasConfirmedReading) {
          setReadConfirmationOpen(true);
        }
      } else if (forceRestart) {
        // Reset all states if we're restarting
        console.log('Restarting challenge');
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setIsCorrect(null);
        setScore(0);
        setQuizCompleted(false);
        setRetakeInProgress(false);
        
        // Show the read confirmation first
        if (!hasConfirmedReading) {
          setReadConfirmationOpen(true);
        }
      } else {
        // First time taking challenge
        console.log('First time taking challenge');
        
        // Show the read confirmation dialog
        if (!hasConfirmedReading) {
          setReadConfirmationOpen(true);
        }
      }
    } else {
      // Challenge doesn't exist, show error or redirect
      toast({
        title: "Challenge Not Found",
        description: "This Bible chapter challenge is not available yet.",
        variant: "destructive",
      });
      setLoading(false);
    }
  }, [challenge, challengeCompleted, progress, bookId, chapter, user, toast, retakeInProgress, hasConfirmedReading]);
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };
  
  const checkAnswer = () => {
    if (!selectedAnswer) return;
    
    const currentQ = challenge.questions[currentQuestion];
    const correct = selectedAnswer === currentQ.correctAnswer;
    
    setIsCorrect(correct);
    setShowExplanation(true);
    
    if (correct) {
      // 1 point per correct question
      setScore(score + 1);
    }
  };
  
  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    
    if (currentQuestion < challenge.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Complete the challenge
      setQuizCompleted(true);
      
      // Only update score if it's a new score or better than previous
      if (!challengeCompleted || retakeInProgress) {
        console.log('Completing challenge with score:', score);
        // Make sure challengeId is correct format: "bookId-chapter"
        // Ensure score doesn't exceed maximum points possible
        const finalScore = isCorrect ? score + 1 : score;
        const maxPossibleScore = challenge.questions.length;
        const cappedScore = Math.min(finalScore, maxPossibleScore);
        
        // Only update if it's a new completion or a better score
        if (!challengeCompleted || cappedScore > (score || 0)) {
          completeChallenge(challengeId, cappedScore);
        } else {
          console.log('Not updating score as new score is not better than previous');
        }
      }
    }
  };
  
  const restartQuiz = () => {
    setRetakeInProgress(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const navigateToBookPage = () => {
    navigate(`/bible/${bookId}`);
  };

  const handleReadingConfirmed = () => {
    setHasConfirmedReading(true);
    setReadConfirmationOpen(false);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bible-blue mx-auto mb-4"></div>
            <p>Loading challenge...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!challenge) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="p-8 max-w-md text-center">
            <AlertCircle className="mx-auto text-red-500 mb-4" size={40} />
            <h2 className="text-xl font-bold mb-2">Challenge Not Available</h2>
            <p className="text-gray-600 mb-6">This Bible chapter challenge hasn't been created yet.</p>
            <Button onClick={() => navigate('/bible')}>
              Return to Bible Explorer
            </Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="p-8 max-w-md text-center">
            <AlertCircle className="mx-auto text-blue-500 mb-4" size={40} />
            <h2 className="text-xl font-bold mb-2">Login Required</h2>
            <p className="text-gray-600 mb-6">You need to be logged in to save your progress. Please log in to continue.</p>
            <Button onClick={() => navigate('/auth')}>
              Go to Login
            </Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
  
  const currentQuestionData = challenge?.questions[currentQuestion];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Reading Confirmation Sheet */}
      <ReadConfirmationSheet
        open={readConfirmationOpen}
        onOpenChange={setReadConfirmationOpen}
        onConfirm={handleReadingConfirmed}
        bookName={book?.name || ''}
        chapter={Number(chapter) || 1}
      />
      
      <main className="flex-1 pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-2">
              <Book className="mr-2 text-bible-blue" size={20} />
              <h3 className="text-lg font-medium">{book?.name || 'Bible'} {chapter}</h3>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
              {challenge?.title}
            </h1>
            
            {!quizCompleted && challenge && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestion + 1} of {challenge.questions.length}</span>
                  <span>{score} points earned</span>
                </div>
                <Progress value={((currentQuestion + 1) / challenge.questions.length) * 100} className="h-2" />
              </div>
            )}
            
            {/* Bible Passage Link */}
            <div className="mb-4">
              <BiblePassageDialog
                bookName={book?.name || ''}
                chapter={Number(chapter) || 1}
                passageText={""}
              />
            </div>
          </div>
          
          {/* Quiz content */}
          {!quizCompleted && currentQuestionData ? (
            <div className="glass-card p-6 rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-medium mb-6">
                    {currentQuestionData.question}
                  </h2>
                  
                  <RadioGroup
                    value={selectedAnswer || ""}
                    onValueChange={handleAnswerSelect}
                    className="space-y-3 mb-6"
                    disabled={showExplanation}
                  >
                    {currentQuestionData.options.map((option, index) => (
                      <div key={index}>
                        <div className={cn(
                          "flex items-center rounded-lg border p-4 cursor-pointer transition-all",
                          selectedAnswer === option ? 'border-bible-blue bg-bible-blue/5' : 'border-gray-200',
                          showExplanation && option === currentQuestionData.correctAnswer ? 'border-green-500 bg-green-50' : '',
                          showExplanation && selectedAnswer === option && option !== currentQuestionData.correctAnswer ? 'border-red-500 bg-red-50' : ''
                        )}>
                          <RadioGroupItem 
                            value={option} 
                            id={`option-${index}`} 
                            className="mr-2"
                          />
                          <Label 
                            htmlFor={`option-${index}`}
                            className="flex-1 cursor-pointer"
                          >
                            {option}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "p-4 rounded-lg mb-6",
                        isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                      )}
                    >
                      <div className="flex items-start">
                        {isCorrect ? (
                          <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                        ) : (
                          <X className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} />
                        )}
                        <div>
                          <h3 className="font-medium mb-1">
                            {isCorrect ? 'Correct!' : 'Incorrect'}
                          </h3>
                          <p className="text-sm">{currentQuestionData.explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => navigate(-1)}
                      className="flex items-center"
                    >
                      <ArrowLeft className="mr-2" size={16} />
                      Back
                    </Button>
                    
                    {!showExplanation ? (
                      <Button 
                        disabled={!selectedAnswer}
                        onClick={checkAnswer}
                      >
                        Check Answer
                      </Button>
                    ) : (
                      <Button onClick={nextQuestion}>
                        {currentQuestion < challenge.questions.length - 1 ? (
                          <>
                            Next Question
                            <ArrowRight className="ml-2" size={16} />
                          </>
                        ) : (
                          <>
                            Complete Challenge
                            <CheckCircle className="ml-2" size={16} />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : quizCompleted && challenge ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8 text-center">
                <Award className={cn(
                  "mx-auto mb-4", 
                  score === challenge.questions.length ? "text-purple-500" : "text-bible-gold"
                )} size={60} />
                
                <h2 className="text-2xl font-bold mb-2">
                  {score === challenge.questions.length ? "Perfect Score!" : "Challenge Completed!"}
                </h2>
                
                <p className="text-gray-600 mb-2">
                  You've earned {score} out of {challenge.questions.length} possible points.
                </p>
                
                <div className="w-full max-w-xs mx-auto mb-6">
                  <Progress 
                    value={Math.min((score / challenge.questions.length) * 100, 100)} 
                    className={cn(
                      "h-3 rounded-full",
                      score === challenge.questions.length ? "bg-purple-200" : ""
                    )}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {Math.min(Math.round((score / challenge.questions.length) * 100), 100)}% complete
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-2 flex items-center justify-center">
                    <Bookmark className="mr-2 text-bible-blue" size={16} />
                    Key Verse to Remember
                  </h3>
                  <p className="italic text-gray-700 mb-2">"{challenge.key_verse_text}"</p>
                  <p className="text-sm text-gray-500">{challenge.key_verse}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
                  <Button 
                    onClick={restartQuiz}
                    variant="outline"
                  >
                    Retake Challenge
                  </Button>
                  
                  <Button onClick={navigateToBookPage}>
                    Return to {book?.name || 'Book'}
                  </Button>
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="link" 
                    className="text-gray-500"
                    onClick={() => navigate('/bible')}
                  >
                    <BookOpen className="mr-2" size={16} />
                    Bible Explorer
                  </Button>
                </div>
              </Card>
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bible-blue mx-auto mb-4"></div>
              <p>Loading challenge...</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BibleChapterChallenge;
