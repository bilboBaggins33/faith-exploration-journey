import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChallengeCard from '@/components/ChallengeCard';
import { motion } from 'framer-motion';
import { Filter, Search, Clock, ChevronDown, X, Map, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Link } from 'react-router-dom';

const challenges = [
  {
    id: 'creation-quiz',
    title: 'Creation Days',
    description: 'Test your knowledge of the days of creation and God\'s purpose in creating the world.',
    difficulty: 'easy' as const,
    category: 'Genesis',
    duration: '5 mins',
    imageUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  },
  {
    id: 'adam-eve',
    title: 'Adam and Eve',
    description: 'Memorize key verses about the creation of humanity and our purpose in God\'s world.',
    difficulty: 'medium' as const,
    category: 'Genesis',
    duration: '10 mins',
    imageUrl: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  },
  {
    id: 'noah-quiz',
    title: 'Noah\'s Ark',
    description: 'Test your knowledge of Noah\'s story, the dimensions of the ark, and the animals that were saved.',
    difficulty: 'medium' as const,
    category: 'Genesis',
    duration: '8 mins',
    imageUrl: 'https://images.unsplash.com/photo-1590343104492-f8a9f376e38c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  },
  {
    id: 'abraham-quiz',
    title: 'Faith of Abraham',
    description: 'Test your knowledge of Abraham\'s journey of faith and God\'s promises to him.',
    difficulty: 'medium' as const,
    category: 'Genesis',
    duration: '7 mins',
    imageUrl: 'https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  },
  {
    id: 'exodus-quiz',
    title: 'Plagues and Passover',
    description: 'Test your knowledge of the ten plagues of Egypt and the first Passover celebration.',
    difficulty: 'hard' as const,
    category: 'Exodus',
    duration: '12 mins',
    imageUrl: 'https://images.unsplash.com/photo-1563865436914-44ee14a35e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  },
  {
    id: 'ten-commandments',
    title: 'Ten Commandments',
    description: 'Memorize the Ten Commandments and understand their application in our lives today.',
    difficulty: 'hard' as const,
    category: 'Exodus',
    duration: '15 mins',
    imageUrl: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  },
  {
    id: 'joshua-quiz',
    title: 'Joshua\'s Leadership',
    description: 'Test your knowledge of Joshua\'s leadership and the conquest of Canaan.',
    difficulty: 'medium' as const,
    category: 'Joshua',
    duration: '8 mins',
    imageUrl: 'https://images.unsplash.com/photo-1519834803171-76e8c2a08988?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  },
  {
    id: 'sermon-mount',
    title: 'Sermon on the Mount',
    description: 'Memorize key passages from Jesus\' Sermon on the Mount and apply its teachings.',
    difficulty: 'hard' as const,
    category: 'Matthew',
    duration: '15 mins',
    imageUrl: 'https://images.unsplash.com/photo-1518608774889-b04d71356abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isCompleted: false
  }
];

const ChallengePage = () => {
  const [filteredChallenges, setFilteredChallenges] = useState(challenges);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = Array.from(new Set(challenges.map(c => c.category)));
  
  useEffect(() => {
    filterChallenges();
  }, [searchTerm, difficultyFilter, categoryFilter]);
  
  const filterChallenges = () => {
    let filtered = challenges;
    
    if (searchTerm) {
      filtered = filtered.filter(challenge => 
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (difficultyFilter.length > 0) {
      filtered = filtered.filter(challenge => 
        difficultyFilter.includes(challenge.difficulty)
      );
    }
    
    if (categoryFilter.length > 0) {
      filtered = filtered.filter(challenge => 
        categoryFilter.includes(challenge.category)
      );
    }
    
    setFilteredChallenges(filtered);
  };
  
  const handleDifficultyChange = (value: string[]) => {
    setDifficultyFilter(value);
  };
  
  const handleCategoryChange = (value: string[]) => {
    setCategoryFilter(value);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setDifficultyFilter([]);
    setCategoryFilter([]);
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="bg-bible-beige py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
                Bible Challenges
              </h1>
              <p className="max-w-3xl mx-auto text-bible-dark/80">
                Test your knowledge, memorize Scripture, and grow in your understanding of the Bible through interactive challenges.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search challenges..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="glass-input w-full pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                
                <Button 
                  onClick={toggleFilters}
                  variant="outline" 
                  className="flex items-center gap-2 bg-white border-bible-blue text-bible-blue hover:bg-bible-blue/10"
                >
                  <Filter size={18} />
                  Filters
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} 
                  />
                </Button>
              </div>
              
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 glass-card p-4 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-2">Difficulty</h3>
                      <ToggleGroup 
                        type="multiple" 
                        value={difficultyFilter}
                        onValueChange={handleDifficultyChange}
                        className="flex flex-wrap gap-2"
                      >
                        <ToggleGroupItem value="easy" className="text-xs">Easy</ToggleGroupItem>
                        <ToggleGroupItem value="medium" className="text-xs">Medium</ToggleGroupItem>
                        <ToggleGroupItem value="hard" className="text-xs">Hard</ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-2">Category</h3>
                      <ToggleGroup 
                        type="multiple" 
                        value={categoryFilter}
                        onValueChange={handleCategoryChange}
                        className="flex flex-wrap gap-2"
                      >
                        {categories.map(category => (
                          <ToggleGroupItem 
                            key={category} 
                            value={category}
                            className="text-xs"
                          >
                            {category}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </div>
                    
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={clearFilters}
                        className="flex items-center gap-1"
                      >
                        <X size={14} />
                        Clear
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            {filteredChallenges.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredChallenges.map(challenge => (
                  <ChallengeCard
                    key={challenge.id}
                    id={challenge.id}
                    title={challenge.title}
                    description={challenge.description}
                    difficulty={challenge.difficulty}
                    category={challenge.category}
                    duration={challenge.duration}
                    imageUrl={challenge.imageUrl}
                    isCompleted={challenge.isCompleted}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4 text-gray-400">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-medium mb-2">No challenges found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
            
            <div className="mt-12 max-w-4xl mx-auto glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Explore the Biblical World Map
                  </h3>
                  <p className="text-bible-dark/70 mb-4">
                    Discover challenges organized by biblical timeline and geography. The map provides a visual way to explore stories and challenges.
                  </p>
                  <Link to="/map">
                    <Button className="flex items-center gap-2 bg-bible-blue hover:bg-bible-deepBlue">
                      <Map size={18} />
                      Open World Map
                    </Button>
                  </Link>
                </div>
                
                <div className="w-full md:w-auto">
                  <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Biblical Map"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-3">
                      <span className="text-white font-medium text-sm">
                        Biblical Timeline
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChallengePage;
