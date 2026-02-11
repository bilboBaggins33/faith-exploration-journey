
import { useBibleProgress } from './use-bible-progress';
import { useTheologyProgress } from './use-theology-progress';
import { ACHIEVEMENTS, Achievement } from '@/data/achievements';
import { bibleBooks } from '@/data/bible';
import { theologyBooks } from '@/data/theology';

export interface UserAchievement extends Achievement {
    isUnlocked: boolean;
    current: number;
    max: number;
    progress: number; // 0-100
}

export const useAchievements = () => {
    const { progress, profile } = useBibleProgress();
    const { getBookProgress: getTheologyBookProgress } = useTheologyProgress();

    const calculateAchievementProgress = (achievement: Achievement): UserAchievement => {
        let current = 0;
        const max = achievement.target;

        switch (achievement.id) {
            // Bible Reading
            case 'first-chapter':
                current = (progress?.completed_chapters?.length || 0) > 0 ? 1 : 0;
                break;
            case 'book-finisher':
                // Count fully completed books
                const completedBooks = bibleBooks.filter(book => {
                    const completedChapters = progress?.completed_chapters?.filter(c => c.book_id === book.id).length || 0;
                    return completedChapters === book.chapters;
                }).length;
                current = completedBooks > 0 ? 1 : 0; // Target is just 1 book
                break;
            case 'old-testament':
                const otBooks = bibleBooks.filter(b => b.testament === 'old');
                const completedOT = otBooks.filter(book => {
                    const completedChapters = progress?.completed_chapters?.filter(c => c.book_id === book.id).length || 0;
                    return completedChapters === book.chapters;
                }).length;
                current = completedOT;
                break;
            case 'new-testament':
                const ntBooks = bibleBooks.filter(b => b.testament === 'new');
                const completedNT = ntBooks.filter(book => {
                    const completedChapters = progress?.completed_chapters?.filter(c => c.book_id === book.id).length || 0;
                    return completedChapters === book.chapters;
                }).length;
                current = completedNT;
                break;
            case 'gospels':
                // Matthew, Mark, Luke, John
                const gospels = ['matthew', 'mark', 'luke', 'john'];
                const completedGospels = gospels.filter(id => {
                    const book = bibleBooks.find(b => b.id === id);
                    if (!book) return false;
                    const completedChapters = progress?.completed_chapters?.filter(c => c.book_id === book.id).length || 0;
                    return completedChapters === book.chapters;
                }).length;
                current = completedGospels;
                break;
            case 'wisdom':
                // Job, Psalms, Proverbs, Ecclesiastes, Song of Songs
                const wisdomBooks = ['job', 'psalms', 'proverbs', 'ecclesiastes', 'songofsolomon'];
                const completedWisdom = wisdomBooks.filter(id => {
                    const book = bibleBooks.find(b => b.id === id);
                    if (!book) return false;
                    const completedChapters = progress?.completed_chapters?.filter(c => c.book_id === book.id).length || 0;
                    return completedChapters === book.chapters;
                }).length;
                current = completedWisdom;
                break;

            // Streaks
            case 'streak-3':
            case 'streak-7':
            case 'streak-30':
                current = profile?.streak || 0;
                break;

            // Challenges
            case 'first-challenge':
                current = (progress?.challenges_completed?.length || 0) > 0 ? 1 : 0;
                break;
            case 'perfect-score':
                // Placeholder as score data is not readily available in simple progress object yet
                // If user completed any challenge, we might assume they did well for now, or keep 0
                // Keeping 0 to be safe until scores are tracked
                current = 0;
                break;
            case 'challenge-master':
                current = progress?.challenges_completed?.length || 0;
                break;

            // Theology
            case 'theology-student':
                // Check if any theology book is 100%
                // We use getTheologyBookProgress for each book which likely returns percentage
                const completedTheologyBooks = theologyBooks.filter(book => {
                    const p = getTheologyBookProgress(book.id);
                    return p >= 100;
                }).length;
                current = completedTheologyBooks > 0 ? 1 : 0;
                break;
        }

        // Ensure current doesn't exceed visual max if we want bar to look full but not overfull?
        // Actually for 'current' value display, strict value is fine.
        // Progress percentage is capped at 100.

        return {
            ...achievement,
            isUnlocked: current >= max,
            current,
            max,
            progress: Math.min(Math.round((current / max) * 100), 100)
        };
    };

    const achievements: UserAchievement[] = ACHIEVEMENTS.map(calculateAchievementProgress);

    const unlockedCount = achievements.filter(a => a.isUnlocked).length;
    const totalCount = achievements.length;

    const getRecentAchievements = () => {
        // Return the first 3 unlocked achievements
        // In a real app we'd sort by unlock date
        return achievements.filter(a => a.isUnlocked).slice(0, 3);
    };

    return {
        achievements,
        unlockedCount,
        totalCount,
        getRecentAchievements
    };
};
