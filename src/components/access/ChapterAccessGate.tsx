import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Loader2, Lock, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth';
import { useAccess, ContentType } from '@/hooks/use-access';
import { QuizFrostPanel, QuizStage } from '@/components/challenges/QuizChrome';

interface ChapterAccessGateProps {
  type: ContentType;
  children: React.ReactNode;
}

/**
 * Wraps a chapter challenge and enforces the freemium access model:
 *  - redirects logged-out users to /auth when content isn't a public preview
 *  - shows a frosted premium upsell when a logged-in free user hits gated content
 *  - otherwise renders the challenge
 */
const ChapterAccessGate: React.FC<ChapterAccessGateProps> = ({ type, children }) => {
  const { bookId = '', chapter = '' } = useParams<{ bookId: string; chapter: string }>();
  const chapterNumber = parseInt(chapter, 10) || 1;
  const navigate = useNavigate();
  const location = useLocation();
  const { createSubscription } = useAuth();
  const { isFree, needsLogin, checkingSubscription, hasSubscription } = useAccess();
  const [isSubscribing, setIsSubscribing] = useState(false);

  const mustLogin = needsLogin(type, bookId, chapterNumber);
  const free = isFree(type, bookId, chapterNumber);

  React.useEffect(() => {
    if (mustLogin) {
      navigate('/auth', { state: { from: location.pathname } });
    }
  }, [mustLogin, navigate, location.pathname]);

  const handleSubscribe = async () => {
    setIsSubscribing(true);
    try {
      const checkoutUrl = await createSubscription();
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        navigate('/profile');
      }
    } finally {
      setIsSubscribing(false);
    }
  };

  if (mustLogin) {
    return null;
  }

  if (free || hasSubscription) {
    return <>{children}</>;
  }

  if (checkingSubscription) {
    return (
      <QuizStage bookId={bookId} type={type}>
        <QuizFrostPanel className="w-full max-w-sm px-8 py-10 text-center text-white">
          <Loader2 className="h-8 w-8 animate-spin text-bible-sky mx-auto mb-4" />
          <p className="text-white/80">Checking your access…</p>
        </QuizFrostPanel>
      </QuizStage>
    );
  }

  return (
    <QuizStage bookId={bookId} type={type}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <QuizFrostPanel>
          <div className="p-8 text-center text-white border-b border-white/15">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
              <Lock className="h-7 w-7 text-bible-gold" />
            </div>
            <h2 className="text-2xl font-serif font-semibold">Premium Chapter</h2>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              Unlock every chapter and theology book.
            </p>
          </div>

          <div className="p-8">
            <ul className="space-y-3 mb-6">
              {[
                'All Bible chapters & difficulty levels',
                'Full library of theology classics',
                'Track streaks, points & achievements',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bible-gold/20 text-bible-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              onClick={handleSubscribe}
              disabled={isSubscribing}
              variant="accent"
              className="w-full"
            >
              {isSubscribing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Go Premium — $2.99/month
                </>
              )}
            </Button>

            <button
              type="button"
              onClick={() => navigate(type === 'bible' ? '/bible' : '/theology')}
              className="mt-4 w-full text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </QuizFrostPanel>
      </motion.div>
    </QuizStage>
  );
};

export default ChapterAccessGate;
