
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

const PENTATEUCH = ['genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy'];
const HISTORICAL_BOOKS = ['joshua', 'judges', 'ruth', '1samuel', '2samuel', '1kings', '2kings', '1chronicles', '2chronicles', 'ezra', 'nehemiah', 'esther'];
const WISDOM_BOOKS = ['job', 'psalms', 'proverbs', 'ecclesiastes', 'songofsolomon'];
const MAJOR_PROPHETS = ['isaiah', 'jeremiah', 'lamentations', 'ezekiel', 'daniel'];
const MINOR_PROPHETS = ['hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi'];
const GOSPELS = ['matthew', 'mark', 'luke', 'john'];
const PAULINE_LETTERS = ['romans', '1corinthians', '2corinthians', 'galatians', 'ephesians', 'philippians', 'colossians', '1thessalonians', '2thessalonians', '1timothy', '2timothy', 'titus', 'philemon'];
const GENERAL_EPISTLES = ['hebrews', 'james', '1peter', '2peter', '1john', '2john', '3john', 'jude'];

const countCompletedFromList = (bookIds: string[], completedChapters: Array<{ book_id: string }> | undefined): number => {
    return bookIds.filter(id => {
        const book = bibleBooks.find(b => b.id === id);
        if (!book) return false;
        return (completedChapters?.filter(c => c.book_id === id).length || 0) >= book.chapters;
    }).length;
};

export const useAchievements = () => {
    const { progress, profile } = useBibleProgress();
    const { getBookProgress: getTheologyBookProgress } = useTheologyProgress();

    const calculateAchievementProgress = (achievement: Achievement): UserAchievement => {
        let current = 0;
        const max = achievement.target;
        const completedChapters = progress?.completed_chapters;

        // ── Per-book expert achievements ──────────────────────────────────────
        if (achievement.id.startsWith('book-expert-')) {
            const bookId = achievement.id.replace('book-expert-', '');
            current = completedChapters?.filter(c => c.book_id === bookId).length || 0;
        } else {
            switch (achievement.id) {

                // ── Bible Reading ─────────────────────────────────────────────
                case 'first-chapter':
                    current = (completedChapters?.length || 0) > 0 ? 1 : 0;
                    break;

                case 'book-finisher': {
                    const completedBooksCount = bibleBooks.filter(book =>
                        (completedChapters?.filter(c => c.book_id === book.id).length || 0) >= book.chapters
                    ).length;
                    current = completedBooksCount > 0 ? 1 : 0;
                    break;
                }

                case 'books-5':
                case 'books-10':
                case 'books-25':
                case 'bible-complete': {
                    current = bibleBooks.filter(book =>
                        (completedChapters?.filter(c => c.book_id === book.id).length || 0) >= book.chapters
                    ).length;
                    break;
                }

                case 'old-testament': {
                    const otBooks = bibleBooks.filter(b => b.testament === 'old');
                    current = otBooks.filter(book =>
                        (completedChapters?.filter(c => c.book_id === book.id).length || 0) >= book.chapters
                    ).length;
                    break;
                }

                case 'new-testament': {
                    const ntBooks = bibleBooks.filter(b => b.testament === 'new');
                    current = ntBooks.filter(book =>
                        (completedChapters?.filter(c => c.book_id === book.id).length || 0) >= book.chapters
                    ).length;
                    break;
                }

                // ── Book Groups ───────────────────────────────────────────────
                case 'pentateuch':
                    current = countCompletedFromList(PENTATEUCH, completedChapters);
                    break;

                case 'historical-books':
                    current = countCompletedFromList(HISTORICAL_BOOKS, completedChapters);
                    break;

                case 'wisdom':
                    current = countCompletedFromList(WISDOM_BOOKS, completedChapters);
                    break;

                case 'major-prophets':
                    current = countCompletedFromList(MAJOR_PROPHETS, completedChapters);
                    break;

                case 'minor-prophets':
                    current = countCompletedFromList(MINOR_PROPHETS, completedChapters);
                    break;

                case 'gospels':
                    current = countCompletedFromList(GOSPELS, completedChapters);
                    break;

                case 'pauline-letters':
                    current = countCompletedFromList(PAULINE_LETTERS, completedChapters);
                    break;

                case 'general-epistles':
                    current = countCompletedFromList(GENERAL_EPISTLES, completedChapters);
                    break;

                // ── Streaks ───────────────────────────────────────────────────
                case 'streak-3':
                case 'streak-7':
                case 'streak-14':
                case 'streak-30':
                case 'streak-100':
                    current = profile?.streak || 0;
                    break;

                // ── Challenges ────────────────────────────────────────────────
                case 'first-challenge':
                    current = (progress?.challenges_completed?.length || 0) > 0 ? 1 : 0;
                    break;

                case 'perfect-score':
                    // Score tracking not yet implemented; kept at 0 until scores are stored
                    current = 0;
                    break;

                case 'challenge-10':
                case 'challenge-master':
                case 'challenge-legend':
                    current = progress?.challenges_completed?.length || 0;
                    break;

                // ── Theology ──────────────────────────────────────────────────
                case 'theology-student': {
                    const completedTheologyBooks = theologyBooks.filter(book =>
                        getTheologyBookProgress(book.id) >= 100
                    ).length;
                    current = completedTheologyBooks > 0 ? 1 : 0;
                    break;
                }

                case 'theology-scholar': {
                    current = theologyBooks.filter(book =>
                        getTheologyBookProgress(book.id) >= 100
                    ).length;
                    break;
                }
            }
        }

        return {
            ...achievement,
            isUnlocked: current >= max,
            current,
            max,
            progress: Math.min(Math.round((current / max) * 100), 100),
        };
    };

    const achievements: UserAchievement[] = ACHIEVEMENTS.map(calculateAchievementProgress);

    const unlockedCount = achievements.filter(a => a.isUnlocked).length;
    const totalCount = achievements.length;

    const getRecentAchievements = () => {
        // Return up to 3 unlocked achievements; in a real app we'd sort by unlock date
        return achievements.filter(a => a.isUnlocked).slice(0, 3);
    };

    return {
        achievements,
        unlockedCount,
        totalCount,
        getRecentAchievements,
    };
};
