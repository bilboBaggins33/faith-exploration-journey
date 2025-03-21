
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { theologyChapterChallenges, theologyChapters, theologyBooks } from '@/data/theology';
import { TheologyChallenge } from '@/data/theology/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Check, X, BookText, AlertTriangle, Trophy, ArrowLeft, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { isSupabaseConfigured } from '@/lib/supabase';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import BiblePassageDialog from '@/components/challenges/BiblePassageDialog';
import ReadConfirmationSheet from '@/components/challenges/ReadConfirmationSheet';

const TheologyChapterChallenge = () => {
  const { bookId = '', chapter = '' } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [previouslyCompletedScore, setPreviouslyCompletedScore] = useState<number | null>(null);
  const [hasReadPassage, setHasReadPassage] = useState(false);
  const [isRetaking, setIsRetaking] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Get challenge data
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
      
      // If Supabase is configured, check if the user has already completed this challenge
      if (isSupabaseConfigured()) {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          const { data: progressData } = await supabase
            .from('bible_progress')
            .select('*')
            .eq('user_id', session.user.id)
            .maybeSingle();
          
          if (progressData && progressData.completed_chapters) {
            const completedChapter = progressData.completed_chapters.find(
              (cc: any) => cc.book_id === bookId && cc.chapter === chapterNum
            );
            
            if (completedChapter && !isRetaking) {
              setPreviouslyCompletedScore(completedChapter.score || 0);
              setMaxScore(found.points);
            }
          }
        }
      }
      
      return found;
    }
  });

  // Get book and chapter info
  const { data: bookInfo } = useQuery({
    queryKey: ['theology-book', bookId],
    queryFn: () => {
      return theologyBooks.find(b => b.id === bookId);
    }
  });

  const { data: chapterInfo } = useQuery({
    queryKey: ['theology-chapter', bookId, chapter],
    queryFn: () => {
      const chapterNum = parseInt(chapter);
      return theologyChapters[bookId as string]?.find(c => c.chapter === chapterNum);
    }
  });

  // Initialize the game state
  useEffect(() => {
    if (challenge) {
      setMaxScore(challenge.points);
      setSelectedAnswers(new Array(challenge.questions.length).fill(''));
      
      // If we're not retaking and there's a previous score, show results immediately
      if (previouslyCompletedScore !== null && !isRetaking) {
        setScore(previouslyCompletedScore);
        setShowResults(true);
      } else {
        setScore(0);
        setShowResults(false);
        setCurrentQuestion(0);
        setIsSubmitted(false);
      }
    }
  }, [challenge, previouslyCompletedScore, isRetaking]);

  // Handle answer selection
  const handleSelectAnswer = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Handle submission of the current question
  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentQuestion] === '') {
      toast({
        title: "Select an answer",
        description: "Please select an answer before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);

    if (selectedAnswers[currentQuestion] === challenge?.questions[currentQuestion].correctAnswer) {
      // Each question is worth the same fraction of the total points
      const pointsPerQuestion = challenge.points / challenge.questions.length;
      setScore(prevScore => prevScore + pointsPerQuestion);
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (currentQuestion < (challenge?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setIsSubmitted(false);
    } else {
      handleFinish();
    }
  };

  // Handle finishing the challenge
  const handleFinish = async () => {
    setShowResults(true);

    // Save progress to Supabase if configured
    if (isSupabaseConfigured()) {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        // Get current progress
        const { data: progressData } = await supabase
          .from('bible_progress')
          .select('*')
          .eq('user_id', session.user.id)
          .maybeSingle();
        
        if (progressData) {
          // If the chapter was not completed before or if the new score is higher, update it
          const completedChapters = progressData.completed_chapters || [];
          const chapterIndex = completedChapters.findIndex(
            (cc: any) => cc.book_id === bookId && cc.chapter === parseInt(chapter)
          );
          
          const newChapterEntry = {
            book_id: bookId,
            chapter: parseInt(chapter),
            completed_at: new Date().toISOString(),
            score: score
          };
          
          let updatedChapters;
          
          if (chapterIndex >= 0) {
            // Only update if new score is higher or we're retaking from the beginning
            if (score > completedChapters[chapterIndex].score || isRetaking) {
              updatedChapters = [...completedChapters];
              updatedChapters[chapterIndex] = newChapterEntry;
            } else {
              updatedChapters = completedChapters;
            }
          } else {
            updatedChapters = [...completedChapters, newChapterEntry];
          }
          
          // Update the database
          await supabase
            .from('bible_progress')
            .update({
              completed_chapters: updatedChapters,
              total_chapters_read: updatedChapters.length
            })
            .eq('user_id', session.user.id);
        } else {
          // Create new progress entry
          await supabase
            .from('bible_progress')
            .insert({
              user_id: session.user.id,
              completed_chapters: [{
                book_id: bookId,
                chapter: parseInt(chapter),
                completed_at: new Date().toISOString(),
                score: score
              }],
              total_chapters_read: 1
            });
        }
      }
    }
  };

  // Handle retaking the challenge
  const handleRetake = () => {
    setIsRetaking(true);
    setSelectedAnswers(new Array(challenge?.questions.length || 0).fill(''));
    setCurrentQuestion(0);
    setScore(0);
    setIsSubmitted(false);
    setShowResults(false);
    setHasReadPassage(false);
  };

  // Calculate score percentage
  const scorePercentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  // Ensure we never exceed 100% due to rounding
  const displayPercentage = Math.min(Math.round(scorePercentage), 100);
  
  // Get chapter title
  const chapterTitle = chapterInfo?.title || `Chapter ${chapter}`;
  
  // Get chapter or book passage text (mock for now)
  const passageText = `This is a placeholder for the text of ${bookInfo?.title || 'the book'}, chapter ${chapter}. In a real application, this would contain the actual text of the chapter from the theological work.`;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading challenge...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !challenge || !bookInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md p-6">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Challenge Not Found</h2>
            <p className="mb-4">
              We couldn't find the theology challenge you're looking for. It may not exist or there might be an error.
            </p>
            <Button onClick={() => navigate('/theology')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Theology
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header with book and chapter info */}
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate(`/theology/${bookId}`)}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
                <Badge variant="outline" className="font-normal">
                  {bookInfo.author}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">
                {bookInfo.title}: {chapterTitle}
              </h1>
            </div>
            <div className="mt-4 md:mt-0">
              <BiblePassageDialog 
                bookName={bookInfo.title} 
                chapter={parseInt(chapter)}
                passageText={passageText}
              />
            </div>
          </div>

          {!hasReadPassage && !showResults && !isRetaking && previouslyCompletedScore === null && (
            <ReadConfirmationSheet
              bookName={bookInfo.title}
              chapter={parseInt(chapter)}
              onConfirm={() => setHasReadPassage(true)}
            />
          )}

          {(hasReadPassage || isRetaking || previouslyCompletedScore !== null) && (
            <>
              {showResults ? (
                /* Results screen */
                <Card className="mb-6">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Challenge Complete!</CardTitle>
                    <CardDescription>
                      You've completed the challenge for {bookInfo.title}: {chapterTitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center mt-4">
                      <div className="relative w-36 h-36 mb-6">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Trophy className={`h-16 w-16 ${displayPercentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-muted-foreground stroke-current"
                            strokeWidth="10"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                          <circle
                            className={`${displayPercentage >= 70 ? 'text-yellow-500' : 'text-primary'} stroke-current`}
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                            strokeDasharray={`${displayPercentage * 2.51327} 251.327`}
                            strokeDashoffset="0"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold mb-1">{displayPercentage}%</h3>
                        <p className="text-muted-foreground">
                          Score: {score.toFixed(1)} / {maxScore} points
                        </p>
                        <div className="mt-2">
                          {displayPercentage >= 90 ? (
                            <Badge className="bg-yellow-500">Excellent!</Badge>
                          ) : displayPercentage >= 70 ? (
                            <Badge className="bg-green-500">Well Done!</Badge>
                          ) : displayPercentage >= 50 ? (
                            <Badge className="bg-blue-500">Good Effort</Badge>
                          ) : (
                            <Badge variant="outline">Keep Studying</Badge>
                          )}
                        </div>
                      </div>

                      <Tabs defaultValue="summary" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="summary">Summary</TabsTrigger>
                          <TabsTrigger value="key-quote">Key Quote</TabsTrigger>
                        </TabsList>
                        <TabsContent value="summary" className="p-4 bg-muted/30 rounded-md mt-2">
                          <h4 className="font-medium mb-2">Chapter Summary</h4>
                          <p className="text-sm text-muted-foreground">
                            In this chapter, C.S. Lewis explores {chapterInfo?.key_themes.join(', ')}.
                            {displayPercentage < 70 && ' Consider reviewing the chapter again to improve your understanding.'}
                          </p>
                        </TabsContent>
                        <TabsContent value="key-quote" className="p-4 bg-muted/30 rounded-md mt-2">
                          <h4 className="font-medium mb-2">Key Quote</h4>
                          <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                            "{challenge.key_quote}"
                          </blockquote>
                          <p className="text-xs text-right mt-2 text-muted-foreground">
                            — {challenge.key_quote_location}
                          </p>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Button 
                      onClick={handleRetake}
                      variant="outline"
                      className="flex items-center"
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Retake Challenge
                    </Button>
                    <Button 
                      onClick={() => navigate(`/theology/${bookId}`)}
                      className="flex items-center"
                    >
                      <BookText className="mr-2 h-4 w-4" />
                      Continue Reading
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                /* Question screen */
                <Card className="mb-6">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="outline">
                        Question {currentQuestion + 1} of {challenge.questions.length}
                      </Badge>
                      <Badge variant="secondary">
                        {challenge.difficulty} • {challenge.points} points
                      </Badge>
                    </div>
                    <Progress 
                      value={(currentQuestion / challenge.questions.length) * 100} 
                      className="h-2"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-medium mb-6">
                      {challenge.questions[currentQuestion].question}
                    </h3>
                    
                    <RadioGroup 
                      value={selectedAnswers[currentQuestion]} 
                      onValueChange={handleSelectAnswer}
                      className="space-y-3"
                      disabled={isSubmitted}
                    >
                      {challenge.questions[currentQuestion].options.map((option, index) => (
                        <div key={index} className={`
                          flex items-start space-x-2 rounded-lg border p-3 cursor-pointer transition-colors
                          ${isSubmitted && option === challenge.questions[currentQuestion].correctAnswer 
                            ? 'border-green-500 bg-green-50' 
                            : isSubmitted && option === selectedAnswers[currentQuestion] && 
                              option !== challenge.questions[currentQuestion].correctAnswer 
                              ? 'border-red-500 bg-red-50'
                              : 'hover:bg-accent'}
                        `}>
                          <RadioGroupItem 
                            value={option} 
                            id={`option-${index}`} 
                            className="mt-1"
                          />
                          <Label 
                            htmlFor={`option-${index}`}
                            className="flex-1 cursor-pointer font-normal text-base"
                          >
                            {option}
                          </Label>
                          {isSubmitted && option === challenge.questions[currentQuestion].correctAnswer && (
                            <Check className="h-5 w-5 text-green-500 shrink-0" />
                          )}
                          {isSubmitted && option === selectedAnswers[currentQuestion] && 
                            option !== challenge.questions[currentQuestion].correctAnswer && (
                            <X className="h-5 w-5 text-red-500 shrink-0" />
                          )}
                        </div>
                      ))}
                    </RadioGroup>
                    
                    {isSubmitted && (
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Explanation</h4>
                        <p className="text-sm text-muted-foreground">
                          {challenge.questions[currentQuestion].explanation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => navigate(`/theology/${bookId}`)}
                    >
                      Exit
                    </Button>
                    {isSubmitted ? (
                      <Button onClick={handleNextQuestion}>
                        {currentQuestion < challenge.questions.length - 1 ? 'Next Question' : 'Finish'}
                      </Button>
                    ) : (
                      <Button onClick={handleSubmitAnswer}>
                        Check Answer
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TheologyChapterChallenge;
