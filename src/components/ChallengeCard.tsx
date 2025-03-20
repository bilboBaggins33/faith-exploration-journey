
import { motion } from 'framer-motion';
import { Award, Clock, BookOpen, Star, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ChallengeCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  duration: string;
  imageUrl: string;
  isCompleted?: boolean;
  score?: number;
  maxScore?: number;
}

const ChallengeCard = ({
  id,
  title,
  description,
  difficulty,
  category,
  duration,
  imageUrl,
  isCompleted = false,
  score = 0,
  maxScore = 0
}: ChallengeCardProps) => {
  
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'hard':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getDifficultyStars = () => {
    switch (difficulty) {
      case 'easy':
        return 1;
      case 'medium':
        return 2;
      case 'hard':
        return 3;
      default:
        return 0;
    }
  };
  
  // Calculate score percentage if maxScore is provided
  const scorePercentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const isPerfectScore = scorePercentage === 100;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "glass-card overflow-hidden rounded-lg shadow-lg",
        "transition-all duration-300",
        isCompleted && !isPerfectScore && "border-l-4 border-l-green-500",
        isCompleted && isPerfectScore && "border-l-4 border-l-purple-500 bg-purple-50/30"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 text-bible-dark text-xs font-medium py-1 px-2 rounded-full backdrop-blur-sm">
          {category}
        </div>
        
        {/* Difficulty */}
        <div className="absolute top-3 right-3 flex items-center bg-white/90 text-bible-dark text-xs font-medium py-1 px-2 rounded-full backdrop-blur-sm">
          <span className="mr-1">Difficulty:</span>
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={i < getDifficultyStars() ? "text-bible-gold fill-bible-gold" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
        
        {isCompleted && (
          <div className={cn(
            "absolute bottom-3 right-3 text-white text-xs font-medium py-1 px-2 rounded-full flex items-center",
            isPerfectScore ? "bg-purple-500" : "bg-green-500"
          )}>
            {isPerfectScore ? (
              <>
                <Award size={12} className="mr-1" />
                Perfect Score!
              </>
            ) : (
              <>
                <BarChart size={12} className="mr-1" />
                Score: {scorePercentage}%
              </>
            )}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-serif font-semibold mb-2 text-bible-dark">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen size={16} className="mr-1" />
            {id === 'creation-quiz' ? '7 Questions' : '5 Questions'}
          </div>
        </div>
        
        <Link to={`/challenge/${id}`}>
          <Button
            className={cn(
              "w-full",
              isPerfectScore ? "bg-purple-500 hover:bg-purple-600" : 
              isCompleted ? "bg-green-500 hover:bg-green-600" : 
              "bg-bible-blue hover:bg-bible-deepBlue"
            )}
          >
            {isCompleted ? "Review Challenge" : "Start Challenge"}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
