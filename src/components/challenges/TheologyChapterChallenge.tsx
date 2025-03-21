
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadConfirmationSheet from '@/components/challenges/ReadConfirmationSheet';
import ChallengeHeader from './theology/ChallengeHeader';
import ChallengeQuestion from './theology/ChallengeQuestion';
import ChallengeResults from './theology/ChallengeResults';
import ChallengeProgress from './theology/ChallengeProgress';
import ChallengeLoading from './theology/ChallengeLoading';
import ChallengeError from './theology/ChallengeError';
import { useTheologyChallenge } from '@/hooks/theology/use-theology-challenge';

const TheologyChapterChallenge = () => {
  const navigate = useNavigate();
  const {
    // Data
    challenge,
    bookInfo,
    chapterInfo,
    chapterTitle,
    passageText,
    
    // State
    currentQuestion,
    selectedAnswers,
    isSubmitted,
    score,
    maxScore,
    showResults,
    hasReadPassage,
    isReadConfirmationOpen,
    
    // Loading states
    isLoading,
    error,
    
    // Actions
    handleSelectAnswer,
    handleSubmitAnswer,
    handleNextQuestion,
    handleRetake,
    setHasReadPassage,
    setIsReadConfirmationOpen,
    navigateToBook
  } = useTheologyChallenge();

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
            bookId={bookInfo.id}
            bookTitle={bookInfo.title}
            chapterTitle={chapterTitle}
            author={bookInfo.author}
            chapter={parseInt(chapterInfo?.chapter?.toString() || '1')}
            passageText={passageText}
          />

          <ReadConfirmationSheet
            open={isReadConfirmationOpen}
            onOpenChange={setIsReadConfirmationOpen}
            onConfirm={() => setHasReadPassage(true)}
            bookName={bookInfo.title}
            chapter={parseInt(chapterInfo?.chapter?.toString() || '1')}
          />

          {(hasReadPassage || showResults) && (
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
                      onContinue={navigateToBook}
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
                      onClick={() => navigate(`/theology/${bookInfo.id}`)}
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
