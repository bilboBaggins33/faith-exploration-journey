import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/auth';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { useAchievements } from '@/hooks/use-achievements';
import { BookOpen, Trophy, CalendarDays, Star, Award, Medal, Book } from 'lucide-react';

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
      <div className="flex flex-col flex-1">
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bible-blue"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in the effect
  }

  const renderAchievementCard = (achievement: any) => (
    <Card
      key={achievement.id}
      className={achievement.isUnlocked ? "bg-white border-amber-200" : "bg-white/60 opacity-90"}
    >
      <CardHeader className="pb-2">
        <CardTitle className={`text-lg flex items-center ${!achievement.isUnlocked && "opacity-70"}`}>
          <achievement.icon className={`h-5 w-5 mr-2 ${achievement.isUnlocked ? "text-amber-500" : "text-gray-500"}`} />
          {achievement.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-sm text-gray-600 ${!achievement.isUnlocked && "opacity-70"}`}>{achievement.description}</p>

        {achievement.isUnlocked ? (
          <div className="mt-4 flex items-center text-amber-600">
            <Award className="h-5 w-5 mr-2" />
            <span className="font-medium">Unlocked +{achievement.points}pts</span>
          </div>
        ) : (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress</span>
              <span>{achievement.current} / {achievement.max}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-bible-blue h-2 rounded-full transition-all duration-500"
                style={{ width: `${achievement.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow py-8 px-4 bg-bible-beige">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold">Achievements</h1>
            <p className="text-gray-600">Track your progress and accomplishments</p>
          </div>

          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Your Achievement Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="bg-bible-blue/10 p-4 rounded-full">
                      <Trophy className="h-8 w-8 text-bible-blue" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">
                        {unlockedCount} out of {totalCount} achievements unlocked
                      </p>
                      <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-bible-blue h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Achievements</TabsTrigger>
              <TabsTrigger value="bible">Bible Reading</TabsTrigger>
              <TabsTrigger value="theology">Theology</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="streaks">Streaks</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map(renderAchievementCard)}
              </div>
            </TabsContent>

            <TabsContent value="bible" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.filter(a => a.category === 'bible').map(renderAchievementCard)}
              </div>
            </TabsContent>

            <TabsContent value="theology" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.filter(a => a.category === 'theology').map(renderAchievementCard)}
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.filter(a => a.category === 'challenges').map(renderAchievementCard)}
              </div>
            </TabsContent>

            <TabsContent value="streaks" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.filter(a => a.category === 'streaks').map(renderAchievementCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Achievements;
