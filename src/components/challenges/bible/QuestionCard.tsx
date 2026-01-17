import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
    <div className="pt-2">
      {/* Explanation Dialog - moved outside buttons for proper event handling */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Answer Explanation</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <p className="text-sm leading-relaxed">{explanation}</p>
          </div>
        </DialogContent>
      </Dialog>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Question Text - Playfair Display serif font, centered */}
        <h2 className="text-xl text-center text-white mb-6 leading-relaxed drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
          {question}
        </h2>

        {/* Answer Options - Pill shaped buttons */}
        <div className="space-y-3 mb-6">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrectAnswer = option === correctAnswer;
            const isWrongSelection = showExplanation && isSelected && !isCorrectAnswer;
            const showAsCorrect = showExplanation && isCorrectAnswer;

            return (
              <button
                key={index}
                onClick={() => !showExplanation && onSelectAnswer(option)}
                disabled={showExplanation}
                className={cn(
                  "w-full py-4 px-6 rounded-full text-center font-medium transition-all duration-300 relative backdrop-blur-md border",
                  // Default unselected state - frosted glass
                  !isSelected && !showExplanation && "bg-white/10 text-white border-white/40 hover:bg-white/40 shadow-lg",
                  // Selected state - golden gradient with glass
                  isSelected && !showExplanation && "bg-gradient-to-r from-amber-400/30 to-amber-500/30 text-white border-amber-300/50 shadow-xl",
                  // Correct answer revealed
                  showAsCorrect && "bg-gradient-to-r from-green-400/90 to-green-500/90 text-white border-green-300/50 shadow-xl",
                  // Wrong selection
                  isWrongSelection && "bg-gradient-to-r from-red-400/90 to-red-500/90 text-white border-red-300/50 shadow-xl",
                  // Disabled but not selected or correct
                  showExplanation && !isSelected && !isCorrectAnswer && "bg-white/20 text-white/60 border-white/20",
                  "disabled:cursor-default"
                )}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {option}
                  {showAsCorrect && (
                    <>
                      <span
                        className="text-white/90 hover:text-white text-xs underline cursor-pointer ml-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setIsModalOpen(true);
                        }}
                      >
                        Why?
                      </span>
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    </>
                  )}
                  {isWrongSelection && <X className="w-5 h-5 flex-shrink-0" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3">
          {!showExplanation ? (
            <button
              disabled={!selectedAnswer}
              onClick={onCheckAnswer}
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md border",
                selectedAnswer
                  ? "bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white border-amber-300/50 shadow-xl hover:shadow-2xl hover:scale-105"
                  : "bg-white/20 text-white/50 border-white/20 cursor-not-allowed"
              )}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white border border-amber-300/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
            >
              {!isLastQuestion ? (
                <>
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Complete
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionCard;
