interface StatCardProps {
  label: string;
  value: string;
  detail: string;
}

export default function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <article className="rounded-[2rem] border border-gray-200 bg-white p-8 text-gray-800 shadow-sm">
      <p className="text-4xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-4 text-sm uppercase tracking-[0.24em] text-mint">{label}</p>
      <p className="mt-5 text-sm leading-7 text-slate-300">{detail}</p>
    </article>
  );
}
