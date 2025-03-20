
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bibleBooks, bibleChapters, sampleChapterChallenges } from '@/data/bibleData';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Book, Search, BookOpen, CheckCircle, Circle, 
  ChevronRight, Filter, BookMarked, BarChart 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const BibleExplorer = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestament, setActiveTestament] = useState('all');
  const { progress, loading } = useBibleProgress();
  
  // Filter books based on search and testament filter
  const filteredBooks = bibleBooks.filter(book => {
    const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTestament = activeTestament === 'all' || book.testament === activeTestament;
    return matchesSearch && matchesTestament;
  });
  
  // Get chapters for selected book
  const selectedBook = bibleBooks.find(book => book.id === bookId);
  const bookChapters = selectedBook 
    ? Array.from({ length: selectedBook.chapters }, (_, i) => i + 1)
    : [];
  
  // Check if a chapter is completed and get its score
  const getChapterInfo = (bookId: string, chapter: number) => {
    if (!progress) return { isCompleted: false, score: 0, maxScore: 0 };
    
    const isCompleted = progress.challenges_completed.includes(`${bookId}-${chapter}`);
    
    // Get score from completed_chapters if available
    let score = 0;
    let maxScore = 0;
    
    if (progress.completed_chapters) {
      const chapterData = progress.completed_chapters.find(
        c => c.book_id === bookId && c.chapter === chapter
      );
      
      if (chapterData && chapterData.score) {
        score = chapterData.score;
      }
      
      // Find the challenge to get maxScore
      const challenge = sampleChapterChallenges.find(
        c => c.bookId === bookId && c.chapter === chapter
      );
      
      if (challenge) {
        maxScore = challenge.points;
      }
    }
    
    return { isCompleted, score, maxScore };
  };
  
  // Calculate book completion percentage
  const getBookProgress = (bookId: string) => {
    if (!progress) return 0;
    const book = bibleBooks.find(b => b.id === bookId);
    if (!book) return 0;
    
    let completedCount = 0;
    for (let i = 1; i <= book.chapters; i++) {
      if (isChapterCompleted(bookId, i)) {
        completedCount++;
      }
    }
    
    return Math.round((completedCount / book.chapters) * 100);
  };
  
  const isChapterCompleted = (bookId: string, chapter: number) => {
    if (!progress) return false;
    return progress.challenges_completed.includes(`${bookId}-${chapter}`);
  };
  
  const navigateToChapter = (bookId: string, chapter: number) => {
    navigate(`/challenge/bible/${bookId}/${chapter}`);
  };

  // Chart data preparation for chapters
  const prepareChartData = (bookId: string, chapter: number) => {
    const { score, maxScore } = getChapterInfo(bookId, chapter);
    const completed = score > 0;
    const isPerfect = score === maxScore && maxScore > 0;
    
    // For not started chapters
    if (!completed) {
      return [
        { name: 'Remaining', value: 100, color: '#e5e7eb' }
      ];
    }
    
    // For perfect scores
    if (isPerfect) {
      return [
        { name: 'Complete', value: 100, color: '#a855f7' }
      ];
    }
    
    // For partially completed chapters
    const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    return [
      { name: 'Complete', value: percentage, color: '#22c55e' },
      { name: 'Remaining', value: 100 - percentage, color: '#e5e7eb' }
    ];
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Bible Books Panel */}
            <div className="md:w-1/3 glass-card p-6 rounded-xl">
              <div className="mb-4">
                <h2 className="text-2xl font-serif font-bold text-bible-dark mb-4">
                  Bible Books
                </h2>
                
                <div className="relative mb-4">
                  <Input
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                
                <Tabs defaultValue="all" onValueChange={setActiveTestament} className="mb-4">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="old">Old Testament</TabsTrigger>
                    <TabsTrigger value="new">New Testament</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-2">
                  {filteredBooks.map(book => (
                    <motion.div
                      key={book.id}
                      whileHover={{ x: 4 }}
                      className={`p-3 rounded-lg flex items-center justify-between cursor-pointer
                        ${bookId === book.id ? 'bg-bible-blue/10 border-l-4 border-bible-blue' : 'hover:bg-gray-100'}`}
                      onClick={() => navigate(`/bible/${book.id}`)}
                    >
                      <div className="flex items-center">
                        <Book className="mr-3 text-bible-blue" size={18} />
                        <div>
                          <h3 className="font-medium">{book.name}</h3>
                          <p className="text-xs text-gray-500">{book.chapters} chapters</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        {!loading && (
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                            <span className="text-xs font-medium">{getBookProgress(book.id)}%</span>
                          </div>
                        )}
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    </motion.div>
                  ))}
                  
                  {filteredBooks.length === 0 && (
                    <div className="text-center py-8">
                      <BookOpen className="mx-auto text-gray-300 mb-2" size={40} />
                      <p className="text-gray-500">No books found</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
            
            {/* Chapters Panel */}
            <div className="md:w-2/3">
              {selectedBook ? (
                <div className="glass-card p-6 rounded-xl">
                  <div className="mb-6">
                    <h2 className="text-2xl font-serif font-bold text-bible-dark flex items-center">
                      <BookMarked className="mr-2 text-bible-blue" />
                      {selectedBook.name}
                    </h2>
                    <p className="text-gray-600">
                      {selectedBook.testament === 'old' ? 'Old Testament' : 'New Testament'} • 
                      {selectedBook.chapters} chapters
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {bookChapters.map(chapter => {
                      const { isCompleted, score, maxScore } = getChapterInfo(selectedBook.id, chapter);
                      const scorePercentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
                      const isPerfectScore = scorePercentage === 100;
                      const chartData = prepareChartData(selectedBook.id, chapter);
                      
                      return (
                        <motion.div
                          key={chapter}
                          whileHover={{ y: -5 }}
                          className={cn(
                            "p-4 rounded-lg border cursor-pointer transition-all shadow-sm",
                            isPerfectScore 
                              ? "bg-purple-50 border-purple-200" 
                              : isCompleted
                                ? "bg-green-50 border-green-200"
                                : "bg-white border-gray-200 hover:border-bible-blue hover:bg-blue-50"
                          )}
                          onClick={() => navigateToChapter(selectedBook.id, chapter)}
                        >
                          <div className="text-center">
                            {isCompleted ? (
                              <div>
                                <div className="h-14 w-14 mx-auto mb-2">
                                  <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                      <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={15}
                                        outerRadius={25}
                                        paddingAngle={0}
                                        dataKey="value"
                                        strokeWidth={0}
                                      >
                                        {chartData.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                      </Pie>
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                                <span className="font-medium block mb-1">Chapter {chapter}</span>
                                {score > 0 && (
                                  <p className="text-xs text-gray-500">
                                    Score: {score}/{maxScore}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div>
                                <div className="h-14 w-14 mx-auto mb-2">
                                  <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                      <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={15}
                                        outerRadius={25}
                                        paddingAngle={0}
                                        dataKey="value"
                                        strokeWidth={0}
                                      >
                                        {chartData.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                      </Pie>
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                                <span className="font-medium block">Chapter {chapter}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="glass-card p-12 rounded-xl text-center">
                  <BookOpen className="mx-auto text-bible-blue mb-4" size={60} />
                  <h2 className="text-2xl font-serif font-bold text-bible-dark mb-2">
                    Select a Book
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Choose a book from the list to view its chapters
                  </p>
                  <Button onClick={() => navigate('/bible/genesis')}>
                    Start with Genesis
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BibleExplorer;
