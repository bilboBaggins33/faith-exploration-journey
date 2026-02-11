
import { LucideIcon, BookOpen, Trophy, CalendarDays, Star, Award, Medal, Book } from 'lucide-react';

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    category: 'bible' | 'theology' | 'challenges' | 'streaks';
    target: number; // The number required to complete (e.g., 1 book, 7 days)
    points: number; // Gamification points
}

export const ACHIEVEMENTS: Achievement[] = [
    // Bible Reading Achievements
    {
        id: 'first-chapter',
        title: 'First Steps',
        description: 'Complete your first Bible chapter',
        icon: Star,
        category: 'bible',
        target: 1,
        points: 10
    },
    {
        id: 'book-finisher',
        title: 'Book Finisher',
        description: 'Complete an entire book of the Bible',
        icon: BookOpen,
        category: 'bible',
        target: 1,
        points: 50
    },
    {
        id: 'old-testament',
        title: 'Old Testament Scholar',
        description: 'Complete reading the Old Testament',
        icon: Book,
        category: 'bible',
        target: 39, // 39 books in OT
        points: 500
    },
    {
        id: 'new-testament',
        title: 'New Testament Scholar',
        description: 'Complete reading the New Testament',
        icon: Book,
        category: 'bible',
        target: 27, // 27 books in NT
        points: 500
    },
    {
        id: 'gospels',
        title: 'Gospel Reader',
        description: 'Complete all four Gospels',
        icon: BookOpen,
        category: 'bible',
        target: 4,
        points: 200
    },
    {
        id: 'wisdom',
        title: 'Wisdom Seeker',
        description: 'Complete the wisdom literature (Job, Psalms, Proverbs, Ecclesiastes, Song of Songs)',
        icon: BookOpen,
        category: 'bible',
        target: 5,
        points: 250
    },

    // Streaks
    {
        id: 'streak-3',
        title: 'Consistency is Key',
        description: 'Read the Bible for 3 consecutive days',
        icon: CalendarDays,
        category: 'streaks',
        target: 3,
        points: 30
    },
    {
        id: 'streak-7',
        title: 'Week Warrior',
        description: 'Read the Bible for 7 consecutive days',
        icon: CalendarDays,
        category: 'streaks',
        target: 7,
        points: 70
    },
    {
        id: 'streak-30',
        title: 'Monthly Devotion',
        description: 'Read the Bible for 30 consecutive days',
        icon: Medal,
        category: 'streaks',
        target: 30,
        points: 300
    },

    // Challenges
    {
        id: 'first-challenge',
        title: 'Challenge Accepted',
        description: 'Complete your first Bible challenge',
        icon: Trophy,
        category: 'challenges',
        target: 1,
        points: 20
    },
    {
        id: 'perfect-score',
        title: 'Perfectionist',
        description: 'Get a perfect score on a challenge',
        icon: Award,
        category: 'challenges',
        target: 1,
        points: 50
    },
    {
        id: 'challenge-master',
        title: 'Challenge Master',
        description: 'Complete 10 Bible challenges',
        icon: Trophy,
        category: 'challenges',
        target: 10,
        points: 200
    },

    // Theology
    {
        id: 'theology-student',
        title: 'Theology Student',
        description: 'Complete your first theology book',
        icon: Book,
        category: 'theology',
        target: 1,
        points: 50
    }
];
