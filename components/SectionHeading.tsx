interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4 text-center lg:text-left">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-heading leading-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mx-auto max-w-2xl text-sm leading-7 text-muted lg:mx-0">{description}</p>
    </div>
  );
}
