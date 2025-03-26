
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
  GraduationCap,
  CheckCircle,
  AlertCircle,
  ArrowRight
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
import ProfileEditForm from '@/components/ProfileEditForm';
import ResetProgressSection from '@/components/profile/ResetProgressSection';
import { bibleBooks, sampleChapterChallenges } from '@/data/bibleData';
import { format, formatDistance, parseISO } from 'date-fns';

const getMaxScoreForChapter = (bookId: string, chapter: number) => {
  const challenge = sampleChapterChallenges.find(
    c => c.bookId === bookId && c.chapter === chapter
  );
  return challenge ? challenge.questions.length : 0;
};

interface ActivityItemProps {
  activity: {
    id: string;
    type: 'bible' | 'theology' | 'challenge' | 'verse';
    title: string;
    date: string;
    result: string;
    points: number;
    link: string;
  };
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
  const getIcon = () => {
    switch (activity.type) {
      case 'challenge':
        return <Award className="h-8 w-8 text-yellow-500" />;
      case 'verse':
        return <BookOpen className="h-8 w-8 text-purple-500" />;
      case 'bible':
        return <BookText className="h-8 w-8 text-bible-blue" />;
      case 'theology':
        return <GraduationCap className="h-8 w-8 text-green-600" />;
      default:
        return <Medal className="h-8 w-8 text-bible-blue" />;
    }
  };

