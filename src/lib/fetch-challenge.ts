import { FunctionsHttpError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import type { ContentType } from '@/lib/access-rules';
import { isPreviewChapter } from '@/lib/access-rules';
import type { ChapterChallenge } from '@/data/bible/types';
import type { TheologyChallenge } from '@/data/theology/types';

export type ChallengePayload = ChapterChallenge | TheologyChallenge;

interface GetChallengeResponse {
  challenge?: ChallengePayload;
  error?: string;
}

async function messageFromInvokeError(error: unknown, data: GetChallengeResponse | null): Promise<string | undefined> {
  if (data && typeof data === 'object' && typeof data.error === 'string') {
    return data.error;
  }
  if (error instanceof FunctionsHttpError) {
    try {
      const body = await error.context.json();
      if (body && typeof body.error === 'string') return body.error;
    } catch {
      // ignore parse failures
    }
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return String((error as { message: string }).message);
  }
  return undefined;
}

/**
 * Load a challenge via the gated edge function.
 * Preview chapters fall back to a tiny client-side module when the API is unreachable
 * (e.g. local/dev without functions served).
 */
export async function fetchChallenge(
  type: ContentType,
  bookId: string,
  chapter: number
): Promise<ChallengePayload> {
  const { data, error } = await supabase.functions.invoke<GetChallengeResponse>('get-challenge', {
    body: { type, bookId, chapter },
  });

  if (!error && data?.challenge) {
    return data.challenge;
  }

  const apiMessage = await messageFromInvokeError(error, data);

  // Dev / offline preview: only the designated free samples ship in the client.
  if (import.meta.env.DEV || isPreviewChapter(type, bookId, chapter)) {
    const local = await loadPreviewChallenge(type, bookId, chapter);
    if (local) return local;
  }

  throw new Error(
    apiMessage || `Failed to load ${type} challenge for ${bookId} ${chapter}`
  );
}

async function loadPreviewChallenge(
  type: ContentType,
  bookId: string,
  chapter: number
): Promise<ChallengePayload | null> {
  if (!isPreviewChapter(type, bookId, chapter) && !import.meta.env.DEV) {
    return null;
  }

  if (type === 'bible') {
    if (import.meta.env.DEV) {
      const { loadBibleChallengeLocal } = await import(
        '@/data/bible/challenges/load-book-local'
      );
      return (await loadBibleChallengeLocal(bookId, chapter)) ?? null;
    }
    const { previewBibleChallenge } = await import(
      '@/data/bible/challenges/preview'
    );
    return previewBibleChallenge;
  }

  if (import.meta.env.DEV) {
    const { loadTheologyChallengeLocal } = await import(
      '@/data/theology/challenges/load-book-local'
    );
    return (await loadTheologyChallengeLocal(bookId, chapter)) ?? null;
  }

  const { previewTheologyChallenge } = await import(
    '@/data/theology/challenges/preview'
  );
  return previewTheologyChallenge;
}
