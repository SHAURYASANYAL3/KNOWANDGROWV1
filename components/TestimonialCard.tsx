interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  accent: string;
}

export default function TestimonialCard({ name, role, quote, accent }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
      <div className={`mb-5 h-2 w-16 rounded-full bg-gradient-to-r ${accent}`} />
      <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </article>
  );
}
