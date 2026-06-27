import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useGamification } from '@/hooks/use-gamification';

/**
 * Compact level indicator for the navbar. Links to the dashboard.
 */
const LevelPill: React.FC<{ dark?: boolean }> = ({ dark = false }) => {
  const { level, progress } = useGamification();

  return (
    <Link
      to="/dashboard"
      title={`Level ${level} · ${progress}% to next level`}
      className={`inline-flex items-center gap-1.5 rounded-full pl-1.5 pr-3 py-1 text-sm font-semibold transition-colors ${
        dark
          ? 'bg-white/10 text-white hover:bg-white/20'
          : 'bg-bible-gold/15 text-amber-700 hover:bg-bible-gold/25'
      }`}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-bible-gold to-amber-500 text-white">
        <Sparkles className="h-3.5 w-3.5" />
      </span>
      Lv {level}
    </Link>
  );
};

export default LevelPill;
