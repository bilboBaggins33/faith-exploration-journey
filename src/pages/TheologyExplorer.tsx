
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, ArrowRight, BookText, CheckCircle, Star } from 'lucide-react';
import { TheologyBook, TheologyChapter } from '@/data/theology/types';
import { theologyBooks } from '@/data/theology/books';
import { theologyChapters } from '@/data/theology/chapters';
import { Progress } from '@/components/ui/progress';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { isSupabaseConfigured } from '@/lib/supabase';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheologyProgress } from '@/hooks/use-theology-progress';

const TheologyExplorer: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [activeTab, setActiveTab] = useState<string>("books");
  const isMobile = useIsMobile();
  const { progress, loading, getBookProgress, getBookAverageScore, getChapterStatus } = useTheologyProgress();
  
  // Get selected book data if bookId is provided
  const selectedBook = bookId ? theologyBooks.find(book => book.id === bookId) : null;
  const bookChapters = selectedBook ? theologyChapters[selectedBook.id] || [] : [];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-10 px-4 md:px-6 bg-bible-beige">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
              {selectedBook ? selectedBook.title : 'Theological Works'}
            </h1>
            <p className="max-w-2xl mx-auto text-bible-dark/80">
              {selectedBook
                ? `Explore the chapters of ${selectedBook.title} by ${selectedBook.author} (${selectedBook.year})`
                : 'Study classic theological works and test your understanding through interactive challenges.'}
            </p>
          </header>
          
          {selectedBook ? (
            // Show chapters for selected book
            <div>
              <div className="mb-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <AspectRatio ratio={2/3} className="bg-muted">
                      <img 
                        src={selectedBook.coverImage} 
                        alt={selectedBook.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <Badge variant="outline" className="mb-3">{selectedBook.category}</Badge>
                        <h2 className="text-2xl font-bold mb-1">{selectedBook.title}</h2>
                        <p className="text-gray-600">by {selectedBook.author}, {selectedBook.year}</p>
                      </div>
                      <Badge className="bg-blue-500">{selectedBook.chapters} chapters</Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{selectedBook.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Completion</span>
                          <span className="text-sm font-medium">{getBookProgress(selectedBook.id)}%</span>
                        </div>
                        <Progress value={getBookProgress(selectedBook.id)} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span>Average Score</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{getBookAverageScore(selectedBook.id)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6 mt-8">Chapters</h3>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {bookChapters.map((chapter: TheologyChapter) => {
                  const status = getChapterStatus(chapter.bookId, chapter.chapter);
                  return (
                    <Card key={`${chapter.bookId}-${chapter.chapter}`} className="glass-card">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">Chapter {chapter.chapter}</Badge>
                          {status.completed && (
                            <Badge className="bg-green-500">
                              {Math.round((status.score || 0) * 10) / 10} points
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl">{chapter.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1">
                          {chapter.key_themes.map((theme, index) => (
                            <Badge key={index} variant="secondary" className="mb-1">
                              {theme}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link to={`/theology/${chapter.bookId}/${chapter.chapter}`}>
                          <Button className="flex items-center gap-2">
                            {status.completed ? (
                              <>
                                <CheckCircle className="h-4 w-4" />
                                Review Chapter
                              </>
                            ) : (
                              <>
                                <BookOpen className="h-4 w-4" />
                                Start Chapter
                              </>
                            )}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          ) : (
            // Show list of theological books
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {theologyBooks.map((book: TheologyBook) => {
                const completionPercentage = getBookProgress(book.id);
                const averageScore = getBookAverageScore(book.id);
                
                return (
                  <Card key={book.id} className="flex flex-col overflow-hidden">
                    <div className="relative overflow-hidden">
                      <AspectRatio ratio={2/3} className="bg-muted">
                        <img 
                          src={book.coverImage} 
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                          <Badge className="self-start mb-1" variant="outline">{book.category}</Badge>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white line-clamp-2">{book.title}</h3>
                          <p className="text-white/80 text-xs sm:text-sm truncate">by {book.author}</p>
                        </div>
                      </AspectRatio>
                    </div>
                    
                    <CardContent className="flex-grow pt-4 px-3 sm:px-4">
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1 text-xs sm:text-sm">
                            <span>Completion</span>
                            <span>{completionPercentage}%</span>
                          </div>
                          <Progress value={completionPercentage} className="h-1.5 sm:h-2" />
                        </div>
                        
                        {averageScore > 0 && (
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span>Average Score</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                              <span>{averageScore}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0 pb-3 px-3 sm:px-4">
                      <Link to={`/theology/${book.id}`} className="w-full">
                        <Button size={isMobile ? "sm" : "default"} className="w-full flex items-center justify-center gap-1 sm:gap-2">
                          <BookText className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">Explore</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TheologyExplorer;
