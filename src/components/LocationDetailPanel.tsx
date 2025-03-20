
import React from 'react';
import { X, MapIcon, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapLocationData } from '@/data/mapLocations';

interface LocationDetailPanelProps {
  location: MapLocationData;
  isOpen: boolean;
  onClose: () => void;
}

const LocationDetailPanel: React.FC<LocationDetailPanelProps> = ({ 
  location, 
  isOpen, 
  onClose 
}) => {
  return (
    <>
      {/* Location Detail Slide-in Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-1/2 max-w-2xl bg-white shadow-2xl transform transition-transform duration-500 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="relative">
          <div className="h-64 relative">
            <img 
              src={location.content.image} 
              alt={location.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <X size={20} />
            </button>
            
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h2 className="text-2xl font-serif font-bold text-white mb-1">
                {location.title}
              </h2>
              <div className="flex items-center space-x-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  location.status === 'unlocked' 
                    ? 'bg-bible-gold/20 text-bible-gold' 
                    : location.status === 'completed'
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-gray-500/20 text-gray-500'
                }`}>
                  {location.status === 'unlocked' 
                    ? 'Ready to Explore' 
                    : location.status === 'completed'
                    ? 'Completed'
                    : 'Locked'}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="prose prose-bible-dark max-w-none">
              <p className="mb-6">
                {location.content.description}
              </p>
              
              <h3 className="text-xl font-serif font-semibold mb-4 flex items-center">
                <MapIcon className="h-5 w-5 mr-2 text-bible-blue" />
                Key Verses
              </h3>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {location.content.keyVerses.map(verse => (
                  <div 
                    key={verse} 
                    className="py-2 px-3 bg-bible-sky/50 rounded-md text-sm"
                  >
                    {verse}
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-serif font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-bible-blue" />
                Challenges
              </h3>
              
              <div className="space-y-4 mb-8">
                {location.content.challenges.map(challenge => (
                  <div 
                    key={challenge.id}
                    className="glass-card rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold mb-1">{challenge.title}</h4>
                        <p className="text-sm text-bible-dark/70 mb-2">
                          {challenge.description}
                        </p>
                        
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center text-xs text-bible-dark/60">
                            <Clock className="h-3 w-3 mr-1" />
                            5-10 mins
                          </span>
                          
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            challenge.difficulty === 'easy' 
                              ? 'bg-green-500/10 text-green-500' 
                              : challenge.difficulty === 'medium'
                              ? 'bg-yellow-500/10 text-yellow-600'
                              : 'bg-red-500/10 text-red-500'
                          }`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/challenge/${challenge.id}`}
                        className={`flex-shrink-0 ${
                          location.status === 'locked' 
                            ? 'cursor-not-allowed opacity-50' 
                            : ''
                        }`}
                      >
                        <Button 
                          size="sm" 
                          className="bg-bible-blue hover:bg-bible-deepBlue"
                          disabled={location.status === 'locked'}
                        >
                          {challenge.type === 'quiz' ? 'Start Quiz' : 'Memorize'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {location.status === 'locked' && (
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="text-bible-dark/70 mb-2">
                    Complete previous areas to unlock this location.
                  </p>
                  <Link to="/map">
                    <Button 
                      variant="outline"
                      className="bg-transparent border-bible-blue text-bible-blue hover:bg-bible-blue/10"
                    >
                      Return to Map
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for when detail panel is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default LocationDetailPanel;
