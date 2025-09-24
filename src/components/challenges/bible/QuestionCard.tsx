import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
  showExplanation: boolean;
  isCorrect: boolean | null;
  explanation: string;
  onSelectAnswer: (answer: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  isLastQuestion: boolean;
  isNotFirstQuestion: boolean;
  onNavigateBack: (() => void) | null;
}

const QuestionCard = ({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  showExplanation,
  isCorrect,
  explanation,
  onSelectAnswer,
  onCheckAnswer,
  onNextQuestion,
  onPreviousQuestion,
  isLastQuestion,
  isNotFirstQuestion,
  onNavigateBack,
}: QuestionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-medium mb-2">{question}</h2>

        <RadioGroup
          value={selectedAnswer || ""}
          onValueChange={onSelectAnswer}
          className=" mb-6"
          disabled={showExplanation}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => !showExplanation && onSelectAnswer(option)}
              className={cn(
                "flex items-center rounded-lg p-4 cursor-pointer transition-all",
                selectedAnswer === option
                  ? "border-bible-blue bg-bible-blue/5"
                  : "border-gray-200",
                showExplanation && option === correctAnswer
                  ? "border-green-500 bg-green-50"
                  : "",
                showExplanation &&
                  selectedAnswer === option &&
                  option !== correctAnswer
                  ? "border-red-500 bg-red-50"
                  : ""
              )}
              tabIndex={0}
              role="button"
              aria-pressed={selectedAnswer === option}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !showExplanation) {
                  onSelectAnswer(option);
                }
              }}
            >
              <RadioGroupItem
                value={option}
                id={`option-${index}`}
                className="mr-2"
                // Prevent double event when clicking the radio itself
                onClick={(e) => e.stopPropagation()}
              />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                {option}
              </Label>
              {showExplanation && option === correctAnswer && (
                <CheckCircle
                  className="text-green-500 ml-2 flex-shrink-0"
                  size={18}
                />
              )}
              {showExplanation &&
                selectedAnswer === option &&
                option !== correctAnswer && (
                  <X className="text-red-500 ml-2 flex-shrink-0" size={18} />
                )}
            </div>
          ))}
        </RadioGroup>

        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "p-4 rounded-lg mb-6 flex items-center justify-between",
              isCorrect
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            )}
          >
            <div className="flex items-center">
              {isCorrect ? (
                <CheckCircle
                  className="text-green-500 mr-2 flex-shrink-0"
                  size={20}
                />
              ) : (
                <X
                  className="text-red-500 mr-2 flex-shrink-0"
                  size={20}
                />
              )}
              <span className="font-medium">
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
            </div>
            
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button 
                  className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                  onClick={() => setIsModalOpen(true)}
                >
                  View Answer
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>
                    {isCorrect ? "Correct Answer" : "Answer Explanation"}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-sm leading-relaxed">{explanation}</p>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        )}

        <div className="flex justify-between">
          {!showExplanation ? (
            <Button
              disabled={!selectedAnswer}
              onClick={onCheckAnswer}
              className={cn(!onNavigateBack && "ml-auto w-full sm:w-auto")}
            >
              Check Answer
            </Button>
          ) : (
            <Button
              onClick={onNextQuestion}
              className={cn(!onNavigateBack && "ml-auto w-full sm:w-auto")}
            >
              {!isLastQuestion ? (
                <>
                  Next Question
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2"
                    style={{ width: 16, height: 16 }}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Complete Challenge
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-circle ml-2"
                    style={{ width: 16, height: 16 }}
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </>
              )}
            </Button>
          )}
        </div>
        {isNotFirstQuestion && (
          <Button
            variant="link"
            onClick={onPreviousQuestion}
            className="flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left mr-2"
              style={{ width: 16, height: 16 }}
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default QuestionCard;
