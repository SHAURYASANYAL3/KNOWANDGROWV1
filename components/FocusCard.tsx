interface FocusCardProps {
  title: string;
  description: string;
  accent: string;
}

export default function FocusCard({ title, description, accent }: FocusCardProps) {
  return (
    <article className="paper-card p-8">
      <div className={`mb-6 inline-flex rounded-full bg-gradient-to-r ${accent} px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/95 shadow-paperStrong`}>
        Focus
      </div>
      <h3 className="text-2xl font-semibold leading-tight text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
