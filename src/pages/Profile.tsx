import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  User, 
  Medal, 
  BookOpen, 
  Clock, 
  Calendar, 
  Award, 
  Settings,
  Star,
  Shield,
  TrendingUp,
  Edit,
  LogOut,
  BookText,
  GraduationCap
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Link, Navigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useTheologyProgress } from '@/hooks/use-theology-progress';
import { theologyBooks } from '@/data/theology/books';
import { Skeleton } from '@/components/ui/skeleton';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const { user, signOut, isLoading: authLoading } = useAuth();
  const { profile, progress, loading: progressLoading } = useBibleProgress();
  const { 
    progress: theologyProgress, 
    loading: theologyLoading,
    getBookProgress,
    getBookAverageScore,
    getBookChaptersRead
  } = useTheologyProgress();
  
  if (!authLoading && !user) {
    return <Navigate to="/auth" />;
  }
  
  const loading = authLoading || progressLoading || theologyLoading;
  
  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };
  
  const userStats = {
    completedChallenges: progress?.challenges_completed.length || 0,
    streak: profile?.streak || 0,
    points: profile?.points || 0,
    versesMemorized: progress?.verses_memorized.length || 0,
    daysActive: 1,
    badges: 0,
    rank: 'Scripture Explorer',
    theologyChaptersRead: theologyProgress?.total_chapters_read || 0,
    theologyBooksStarted: theologyProgress?.books_started.length || 0,
    theologyBooksCompleted: theologyProgress?.books_completed.length || 0
  };
  
  const recentActivity = [
    {
      id: 1,
      type: 'challenge',
      title: 'Creation Quiz',
      date: '2 days ago',
      result: '8/10 correct',
      points: 80
    },
    {
      id: 2,
      type: 'verse',
      title: 'Genesis 1:1',
      date: '3 days ago',
      result: 'Memorized',
      points: 50
    },
    {
      id: 3,
      type: 'challenge',
      title: 'Adam and Eve',
      date: '5 days ago',
      result: '7/10 correct',
      points: 70
    }
  ];
  
  const badges = [
    {
      id: 1,
      name: 'Genesis Explorer',
      description: 'Completed all Genesis challenges',
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      earned: true
    },
    {
      id: 2,
      name: 'Scripture Memorizer',
      description: 'Memorized 20 verses',
      icon: <Star className="h-8 w-8 text-purple-500" />,
      earned: true
    },
    {
      id: 3,
      name: 'Consistent Learner',
      description: 'Maintained a 7-day streak',
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      earned: true
    },
    {
      id: 4,
      name: 'Exodus Master',
      description: 'Completed all Exodus challenges',
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      earned: false
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="bg-bible-beige py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <ProfileSkeleton />
            ) : (
              <>
                <div className="mb-8">
                  <ProfileHeader 
                    userStats={userStats} 
                    onLogout={handleLogout}
                    userName={profile?.full_name || user?.email?.split('@')[0] || 'Bible Explorer'}
                  />
                </div>
                
                <Tabs 
                  defaultValue="overview" 
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="space-y-6"
                >
                  <TabsList className="bg-white/80 backdrop-blur-sm">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    <TabsTrigger value="progress">Progress</TabsTrigger>
                    <TabsTrigger value="theology">Theology</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <StatsCard userStats={userStats} />
                      
                      <Card className="col-span-1 md:col-span-2 glass-card shadow-md">
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-xl font-serif">Recent Activity</CardTitle>
                            <Link to="/challenge" className="text-bible-blue text-sm hover-link">
                              View All
                            </Link>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {recentActivity.map((activity) => (
                              <ActivityItem key={activity.id} activity={activity} />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="glass-card shadow-md">
                        <CardHeader>
                          <CardTitle className="text-xl font-serif">Current Streak</CardTitle>
                          <CardDescription>Keep learning daily to increase your streak</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center py-6">
                          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-bible-sky mb-4">
                            <span className="text-4xl font-bold text-bible-blue">{userStats.streak}</span>
                          </div>
                          <h3 className="text-xl font-medium">Days in a Row!</h3>
                          <p className="text-sm text-gray-500 mt-1">Your best streak: 15 days</p>
                        </CardContent>
                        <CardFooter className="border-t border-gray-100 px-6 py-4">
                          <p className="text-sm text-center w-full">
                            Come back tomorrow to keep your streak going!
                          </p>
                        </CardFooter>
                      </Card>
                      
                      <Card className="glass-card shadow-md">
                        <CardHeader>
                          <CardTitle className="text-xl font-serif">Recommended Challenges</CardTitle>
                          <CardDescription>Based on your progress and interests</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <RecommendedChallenge 
                              title="Noah and the Flood"
                              difficulty="medium"
                              type="quiz"
                              id="noah-quiz"
                            />
                            <RecommendedChallenge 
                              title="Ten Commandments"
                              difficulty="hard"
                              type="memorization"
                              id="ten-commandments"
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="justify-center border-t border-gray-100 px-6 py-4">
                          <Link to="/challenge">
                            <Button variant="outline" className="border-bible-blue text-bible-blue hover:bg-bible-blue/10">
                              View All Challenges
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="achievements" className="space-y-6">
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Your Badges</CardTitle>
                        <CardDescription>Achievements you've earned on your journey</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {badges.map((badge) => (
                            <BadgeCard key={badge.id} badge={badge} />
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-gray-100 px-6 py-4">
                        <div className="text-center w-full">
                          <p className="text-sm text-gray-500 mb-3">
                            You've earned {badges.filter(b => b.earned).length} out of {badges.length} badges
                          </p>
                          <Link to="/challenge">
                            <Button className="bg-bible-blue hover:bg-bible-deepBlue">
                              Complete More Challenges
                            </Button>
                          </Link>
                        </div>
                      </CardFooter>
                    </Card>
                    
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Learning Progress</CardTitle>
                        <CardDescription>Your journey through the biblical world</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Genesis</span>
                              <span className="text-sm text-gray-500">80%</span>
                            </div>
                            <Progress value={80} className="h-2 bg-gray-200" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Exodus</span>
                              <span className="text-sm text-gray-500">40%</span>
                            </div>
                            <Progress value={40} className="h-2 bg-gray-200" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Joshua</span>
                              <span className="text-sm text-gray-500">10%</span>
                            </div>
                            <Progress value={10} className="h-2 bg-gray-200" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Matthew</span>
                              <span className="text-sm text-gray-500">5%</span>
                            </div>
                            <Progress value={5} className="h-2 bg-gray-200" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="justify-center border-t border-gray-100 px-6 py-4">
                        <Link to="/map">
                          <Button className="bg-bible-blue hover:bg-bible-deepBlue">
                            View Map Progress
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="progress" className="space-y-6">
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Learning Stats</CardTitle>
                        <CardDescription>Your study progress and achievements</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <StatItem
                            icon={<Award className="h-6 w-6 text-bible-gold" />}
                            label="Challenges Completed"
                            value={userStats.completedChallenges}
                          />
                          
                          <StatItem
                            icon={<BookOpen className="h-6 w-6 text-purple-500" />}
                            label="Verses Memorized"
                            value={userStats.versesMemorized}
                          />
                          
                          <StatItem
                            icon={<Calendar className="h-6 w-6 text-green-500" />}
                            label="Days Active"
                            value={userStats.daysActive}
                          />
                          
                          <StatItem
                            icon={<Medal className="h-6 w-6 text-yellow-500" />}
                            label="Points Earned"
                            value={userStats.points}
                          />
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Weekly Activity</CardTitle>
                        <CardDescription>Your engagement over the past week</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-7 gap-2">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                            <div key={day} className="flex flex-col items-center">
                              <div 
                                className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                                  i <= 6 ? 'bg-bible-blue text-white' : 'bg-gray-200 text-gray-400'
                                }`}
                              >
                                <Calendar className="h-5 w-5" />
                              </div>
                              <span className="text-xs">{day}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 text-center">
                          <p className="text-sm text-gray-500">
                            You've been active 7 out of the last 7 days. Great job keeping your streak!
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Memorization Progress</CardTitle>
                        <CardDescription>Verses you're currently learning</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <MemorizationItem 
                            reference="Genesis 1:1"
                            text="In the beginning God created the heavens and the earth."
                            progress={100}
                          />
                          
                          <MemorizationItem 
                            reference="John 3:16"
                            text="For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
                            progress={75}
                          />
                          
                          <MemorizationItem 
                            reference="Psalm 23:1"
                            text="The Lord is my shepherd, I lack nothing."
                            progress={50}
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="justify-center border-t border-gray-100 px-6 py-4">
                        <Button className="bg-bible-blue hover:bg-bible-deepBlue">
                          Practice Memorization
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="theology" className="space-y-6">
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Theological Reading Progress</CardTitle>
                        <CardDescription>Your journey through theological works</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                              <div className="flex justify-center mb-3">
                                <BookText className="h-8 w-8 text-bible-blue" />
                              </div>
                              <h4 className="text-lg font-medium mb-1">Total Chapters Read</h4>
                              <p className="text-3xl font-bold text-bible-deepBlue">{userStats.theologyChaptersRead}</p>
                            </div>
                            
                            <div className="flex space-x-4">
                              <div className="flex-1 text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                                <div className="flex justify-center mb-2">
                                  <BookOpen className="h-6 w-6 text-yellow-500" />
                                </div>
                                <p className="text-2xl font-semibold">{userStats.theologyBooksStarted}</p>
                                <p className="text-xs text-gray-500">Books Started</p>
                              </div>
                              
                              <div className="flex-1 text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                                <div className="flex justify-center mb-2">
                                  <GraduationCap className="h-6 w-6 text-green-500" />
                                </div>
                                <p className="text-2xl font-semibold">{userStats.theologyBooksCompleted}</p>
                                <p className="text-xs text-gray-500">Books Completed</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                            <h4 className="text-lg font-medium mb-4 text-center">Reading Recommendations</h4>
                            <div className="space-y-3">
                              {theologyBooks.slice(0, 2).map(book => (
                                <Link 
                                  key={book.id} 
                                  to={`/theology/${book.id}`}
                                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 w-12 h-16 bg-gray-200 rounded overflow-hidden mr-3">
                                      <img 
                                        src={book.coverImage} 
                                        alt={book.title} 
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-medium text-sm">{book.title}</h5>
                                      <p className="text-xs text-gray-500">{book.author}</p>
                                    </div>
                                    <div>
                                      <Button size="sm" className="bg-bible-blue hover:bg-bible-deepBlue">
                                        Read
                                      </Button>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Theological Books Progress</CardTitle>
                        <CardDescription>Your study progress through theological works</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {theologyBooks.map(book => {
                            const progress = getBookProgress(book.id);
                            const averageScore = getBookAverageScore(book.id);
                            const chaptersRead = getBookChaptersRead(book.id);
                            
                            return (
                              <div key={book.id} className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 w-16 h-20 bg-gray-200 rounded overflow-hidden mr-4">
                                    <img 
                                      src={book.coverImage} 
                                      alt={book.title} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  
                                  <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                      <div>
                                        <h4 className="font-medium">{book.title}</h4>
                                        <p className="text-sm text-gray-500">{book.author}</p>
                                      </div>
                                      <Link to={`/theology/${book.id}`}>
                                        <Button size="sm" variant="outline" className="text-xs h-7 px-2">
                                          Continue
                                        </Button>
                                      </Link>
                                    </div>
                                    
                                    <div className="mb-2">
                                      <div className="flex justify-between mb-1">
                                        <span className="text-sm">Progress</span>
                                        <span className="text-sm text-gray-500">{progress}%</span>
                                      </div>
                                      <Progress value={progress} className="h-2 bg-gray-200" />
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                      <div className="flex items-center">
                                        <BookOpen className="h-4 w-4 text-bible-blue mr-1" />
                                        <span>{chaptersRead}/{book.chapters} chapters</span>
                                      </div>
                                      
                                      {averageScore > 0 && (
                                        <div className="flex items-center">
                                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                          <span>Avg. Score: {averageScore}%</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                      <CardFooter className="justify-center border-t border-gray-100 px-6 py-4">
                        <Link to="/theology">
                          <Button className="bg-bible-blue hover:bg-bible-deepBlue">
                            Explore All Theology Books
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="space-y-6">
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Account Settings</CardTitle>
                        <CardDescription>Manage your profile and preferences</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">Profile Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  className="glass-input w-full rounded-md"
                                  defaultValue="John Doe"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="glass-input w-full rounded-md"
                                  defaultValue="john.doe@example.com"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">Preferences</h3>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="block text-sm font-medium text-gray-700">Email Notifications</span>
                                  <span className="block text-sm text-gray-500">Receive updates about challenges and features</span>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id="notifications"
                                    className="h-4 w-4 rounded border-gray-300 text-bible-blue focus:ring-bible-blue"
                                    defaultChecked
                                  />
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="block text-sm font-medium text-gray-700">Daily Reminder</span>
                                  <span className="block text-sm text-gray-500">Get daily notifications to maintain your streak</span>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id="reminders"
                                    className="h-4 w-4 rounded border-gray-300 text-bible-blue focus:ring-bible-blue"
                                    defaultChecked
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-gray-100 px-6 py-4 flex justify-between">
                        <Button variant="outline" onClick={handleLogout} className="border-red-500 text-red-500 hover:bg-red-50">
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                        
                        <Button className="bg-bible-blue hover:bg-bible-deepBlue">
                          Save Changes
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const ProfileSkeleton = () => (
  <div className="space-y-8">
    <div className="relative">
      <div className="h-48 rounded-t-xl bg-gray-200"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
          <Skeleton className="w-32 h-32 rounded-full" />
          <div className="mt-4 md:mt-0 flex-1 ml-6 space-y-4">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-32" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Skeleton className="h-12 w-full max-w-md" />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-80 w-full col-span-2" />
    </div>
  </div>
);

interface ProfileHeaderProps {
  userStats: {
    completedChallenges: number;
    streak: number;
    points: number;
    versesMemorized: number;
    daysActive: number;
    badges: number;
    rank: string;
    theology

