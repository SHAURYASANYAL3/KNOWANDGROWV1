'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.15
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const directionClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale'
  }[direction];

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`${directionClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
