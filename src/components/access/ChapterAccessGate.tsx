import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Loader2, Lock, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth';
import { useAccess, ContentType } from '@/hooks/use-access';

interface ChapterAccessGateProps {
  type: ContentType;
  children: React.ReactNode;
}

/**
 * Wraps a chapter challenge and enforces the freemium access model:
 *  - redirects logged-out users to /auth when content isn't a public preview
 *  - shows a polished premium upsell when a logged-in free user hits gated content
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

  useEffect(() => {
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
    return null; // redirecting
  }

  // Free content or active subscriber: render the challenge.
  if (free || hasSubscription) {
    return <>{children}</>;
  }

  // Logged-in, but still verifying subscription status.
  if (checkingSubscription) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-bible-dark/70">
        <Loader2 className="h-8 w-8 animate-spin text-bible-blue mb-3" />
        <p>Checking your access…</p>
      </div>
    );
  }

  // Logged-in free user hitting premium content: upsell.
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-3xl bg-white shadow-xl border border-bible-gold/30 overflow-hidden"
      >
        <div className="bg-gradient-to-br from-bible-blue to-bible-deepBlue p-8 text-center text-white">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Lock className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-serif font-semibold">Premium Chapter</h2>
          <p className="mt-1 text-white/80 text-sm">
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
              <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <Button
            onClick={handleSubscribe}
            disabled={isSubscribing}
            className="w-full h-12 bg-bible-gold hover:bg-bible-gold/90 text-bible-dark font-semibold text-base rounded-xl"
          >
            {isSubscribing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Go Premium — $2.99/month
              </>
            )}
          </Button>

          <button
            onClick={() => navigate(type === 'bible' ? '/bible' : '/theology')}
            className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChapterAccessGate;
