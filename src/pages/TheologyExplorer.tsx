
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

const TheologyExplorer: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [activeTab, setActiveTab] = useState<string>("books");
  const { progress, loading } = useBibleProgress();
  
  // Get selected book data if bookId is provided
  const selectedBook = bookId ? theologyBooks.find(book => book.id === bookId) : null;
  const bookChapters = selectedBook ? theologyChapters[selectedBook.id] || [] : [];
  
  // Calculate book completion percentage
  const calculateBookCompletion = (bookId: string): number => {
    if (!progress?.completed_chapters || !theologyChapters[bookId]) {
      return 0;
    }
    
    const totalChapters = theologyChapters[bookId].length;
    const completedChapters = progress.completed_chapters.filter(
      chapter => chapter.book_id === bookId
    ).length;
    
    return totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
  };
  
  // Calculate average score for a book
  const calculateBookAverageScore = (bookId: string): number => {
    if (!progress?.completed_chapters) return 0;
    
    const bookChapters = progress.completed_chapters.filter(
      chapter => chapter.book_id === bookId && typeof chapter.score === 'number'
    );
    
    if (bookChapters.length === 0) return 0;
    
    const totalScore = bookChapters.reduce(
      (sum, chapter) => sum + (chapter.score || 0), 0
    );
    
    return Math.round((totalScore / bookChapters.length) * 10) / 10;
  };
  
  // Get completion status for a chapter
  const getChapterStatus = (bookId: string, chapter: number) => {
    if (!progress?.completed_chapters) return { completed: false, score: 0 };
    
    const completedChapter = progress.completed_chapters.find(
      (cc: any) => cc.book_id === bookId && cc.chapter === chapter
    );
    
    return {
      completed: !!completedChapter,
      score: completedChapter?.score || 0
    };
  };

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
                    <img 
                      src={selectedBook.coverImage} 
                      alt={selectedBook.title}
                      className="w-full h-auto object-cover aspect-[2/3]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
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
                          <span className="text-sm font-medium">{calculateBookCompletion(selectedBook.id)}%</span>
                        </div>
                        <Progress value={calculateBookCompletion(selectedBook.id)} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span>Average Score</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{calculateBookAverageScore(selectedBook.id)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6 mt-8">Chapters</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        <div className="space-y-1">
                          {chapter.key_themes.map((theme, index) => (
                            <Badge key={index} variant="secondary" className="mr-2 mb-2">
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {theologyBooks.map((book: TheologyBook) => {
                const completionPercentage = calculateBookCompletion(book.id);
                const averageScore = calculateBookAverageScore(book.id);
                
                return (
                  <Card key={book.id} className="flex flex-col overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={book.coverImage} 
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                        <Badge className="self-start mb-2" variant="outline">{book.category}</Badge>
                        <h3 className="text-xl font-bold text-white">{book.title}</h3>
                        <p className="text-white/80 text-sm">by {book.author}, {book.year}</p>
                      </div>
                    </div>
                    
                    <CardContent className="flex-grow pt-5">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Completion</span>
                            <span>{completionPercentage}%</span>
                          </div>
                          <Progress value={completionPercentage} className="h-2" />
                        </div>
                        
                        {averageScore > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <span>Average Score</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{averageScore}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Link to={`/theology/${book.id}`} className="w-full">
                        <Button className="w-full flex items-center justify-center gap-2">
                          <BookText className="h-4 w-4" />
                          Explore Book
                          <ArrowRight className="h-4 w-4" />
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
