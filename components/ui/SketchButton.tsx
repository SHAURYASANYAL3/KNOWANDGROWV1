import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
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
  primary: 'button-sketch-primary',
  secondary: 'button-sketch-secondary',
  ghost: 'button-sketch-ghost'
};

export default function SketchButton({
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}: SketchButtonProps) {
  const classes = `button-sketch ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