  return (
    <Link to={activity.link} className="block">
      <div className="flex items-center p-3 rounded-lg bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="flex-shrink-0 mr-4">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h4 className="font-medium">{activity.title}</h4>
          <p className="text-sm text-gray-500">{activity.date} • {activity.result}</p>
        </div>
        <div className="flex-shrink-0 text-bible-blue font-medium">
          +{activity.points} pts
        </div>
      </div>
    </Link>
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
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'hard':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="p-3 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="flex items-center">
        <div className="flex-1">
          <h4 className="font-medium">{title}</h4>
          <div className="flex items-center space-x-2 text-xs">
            <span className={getDifficultyColor()}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
            <span>•</span>
            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </div>
        </div>
        <Link to={`/challenge/${id}`}>
          <Button size="sm" className="bg-bible-blue hover:bg-bible-deepBlue">
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
};

interface BadgeCardProps {
  badge: {
    id: number;
    name: string;
    description: string;
    icon: JSX.Element;
    earned: boolean;
  };
}

const BadgeCard = ({ badge }: BadgeCardProps) => {
  return (
    <div className={`flex flex-col items-center p-4 rounded-lg ${badge.earned ? 'bg-white' : 'bg-gray-50'} shadow-sm border ${badge.earned ? 'border-gray-100' : 'border-gray-200'}`}>
      <div className="mb-3">
        {badge.icon}
      </div>
      <h4 className={`text-sm font-medium text-center mb-1 ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
        {badge.name}
      </h4>
      <p className="text-xs text-gray-500 text-center">
        {badge.description}
      </p>
      {badge.earned ? (
        <span className="mt-2 text-xs text-green-500 flex items-center">
          <CheckCircle className="h-3 w-3 mr-1" />
          Earned
        </span>
      ) : (
        <span className="mt-2 text-xs text-gray-400 flex items-center">
          <AlertCircle className="h-3 w-3 mr-1" />
          Locked
        </span>
      )}
    </div>
  );
};

interface StatItemProps {
  icon: JSX.Element;
  label: string;
  value: number;
}

const StatItem = ({ icon, label, value }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="mb-2">
        {icon}
      </div>
      <p className="text-xl font-semibold text-bible-deepBlue">{value}</p>
      <p className="text-xs text-gray-500 text-center">{label}</p>
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
    <div className="p-3 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="flex items-center mb-2">
        <h4 className="font-medium text-bible-blue">{reference}</h4>
        <span className="ml-auto text-sm text-gray-500">{progress}%</span>
      </div>
      <p className="text-sm text-gray-700 mb-2 line-clamp-2">{text}</p>
      <Progress value={progress} className="h-1 bg-gray-200" />
    </div>
  );
};

interface BibleBookCardProps {
  book: {
    id: string;
    name: string;
    chapters: number;
  };
  progress: number;
  completedChapters: number;
  perfectChapters: number;
}

const BibleBookCard = ({ book, progress, completedChapters, perfectChapters }: BibleBookCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-medium">{book.name}</h4>
        <Link to={`/bible/${book.id}`}>
          <Button size="sm" variant="outline" className="text-xs h-7 px-2">
            Explore
          </Button>
        </Link>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-sm">Progress</span>
          <span className="text-sm text-gray-500">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" />
      </div>
      
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
        <div className="flex items-center">
          <BookOpen className="h-4 w-4 text-bible-blue mr-1" />
          <span>{completedChapters}/{book.chapters} chapters</span>
        </div>
        {perfectChapters > 0 && (
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{perfectChapters} perfect</span>
          </div>
        )}
      </div>
    </div>
  );
};

interface TheologyBookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    chapters: number;
    coverImage: string;
  };
  progress: number;
  chaptersRead: number;
  averageScore: number;
}

const TheologyBookCard = ({ book, progress, chaptersRead, averageScore }: TheologyBookCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
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
};

interface ProfileHeaderProps {
  userStats: {
    completedChallenges: number;
    streak: number;
    points: number;
    versesMemorized: number;
    daysActive: number;
    badges: number;
    rank: string;
    theologyChaptersRead: number;
    theologyBooksStarted: number;
    theologyBooksCompleted: number;
    bibleChaptersCompleted: number;
    bibleChaptersPerfect: number;
    bibleChaptersPartial: number;
  };
  onLogout: () => void;
  userName: string;
  avatarUrl?: string | null;
}

const ProfileHeader = ({ userStats, onLogout, userName, avatarUrl }: ProfileHeaderProps) => {
  return (
    <div className="relative">
      <div className="h-48 bg-gradient-to-r from-bible-lightBlue to-bible-blue rounded-t-xl"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
          <Avatar className="w-32 h-32 border-4 border-white bg-white shadow-lg">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={userName} />
            ) : (
              <AvatarFallback className="text-3xl bg-bible-sky text-bible-blue">{userName.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          <div className="mt-4 md:mt-0 flex-1 md:ml-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold font-serif">{userName}</h1>
                <p className="text-bible-blue font-medium">{userStats.rank}</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-2">
                <Button variant="outline" className="flex items-center border-gray-300">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" onClick={onLogout} className="flex items-center border-gray-300">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-xl font-semibold text-bible-deepBlue">{userStats.points}</p>
                <p className="text-xs text-gray-500">Points</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-xl font-semibold text-bible-deepBlue">{userStats.streak}</p>
                <p className="text-xs text-gray-500">Day Streak</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-xl font-semibold text-bible-deepBlue">{userStats.completedChallenges}</p>
                <p className="text-xs text-gray-500">Challenges</p>
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
    theologyChaptersRead: number;
    theologyBooksStarted: number;
    theologyBooksCompleted: number;
    bibleChaptersCompleted: number;
    bibleChaptersPerfect: number;
    bibleChaptersPartial: number;
  };
}

const StatsCard = ({ userStats }: StatsCardProps) => {
  return (
    <Card className="glass-card shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-serif">Your Stats</CardTitle>
        <CardDescription>Scripture learning progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <Award className="h-6 w-6 text-yellow-500 mb-1" />
            <span className="text-xl font-semibold">{userStats.completedChallenges}</span>
            <span className="text-xs text-gray-500">Challenges</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <Calendar className="h-6 w-6 text-green-500 mb-1" />
            <span className="text-xl font-semibold">{userStats.streak}</span>
            <span className="text-xs text-gray-500">Day Streak</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <BookOpen className="h-6 w-6 text-purple-500 mb-1" />
            <span className="text-xl font-semibold">{userStats.versesMemorized}</span>
            <span className="text-xs text-gray-500">Verses</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <Medal className="h-6 w-6 text-bible-blue mb-1" />
            <span className="text-xl font-semibold">{userStats.points}</span>
            <span className="text-xs text-gray-500">Points</span>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <BookOpen className="h-5 w-5 text-bible-blue mr-2" />
            <h3 className="text-sm font-medium">Bible Reading Progress</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-2xl font-semibold">{userStats.bibleChaptersCompleted}</p>
              <p className="text-xs text-gray-500">Chapters Completed</p>
            </div>
            
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-2xl font-semibold">{userStats.bibleChaptersPerfect}</p>
              <p className="text-xs text-gray-500">Perfect Scores</p>
            </div>
            
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-2xl font-semibold">{userStats.bibleChaptersPartial}</p>
              <p className="text-xs text-gray-500">Chapters Partial</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <BookText className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="text-sm font-medium">Book Reading Progress</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-2">
                <BookText className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-2xl font-semibold">{userStats.theologyChaptersRead}</p>
              <p className="text-xs text-gray-500">Chapters Read</p>
            </div>
            
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-2">
                <BookText className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-2xl font-semibold">{userStats.theologyBooksStarted}</p>
              <p className="text-xs text-gray-500">Books Started</p>
            </div>
            
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-purple-500" />
              </div>
              <p className="text-2xl font-semibold">{userStats.theologyBooksCompleted}</p>
              <p className="text-xs text-gray-500">Books Completed</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const { user, signOut, isLoading: authLoading, refreshUserProfile, getUserAvatar } = useAuth();
  const { profile, progress, loading: progressLoading, refreshProfile, getBookProgress: getBibleBookProgress } = useBibleProgress();
  const { 
    progress: theologyProgress, 
    loading: theologyLoading,
    getBookProgress,
    getBookAverageScore,
    getBookChaptersRead,
    refreshProgress
  } = useTheologyProgress();
  
  const handleProfileUpdated = async () => {
    await refreshUserProfile();
    await refreshProfile();
    await refreshProgress();
  };
  
  if (!authLoading && !user) {
    return <Navigate to="/auth" />;
  }
  
  const loading = authLoading || progressLoading || theologyLoading;
  
  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };
  
  const bibleStartedBooks = bibleBooks
    .map(book => {
      const progressPercentage = getBibleBookProgress(book.id);
      const completedChapters = progress?.completed_chapters?.filter(ch => 
        ch.book_id === book.id
      ).length || 0;
      
      const perfectChapters = progress?.completed_chapters?.filter(ch => 
        ch.book_id === book.id && 
        ch.score && 
        ch.score === getMaxScoreForChapter(ch.book_id, ch.chapter)
      ).length || 0;
      
      return {
        book,
        progress: progressPercentage,
        completedChapters,
        perfectChapters
      };
    })
    .filter(item => item.completedChapters > 0)
    .sort((a, b) => b.progress - a.progress);
  
  const theologyStartedBooks = theologyBooks
    .map(book => {
      const progressPercentage = getBookProgress(book.id);
      const chaptersRead = getBookChaptersRead(book.id);
      const averageScore = getBookAverageScore(book.id);
      
      return {
        book,
        progress: progressPercentage,
        chaptersRead,
        averageScore
      };
    })
    .filter(item => item.chaptersRead > 0)
    .sort((a, b) => b.progress - a.progress);
  
  const generateRecentActivity = () => {
    const activities = [];
    
    if (progress?.completed_chapters && progress.completed_chapters.length > 0) {
      progress.completed_chapters.forEach((chapter: any, index: number) => {
        const bookInfo = bibleBooks.find(b => b.id === chapter.book_id);
        if (bookInfo) {
          const activityDate = chapter.completed_at ? 
            formatDistance(parseISO(chapter.completed_at), new Date(), { addSuffix: true }) : 
            'Recently';
          
          activities.push({
            id: `bible-${chapter.book_id}-${chapter.chapter}-${index}`,
            type: 'bible' as const,
            title: `${bookInfo.name} Chapter ${chapter.chapter}`,
            date: activityDate,
            result: chapter.score ? `Score: ${chapter.score}` : 'Completed',
            points: chapter.score || 5,
            link: `/bible/${chapter.book_id}/${chapter.chapter}`
          });
        }
      });
    }
    
    if (theologyProgress?.completed_chapters && theologyProgress.completed_chapters.length > 0) {
      theologyProgress.completed_chapters.forEach((chapter: any, index: number) => {
        const bookInfo = theologyBooks.find(b => b.id === chapter.book_id);
        if (bookInfo) {
          const activityDate = chapter.completed_at ? 
            formatDistance(parseISO(chapter.completed_at), new Date(), { addSuffix: true }) : 
            'Recently';
          
          activities.push({
            id: `theology-${chapter.book_id}-${chapter.chapter}-${index}`,
            type: 'theology' as const,
            title: `${bookInfo.title} Chapter ${chapter.chapter}`,
            date: activityDate,
            result: chapter.score ? `Score: ${chapter.score}%` : 'Read',
            points: chapter.score || 5,
            link: `/theology/${chapter.book_id}/${chapter.chapter}`
          });
        }
      });
    }
    
    if (progress?.challenges_completed && progress.challenges_completed.length > 0) {
      progress.challenges_completed.forEach((challengeId: string, index: number) => {
        // Fix: Properly declare bookId and chapter variables
        const challengeParts = challengeId.split('-');
        const bookId = challengeParts[0];
        const chapter = challengeParts[1];
        
        const bookInfo = bibleBooks.find(b => b.id === bookId);
        
        if (bookInfo) {
          activities.push({
            id: `challenge-${challengeId}-${index}`,
            type: 'challenge' as const,
            title: `${bookInfo.name} ${chapter} Challenge`,
            date: 'Recently',
            result: 'Completed',
            points: 10,
            link: `/challenge/${challengeId}`
          });
        }
      });
    }
    
    return activities
      .sort((a, b) => {
        if (a.date === 'Recently' && b.date !== 'Recently') return -1;
        if (a.date !== 'Recently' && b.date === 'Recently') return 1;
        return 0;
      })
      .slice(0, 5);
  };
  
  const recentActivity = generateRecentActivity();
  
  const calculateStreak = () => {
    if (!profile?.last_active) return 0;
    
    const lastActive = new Date(profile.last_active);
    const today = new Date();
    
    lastActive.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = Math.abs(today.getTime() - lastActive.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 1) {
      return profile.streak || 1;
    }
    
    return 0;
  };
  
  const userStats = {
    completedChallenges: progress?.challenges_completed?.length || 0,
    streak: calculateStreak(),
    points: profile?.points || 0,
    versesMemorized: progress?.verses_memorized?.length || 0,
    daysActive: 1,
    badges: 0,
    rank: 'Scripture Explorer',
    theologyChaptersRead: theologyProgress?.total_chapters_read || 0,
    theologyBooksStarted: theologyProgress?.books_started?.length || 0,
    theologyBooksCompleted: theologyProgress?.books_completed?.length || 0,
    bibleChaptersCompleted: progress?.completed_chapters?.length || 0,
    bibleChaptersPerfect: progress?.completed_chapters?.filter((ch: any) => 
      ch.score && ch.score === getMaxScoreForChapter(ch.book_id, ch.chapter)
    ).length || 0,
    bibleChaptersPartial: progress?.completed_chapters?.filter((ch: any) => 
      ch.score && ch.score < getMaxScoreForChapter(ch.book_id, ch.chapter)
    ).length || 0
  };
  
  const unfinishedBibleBooks = bibleStartedBooks.filter(item => 
    item.completedChapters < item.book.chapters
  ).slice(0, 3);
  
  const unfinishedTheologyBooks = theologyStartedBooks.filter(item => 
    item.chaptersRead < item.book.chapters
  ).slice(0, 3);
  
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
                    avatarUrl={getUserAvatar()}
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
                    <TabsTrigger value="bible">Bible</TabsTrigger>
                    <TabsTrigger value="books">Books</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <StatsCard userStats={userStats} />
                      
                      <Card className="col-span-1 md:col-span-2 glass-card shadow-md">
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-xl font-serif">Recent Activity</CardTitle>
                            <div className="flex space-x-2">
                              <Link to="/bible" className="text-bible-blue text-sm hover-link">
                                Bible
                              </Link>
                              <span>•</span>
                              <Link to="/theology" className="text-bible-blue text-sm hover-link">
                                Books
                              </Link>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {recentActivity.length > 0 ? (
                              recentActivity.map((activity) => (
                                <ActivityItem key={activity.id} activity={activity} />
                              ))
                            ) : (
                              <div className="text-center py-6">
                                <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                <p className="text-gray-500">No recent activity yet</p>
                                <p className="text-sm text-gray-400 mb-4">Start reading to see your activity here!</p>
                              </div>
                            )}
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
                          <CardTitle className="text-xl font-serif">Continue Reading</CardTitle>
                          <CardDescription>Pick up where you left off</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {unfinishedBibleBooks.length > 0 && (
                              <div className="mb-4">
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Bible Books</h3>
                                {unfinishedBibleBooks.map(item => (
                                  <Link key={item.book.id} to={`/bible/${item.book.id}`} className="block mb-2">
                                    <div className="flex items-center p-2 rounded-lg bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                                      <BookText className="h-6 w-6 text-bible-blue mr-3" />
                                      <div className="flex-1">
                                        <h4 className="font-medium">{item.book.name}</h4>
                                        <div className="flex items-center text-xs text-gray-500">
                                          <span>{item.completedChapters}/{item.book.chapters} chapters</span>
                                          <span className="mx-2">•</span>
                                          <span>{item.progress}% complete</span>
                                        </div>
                                      </div>
                                      <ArrowRight className="h-4 w-4 text-gray-400" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                            
                            {unfinishedTheologyBooks.length > 0 && (
                              <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Theology Books</h3>
                                {unfinishedTheologyBooks.map(item => (
                                  <Link key={item.book.id} to={`/theology/${item.book.id}`} className="block mb-2">
                                    <div className="flex items-center p-2 rounded-lg bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                                      <GraduationCap className="h-6 w-6 text-green-600 mr-3" />
                                      <div className="flex-1">
                                        <h4 className="font-medium">{item.book.title}</h4>
                                        <div className="flex items-center text-xs text-gray-500">
                                          <span>{item.chaptersRead}/{item.book.chapters} chapters</span>
                                          <span className="mx-2">•</span>
                                          <span>{item.progress}% complete</span>
                                        </div>
                                      </div>
                                      <ArrowRight className="h-4 w-4 text-gray-400" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                            
                            {unfinishedBibleBooks.length === 0 && unfinishedTheologyBooks.length === 0 && (
                              <div className="text-center py-4">
                                <p className="text-gray-500">No books in progress</p>
                                <div className="flex justify-center space-x-2 mt-2">
                                  <Link to="/bible">
                                    <Button variant="outline" size="sm">Start Bible Reading</Button>
                                  </Link>
                                  <Link to="/theology">
                                    <Button variant="outline" size="sm">Browse Theology Books</Button>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bible" className="space-y-6">
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Bible Reading Statistics</CardTitle>
                        <CardDescription>Your journey through Scripture</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                            <div className="flex justify-center mb-2">
                              <BookOpen className="h-6 w-6 text-bible-blue" />
                            </div>
                            <p className="text-2xl font-semibold">{userStats.bibleChaptersCompleted}</p>
                            <p className="text-xs text-gray-500">Chapters Completed</p>
                          </div>
                          
                          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                            <div className="flex justify-center mb-2">
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            </div>
                            <p className="text-2xl font-semibold">{userStats.bibleChaptersPerfect}</p>
                            <p className="text-xs text-gray-500">Perfect Scores</p>
                          </div>
                          
                          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                            <div className="flex justify-center mb-2">
                              <BookText className="h-6 w-6 text-bible-deepBlue" />
                            </div>
                            <p className="text-2xl font-semibold">{bibleStartedBooks.length}</p>
                            <p className="text-xs text-gray-500">Books Started</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mt-6">
                          <h3 className="text-lg font-medium">Your Progress</h3>
                          {bibleStartedBooks.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                              {bibleStartedBooks.map(item => (
                                <BibleBookCard
                                  key={item.book.id}
                                  book={item.book}
                                  progress={item.progress}
                                  completedChapters={item.completedChapters}
                                  perfectChapters={item.perfectChapters}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
                              <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                              <p className="text-lg font-medium text-gray-500">No Bible books started yet</p>
                              <p className="text-sm text-gray-400 mb-4">Start your reading journey today!</p>
                              <Link to="/bible">
                                <Button>Explore Bible</Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="books" className="space-y-6">
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Theological Books Progress</CardTitle>
                        <CardDescription>Your theological reading journey</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                            <div className="flex justify-center mb-2">
                              <BookText className="h-6 w-6 text-bible-blue" />
                            </div>
                            <p className="text-2xl font-semibold">{userStats.theologyChaptersRead}</p>
                            <p className="text-xs text-gray-500">Chapters Read</p>
                          </div>
                          
                          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                            <div className="flex justify-center mb-2">
                              <BookOpen className="h-6 w-6 text-green-500" />
                            </div>
                            <p className="text-2xl font-semibold">{userStats.theologyBooksStarted}</p>
                            <p className="text-xs text-gray-500">Books Started</p>
                          </div>
                          
                          <div className="text-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                            <div className="flex justify-center mb-2">
                              <CheckCircle className="h-6 w-6 text-yellow-500" />
                            </div>
                            <p className="text-2xl font-semibold">{userStats.theologyBooksCompleted}</p>
                            <p className="text-xs text-gray-500">Books Completed</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mt-6">
                          <h3 className="text-lg font-medium">Your Books</h3>
                          {theologyStartedBooks.length > 0 ? (
                            <div className="space-y-4">
                              {theologyStartedBooks.map(item => (
                                <TheologyBookCard
                                  key={item.book.id}
                                  book={item.book}
                                  progress={item.progress}
                                  chaptersRead={item.chaptersRead}
                                  averageScore={item.averageScore}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
                              <BookText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                              <p className="text-lg font-medium text-gray-500">No theology books started yet</p>
                              <p className="text-sm text-gray-400 mb-4">Start exploring theological writings!</p>
                              <Link to="/theology">
                                <Button>Explore Books</Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="space-y-6">
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Profile Settings</CardTitle>
                        <CardDescription>Manage your account and preferences</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ProfileEditForm 
                          user={user} 
                          fullName={profile?.full_name || ''} 
                          email={user?.email || ''} 
                          avatarUrl={getUserAvatar()} 
                          onProfileUpdated={handleProfileUpdated} 
                        />
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card shadow-md">
                      <CardHeader>
                        <CardTitle className="text-xl font-serif">Data Management</CardTitle>
                        <CardDescription>Reset your progress data</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ResetProgressSection />
                      </CardContent>
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

export default ProfilePage;
