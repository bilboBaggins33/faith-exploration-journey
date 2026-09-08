import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/auth';
import { useAchievements } from '@/hooks/use-achievements';
import { UserAchievement } from '@/hooks/use-achievements';
import { Trophy, Lock, BookOpen, Flame, Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  const bookExperts = achievements.filter(a => a.category === 'books');
  const otExperts = bookExperts.filter(a => {
    const bookId = a.id.replace('book-expert-', '');
    return ['genesis','exodus','leviticus','numbers','deuteronomy','joshua','judges','ruth','1samuel','2samuel','1kings','2kings','1chronicles','2chronicles','ezra','nehemiah','esther','job','psalms','proverbs','ecclesiastes','songofsolomon','isaiah','jeremiah','lamentations','ezekiel','daniel','hosea','joel','amos','obadiah','jonah','micah','nahum','habakkuk','zephaniah','haggai','zechariah','malachi'].includes(bookId);
  });
  const ntExperts = bookExperts.filter(a => !otExperts.includes(a));
  const unlockedBooks = bookExperts.filter(a => a.isUnlocked).length;
  const overallPct = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;

  const renderAchievement = (achievement: UserAchievement) => (
    <article
      key={achievement.id}
      className={cn(
        'py-5 border-b border-border last:border-b-0',
        !achievement.isUnlocked && 'opacity-55'
      )}
    >
      <div className="flex items-start gap-3.5">
        <span
          className={cn(
            'mt-2 h-2 w-2 rounded-full shrink-0',
            achievement.isUnlocked ? 'bg-bible-gold' : 'bg-border'
          )}
          aria-hidden
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-lg text-foreground leading-snug">
              {achievement.title}
            </h3>
            {achievement.isUnlocked ? (
              <span className="text-xs text-bible-gold shrink-0 tabular-nums">
                +{achievement.points}
              </span>
            ) : (
              <Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-1" />
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-1 mb-3 leading-relaxed">
            {achievement.description}
          </p>

          {!achievement.isUnlocked && (
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                <span>{achievement.current} / {achievement.max}</span>
                <span>{Math.round(achievement.progress)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
                <div
                  className="bg-bible-gold h-1 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${achievement.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  const AchievementGrid = ({ items }: { items: UserAchievement[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
      {items.length === 0 ? (
        <p className="col-span-3 text-center text-muted-foreground py-8">
          No achievements in this category yet.
        </p>
      ) : (
        items.map(renderAchievement)
      )}
    </div>
  );

  const CategorySummary = ({ items, label }: { items: UserAchievement[]; label: string }) => {
    const unlocked = items.filter(a => a.isUnlocked).length;
    return (
      <p className="mb-6 text-sm text-muted-foreground">
        <span className="text-bible-gold font-medium">{unlocked}</span>
        {' of '}
        <span className="text-foreground font-medium">{items.length}</span>
        {' '}{label} unlocked
      </p>
    );
  };

  return (
    <div className="flex flex-col min-h-screen pb-12">
      <div className="relative bg-bible-dark pt-24 md:pt-24 pb-14 md:pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">
                Achievements
              </h1>
              <p className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed">
                Milestones along your journey through Scripture and Christian thought.
              </p>
            </div>

            <div className="w-full md:w-auto md:min-w-[280px]">
              <div className="flex items-baseline gap-6 mb-3">
                <div>
                  <div className="text-2xl font-serif font-bold text-white">{unlockedCount}</div>
                  <div className="text-white/45 text-xs mt-0.5">Unlocked</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white/50">{totalCount}</div>
                  <div className="text-white/45 text-xs mt-0.5">Total</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-bible-gold">{unlockedBooks}</div>
                  <div className="text-white/45 text-xs mt-0.5">Book experts</div>
                </div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div
                  className="bg-bible-gold h-1 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${overallPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow px-4 md:px-6 py-8 md:py-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="space-y-6 md:space-y-8">
            <div className="overflow-x-auto border-b border-border">
              <TabsList className="bg-transparent h-auto p-0 gap-1 rounded-none w-max">
                {[
                  { value: 'all', label: 'All Awards' },
                  { value: 'bible', label: 'Bible', icon: BookOpen },
                  { value: 'books', label: 'Book Experts', icon: Star },
                  { value: 'streaks', label: 'Streaks', icon: Flame },
                  { value: 'challenges', label: 'Challenges', icon: Trophy },
                  { value: 'theology', label: 'Theology', icon: Crown },
                ].map(({ value, label, icon: Icon }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="rounded-none border-b-2 border-transparent px-3 py-3 text-xs md:text-sm data-[state=active]:border-bible-gold data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground whitespace-nowrap"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 mr-1.5 hidden sm:inline" />}
                    {label}
                  </TabsTrigger>
                ))}
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
