import { useAuth } from '@/context/auth';

export type ContentType = 'bible' | 'theology';

/**
 * Designated preview chapters that anyone (even logged-out visitors) can sample.
 */
const PREVIEW_CHAPTERS: Record<ContentType, { bookId: string; chapter: number }> = {
  bible: { bookId: 'genesis', chapter: 1 },
  theology: { bookId: 'mere-christianity', chapter: 1 },
};

/**
 * Centralized freemium access rules, used by every gated surface so the model
 * stays consistent:
 *
 *  - Premium subscribers: full access to everything.
 *  - Logged-in free users: the first chapter of every book (Bible + theology).
 *  - Logged-out visitors: only the designated preview chapters.
 *  - All later chapters require a subscription.
 */
export const useAccess = () => {
  const { user, hasSubscription, checkingSubscription } = useAuth();

  const isPreview = (type: ContentType, bookId: string, chapter: number): boolean => {
    const preview = PREVIEW_CHAPTERS[type];
    return chapter === preview.chapter && bookId === preview.bookId;
  };

  /** Content that is available without a subscription for the current user. */
  const isFree = (type: ContentType, bookId: string, chapter: number): boolean => {
    if (chapter === 1) {
      if (user) return true; // logged-in free tier: first chapter of every book
      return isPreview(type, bookId, chapter); // logged-out: preview chapters only
    }
    return false; // later chapters are premium
  };

  /** Whether the current user can actually open this content right now. */
  const canAccess = (type: ContentType, bookId: string, chapter: number): boolean => {
    if (hasSubscription) return true;
    return isFree(type, bookId, chapter);
  };

  /** Content the user can't reach because they aren't signed in at all. */
  const needsLogin = (type: ContentType, bookId: string, chapter: number): boolean => {
    return !user && !isFree(type, bookId, chapter);
  };

  return {
    isFree,
    canAccess,
    needsLogin,
    isPreview,
    hasSubscription,
    checkingSubscription,
  };
};
