import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-primary mb-6">{question}</h2>

        <RadioGroup
          value={selectedAnswer || ""}
          onValueChange={onSelectAnswer}
          className="space-y-3 mb-6"
          disabled={showExplanation}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => !showExplanation && onSelectAnswer(option)}
              className={cn(
                "flex items-center rounded-full border px-4 py-3 cursor-pointer transition-all bg-card",
                selectedAnswer === option
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50",
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
                className="mr-3"
                onClick={(e) => e.stopPropagation()}
              />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer text-foreground"
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
              "p-4 rounded-lg mb-6",
              isCorrect
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            )}
          >
            <div className="flex items-start">
              {isCorrect ? (
                <CheckCircle
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
              ) : (
                <X
                  className="text-red-500 mr-2 mt-1 flex-shrink-0"
                  size={20}
                />
              )}
              <div>
                <h3 className="font-medium mb-1">
                  {isCorrect ? "Correct!" : "Incorrect"}
                </h3>
                <p className="text-sm">{explanation}</p>
              </div>
            </div>
          </motion.div>
        )}

        {!showExplanation ? (
          <Button
            disabled={!selectedAnswer}
            onClick={onCheckAnswer}
            className="w-full py-3 text-base font-medium"
            size="lg"
          >
            Check Answer
          </Button>
        ) : (
          <Button
            onClick={onNextQuestion}
            className="w-full py-3 text-base font-medium"
            size="lg"
          >
            {!isLastQuestion ? "Next Question" : "Complete Challenge"}
          </Button>
        )}

        {onNavigateBack && (
          <button
            onClick={onNavigateBack}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mt-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default QuestionCard;