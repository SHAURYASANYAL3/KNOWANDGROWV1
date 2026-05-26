interface StatCardProps {
  label: string;
  value: string;
  detail: string;
}

export default function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <article className="paper-card p-8">
      <p className="text-4xl font-bold tracking-tight text-foreground">{value}</p>
      <p className="mt-4 text-sm uppercase tracking-[0.24em] text-accent">{label}</p>
      <p className="mt-5 text-sm leading-7 text-muted">{detail}</p>
    </article>
  );
}
