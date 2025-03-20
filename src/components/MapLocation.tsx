
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define the LocationStatus type to ensure consistency
type LocationStatus = 'locked' | 'unlocked' | 'completed';

interface MapLocationProps {
  id: string;
  title: string;
  description: string;
  position: { x: string; y: string };
  status: LocationStatus;
  onClick: (id: string) => void;
  isActive: boolean;
}

const MapLocation = ({ 
  id, 
  title, 
  description, 
  position, 
  status, 
  onClick, 
  isActive 
}: MapLocationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 border-green-400';
      case 'unlocked':
        return 'bg-bible-gold border-bible-gold/70';
      case 'locked':
        return 'bg-gray-400 border-gray-300';
      default:
        return 'bg-bible-blue border-bible-blue/70';
    }
  };
  
  return (
    <div 
      style={{ 
        position: 'absolute', 
        left: position.x, 
        top: position.y,
        transform: 'translate(-50%, -50%)',
        zIndex: isActive ? 10 : 1 
      }}
    >
      <motion.button
        onClick={() => onClick(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative w-8 h-8 rounded-full border-2 transition-all duration-300",
          "flex items-center justify-center",
          "hover:scale-110",
          getStatusStyles(),
          isActive && "ring-4 ring-bible-blue/30 scale-110"
        )}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        animate={isActive ? { 
          boxShadow: ['0px 0px 0px rgba(106, 173, 223, 0.3)', '0px 0px 20px rgba(106, 173, 223, 0.7)', '0px 0px 0px rgba(106, 173, 223, 0.3)'] 
        } : {}}
        transition={isActive ? { 
          boxShadow: { repeat: Infinity, duration: 2 },
          default: { duration: 0.3 }
        } : { duration: 0.3 }}
      >
        {status === 'locked' && (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        )}
        {status === 'completed' && (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </motion.button>
      
      {/* Tooltip */}
      {(isHovered || isActive) && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 glass-card rounded-md p-3 shadow-lg"
        >
          <div className="text-center">
            <h4 className="font-serif font-semibold text-sm mb-1">{title}</h4>
            <p className="text-xs text-gray-600">{description}</p>
            
            {status === 'locked' && (
              <div className="mt-2 text-xs text-gray-500 bg-gray-100 py-1 px-2 rounded-full inline-block">
                Locked
              </div>
            )}
            
            {status === 'unlocked' && (
              <div className="mt-2 text-xs text-bible-gold bg-bible-gold/10 py-1 px-2 rounded-full inline-block">
                Ready to Explore
              </div>
            )}
            
            {status === 'completed' && (
              <div className="mt-2 text-xs text-green-600 bg-green-100 py-1 px-2 rounded-full inline-block">
                Completed
              </div>
            )}
          </div>
          
          {/* Arrow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </motion.div>
      )}
    </div>
  );
};

export default MapLocation;
