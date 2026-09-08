import { useAuth } from '@/context/auth';
import {
  canAccessContent,
  isFreeContent,
  isPreviewChapter,
  needsLoginForContent,
  type ContentType,
} from '@/lib/access-rules';

export type { ContentType };

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
  const ctx = {
    userId: user?.id ?? null,
    hasSubscription: Boolean(hasSubscription),
  };

  const isPreview = (type: ContentType, bookId: string, chapter: number): boolean =>
    isPreviewChapter(type, bookId, chapter);

  const isFree = (type: ContentType, bookId: string, chapter: number): boolean =>
    isFreeContent(type, bookId, chapter, ctx);

  const canAccess = (type: ContentType, bookId: string, chapter: number): boolean =>
    canAccessContent(type, bookId, chapter, ctx);

  const needsLogin = (type: ContentType, bookId: string, chapter: number): boolean =>
    needsLoginForContent(type, bookId, chapter, ctx);

  return {
    isFree,
    canAccess,
    needsLogin,
    isPreview,
    hasSubscription,
    checkingSubscription,
  };
};
