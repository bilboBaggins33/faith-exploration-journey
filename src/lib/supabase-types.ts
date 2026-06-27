
import { Database as OriginalDatabase } from '@/integrations/supabase/types';

// Extend the original Database type with our tables
export interface ExtendedDatabase extends OriginalDatabase {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          user_id: string;
          full_name: string | null;
          streak: number | null;
          points: number | null;
          last_active: string | null;
        };
        Insert: {
          user_id: string;
          full_name?: string | null;
          streak?: number | null;
          points?: number | null;
          last_active?: string | null;
        };
        Update: {
          user_id?: string;
          full_name?: string | null;
          streak?: number | null;
          points?: number | null;
          last_active?: string | null;
        };
      };
      bible_progress: {
        Row: {
          user_id: string;
          challenges_completed: string[] | null;
          verses_memorized: string[] | null;
          total_points: number | null;
          books_progress: Record<string, number> | null;
          completed_chapters: {
            book_id: string;
            chapter: number;
            completed_at: string;
            score?: number;
          }[] | null;
          total_chapters_read: number | null;
        };
        Insert: {
          user_id: string;
          challenges_completed?: string[] | null;
          verses_memorized?: string[] | null;
          total_points?: number | null;
          books_progress?: Record<string, number> | null;
          completed_chapters?: {
            book_id: string;
            chapter: number;
            completed_at: string;
            score?: number;
          }[] | null;
          total_chapters_read?: number | null;
        };
        Update: {
          user_id?: string;
          challenges_completed?: string[] | null;
          verses_memorized?: string[] | null;
          total_points?: number | null;
          books_progress?: Record<string, number> | null;
          completed_chapters?: {
            book_id: string;
            chapter: number;
            completed_at: string;
            score?: number;
          }[] | null;
          total_chapters_read?: number | null;
        };
      };
      theology_progress: {
        Row: {
          user_id: string;
          completed_chapters: {
            book_id: string;
            chapter: number;
            completed_at: string;
            score?: number;
          }[] | null;
          books_started: string[] | null;
          books_completed: string[] | null;
          total_chapters_read: number | null;
        };
        Insert: {
          user_id: string;
          completed_chapters?: {
            book_id: string;
            chapter: number;
            completed_at: string;
            score?: number;
          }[] | null;
          books_started?: string[] | null;
          books_completed?: string[] | null;
          total_chapters_read?: number | null;
        };
        Update: {
          user_id?: string;
          completed_chapters?: {
            book_id: string;
            chapter: number;
            completed_at: string;
            score?: number;
          }[] | null;
          books_started?: string[] | null;
          books_completed?: string[] | null;
          total_chapters_read?: number | null;
        };
      };
      subscribers: {
        Row: {
          user_id: string;
          email: string | null;
          stripe_customer_id: string | null;
          stripe_subscription_id: string | null;
          status: string;
          current_period_end: string | null;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          email?: string | null;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          status?: string;
          current_period_end?: string | null;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          email?: string | null;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          status?: string;
          current_period_end?: string | null;
          updated_at?: string;
        };
      };
      user_achievements: {
        Row: {
          user_id: string;
          achievement_id: string;
          unlocked_at: string;
        };
        Insert: {
          user_id: string;
          achievement_id: string;
          unlocked_at?: string;
        };
        Update: {
          user_id?: string;
          achievement_id?: string;
          unlocked_at?: string;
        };
      };
    } & OriginalDatabase['public']['Tables'];
    Views: OriginalDatabase['public']['Views'];
    Functions: OriginalDatabase['public']['Functions'];
    Enums: OriginalDatabase['public']['Enums'];
    CompositeTypes: OriginalDatabase['public']['CompositeTypes'];
  };
}
