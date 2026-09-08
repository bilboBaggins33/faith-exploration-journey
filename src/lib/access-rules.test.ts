import { describe, expect, it } from 'vitest';
import {
  canAccessContent,
  isFreeContent,
  isPreviewChapter,
  needsLoginForContent,
} from '@/lib/access-rules';

describe('access-rules', () => {
  const loggedOut = { userId: null, hasSubscription: false };
  const freeUser = { userId: 'user-1', hasSubscription: false };
  const subscriber = { userId: 'user-1', hasSubscription: true };

  it('marks Genesis 1 and Mere Christianity 1 as preview chapters', () => {
    expect(isPreviewChapter('bible', 'genesis', 1)).toBe(true);
    expect(isPreviewChapter('theology', 'mere-christianity', 1)).toBe(true);
    expect(isPreviewChapter('bible', 'exodus', 1)).toBe(false);
    expect(isPreviewChapter('bible', 'genesis', 2)).toBe(false);
  });

  it('allows logged-out users only the preview chapters', () => {
    expect(canAccessContent('bible', 'genesis', 1, loggedOut)).toBe(true);
    expect(canAccessContent('theology', 'mere-christianity', 1, loggedOut)).toBe(true);
    expect(canAccessContent('bible', 'exodus', 1, loggedOut)).toBe(false);
    expect(canAccessContent('bible', 'genesis', 2, loggedOut)).toBe(false);
  });

  it('allows logged-in free users chapter 1 of every book', () => {
    expect(isFreeContent('bible', 'exodus', 1, freeUser)).toBe(true);
    expect(isFreeContent('theology', 'knowing-god', 1, freeUser)).toBe(true);
    expect(canAccessContent('bible', 'exodus', 2, freeUser)).toBe(false);
    expect(canAccessContent('theology', 'mere-christianity', 2, freeUser)).toBe(false);
  });

  it('allows subscribers full access', () => {
    expect(canAccessContent('bible', 'revelation', 22, subscriber)).toBe(true);
    expect(canAccessContent('theology', 'knowing-god', 10, subscriber)).toBe(true);
  });

  it('requires login for non-preview content when logged out', () => {
    expect(needsLoginForContent('bible', 'exodus', 1, loggedOut)).toBe(true);
    expect(needsLoginForContent('bible', 'genesis', 1, loggedOut)).toBe(false);
    expect(needsLoginForContent('bible', 'genesis', 2, loggedOut)).toBe(true);
  });
});
