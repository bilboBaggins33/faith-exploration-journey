import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useAuth } from '@/context/auth';
import { useAchievements } from '@/hooks/use-achievements';
import { UserAchievement } from '@/hooks/use-achievements';
import { Trophy, Award, Lock, BookOpen, Flame, CalendarDays, Star, Crown } from 'lucide-react';

const Achievements = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { achievements, unlockedCount, totalCount } = useAchievements();

  React.useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth', { replace: true });
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bible-blue" />
      </div>
    );
  }

  if (!user) return null;

  const byCategory = (cat: string) => achievements.filter(a => a.category === cat);

  // Split book experts into OT / NT
  const bookExperts = achievements.filter(a => a.category === 'books');
  const otExperts = bookExperts.filter(a => {
    const bookId = a.id.replace('book-expert-', '');
    return ['genesis','exodus','leviticus','numbers','deuteronomy','joshua','judges','ruth','1samuel','2samuel','1kings','2kings','1chronicles','2chronicles','ezra','nehemiah','esther','job','psalms','proverbs','ecclesiastes','songofsolomon','isaiah','jeremiah','lamentations','ezekiel','daniel','hosea','joel','amos','obadiah','jonah','micah','nahum','habakkuk','zephaniah','haggai','zechariah','malachi'].includes(bookId);
  });
  const ntExperts = bookExperts.filter(a => !otExperts.includes(a));

  const unlockedBooks = bookExperts.filter(a => a.isUnlocked).length;

  const renderAchievementCard = (achievement: UserAchievement) => (
    <Card
      key={achievement.id}
      className={`border transition-all duration-300 hover:shadow-lg ${
        achievement.isUnlocked
          ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/60 shadow-md'
          : 'bg-white/80 border-gray-100 opacity-90'
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`p-2 rounded-lg flex-shrink-0 ${
              achievement.isUnlocked
                ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-md shadow-amber-400/20'
                : 'bg-gray-100'
            }`}>
              {achievement.isUnlocked
                ? <achievement.icon className="h-5 w-5 text-white" />
                : <Lock className="h-5 w-5 text-gray-400" />
              }
            </div>
            <CardTitle className={`text-base leading-tight ${!achievement.isUnlocked && 'opacity-70'}`}>
              {achievement.title}
            </CardTitle>
          </div>
          {achievement.isUnlocked && (
            <Badge className="bg-amber-100 text-amber-700 border-0 text-xs shrink-0 flex items-center gap-1">
              <Award className="h-3 w-3" />
              Unlocked
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className={`text-sm text-gray-600 mb-3 ${!achievement.isUnlocked && 'opacity-70'}`}>
          {achievement.description}
        </p>

        {achievement.isUnlocked ? (
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-amber-600">
              +{achievement.points} pts
            </span>
            <span className="text-xs text-amber-500">
              {achievement.current} / {achievement.max}
            </span>
          </div>
        ) : (
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>{achievement.current} / {achievement.max}</span>
              <span>{Math.round(achievement.progress)}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className="bg-bible-blue h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${achievement.progress}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-gray-400 text-right">
              +{achievement.points} pts on completion
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const AchievementGrid = ({ items }: { items: UserAchievement[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {items.length === 0 ? (
        <p className="col-span-3 text-center text-gray-400 py-8">No achievements in this category yet.</p>
      ) : (
        items.map(renderAchievementCard)
      )}
    </div>
  );

  const CategorySummary = ({ items, label }: { items: UserAchievement[]; label: string }) => {
    const unlocked = items.filter(a => a.isUnlocked).length;
    return (
      <div className="flex items-center gap-2 mb-5 text-sm text-muted-foreground">
        <Trophy className="h-4 w-4 text-bible-gold" />
        <span>
          <strong className="text-foreground">{unlocked}</strong> of <strong className="text-foreground">{items.length}</strong> {label} unlocked
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen pb-12">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-bible-dark via-[#1a1a3e] to-[#0f2027] pt-24 md:pt-24 pb-14 md:pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
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

            {/* Stats panel */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/10 w-full md:w-auto md:min-w-[320px]">
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white">{unlockedCount}</div>
                  <div className="text-white/50 text-xs">Unlocked</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-xl md:text-2xl font-bold text-white">{totalCount}</div>
                  <div className="text-white/50 text-xs">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-bible-gold">{unlockedBooks}</div>
                  <div className="text-white/50 text-xs">Book Experts</div>
                </div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                <div
                  className="bg-gradient-to-r from-bible-gold to-amber-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${totalCount > 0 ? (unlockedCount / totalCount) * 100 : 0}%` }}
                />
              </div>
              <p className="text-white/40 text-xs text-right">
                {totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0}% complete
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow px-4 md:px-6 -mt-6 md:-mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="space-y-6 md:space-y-8">
            <div className="overflow-x-auto">
              <TabsList className="bg-white shadow-md p-1 rounded-xl flex w-max">
                <TabsTrigger value="all" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white whitespace-nowrap">
                  All Awards
                </TabsTrigger>
                <TabsTrigger value="bible" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white whitespace-nowrap">
                  <BookOpen className="h-3.5 w-3.5 mr-1.5 hidden sm:inline" />
                  Bible
                </TabsTrigger>
                <TabsTrigger value="books" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white whitespace-nowrap">
                  <Star className="h-3.5 w-3.5 mr-1.5 hidden sm:inline" />
                  Book Experts
                </TabsTrigger>
                <TabsTrigger value="streaks" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white whitespace-nowrap">
                  <Flame className="h-3.5 w-3.5 mr-1.5 hidden sm:inline" />
                  Streaks
                </TabsTrigger>
                <TabsTrigger value="challenges" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white whitespace-nowrap">
                  <Trophy className="h-3.5 w-3.5 mr-1.5 hidden sm:inline" />
                  Challenges
                </TabsTrigger>
                <TabsTrigger value="theology" className="rounded-lg text-xs md:text-sm data-[state=active]:bg-bible-blue data-[state=active]:text-white whitespace-nowrap">
                  <Crown className="h-3.5 w-3.5 mr-1.5 hidden sm:inline" />
                  Theology
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <CategorySummary items={achievements} label="achievements" />
              <AchievementGrid items={achievements.filter(a => a.category !== 'books')} />
            </TabsContent>

            <TabsContent value="bible" className="mt-0">
              <CategorySummary items={byCategory('bible')} label="Bible achievements" />
              <AchievementGrid items={byCategory('bible')} />
            </TabsContent>

            <TabsContent value="books" className="mt-0">
              <CategorySummary items={bookExperts} label="Book Expert badges" />

              {/* Old Testament */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3">
                    Old Testament · {otExperts.filter(a => a.isUnlocked).length}/{otExperts.length}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <AchievementGrid items={otExperts} />
              </div>

              {/* New Testament */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3">
                    New Testament · {ntExperts.filter(a => a.isUnlocked).length}/{ntExperts.length}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <AchievementGrid items={ntExperts} />
              </div>
            </TabsContent>

            <TabsContent value="streaks" className="mt-0">
              <CategorySummary items={byCategory('streaks')} label="Streak achievements" />
              <AchievementGrid items={byCategory('streaks')} />
            </TabsContent>

            <TabsContent value="challenges" className="mt-0">
              <CategorySummary items={byCategory('challenges')} label="Challenge achievements" />
              <AchievementGrid items={byCategory('challenges')} />
            </TabsContent>

            <TabsContent value="theology" className="mt-0">
              <CategorySummary items={byCategory('theology')} label="Theology achievements" />
              <AchievementGrid items={byCategory('theology')} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Achievements;
