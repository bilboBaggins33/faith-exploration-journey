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
  LogOut
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
import { Skeleton } from '@/components/ui/skeleton';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const { user, signOut, loading: authLoading } = useAuth();
  const { profile, progress, loading: progressLoading } = useBibleProgress();
  
  if (!authLoading && !user) {
    return <Navigate to="/auth" />;
  }
  
  const loading = authLoading || progressLoading;
  
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
    rank: 'Scripture Explorer'
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
  };
  onLogout: () => void;
  userName: string;
}

const ProfileHeader = ({ userStats, onLogout, userName }: ProfileHeaderProps) => {
  const nameParts = userName.split(' ');
  const initials = nameParts.length > 1 
    ? `${nameParts[0][0]}${nameParts[1][0]}` 
    : userName.substring(0, 2).toUpperCase();
    
  return (
    <div className="relative">
      <div className="h-48 rounded-t-xl bg-gradient-to-r from-bible-blue to-bible-deepBlue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/30"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
          <div className="flex-shrink-0 md:mr-6">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg rounded-full bg-white">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
              <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="mt-4 md:mt-0 flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-serif font-bold">{userName}</h2>
                <p className="text-gray-600">{userStats.rank}</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button variant="outline" className="border-bible-blue text-bible-blue hover:bg-bible-blue/10">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                
                <Button variant="outline" onClick={onLogout} className="border-red-500 text-red-500 hover:bg-red-50">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4 md:flex md:space-x-6">
              <div className="text-center">
                <span className="text-xl font-semibold">{userStats.completedChallenges}</span>
                <span className="text-xs text-gray-500 block">Challenges</span>
              </div>
              
              <div className="text-center">
                <span className="text-xl font-semibold">{userStats.streak}</span>
                <span className="text-xs text-gray-500 block">Day Streak</span>
              </div>
              
              <div className="text-center">
                <span className="text-xl font-semibold">{userStats.points}</span>
                <span className="text-xs text-gray-500 block">Points</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatsCardProps {
  userStats: {
    completedChallenges: number;
    streak: number;
    points: number;
    versesMemorized: number;
    daysActive: number;
    badges: number;
    rank: string;
  };
}

const StatsCard = ({ userStats }: StatsCardProps) => {
  return (
    <Card className="glass-card shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-serif">Your Stats</CardTitle>
        <CardDescription>Track your progress and achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Award className="h-5 w-5 text-bible-blue mr-2" />
              <span className="text-sm font-medium">Challenges Completed</span>
            </div>
            <span className="font-semibold">{userStats.completedChallenges}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-bible-blue mr-2" />
              <span className="text-sm font-medium">Verses Memorized</span>
            </div>
            <span className="font-semibold">{userStats.versesMemorized}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-bible-blue mr-2" />
              <span className="text-sm font-medium">Current Streak</span>
            </div>
            <span className="font-semibold">{userStats.streak} days</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-bible-blue mr-2" />
              <span className="text-sm font-medium">Days Active</span>
            </div>
            <span className="font-semibold">{userStats.daysActive}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Medal className="h-5 w-5 text-bible-blue mr-2" />
              <span className="text-sm font-medium">Total Points</span>
            </div>
            <span className="font-semibold">{userStats.points}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-bible-blue mr-2" />
              <span className="text-sm font-medium">Badges Earned</span>
            </div>
            <span className="font-semibold">{userStats.badges}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 px-6 py-4">
        <div className="w-full text-center">
          <span className="text-sm text-gray-500">Current Rank</span>
          <h3 className="text-lg font-serif font-semibold text-bible-blue">
            {userStats.rank}
          </h3>
        </div>
      </CardFooter>
    </Card>
  );
};

interface ActivityItemProps {
  activity: {
    id: number;
    type: string;
    title: string;
    date: string;
    result: string;
    points: number;
  };
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
  const getActivityIcon = () => {
    switch (activity.type) {
      case 'challenge':
        return <Award className="h-6 w-6 text-bible-blue" />;
      case 'verse':
        return <BookOpen className="h-6 w-6 text-purple-500" />;
      default:
        return <Award className="h-6 w-6 text-bible-blue" />;
    }
  };
  
  return (
    <div className="flex items-center p-3 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 rounded-full bg-bible-sky flex items-center justify-center">
          {getActivityIcon()}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {activity.title}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {activity.result}
        </p>
      </div>
      
      <div className="flex-shrink-0 text-right">
        <p className="text-sm font-medium text-bible-blue">
          +{activity.points} pts
        </p>
        <p className="text-xs text-gray-500">
          {activity.date}
        </p>
      </div>
    </div>
  );
};

interface BadgeCardProps {
  badge: {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
    earned: boolean;
  };
}

const BadgeCard = ({ badge }: BadgeCardProps) => {
  return (
    <div 
      className={`text-center p-4 rounded-lg ${
        badge.earned 
          ? 'glass-card' 
          : 'bg-gray-100 opacity-60'
      }`}
    >
      <div className="flex justify-center mb-3">
        {badge.icon}
      </div>
      
      <h4 className="text-sm font-medium mb-1">{badge.name}</h4>
      <p className="text-xs text-gray-500">{badge.description}</p>
      
      {!badge.earned && (
        <span className="mt-2 inline-block text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
          Locked
        </span>
      )}
    </div>
  );
};

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

const StatItem = ({ icon, label, value }: StatItemProps) => {
  return (
    <div className="text-center p-4 glass-card rounded-lg">
      <div className="flex justify-center mb-2">
        {icon}
      </div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
};

interface MemorizationItemProps {
  reference: string;
  text: string;
  progress: number;
}

const MemorizationItem = ({ reference, text, progress }: MemorizationItemProps) => {
  return (
    <div className="p-4 glass-card rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h4 className="font-medium">{reference}</h4>
        <span className="text-sm text-gray-500">{progress}% Mastered</span>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">
        {text}
      </p>
      
      <Progress value={progress} className="h-2 bg-gray-200" />
    </div>
  );
};

interface RecommendedChallengeProps {
  title: string;
  difficulty: string;
  type: string;
  id: string;
}

const RecommendedChallenge = ({ title, difficulty, type, id }: RecommendedChallengeProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500/10 text-green-500';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-600';
      case 'hard':
        return 'bg-red-500/10 text-red-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };
  
  return (
    <div className="flex items-center p-3 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {title}
        </p>
        <div className="flex items-center mt-1">
          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
            {difficulty}
          </span>
          <span className="text-xs text-gray-500 ml-2">
            {type === 'quiz' ? 'Quiz' : 'Memorization'}
          </span>
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <Link to={`/challenge/${id}`}>
          <Button size="sm" className="bg-bible-blue hover:bg-bible-deepBlue">
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
