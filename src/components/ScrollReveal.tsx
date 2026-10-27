import { type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
};

/**
 * Wraps children and animates them into view on scroll.
 * Falls back to immediately visible when reduced motion is requested.
 */
export function ScrollReveal({ children, className = '', delay = 0, as = 'div' }: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
