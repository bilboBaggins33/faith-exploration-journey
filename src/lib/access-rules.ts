export type ContentType = 'bible' | 'theology';

/**
 * Designated preview chapters that anyone (even logged-out visitors) can sample.
 */
export const PREVIEW_CHAPTERS: Record<ContentType, { bookId: string; chapter: number }> = {
  bible: { bookId: 'genesis', chapter: 1 },
  theology: { bookId: 'mere-christianity', chapter: 1 },
};

export interface AccessContext {
  /** Authenticated user id, or null when logged out. */
  userId: string | null;
  hasSubscription: boolean;
}

export const isPreviewChapter = (
  type: ContentType,
  bookId: string,
  chapter: number
): boolean => {
  const preview = PREVIEW_CHAPTERS[type];
  return chapter === preview.chapter && bookId === preview.bookId;
};

/** Content available without a subscription for the given access context. */
export const isFreeContent = (
  type: ContentType,
  bookId: string,
  chapter: number,
  ctx: AccessContext
): boolean => {
  if (chapter === 1) {
    if (ctx.userId) return true;
    return isPreviewChapter(type, bookId, chapter);
  }
  return false;
};

/** Whether the user can open this content right now. */
export const canAccessContent = (
  type: ContentType,
  bookId: string,
  chapter: number,
  ctx: AccessContext
): boolean => {
  if (ctx.hasSubscription) return true;
  return isFreeContent(type, bookId, chapter, ctx);
};

/** Content the user can't reach because they aren't signed in. */
export const needsLoginForContent = (
  type: ContentType,
  bookId: string,
  chapter: number,
  ctx: AccessContext
): boolean => {
  return !ctx.userId && !isFreeContent(type, bookId, chapter, ctx);
};
