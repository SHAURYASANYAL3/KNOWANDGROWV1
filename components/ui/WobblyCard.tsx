import type { HTMLAttributes, ReactNode } from 'react';
import Tape from './Tape';

type WobblyCardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div' | 'section';
  variant?: 'default' | 'sticky-yellow' | 'sticky-pink' | 'sticky-blue' | 'sticky-green' | 'polaroid';
  tape?: boolean;
  children: ReactNode;
};

const variantClasses: Record<NonNullable<WobblyCardProps['variant']>, string> = {
  default: 'bg-white p-6 border-drawn shadow-sketch',
  'sticky-yellow': 'sticky-note sticky-yellow',
  'sticky-pink': 'sticky-note sticky-pink',
  'sticky-blue': 'sticky-note sticky-blue',
  'sticky-green': 'sticky-note sticky-green',
  polaroid: 'polaroid'
};

export default function WobblyCard({
  as: Component = 'div',
  variant = 'default',
  tape = false,
  className = '',
  children,
  ...props
}: WobblyCardProps) {
  return (
    <Component className={`${variantClasses[variant]} ${className} relative`.trim()} {...props}>
      {tape && <Tape />}
      {children}
    </Component>
  );
}
