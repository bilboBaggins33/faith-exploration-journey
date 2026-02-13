import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/auth';
import { useAchievements } from '@/hooks/use-achievements';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { achievements, unlockedCount, totalCount } = useAchievements();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth', { replace: true });
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bible-blue"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in the effect
  }

  const renderAchievementCard = (achievement: any) => (
    <Card
      key={achievement.id}
      className={`border-0 shadow-md transition-all duration-300 hover:shadow-lg ${achievement.isUnlocked
        ? "bg-white"
        : "bg-white/80 opacity-90"
        }`}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className={`text-lg flex items-center ${!achievement.isUnlocked && "opacity-70"}`}>
            <div className={`p-2 rounded-lg mr-3 ${achievement.isUnlocked ? "bg-amber-100" : "bg-gray-100"}`}>
              <achievement.icon className={`h-5 w-5 ${achievement.isUnlocked ? "text-amber-600" : "text-gray-500"}`} />
            </div>
            {achievement.title}
          </CardTitle>
          {achievement.isUnlocked && (
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium flex items-center">
              <Award className="h-3 w-3 mr-1" />
              Unlocked
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className={`text-sm text-gray-600 mb-4 ${!achievement.isUnlocked && "opacity-70"}`}>{achievement.description}</p>

        {achievement.isUnlocked ? (
          <div className="text-sm font-medium text-amber-600">
            +{achievement.points} points earned
          </div>
        ) : (
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress</span>
              <span>{Math.round(achievement.progress)}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-bible-blue h-2 rounded-full transition-all duration-500"
                style={{ width: `${achievement.progress}%` }}
              ></div>
            </div>
            <div className="mt-1 text-xs text-right text-gray-400">
              {achievement.current} / {achievement.max}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen pb-12">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-br from-bible-dark via-[#1a1a3e] to-[#0f2027] pt-24 md:pt-24 pb-14 md:pb-16 px-4 md:px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-bible-blue rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-bible-gold rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-bible-gold text-xs font-medium mb-3">
                <Trophy className="h-3 w-3" />
                <span>Your Hall of Fame</span>
              </div>
              <h1 className="text-2xl md:text-5xl font-serif font-bold text-white mb-1 md:mb-2">
                Achievements
              </h1>
              <p className="text-white/70 text-sm md:text-lg max-w-2xl">
                Track your spiritual milestones and celebrate your progress through Scripture.
              </p>
            </div>

            {/* Achievement Stats in Hero */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/10 w-full md:w-auto md:min-w-[300px]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/80 text-xs md:text-sm font-medium">Total Unlocked</span>
                <span className="text-white font-bold text-lg md:text-xl">{unlockedCount} <span className="text-white/40 text-xs md:text-sm font-normal">/ {totalCount}</span></span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 md:h-2.5 mb-2">
                <div
                  className="bg-gradient-to-r from-bible-gold to-amber-500 h-2 md:h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                ></div>
              </div>
              <p className="text-white/50 text-xs text-right">Keep going, you're doing great!</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow px-4 md:px-6 -mt-6 md:-mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="space-y-6 md:space-y-8">
            <div className="flex justify-center md:justify-start overflow-x-auto">
              <TabsList className="bg-white shadow-md p-1 rounded-xl">
                <TabsTrigger value="all" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white">All Awards</TabsTrigger>
                <TabsTrigger value="bible" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white">Bible</TabsTrigger>
                <TabsTrigger value="theology" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white">Theology</TabsTrigger>
                <TabsTrigger value="challenges" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white">Challenges</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {achievements.map(renderAchievementCard)}
              </div>
            </TabsContent>

            <TabsContent value="bible" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {achievements.filter(a => a.category === 'bible').map(renderAchievementCard)}
              </div>
            </TabsContent>

            <TabsContent value="theology" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {achievements.filter(a => a.category === 'theology').map(renderAchievementCard)}
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {achievements.filter(a => a.category === 'challenges').map(renderAchievementCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Achievements;
