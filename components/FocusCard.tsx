interface FocusCardProps {
  title: string;
  description: string;
  accent: string;
}

export default function FocusCard({ title, description, accent }: FocusCardProps) {
  return (
    <article className={`rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm`}>
      <div className={`mb-6 inline-flex rounded-full bg-gradient-to-r ${accent} px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/95 shadow-glow`}>Focus</div>
      <h3 className="text-2xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}
