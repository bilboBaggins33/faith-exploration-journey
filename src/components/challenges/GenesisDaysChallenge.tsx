import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle, ChevronRight, ArrowLeft, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { genesisCreationQuiz } from '@/data/mapLocations';
import { useToast } from '@/hooks/use-toast';
import { useBibleProgress } from '@/hooks/use-bible-progress';

const GenesisDaysChallenge = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { completeChallenge, isCompleted } = useBibleProgress();
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);

  useEffect(() => {
    const checkCompletion = async () => {
      const completed = isCompleted('creation-quiz');
      setAlreadyCompleted(completed);
    };
    
    checkCompletion();
  }, [isCompleted]);

  const currentQuestion = genesisCreationQuiz[currentQuestionIndex];
  
  const handleOptionSelect = (option: string) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(option);
    }
  };
  
  const handleSubmitAnswer = () => {
    if (!selectedOption) {
      toast({
        title: "Please select an answer",
        description: "You need to select an option before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnswerSubmitted(true);
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < genesisCreationQuiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      
      const finalScore = correctAnswers + (selectedOption === currentQuestion.correctAnswer ? 1 : 0);
      const percentage = (finalScore / genesisCreationQuiz.length) * 100;
      const earnedPoints = Math.round((percentage / 100) * 50);
      
      if (!alreadyCompleted) {
        completeChallenge('creation-quiz', earnedPoints);
      } else {
        toast({
          title: "Challenge already completed",
          description: "You've already earned points for this challenge before.",
        });
      }
    }
  };
  
  const getScoreMessage = () => {
    const finalScore = correctAnswers + (selectedOption === currentQuestion.correctAnswer ? 1 : 0);
    const percentage = (finalScore / genesisCreationQuiz.length) * 100;
    
    if (percentage >= 90) {
      return "Excellent! You have a great understanding of the days of creation.";
    } else if (percentage >= 70) {
      return "Good job! You have a solid knowledge of the days of creation.";
    } else if (percentage >= 50) {
      return "Nice effort! You're on your way to understanding the days of creation.";
    } else {
      return "Keep studying! The days of creation have so much to teach us.";
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };
  
  if (quizCompleted) {
    const finalScore = correctAnswers + (selectedOption === currentQuestion.correctAnswer ? 1 : 0);
    const percentage = Math.round((finalScore / genesisCreationQuiz.length) * 100);
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto p-6"
      >
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-bible-gold/20 rounded-full mb-4">
            <Award className="h-16 w-16 text-bible-gold" />
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-bible-dark mb-2">
            Challenge Completed!
          </h1>
          <p className="text-lg text-bible-dark/80">
            You've completed the Creation Days quiz
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-xl mb-8">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold mb-2 text-bible-blue">{percentage}%</div>
            <p className="text-xl font-medium">
              You got {finalScore} out of {genesisCreationQuiz.length} questions correct
            </p>
          </div>
          
          <Alert className="mb-6 bg-bible-sky/20 border-bible-blue">
            <AlertTitle className="text-bible-blue">Your Result</AlertTitle>
            <AlertDescription>{getScoreMessage()}</AlertDescription>
          </Alert>
          
          <p className="text-center text-bible-dark/70 mb-8">
            The story of creation teaches us about God's power, creativity, and purposeful design. Each day reveals something new about His character and plan for the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-bible-blue text-bible-blue hover:bg-bible-blue/10"
              onClick={resetQuiz}
            >
              Try Again
            </Button>
            
            <Button 
              className="bg-bible-blue hover:bg-bible-deepBlue"
              onClick={() => navigate('/map')}
            >
              Return to Map
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="ghost" 
            className="text-bible-dark/60 hover:text-bible-dark"
            onClick={() => navigate('/challenge')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Challenges
          </Button>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto p-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-bible-dark mb-2">
          Creation Days Quiz
        </h1>
        <p className="text-bible-dark/70">
          Test your knowledge of what God created on each day of creation.
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-bible-dark/60">
            Question {currentQuestionIndex + 1} of {genesisCreationQuiz.length}
          </div>
          {correctAnswers > 0 && (
            <div className="flex items-center text-sm font-medium text-green-600">
              <CheckCircle2 className="mr-1 h-4 w-4" />
              {correctAnswers} correct
            </div>
          )}
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-bible-blue h-2 rounded-full" 
            style={{ width: `${((currentQuestionIndex) / genesisCreationQuiz.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">
          {currentQuestion.question}
        </h2>
        
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option) => (
            <div
              key={option}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedOption === option
                  ? isAnswerSubmitted
                    ? option === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-bible-blue bg-bible-blue/5'
                  : 'border-gray-200 hover:border-bible-blue/50 hover:bg-bible-blue/5'
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isAnswerSubmitted && (
                  option === currentQuestion.correctAnswer ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : selectedOption === option ? (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
        
        {isAnswerSubmitted && (
          <div className="bg-bible-sky/20 border-l-4 border-bible-blue p-4 rounded mb-6">
            <div className="flex">
              <HelpCircle className="h-5 w-5 text-bible-blue mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-bible-blue">Explanation</p>
                <p className="text-sm text-bible-dark/80">{currentQuestion.explanation}</p>
              </div>
            </div>
          </div>
        )}
        
        {!isAnswerSubmitted ? (
          <Button 
            className="w-full bg-bible-blue hover:bg-bible-deepBlue"
            onClick={handleSubmitAnswer}
            disabled={!selectedOption}
          >
            Submit Answer
          </Button>
        ) : (
          <Button 
            className="w-full bg-bible-gold hover:bg-bible-gold/80 text-white"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex < genesisCreationQuiz.length - 1 ? (
              <>
                Next Question
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              'Complete Challenge'
            )}
          </Button>
        )}
      </div>
      
      <div className="text-center">
        <Button 
          variant="ghost" 
          className="text-bible-dark/60 hover:text-bible-dark"
          onClick={() => navigate('/challenge')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Challenges
        </Button>
      </div>
    </motion.div>
  );
};

export default GenesisDaysChallenge;
