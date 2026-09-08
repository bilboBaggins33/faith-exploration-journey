import { cn } from '@/lib/utils';
import { QUIZ_FROST } from '@/components/challenges/QuizChrome';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light' | 'dark';
}

/**
 * Frosted glass panel aligned with the live quiz shell.
 * Default matches ChallengeFeedback question cards.
 */
const GlassCard = ({ children, className, variant = 'default' }: GlassCardProps) => {
  const variantStyles = {
    default: QUIZ_FROST,
    light: 'bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 overflow-hidden',
    dark: 'bg-black/30 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/15 overflow-hidden',
  };

  return (
    <div className={cn(variantStyles[variant], className)}>
      {children}
    </div>
  );
};

export default GlassCard;
