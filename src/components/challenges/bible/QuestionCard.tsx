import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, Info } from "lucide-react";
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
    <div className="pt-1 md:pt-2">
      {/* Explanation Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-[#f5efe6] border border-amber-200/60 shadow-2xl p-5">
          <DialogHeader>
            <DialogTitle className="text-base font-semibold text-amber-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Answer Explanation
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-amber-950/80 mt-1">{explanation}</p>
        </DialogContent>
      </Dialog>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Question Text */}
        <h2 className="text-lg md:text-xl text-center text-white mb-4 md:mb-6 leading-relaxed text-balance drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
          {question}
        </h2>

        {/* Answer Options - Pill shaped buttons */}
        <div className="space-y-2.5 md:space-y-3 mb-4 md:mb-6">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrectAnswer = option === correctAnswer;
            const isWrongSelection = showExplanation && isSelected && !isCorrectAnswer;
            const showAsCorrect = showExplanation && isCorrectAnswer;

            return (
              <motion.button
                key={index}
                onClick={() => !showExplanation && onSelectAnswer(option)}
                disabled={showExplanation}
                whileTap={!showExplanation ? { scale: 0.97 } : undefined}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                  "w-full min-h-[48px] md:min-h-[52px] py-3 md:py-4 px-5 md:px-6 rounded-full text-center text-sm md:text-base font-medium transition-all duration-300 relative border",
                  // Default unselected state - frosted glass look without expensive filter
                  !isSelected && !showExplanation && "bg-white/10 text-white border-white/40 hover:bg-white/20 shadow-lg",
                  // Selected state
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
                  {showAsCorrect && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  {isWrongSelection && <X className="w-5 h-5 flex-shrink-0" />}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3">
          {!showExplanation ? (
            <motion.button
              disabled={!selectedAnswer}
              onClick={onCheckAnswer}
              whileTap={selectedAnswer ? { scale: 0.96 } : undefined}
              className={cn(
                "w-full md:w-auto md:px-8 py-3 rounded-full font-medium transition-all duration-300 border",
                selectedAnswer
                  ? "bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white border-amber-300/50 shadow-xl hover:shadow-2xl hover:scale-105"
                  : "bg-white/20 text-white/50 border-white/20 cursor-not-allowed"
              )}
            >
              Check Answer
            </motion.button>
          ) : (
            <motion.button
              onClick={onNextQuestion}
              whileTap={{ scale: 0.96 }}
              className="w-full md:w-auto md:px-8 py-3 rounded-full font-medium bg-gradient-to-r from-amber-400/90 to-amber-500/90 text-white border border-amber-300/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative flex items-center justify-center"
            >
              {!isLastQuestion ? "Next" : "Complete"}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="absolute right-3 w-7 h-7 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors border border-white/30"
                aria-label="Show explanation"
              >
                <Info className="w-4 h-4" />
              </span>
            </motion.button>
          )}
        </div>

        {/* Swipe hint on mobile - shown after answering */}
        {
          showExplanation && !isLastQuestion && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: [0, -4, 0] }}
              transition={{ delay: 0.5, y: { repeat: 2, duration: 0.8 } }}
              className="flex justify-center mt-3 md:hidden"
            >
              <span className="text-white/50 text-xs flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                Swipe up for next
              </span>
            </motion.div>
          )
        }
      </motion.div >
    </div >
  );
};

export default React.memo(QuestionCard);
