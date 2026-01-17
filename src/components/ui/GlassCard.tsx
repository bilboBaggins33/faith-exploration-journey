import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'light' | 'dark';
}

/**
 * Reusable glassmorphism card component with frosted glass effect.
 * 
 * Variants:
 * - default: Semi-transparent white with strong blur
 * - light: More transparent, lighter glass effect
 * - dark: Darker glass effect for light backgrounds
 */
const GlassCard = ({ children, className, variant = 'default' }: GlassCardProps) => {
    const variantStyles = {
        default: 'bg-white/20 border-white/30',
        light: 'bg-white/10 border-white/20',
        dark: 'bg-black/20 border-white/10',
    };

    return (
        <div
            className={cn(
                'backdrop-blur-xl rounded-[32px] shadow-2xl border overflow-hidden',
                variantStyles[variant],
                className
            )}
        >
            {children}
        </div>
    );
};

export default GlassCard;
