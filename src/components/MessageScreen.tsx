import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MessageScreenAction {
  label: string;
  to?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  icon?: React.ReactNode;
}

interface MessageScreenProps {
  icon: React.ReactNode;
  eyebrow?: string;
  title: string;
  description: string;
  actions?: MessageScreenAction[];
}

/**
 * A full-bleed, on-brand message screen used for 404 / error / offline states so
 * these edge cases feel like part of the product rather than a raw browser page.
 */
const MessageScreen: React.FC<MessageScreenProps> = ({
  icon,
  eyebrow,
  title,
  description,
  actions = [],
}) => {
  return (
    <div className="relative flex flex-1 min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-bible-dark via-[#1a1a3e] to-[#0f2027] px-4 py-16">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-bible-blue blur-[110px]" />
        <div className="absolute bottom-0 left-10 h-48 w-48 rounded-full bg-bible-gold blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-bible-gold">
          {icon}
        </div>
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-bible-gold/80">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
          {title}
        </h1>
        <p className="text-white/70 leading-relaxed mb-8">{description}</p>

        {actions.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {actions.map((action) => {
              const isOutline = action.variant === 'outline';
              const className = isOutline
                ? 'w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-white'
                : 'w-full sm:w-auto bg-bible-gold text-bible-dark hover:bg-bible-gold/90';

              if (action.to) {
                return (
                  <Button key={action.label} asChild variant={isOutline ? 'outline' : 'default'} className={className}>
                    <Link to={action.to}>
                      {action.icon}
                      {action.label}
                    </Link>
                  </Button>
                );
              }
              return (
                <Button
                  key={action.label}
                  variant={isOutline ? 'outline' : 'default'}
                  className={className}
                  onClick={action.onClick}
                >
                  {action.icon}
                  {action.label}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageScreen;
