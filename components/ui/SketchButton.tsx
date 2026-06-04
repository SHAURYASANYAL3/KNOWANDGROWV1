import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'navy' | 'red';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean; // kept for compatibility, might just be a sketched arrow now
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  href?: undefined;
};

type AnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
  href: string;
};

type SketchButtonProps = ButtonProps | AnchorProps;

const variantStyles: Record<NonNullable<BaseProps['variant']>, string> = {
  primary: 'btn-sketch highlight-yellow',
  secondary: 'btn-sketch highlight-pink',
  ghost: 'font-heading text-xl underline decoration-wavy decoration-ink-faded hover:decoration-ink-navy transition-colors px-4 py-2',
  navy: 'btn-sketch btn-sketch-navy',
  red: 'btn-sketch btn-sketch-red'
};

const sizeStyles: Record<NonNullable<BaseProps['size']>, string> = {
  sm: 'text-lg px-4 py-1.5',
  md: 'text-xl px-6 py-2.5',
  lg: 'text-2xl px-8 py-3'
};

export default function SketchButton({
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  children,
  ...props
}: SketchButtonProps) {
  // Only apply size classes if it's not a ghost button
  const sizeClass = variant === 'ghost' ? '' : sizeStyles[size];
  const classes = `${variantStyles[variant]} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {children}
      {showArrow && <span className="font-accent text-2xl leading-none pt-1">→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
