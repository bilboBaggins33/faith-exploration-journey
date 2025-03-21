
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, ArrowRight, BookText, CheckCircle } from 'lucide-react';
import { TheologyBook, TheologyChapter, theologyBooks, theologyChapters } from '@/data/theology';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { isSupabaseConfigured } from '@/lib/supabase';

const TheologyExplorer: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [activeTab, setActiveTab] = useState<string>("books");
  
  // Fetch user progress if Supabase is configured
  const { data: progress } = useQuery({
    queryKey: ['theology-progress'],
    queryFn: async () => {
      if (!isSupabaseConfigured()) return null;
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return null;
      
      const { data } = await supabase
        .from('bible_progress')
        .select('*')
        .eq('user_id', session.user.id)
        .maybeSingle();
        
      return data;
    }
  });
  
  // Get selected book data if bookId is provided
  const selectedBook = bookId ? theologyBooks.find(book => book.id === bookId) : null;
  const bookChapters = selectedBook ? theologyChapters[selectedBook.id] || [] : [];
  
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
          ) : (
            // Show list of theological books
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {theologyBooks.map((book: TheologyBook) => (
                <Card key={book.id} className="glass-card">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{book.category}</Badge>
                      <Badge variant="secondary">{book.year}</Badge>
                    </div>
                    <CardTitle className="text-xl">{book.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      By {book.author}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link to={`/theology/${book.id}`}>
                      <Button className="flex items-center gap-2">
                        <BookText className="h-4 w-4" />
                        Explore Book
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TheologyExplorer;
