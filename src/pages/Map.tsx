
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapLocation from '@/components/MapLocation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Clock, 
  Map as MapIcon, 
  ChevronLeft, 
  ChevronRight,
  X,
  Award 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Define a type for location status to ensure consistent usage
type LocationStatus = 'locked' | 'unlocked' | 'completed';

const locations = [
  {
    id: 'creation',
    title: 'Creation and Fall',
    description: 'Explore the beginning of everything and the entrance of sin.',
    position: { x: '20%', y: '30%' },
    status: 'unlocked' as LocationStatus,
    content: {
      title: 'Creation and Fall',
      description: 'In the beginning, God created the heavens and the earth. This area covers Genesis 1-3, including the creation of the world, Adam and Eve, and the entrance of sin into the world.',
      challenges: [
        {
          id: 'creation-quiz',
          title: 'Creation Quiz',
          type: 'quiz',
          difficulty: 'easy',
          description: 'Test your knowledge of the days of creation and God\'s purpose in creating the world.'
        },
        {
          id: 'adam-eve',
          title: 'Adam and Eve',
          type: 'memory-verse',
          difficulty: 'medium',
          description: 'Memorize key verses about the creation of humanity and our purpose.'
        }
      ],
      keyVerses: ['Genesis 1:1', 'Genesis 1:27', 'Genesis 2:15', 'Genesis 3:15'],
      image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'flood',
    title: 'Noah and the Flood',
    description: 'Discover the story of Noah\'s ark and God\'s covenant.',
    position: { x: '30%', y: '45%' },
    status: 'locked' as LocationStatus,
    content: {
      title: 'Noah and the Flood',
      description: 'This section covers Genesis 6-9, the story of how God saved Noah and his family while judging the wickedness of humanity through the flood.',
      challenges: [
        {
          id: 'noah-quiz',
          title: 'Noah\'s Ark Quiz',
          type: 'quiz',
          difficulty: 'medium',
          description: 'Test your knowledge of Noah\'s story and the details of the flood.'
        }
      ],
      keyVerses: ['Genesis 6:8', 'Genesis 7:1', 'Genesis 9:13'],
      image: 'https://images.unsplash.com/photo-1590343104492-f8a9f376e38c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'abraham',
    title: 'Abraham and the Patriarchs',
    description: 'Follow the journey of faith through Abraham, Isaac, and Jacob.',
    position: { x: '45%', y: '55%' },
    status: 'locked' as LocationStatus,
    content: {
      title: 'Abraham and the Patriarchs',
      description: 'This area covers Genesis 12-50, following the stories of Abraham, Isaac, Jacob, and Joseph, and how God worked through them to establish His covenant people.',
      challenges: [
        {
          id: 'abraham-quiz',
          title: 'Faith of Abraham',
          type: 'quiz',
          difficulty: 'medium',
          description: 'Test your knowledge of Abraham\'s journey of faith and God\'s promises to him.'
        }
      ],
      keyVerses: ['Genesis 12:1-3', 'Genesis 15:6', 'Genesis 22:18'],
      image: 'https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'exodus',
    title: 'Exodus and the Law',
    description: 'Experience the liberation from Egypt and the giving of the Law.',
    position: { x: '60%', y: '35%' },
    status: 'locked' as LocationStatus,
    content: {
      title: 'Exodus and the Law',
      description: 'This area covers Exodus through Deuteronomy, including Israel\'s deliverance from Egypt, the giving of the Ten Commandments, and the journey to the Promised Land.',
      challenges: [
        {
          id: 'exodus-quiz',
          title: 'Plagues and Passover',
          type: 'quiz',
          difficulty: 'hard',
          description: 'Test your knowledge of the ten plagues and the first Passover.'
        }
      ],
      keyVerses: ['Exodus 3:14', 'Exodus 20:2-3', 'Deuteronomy 6:4-5'],
      image: 'https://images.unsplash.com/photo-1563865436914-44ee14a35e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'promised-land',
    title: 'Conquest of Promised Land',
    description: 'Follow Joshua\'s leadership as Israel claims their inheritance.',
    position: { x: '75%', y: '45%' },
    status: 'locked' as LocationStatus,
    content: {
      title: 'Conquest of Promised Land',
      description: 'This section covers the book of Joshua, detailing how the Israelites conquered and settled in the Promised Land under Joshua\'s leadership.',
      challenges: [
        {
          id: 'joshua-quiz',
          title: 'Joshua\'s Leadership',
          type: 'quiz',
          difficulty: 'medium',
          description: 'Test your knowledge of Joshua\'s leadership and the conquest of Canaan.'
        }
      ],
      keyVerses: ['Joshua 1:8-9', 'Joshua 24:15'],
      image: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }
];

const MapPage = () => {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [showLocationDetail, setShowLocationDetail] = useState(false);
  
  const handleLocationClick = (id: string) => {
    setActiveLocationId(id);
    setShowLocationDetail(true);
  };
  
  const closeLocationDetail = () => {
    setShowLocationDetail(false);
  };
  
  const activeLocation = locations.find(loc => loc.id === activeLocationId);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="py-10 bg-bible-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
                Biblical World Map
              </h1>
              <p className="max-w-3xl mx-auto text-bible-dark/80">
                Explore the stories, people, and places of the Bible. Click on locations to learn more and access challenges.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Map Container */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl bg-bible-beige">
                {/* Map Background */}
                <img 
                  src="https://images.unsplash.com/photo-1624383228539-c1d7b592fe21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Biblical World Map Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-bible-beige/20 to-bible-gold/20"></div>
                
                {/* Locations */}
                {locations.map(location => (
                  <MapLocation
                    key={location.id}
                    id={location.id}
                    title={location.title}
                    description={location.description}
                    position={location.position}
                    status={location.status}
                    onClick={handleLocationClick}
                    isActive={location.id === activeLocationId}
                  />
                ))}
              </div>
              
              {/* Map Legend */}
              <div className="absolute bottom-4 right-4 glass-card p-3 rounded-lg shadow-md">
                <h4 className="text-sm font-semibold mb-2">Map Legend</h4>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-bible-gold border border-bible-gold/70 mr-2"></div>
                    <span className="text-xs">Unlocked</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-300 mr-2"></div>
                    <span className="text-xs">Locked</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 border border-green-400 mr-2"></div>
                    <span className="text-xs">Completed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <p className="text-sm text-bible-dark/70 max-w-md text-center">
                Progress through the biblical timeline by completing challenges in each area. New locations unlock as you progress.
              </p>
            </div>
          </div>
        </section>
        
        {/* Location Detail Slide-in Panel */}
        {activeLocation && (
          <div 
            className={`fixed inset-y-0 right-0 w-full md:w-1/2 max-w-2xl bg-white shadow-2xl transform transition-transform duration-500 z-50 ${
              showLocationDetail ? 'translate-x-0' : 'translate-x-full'
            } overflow-y-auto`}
          >
            <div className="relative">
              <div className="h-64 relative">
                <img 
                  src={activeLocation.content.image} 
                  alt={activeLocation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <button
                  onClick={closeLocationDetail}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h2 className="text-2xl font-serif font-bold text-white mb-1">
                    {activeLocation.title}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activeLocation.status === 'unlocked' 
                        ? 'bg-bible-gold/20 text-bible-gold' 
                        : activeLocation.status === 'completed'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-gray-500/20 text-gray-500'
                    }`}>
                      {activeLocation.status === 'unlocked' 
                        ? 'Ready to Explore' 
                        : activeLocation.status === 'completed'
                        ? 'Completed'
                        : 'Locked'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="prose prose-bible-dark max-w-none">
                  <p className="mb-6">
                    {activeLocation.content.description}
                  </p>
                  
                  <h3 className="text-xl font-serif font-semibold mb-4 flex items-center">
                    <MapIcon className="h-5 w-5 mr-2 text-bible-blue" />
                    Key Verses
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {activeLocation.content.keyVerses.map(verse => (
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
                    {activeLocation.content.challenges.map(challenge => (
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
                              activeLocation.status === 'locked' 
                                ? 'cursor-not-allowed opacity-50' 
                                : ''
                            }`}
                          >
                            <Button 
                              size="sm" 
                              className="bg-bible-blue hover:bg-bible-deepBlue"
                              disabled={activeLocation.status === 'locked'}
                            >
                              {challenge.type === 'quiz' ? 'Start Quiz' : 'Memorize'}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {activeLocation.status === 'locked' && (
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
        )}
        
        {/* Overlay for when detail panel is open */}
        {showLocationDetail && (
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeLocationDetail}
          ></div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default MapPage;
