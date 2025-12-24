import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/auth';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { BookOpen, Trophy, CalendarDays, Star, Award, Medal, Book } from 'lucide-react';

const Achievements = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { progress } = useBibleProgress();

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

  const completedAchievements = 1; // For now, just hardcode this

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
                        {completedAchievements} out of 12 achievements unlocked
                      </p>
                      <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-bible-blue h-2.5 rounded-full"
                          style={{ width: `${(completedAchievements / 12) * 100}%` }}
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
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Bible Reading Achievement */}
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Star className="h-5 w-5 mr-2 text-amber-500" />
                      First Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Completed your first Bible chapter</p>
                    <div className="mt-4 flex items-center text-green-600">
                      <Award className="h-5 w-5 mr-2" />
                      <span className="font-medium">Unlocked!</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Book Finisher Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <BookOpen className="h-5 w-5 mr-2 text-gray-500" />
                      Book Finisher
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete an entire book of the Bible</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">0/1 books completed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* 7-Day Streak Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <CalendarDays className="h-5 w-5 mr-2 text-gray-500" />
                      7-Day Streak
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Read the Bible for 7 consecutive days</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">Current streak: 1 day</span>
                    </div>
                  </CardContent>
                </Card>

                {/* 30-Day Streak Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <Medal className="h-5 w-5 mr-2 text-gray-500" />
                      30-Day Devotion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Read the Bible for 30 consecutive days</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">Current streak: 1 day</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Old Testament Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <Book className="h-5 w-5 mr-2 text-gray-500" />
                      Old Testament Scholar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete reading the Old Testament</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">0% completed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* New Testament Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <Book className="h-5 w-5 mr-2 text-gray-500" />
                      New Testament Scholar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete reading the New Testament</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">0% completed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Gospels Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <BookOpen className="h-5 w-5 mr-2 text-gray-500" />
                      Gospel Reader
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete all four Gospels</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">0/4 completed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Wisdom Books Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <BookOpen className="h-5 w-5 mr-2 text-gray-500" />
                      Wisdom Seeker
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete the wisdom literature (Job, Psalms, Proverbs, Ecclesiastes, Song of Songs)</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">0/5 completed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Theology Book Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <Book className="h-5 w-5 mr-2 text-gray-500" />
                      Theology Scholar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete your first theology book</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">Not started</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bible" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Bible Reading Achievements */}
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Star className="h-5 w-5 mr-2 text-amber-500" />
                      First Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Completed your first Bible chapter</p>
                    <div className="mt-4 flex items-center text-green-600">
                      <Award className="h-5 w-5 mr-2" />
                      <span className="font-medium">Unlocked!</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Book Finisher Achievement */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <BookOpen className="h-5 w-5 mr-2 text-gray-500" />
                      Book Finisher
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete an entire book of the Bible</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">0/1 books completed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Bible reading achievements */}
              </div>
            </TabsContent>

            <TabsContent value="theology" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Theology book achievements */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <Book className="h-5 w-5 mr-2 text-gray-500" />
                      Theology Scholar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete your first theology book</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">Not started</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional theology achievements */}
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Challenge achievements */}
                <Card className="bg-white/60">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center opacity-60">
                      <Trophy className="h-5 w-5 mr-2 text-gray-500" />
                      Challenge Champion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 opacity-60">Complete 10 Bible challenges with 100% score</p>
                    <div className="mt-4">
                      <span className="text-sm text-gray-500">0/10 completed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional challenge achievements */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Achievements;
