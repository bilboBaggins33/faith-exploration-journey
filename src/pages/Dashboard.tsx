
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/auth';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { CalendarDays, Trophy, BookOpen, Clock, BarChart2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bibleBooks } from '@/data/bible';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { getBookProgress, progress } = useBibleProgress();
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth', { replace: true });
    }
  }, [user, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bible-blue"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!user) {
    return null; // Will redirect in the effect
  }
  
  // Calculate overall Bible reading progress
  const calculateOverallProgress = () => {
    if (!progress || !progress.completed_chapters) return 0;
    
    const totalChapters = bibleBooks.reduce((sum, book) => sum + book.chapters, 0);
    const completedChapters = progress.completed_chapters.length;
    
    return Math.round((completedChapters / totalChapters) * 100);
  };
  
  // Get recently read books
  const getRecentlyReadBooks = () => {
    if (!progress || !progress.completed_chapters) return [];
    
    // Sort by most recent completion date and get unique books
    const sortedCompletedChapters = [...progress.completed_chapters]
      .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime());
    
    const uniqueBooks = Array.from(new Set(
      sortedCompletedChapters.map(chapter => chapter.book_id)
    )).slice(0, 3);
    
    return uniqueBooks.map(bookId => {
      const book = bibleBooks.find(b => b.id === bookId);
      const bookProgress = getBookProgress(bookId);
      
      return {
        id: bookId,
        name: book?.name || bookId,
        progress: bookProgress.percentage
      };
    });
  };
  
  const recentlyReadBooks = getRecentlyReadBooks();
  const overallProgress = calculateOverallProgress();
  const totalChaptersRead = progress?.completed_chapters?.length || 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-bible-beige">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
            <p className="text-gray-600">Track your Bible reading journey and progress</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-bible-blue" />
                  Total Chapters Read
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalChaptersRead}</div>
                <p className="text-sm text-gray-500 mt-1">Out of 1,189 total chapters</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-bible-blue" />
                  Overall Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{overallProgress}%</div>
                <Progress value={overallProgress} className="h-2 mt-2" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-bible-blue" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{progress?.challenges_completed?.length || 0}</div>
                <p className="text-sm text-gray-500 mt-1">Challenges completed</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="recent">
                <TabsList className="mb-4">
                  <TabsTrigger value="recent">Recently Read</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recent" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Continue Reading</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {recentlyReadBooks.length > 0 ? (
                        <div className="space-y-4">
                          {recentlyReadBooks.map(book => (
                            <div key={book.id} className="flex items-center justify-between p-2 border-b last:border-0">
                              <div>
                                <h3 className="font-medium">{book.name}</h3>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Progress 
                                    value={book.progress} 
                                    className="w-24 h-2 mr-2"
                                    color={book.progress === 100 ? "bg-green-500" : undefined}
                                  />
                                  {book.progress}% complete
                                </div>
                              </div>
                              <Button 
                                size="sm" 
                                className="bg-bible-blue hover:bg-bible-deepBlue"
                                onClick={() => navigate(`/bible/${book.id}`)}
                              >
                                Continue
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                          <p className="text-gray-500">You haven't started reading yet</p>
                          <Button 
                            className="mt-4 bg-bible-blue hover:bg-bible-deepBlue"
                            onClick={() => navigate('/bible')}
                          >
                            Start Reading
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="recommended" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recommended Books</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 border-b">
                          <div>
                            <h3 className="font-medium">Psalms</h3>
                            <p className="text-sm text-gray-500">Poetry & Wisdom</p>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-bible-blue hover:bg-bible-deepBlue"
                            onClick={() => navigate('/bible/PSA')}
                          >
                            Read
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border-b">
                          <div>
                            <h3 className="font-medium">John</h3>
                            <p className="text-sm text-gray-500">New Testament</p>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-bible-blue hover:bg-bible-deepBlue"
                            onClick={() => navigate('/bible/JHN')}
                          >
                            Read
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2">
                          <div>
                            <h3 className="font-medium">Romans</h3>
                            <p className="text-sm text-gray-500">New Testament</p>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-bible-blue hover:bg-bible-deepBlue"
                            onClick={() => navigate('/bible/ROM')}
                          >
                            Read
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2 text-bible-blue" />
                    Daily Reading Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Today's Readings</h3>
                      <p className="text-sm text-gray-500">M'Cheyne Reading Plan</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate('/daily-reading')}
                    >
                      View Full Plan
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-50 rounded-md flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-bible-blue/10 text-bible-blue p-1 rounded mr-3">
                          <Clock className="h-4 w-4" />
                        </div>
                        <span>Genesis 1</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/challenge/bible/GEN/1">
                          Read
                        </Link>
                      </Button>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-md flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-bible-blue/10 text-bible-blue p-1 rounded mr-3">
                          <Clock className="h-4 w-4" />
                        </div>
                        <span>Matthew 1</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/challenge/bible/MAT/1">
                          Read
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-bible-blue" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-2 bg-amber-50 border border-amber-100 rounded-md">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Star className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">First Steps</h3>
                        <p className="text-xs text-gray-500">Completed your first chapter</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-2 bg-gray-100 border border-gray-200 rounded-md opacity-60">
                      <div className="bg-gray-200 p-2 rounded-full">
                        <BookOpen className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Book Finisher</h3>
                        <p className="text-xs text-gray-500">Complete an entire book of the Bible</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-2 bg-gray-100 border border-gray-200 rounded-md opacity-60">
                      <div className="bg-gray-200 p-2 rounded-full">
                        <CalendarDays className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">7-Day Streak</h3>
                        <p className="text-xs text-gray-500">Read the Bible for 7 consecutive days</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View All Achievements
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Old vs New Testament</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Old Testament</span>
                        <span className="text-sm font-medium">
                          {Math.round(overallProgress * 0.7)}%
                        </span>
                      </div>
                      <Progress value={Math.round(overallProgress * 0.7)} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">New Testament</span>
                        <span className="text-sm font-medium">
                          {Math.round(overallProgress * 1.2)}%
                        </span>
                      </div>
                      <Progress value={Math.round(overallProgress * 1.2)} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
