interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  accent: string;
}

export default function TestimonialCard({ name, role, quote, accent }: TestimonialCardProps) {
  return (
    <article className="paper-card p-8">
      <div className={`mb-5 h-2 w-16 rounded-full bg-gradient-to-r ${accent}`} />
      <p className="text-lg leading-8 text-foreground">“{quote}”</p>
      <div className="mt-8 border-t border-border/20 pt-5">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </div>
    </article>
  );
}
