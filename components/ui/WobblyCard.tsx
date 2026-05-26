import type { HTMLAttributes, ReactNode } from 'react';

type WobblyCardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div' | 'section';
  children: ReactNode;
};

export default function WobblyCard({ as: Component = 'article', className = '', children, ...props }: WobblyCardProps) {
  return (
    <Component className={`paper-card rounded-wobbly border-border border bg-white/95 shadow-paper ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
