
import React from 'react';
import { motion } from 'framer-motion';

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
      className="mt-6 p-4 bg-muted rounded-lg"
    >
      <h4 className="font-medium mb-2">Explanation</h4>
      <p className="text-sm text-muted-foreground">
        {explanation}
      </p>
    </motion.div>
  );
};

export default QuestionExplanation;
