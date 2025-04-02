
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ChapterThemesProps {
  themes: string[];
}

const ChapterThemes: React.FC<ChapterThemesProps> = ({ themes }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {themes.map((theme, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Badge variant="secondary" className="mb-1">
            {theme}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
};

export default ChapterThemes;
