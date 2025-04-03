
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface QuestionExplanationProps {
  explanation: string;
  isVisible: boolean;
}

const QuestionExplanation: React.FC<QuestionExplanationProps> = ({
  explanation,
  isVisible
}) => {
  if (!isVisible) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 p-4 bg-muted rounded-lg border border-muted-foreground/20"
    >
      <div className="flex items-start gap-3">
        <div className="bg-bible-blue/10 p-2 rounded-full">
          <BookOpen className="h-5 w-5 text-bible-blue" />
        </div>
        <div>
          <h4 className="font-medium text-bible-dark mb-2">Explanation</h4>
          <p className="text-sm text-muted-foreground">
            {explanation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionExplanation;
