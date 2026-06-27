
import { LucideIcon, BookOpen, Trophy, CalendarDays, Star, Award, Medal, Book, Crown, Scroll, BookMarked, Flame, Zap, Target, Heart } from 'lucide-react';
import { bibleBooks } from '@/data/bible/books';

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    category: 'bible' | 'theology' | 'challenges' | 'streaks' | 'books';
    target: number;
    points: number;
}

// Per-book Expert Achievements — one per Bible book (66 total)
export const BOOK_EXPERT_ACHIEVEMENTS: Achievement[] = bibleBooks.map(book => ({
    id: `book-expert-${book.id}`,
    title: `${book.name} Expert`,
    description: `Complete all ${book.chapters} chapter${book.chapters > 1 ? 's' : ''} in ${book.name}`,
    icon: BookOpen,
    category: 'books' as const,
    target: book.chapters,
    points: Math.max(20, book.chapters * 3),
}));

export const ACHIEVEMENTS: Achievement[] = [
    // ── Bible Reading ──────────────────────────────────────────────────────────
    {
        id: 'first-chapter',
        title: 'First Steps',
        description: 'Complete your first Bible chapter challenge',
        icon: Star,
        category: 'bible',
        target: 1,
        points: 10,
    },
    {
        id: 'book-finisher',
        title: 'Book Finisher',
        description: 'Complete all chapters in any book of the Bible',
        icon: BookOpen,
        category: 'bible',
        target: 1,
        points: 50,
    },
    {
        id: 'books-5',
        title: 'Bookshelf Builder',
        description: 'Complete all chapters in 5 different Bible books',
        icon: BookMarked,
        category: 'bible',
        target: 5,
        points: 100,
    },
    {
        id: 'books-10',
        title: 'Growing Library',
        description: 'Complete all chapters in 10 different Bible books',
        icon: BookMarked,
        category: 'bible',
        target: 10,
        points: 200,
    },
    {
        id: 'books-25',
        title: 'Half the Journey',
        description: 'Complete all chapters in 25 different Bible books',
        icon: Target,
        category: 'bible',
        target: 25,
        points: 400,
    },
    {
        id: 'old-testament',
        title: 'Old Testament Scholar',
        description: 'Complete all 39 books of the Old Testament',
        icon: Scroll,
        category: 'bible',
        target: 39,
        points: 1000,
    },
    {
        id: 'new-testament',
        title: 'New Testament Scholar',
        description: 'Complete all 27 books of the New Testament',
        icon: Book,
        category: 'bible',
        target: 27,
        points: 800,
    },
    {
        id: 'bible-complete',
        title: 'Bible Completionist',
        description: 'Complete all 66 books of the Bible — the ultimate achievement',
        icon: Crown,
        category: 'bible',
        target: 66,
        points: 5000,
    },

    // ── Book Groups ────────────────────────────────────────────────────────────
    {
        id: 'pentateuch',
        title: 'Pentateuch Scholar',
        description: 'Complete the first five books of Moses: Genesis through Deuteronomy',
        icon: Scroll,
        category: 'bible',
        target: 5,
        points: 250,
    },
    {
        id: 'historical-books',
        title: 'Chronicles of Israel',
        description: 'Complete the Historical Books: Joshua through Esther (12 books)',
        icon: BookOpen,
        category: 'bible',
        target: 12,
        points: 350,
    },
    {
        id: 'wisdom',
        title: 'Wisdom Seeker',
        description: 'Complete the Wisdom Literature: Job, Psalms, Proverbs, Ecclesiastes & Song of Solomon',
        icon: Star,
        category: 'bible',
        target: 5,
        points: 250,
    },
    {
        id: 'major-prophets',
        title: 'Major Prophet',
        description: 'Complete the Major Prophets: Isaiah, Jeremiah, Lamentations, Ezekiel & Daniel',
        icon: Flame,
        category: 'bible',
        target: 5,
        points: 300,
    },
    {
        id: 'minor-prophets',
        title: 'Voice in the Wilderness',
        description: 'Complete all 12 Minor Prophets: Hosea through Malachi',
        icon: Zap,
        category: 'bible',
        target: 12,
        points: 350,
    },
    {
        id: 'gospels',
        title: 'Gospel Reader',
        description: 'Complete all four Gospels: Matthew, Mark, Luke & John',
        icon: BookOpen,
        category: 'bible',
        target: 4,
        points: 200,
    },
    {
        id: 'pauline-letters',
        title: 'Pauline Scholar',
        description: "Complete all of Paul's letters: Romans through Philemon (13 books)",
        icon: BookMarked,
        category: 'bible',
        target: 13,
        points: 400,
    },
    {
        id: 'general-epistles',
        title: 'Faithful Servant',
        description: 'Complete the General Epistles: Hebrews through Jude (9 books)',
        icon: Heart,
        category: 'bible',
        target: 9,
        points: 300,
    },

    // ── Streaks ────────────────────────────────────────────────────────────────
    {
        id: 'streak-3',
        title: 'Consistency is Key',
        description: 'Maintain a 3-day reading streak',
        icon: CalendarDays,
        category: 'streaks',
        target: 3,
        points: 30,
    },
    {
        id: 'streak-7',
        title: 'Week Warrior',
        description: 'Maintain a 7-day reading streak',
        icon: CalendarDays,
        category: 'streaks',
        target: 7,
        points: 70,
    },
    {
        id: 'streak-14',
        title: 'Fortnight Faithful',
        description: 'Maintain a 14-day reading streak',
        icon: Medal,
        category: 'streaks',
        target: 14,
        points: 140,
    },
    {
        id: 'streak-30',
        title: 'Monthly Devotion',
        description: 'Maintain a 30-day reading streak',
        icon: Medal,
        category: 'streaks',
        target: 30,
        points: 300,
    },
    {
        id: 'streak-100',
        title: 'Centurion',
        description: 'Maintain a 100-day reading streak — extraordinary dedication',
        icon: Crown,
        category: 'streaks',
        target: 100,
        points: 1000,
    },

    // ── Challenges ─────────────────────────────────────────────────────────────
    {
        id: 'first-challenge',
        title: 'Challenge Accepted',
        description: 'Complete your first Bible chapter challenge',
        icon: Trophy,
        category: 'challenges',
        target: 1,
        points: 20,
    },
    {
        id: 'perfect-score',
        title: 'Perfectionist',
        description: 'Score 100% on a Bible challenge',
        icon: Award,
        category: 'challenges',
        target: 1,
        points: 50,
    },
    {
        id: 'challenge-10',
        title: 'Challenge Enthusiast',
        description: 'Complete 10 Bible challenges',
        icon: Trophy,
        category: 'challenges',
        target: 10,
        points: 100,
    },
    {
        id: 'challenge-master',
        title: 'Challenge Master',
        description: 'Complete 50 Bible challenges',
        icon: Trophy,
        category: 'challenges',
        target: 50,
        points: 300,
    },
    {
        id: 'challenge-legend',
        title: 'Challenge Legend',
        description: 'Complete 100 Bible challenges',
        icon: Crown,
        category: 'challenges',
        target: 100,
        points: 600,
    },

    // ── Theology ───────────────────────────────────────────────────────────────
    {
        id: 'theology-student',
        title: 'Theology Student',
        description: 'Complete your first theology book',
        icon: Book,
        category: 'theology',
        target: 1,
        points: 50,
    },
    {
        id: 'theology-scholar',
        title: 'Theology Scholar',
        description: 'Complete 3 theology books',
        icon: BookMarked,
        category: 'theology',
        target: 3,
        points: 200,
    },

    // ── Per-book Expert Achievements (all 66 books) ────────────────────────────
    ...BOOK_EXPERT_ACHIEVEMENTS,
];
