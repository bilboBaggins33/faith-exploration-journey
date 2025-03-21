
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { theologyChapterChallenges, theologyChapters, theologyBooks } from '@/data/theology';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { isSupabaseConfigured } from '@/lib/supabase';
import ReadConfirmationSheet from '@/components/challenges/ReadConfirmationSheet';
import ChallengeHeader from './theology/ChallengeHeader';
import ChallengeQuestion from './theology/ChallengeQuestion';
import ChallengeResults from './theology/ChallengeResults';
import ChallengeProgress from './theology/ChallengeProgress';
import ChallengeLoading from './theology/ChallengeLoading';
import ChallengeError from './theology/ChallengeError';
import { useTheologyProgress } from '@/hooks/use-theology-progress';

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
  const [isReadConfirmationOpen, setIsReadConfirmationOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { completeChallenge, getChapterStatus } = useTheologyProgress();

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
          
          if (status.completed && !isRetaking) {
            setPreviouslyCompletedScore(status.score || 0);
            setMaxScore(found.points);
          }
        }
      }
      
      return found;
    }
  });

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

  useEffect(() => {
    if (challenge) {
      setMaxScore(challenge.points);
      setSelectedAnswers(new Array(challenge.questions.length).fill(''));
      
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
    
    if (!hasReadPassage && !isRetaking && previouslyCompletedScore === null) {
      setIsReadConfirmationOpen(true);
    }
  }, [challenge, previouslyCompletedScore, isRetaking, hasReadPassage]);

  const handleSelectAnswer = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

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
      const pointsPerQuestion = challenge.points / challenge.questions.length;
      setScore(prevScore => prevScore + pointsPerQuestion);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < (challenge?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setIsSubmitted(false);
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    setShowResults(true);

    if (isSupabaseConfigured() && challenge) {
      try {
        await completeChallenge(bookId, parseInt(chapter), score);
      } catch (error) {
        console.error('Error saving challenge results:', error);
        toast({
          title: "Error",
          description: "There was a problem saving your progress.",
          variant: "destructive"
        });
      }
    }
  };

  const handleRetake = () => {
    setIsRetaking(true);
    setSelectedAnswers(new Array(challenge?.questions.length || 0).fill(''));
    setCurrentQuestion(0);
    setScore(0);
    setIsSubmitted(false);
    setShowResults(false);
    setHasReadPassage(false);
    setIsReadConfirmationOpen(true);
  };

  const chapterTitle = chapterInfo?.title || `Chapter ${chapter}`;
  const passageText = `This is a placeholder for the text of ${bookInfo?.title || 'the book'}, chapter ${chapter}. In a real application, this would contain the actual text of the chapter from the theological work.`;

  if (isLoading) {
    return <ChallengeLoading />;
  }

  if (error || !challenge || !bookInfo) {
    return <ChallengeError />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ChallengeHeader 
            bookId={bookId}
            bookTitle={bookInfo.title}
            chapterTitle={chapterTitle}
            author={bookInfo.author}
            chapter={parseInt(chapter)}
            passageText={passageText}
          />

          <ReadConfirmationSheet
            open={isReadConfirmationOpen}
            onOpenChange={setIsReadConfirmationOpen}
            onConfirm={() => setHasReadPassage(true)}
            bookName={bookInfo.title}
            chapter={parseInt(chapter)}
          />

          {(hasReadPassage || isRetaking || previouslyCompletedScore !== null) && (
            <>
              {showResults ? (
                <Card className="mb-6">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Challenge Complete!</CardTitle>
                    <CardDescription>
                      You've completed the challenge for {bookInfo.title}: {chapterTitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChallengeResults
                      score={score}
                      maxScore={maxScore}
                      onRetake={handleRetake}
                      onContinue={() => navigate(`/theology/${bookId}`)}
                      bookTitle={bookInfo.title}
                      chapterTitle={chapterTitle}
                      keyQuote={challenge.key_quote}
                      keyQuoteLocation={challenge.key_quote_location}
                      keyThemes={chapterInfo?.key_themes || []}
                    />
                  </CardContent>
                </Card>
              ) : (
                <Card className="mb-6">
                  <CardHeader>
                    <ChallengeProgress
                      currentQuestion={currentQuestion}
                      totalQuestions={challenge.questions.length}
                      difficulty={challenge.difficulty}
                      points={challenge.points}
                    />
                  </CardHeader>
                  <CardContent>
                    <ChallengeQuestion
                      question={challenge.questions[currentQuestion].question}
                      options={challenge.questions[currentQuestion].options}
                      correctAnswer={challenge.questions[currentQuestion].correctAnswer}
                      selectedAnswer={selectedAnswers[currentQuestion]}
                      isSubmitted={isSubmitted}
                      explanation={challenge.questions[currentQuestion].explanation}
                      onSelectAnswer={handleSelectAnswer}
                    />
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
